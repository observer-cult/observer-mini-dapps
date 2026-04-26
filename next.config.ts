import type { NextConfig } from 'next'

const NextFederationPlugin = require('@module-federation/nextjs-mf')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'observer-root',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        remotes: {},
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false }
        }
      })
    )
    return config
  }
}

export default nextConfig
