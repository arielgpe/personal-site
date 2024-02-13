/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    env: {
        GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID || '',
    }
};

module.exports = nextConfig;
