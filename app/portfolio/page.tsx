'use client';

import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import CloudBackground from '@/components/CloudBackground';
import FilterablePortfolio from '@/components/FilterablePortfolio';

export default function PortfolioPage() {
    return (
        <div className="min-h-screen transition-colors duration-300">
            <CustomCursor />
            <ScrollProgress />
            <CloudBackground />
            <ParticleBackground />
            <Navigation />
            <main className="bg-white dark:bg-gray-900 pt-16">
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-900"><div className="text-cyan-400 font-mono">Loading...</div></div>}>
                    <FilterablePortfolio />
                </Suspense>
            </main>
        </div>
    );
}
