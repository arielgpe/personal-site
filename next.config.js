/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: false,
    images: {
        unoptimized: true
    },
    env: {}
};

module.exports = nextConfig;
