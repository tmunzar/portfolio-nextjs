/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
