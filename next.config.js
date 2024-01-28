/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/personal-site/',
    reactStrictMode: true,
    trailingSlash: false,
    images: {
        unoptimized: true
    },
    env: {}
};

module.exports = nextConfig;
