import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: false,
    passWithNoTests: false,
    include: ['tests/**/*.spec.{ts,tsx,js,jsx}'],

    coverage: {
      // @vitest/coverage-v8を利用する
      provider: 'v8',
      reporter: ['text'],
      reportsDirectory: '.coverage',
      include: [
        'src/**/*.{ts,tsx,js,jsx}',
        // エクスポート用なのでcoverage計測対象から除外する
        '!src/**/index.ts',
      ],
    },
  },
})
