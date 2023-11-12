/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = withMDX(nextConfig)
