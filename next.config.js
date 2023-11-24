/** @type {import('next').NextConfig} */

const isProd = process.env.PROD
const withMDX = require('@next/mdx')()

let assetPrefix = isProd ? "/portfolio" : ""
let basePath = isProd ? "/portfolio" : ""
  
const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true
    }
}

module.exports = withMDX(nextConfig)
