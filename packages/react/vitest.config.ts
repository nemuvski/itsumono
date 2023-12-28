import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // テストで必要
    react(),
  ],
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
