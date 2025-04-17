// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // Archivos de configuración que se ejecutan después de configurar el entorno
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Entorno de pruebas
  testEnvironment: 'jest-environment-jsdom',

  // Mapeo de alias de módulos (para @/components, @/app, etc.)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy', // Soporte para CSS
  },

  // Archivos a incluir en la cobertura
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    '!app/layout.tsx',
    '!app/globals.css',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/__tests__/**', // Excluir carpetas de tests de la cobertura
  ],

  // Patrones para encontrar archivos de prueba
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],

  // Directorios de módulos
  moduleDirectories: ['node_modules', '<rootDir>'],

  // Configuración de pruebas
  verbose: true,
  testTimeout: 10000, // Reducido de 15000ms a 10000ms (ajusta si necesitas más tiempo)
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,

  // Optimización para entornos locales
  maxWorkers: '50%', // Usa el 50% de los núcleos disponibles
  maxConcurrency: 5, // Permite hasta 5 pruebas simultáneas
};

module.exports = createJestConfig(customJestConfig);