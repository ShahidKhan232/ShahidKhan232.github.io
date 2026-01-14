'use client';

import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import FilterablePortfolio from '@/components/FilterablePortfolio';

export default function PortfolioPage() {
    const searchParams = useSearchParams();
    const filter = searchParams.get('filter') as 'all' | 'projects' | 'certifications' | null;

    return (
        <div className="min-h-screen transition-colors duration-300">
            <CustomCursor />
            <ScrollProgress />
            <ParticleBackground />
            <Navigation />
            <main className="bg-white dark:bg-gray-900">
                <FilterablePortfolio initialFilter={filter || 'all'} />
            </main>
        </div>
    );
}
