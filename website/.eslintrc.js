module.exports = {
  root: true,
  ignorePatterns: ['build/**', '.turbo/**', '.typedoc/**', '.docusaurus/**'],
  extends: ['@local/eslint-config-custom'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
}
