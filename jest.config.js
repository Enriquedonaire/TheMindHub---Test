const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  
  testEnvironment: 'jest-environment-jsdom',

  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy', 
  },

  
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    '!app/layout.tsx',
    '!app/globals.css',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/__tests__/**', 
  ],

  
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],

  
  moduleDirectories: ['node_modules', '<rootDir>'],

  
  verbose: true,
  testTimeout: 10000, 
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,

  
  maxWorkers: '50%', 
  maxConcurrency: 5, 
};

module.exports = createJestConfig(customJestConfig);