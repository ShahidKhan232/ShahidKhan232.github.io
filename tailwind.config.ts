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
            fontFamily: {
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                aws: {
                    DEFAULT: '#FF9900',
                    light: '#FFB84D',
                    dark: '#E08500',
                },
                k8s: {
                    DEFAULT: '#326CE5',
                    light: '#5B8DEE',
                    dark: '#2452B5',
                },
                control: {
                    bg: '#060B12',
                    surface: '#0A111C',
                    panel: '#101A28',
                    card: '#131F2E',
                    border: '#1E2C3F',
                    'border-light': '#2A3C54',
                },
                obs: {
                    green: '#10B981',
                    amber: '#F59E0B',
                    red: '#EF4444',
                    blue: '#3B82F6',
                },
            },
            animation: {
                pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float-slow': 'float-slow 8s ease-in-out infinite',
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
