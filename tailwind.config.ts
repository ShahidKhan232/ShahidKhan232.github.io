import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
            },
            animation: {
                'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float-slow': 'float-slow 8s ease-in-out infinite',
                'float-medium': 'float-medium 6s ease-in-out infinite',
                'gradient': 'gradient 8s linear infinite',
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '0.5' },
                },
                'float-slow': {
                    '0%, 100%': {
                        transform: 'translateY(0px) translateX(0px) rotate(0deg)',
                    },
                    '33%': {
                        transform: 'translateY(-20px) translateX(10px) rotate(5deg)',
                    },
                    '66%': {
                        transform: 'translateY(-10px) translateX(-10px) rotate(-5deg)',
                    },
                },
                'float-medium': {
                    '0%, 100%': {
                        transform: 'translateY(0px) translateX(0px) rotate(0deg)',
                    },
                    '50%': {
                        transform: 'translateY(-15px) translateX(15px) rotate(10deg)',
                    },
                },
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;
