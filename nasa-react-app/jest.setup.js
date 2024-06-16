import '@testing-library/jest-dom';

Object.defineProperty(global, 'import.meta', {
    value: {
      env: {
        VITE_NASA_API_KEY: 'your-test-api-key',
      },
    },
  });
