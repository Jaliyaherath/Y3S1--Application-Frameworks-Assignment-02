import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

// Mocking the AuthContext and useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

jest.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn()
  })
}));
//Create a function to setup the Login component
const setup = () => {
  const utils = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const usernameInput = screen.getByLabelText('Username:');//get the input element with the label 'Username:'
  const passwordInput = screen.getByLabelText('Password:');//get the input element with the label 'Password:'
  const submitButton = screen.getByRole('button', { name: /login/i });//get the button element with the name 'Login'
  return {
    usernameInput,
    passwordInput,
    submitButton,
    ...utils,
  };
}

describe('Login Component', () => {
  test('renders the login form with username and password inputs', () => {
    const { usernameInput, passwordInput, submitButton } = setup();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('allows entering a username and password', () => {
    const { usernameInput, passwordInput } = setup();
    userEvent.type(usernameInput, 'testUser');
    expect(usernameInput).toHaveValue('testUser');
    userEvent.type(passwordInput, 'password123');
    expect(passwordInput).toHaveValue('password123');
  });

  test('navigates to home on successful login', async () => {
    const { usernameInput, passwordInput, submitButton } = setup();
    const useAuth = require('../contexts/AuthContext').useAuth;
    const navigate = require('react-router-dom').useNavigate();
    
    useAuth().login.mockResolvedValue(); // Mocking a successful login
    userEvent.type(usernameInput, 'testUser');
    userEvent.type(passwordInput, 'password123');
    userEvent.click(submitButton);

    await waitFor(() => expect(useAuth().login).toHaveBeenCalledWith('testUser', 'password123'));
    expect(navigate).toHaveBeenCalledWith('/home');
  });

  test('shows an error message on login failure', async () => {
    const { usernameInput, passwordInput, submitButton } = setup();
    const useAuth = require('../contexts/AuthContext').useAuth;
    
    const errorMessage = 'Invalid login';
    useAuth().login.mockRejectedValue({ message: errorMessage }); // Mocking a failed login

    userEvent.type(usernameInput, 'testUser');
    userEvent.type(passwordInput, 'password123');
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
