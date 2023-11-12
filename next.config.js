/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true
    }
}

module.exports = withMDX(nextConfig)
