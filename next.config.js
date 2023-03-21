const nextConfig = {
    experimental: {
        appDir: true
    }
}

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
  })

module.exports = nextConfig, withPWA