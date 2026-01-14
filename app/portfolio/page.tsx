'use client';

import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import PortfolioContent from '@/components/PortfolioContent';

export default function PortfolioPage() {
    return (
        <div className="min-h-screen transition-colors duration-300">
            <CustomCursor />
            <ScrollProgress />
            <ParticleBackground />
            <Navigation />
            <main className="bg-white dark:bg-gray-900">
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-900"><div className="text-cyan-400 font-mono">Loading...</div></div>}>
                    <PortfolioContent />
                </Suspense>
            </main>
        </div>
    );
}
