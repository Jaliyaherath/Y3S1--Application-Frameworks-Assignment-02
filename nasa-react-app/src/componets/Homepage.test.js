import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from './Homepage';

// Mock the image imports
jest.mock('../Images/image1.jpg', () => 'image1.jpg');
jest.mock('../Images/image2.jpg', () => 'image2.jpg');
jest.mock('../Images/image3.jpg', () => 'image3.jpg');

describe('Homepage', () => {
  it('renders correctly', () => {
    render(<Homepage />);

    // Check for main title text
    expect(screen.getByText('Welcome to Nasa React App')).toBeInTheDocument();

    // Check images are in the document
    expect(screen.getByAltText('...')).toHaveAttribute('src', 'image1.jpg');
    expect(screen.getAllByAltText('...')[1]).toHaveAttribute('src', 'image2.jpg');
    expect(screen.getAllByAltText('...')[2]).toHaveAttribute('src', 'image3.jpg');

    // Check footer text
    expect(screen.getByText(/Developed by:/)).toBeInTheDocument();
  });

});
