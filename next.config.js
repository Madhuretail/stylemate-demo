/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com']
  },
  eslint: {
    ignoreDuringBuilds: true  // This will ignore all ESLint errors during build
  }
}

module.exports = nextConfig 