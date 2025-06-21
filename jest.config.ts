export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  setupFiles: ['jest-localstorage-mock'],
  testPathIgnorePatterns: ['/e2e/'],
}
