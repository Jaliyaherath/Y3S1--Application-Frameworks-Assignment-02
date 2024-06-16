
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'], plugins: ['@babel/plugin-syntax-import-meta'] }],
  },
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1'
  },
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/reportWebVitals.js',
    '!src/setupTests.js'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node']


  
};
