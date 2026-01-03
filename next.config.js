/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds (GitHub Pages)
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/makkahmadinah',
    assetPrefix: '/makkahmadinah',
  }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Exclude old directories from watching to prevent EMFILE errors
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/dist/**',
          '**/src/pages/**', // Exclude old HTML pages
          '**/.next/**',
        ],
      }
    }
    return config
  },
}

module.exports = nextConfig

