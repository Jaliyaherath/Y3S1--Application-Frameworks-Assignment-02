import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import MarsRoverPhotos from './MarsRoverPhotos';

describe('MarsRoverPhotos', () => {
  const mock = new AxiosMockAdapter(axios);
  const photos = [
    { id: 1, img_src: 'https://testurl.com/photo1.jpg', earth_date: '2023-04-14' },
    { id: 2, img_src: 'https://testurl.com/photo2.jpg', earth_date: '2023-04-14' }
  ];

  beforeEach(() => {
    mock.onGet('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos').reply(200, { photos });
  });

  afterEach(() => {
    mock.reset();
  });

  test('renders photos correctly', async () => {
    render(<MarsRoverPhotos earth_date="2023-04-14" />);
    await waitFor(() => expect(screen.getAllByRole('img')).toHaveLength(2));
    expect(screen.getByAltText("Mars Rover")).toHaveAttribute('src', 'https://testurl.com/photo1.jpg');
  });

  test('displays message when no photos are available', async () => {
    mock.onGet('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos').reply(200, { photos: [] });
    render(<MarsRoverPhotos earth_date="2023-04-15" />);
    await waitFor(() => expect(screen.getByText("No photos available for this date.")).toBeInTheDocument());
  });
});
