import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import AstronomyPictureOfTheDay from './AstronomyPictureOfTheDay';

describe('AstronomyPictureOfTheDay', () => {
  const mock = new AxiosMockAdapter(axios);
  const apiResponse = {
    date: "2023-04-14",
    explanation: "Test Explanation",
    media_type: "image",
    service_version: "v1",
    title: "Test Title",
    url: "https://testurl.com/image.jpg"
  };

  beforeEach(() => {
    mock.onGet('https://api.nasa.gov/planetary/apod').reply(200, apiResponse);
  });

  afterEach(() => {
    mock.reset();
  });

  test('renders the component with data', async () => {
    render(<AstronomyPictureOfTheDay date="2023-04-14" />);
    await waitFor(() => expect(screen.getByText("Test Title")).toBeInTheDocument());
    expect(screen.getByText("Test Explanation")).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Test Title' })).toHaveAttribute('src', 'https://testurl.com/image.jpg');
  });
});
