import { InitialOptionsTsJest } from 'ts-jest'

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: false,
  testMatch: ['<rootDir>/packages/**/*.spec.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
