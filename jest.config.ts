import { InitialOptionsTsJest } from 'ts-jest'

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: false,
  testMatch: ['<rootDir>/packages/**/*.spec.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
}

export default config
