// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  experimental: {
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['pix10.agoda.net', 'media.graphassets.com']
  }
})
