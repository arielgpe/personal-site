/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/personal-site',
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    env: {}
};

module.exports = nextConfig;
