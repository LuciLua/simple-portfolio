const nextConfig = {
    experimental: {
        appDir: true
    }
}

const withPWA = require('next-pwa')({
    dest: 'public'
  })

module.exports = nextConfig, withPWA