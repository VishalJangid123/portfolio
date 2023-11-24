/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const isProd = false;
  
const nextConfig = {
    assetPrefix: isProd ? "/portfolio" : "",
    basePath: isProd ? "/portfolio" : "",
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true
    }
}

module.exports = withMDX(nextConfig)
