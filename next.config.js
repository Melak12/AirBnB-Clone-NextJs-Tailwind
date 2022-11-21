/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    mapbox_key: process.env.MAP_BOX_KEY
  }
}

module.exports = nextConfig
