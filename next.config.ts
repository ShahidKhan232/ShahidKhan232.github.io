import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Enable React strict mode for better development experience
    reactStrictMode: true,

    // Optimize images
    images: {
        unoptimized: true, // Required for static export
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    // GitHub Pages deployment configuration
    output: 'export',
    basePath: '',
};

export default nextConfig;
