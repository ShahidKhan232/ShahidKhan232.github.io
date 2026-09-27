import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import './globals.css';

const sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
});

const mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mono',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#060B12',
};

export const metadata: Metadata = {
    title: {
        default: 'Shahid Khan | DevOps & Cloud Engineer',
        template: '%s | Shahid Khan',
    },
    description:
        'Shahid Khan is a DevOps & Cloud Engineer specializing in AWS, Kubernetes, Terraform, Docker, CI/CD, and cloud infrastructure automation.',
    keywords: [
        'DevOps',
        'Cloud Engineer',
        'AWS',
        'Kubernetes',
        'Terraform',
        'Docker',
        'CI/CD',
        'Ansible',
        'Jenkins',
        'Prometheus',
        'Grafana',
        'Infrastructure as Code',
    ],
    authors: [{ name: 'Shahid Khan' }],
    creator: 'Shahid Khan',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://shahidkhan232.github.io',
        title: 'Shahid Khan | DevOps & Cloud Engineer',
        description:
            'Shahid Khan is a DevOps & Cloud Engineer specializing in AWS, Kubernetes, Terraform, Docker, CI/CD, and cloud infrastructure automation.',
        siteName: 'Shahid Khan Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Shahid Khan | DevOps & Cloud Engineer',
        description:
            'DevOps & Cloud Engineer — AWS, Kubernetes, Terraform, CI/CD, and cloud infrastructure automation.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${sans.className} ${mono.variable} font-sans antialiased bg-[#060B12] text-zinc-100 min-h-screen flex flex-col overflow-x-hidden w-full relative`}>
                <ScrollProgress />
                <Navigation />
                <main className="flex-1 w-full max-w-full overflow-x-hidden">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
