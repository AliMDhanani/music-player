/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rb.gy',
        port: '',
        pathname: '/xkacau',
      },
      {
        protocol: 'https',
        hostname: 'rb.gy',
        port: '',
        pathname: '/y9mwtb',
      },
    ],
  },
}
