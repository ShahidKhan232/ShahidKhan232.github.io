import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Shahid Shahadat Khan | DevOps Engineer Portfolio',
    description: 'DevOps Engineer specializing in AWS, Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure automation. Building scalable, automated cloud solutions.',
    keywords: ['DevOps', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure', 'Terraform', 'Jenkins'],
    authors: [{ name: 'Shahid Shahadat Khan' }],
    creator: 'Shahid Shahadat Khan',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://shahidkhan232.github.io',
        title: 'Shahid Shahadat Khan | DevOps Engineer',
        description: 'DevOps Engineer specializing in AWS, Docker, Kubernetes, and cloud infrastructure automation.',
        siteName: 'Shahid Khan Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Shahid Shahadat Khan | DevOps Engineer',
        description: 'DevOps Engineer specializing in AWS, Docker, Kubernetes, and cloud infrastructure automation.',
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
        <html lang="en" className="dark">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
