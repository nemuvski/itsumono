import { InitialOptionsTsJest } from 'ts-jest'

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: false,
  testMatch: ['<rootDir>/packages/**/tests/**/*.spec.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
