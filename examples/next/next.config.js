const isProductionMode = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: isProductionMode ? { exclude: ['error', 'warn'] } : false,
  },
}

module.exports = nextConfig
