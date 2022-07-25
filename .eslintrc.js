module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:regexp/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'script',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: true,
      typescript: {
        project: 'packages/*/tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'regexp', 'import'],
  rules: {
    semi: 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'multiline-ternary': ['error', 'always-multiline'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
