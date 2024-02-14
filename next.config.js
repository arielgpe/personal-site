/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    env: {
        STRAPI_TOKEN: process.env.STRAPI_TOKEN || '',
        STRAPI_URL: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
        GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID || '',
    }
};

module.exports = nextConfig;
