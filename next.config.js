/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
const withMDX = require('@next/mdx')()

let assetPrefix = ""
let basePath = ""

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}
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
