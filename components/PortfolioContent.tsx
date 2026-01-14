'use client';

import { useSearchParams } from 'next/navigation';
import FilterablePortfolio from '@/components/FilterablePortfolio';

export default function PortfolioContent() {
    const searchParams = useSearchParams();
    const filter = searchParams.get('filter') as 'all' | 'projects' | 'certifications' | null;

    return <FilterablePortfolio initialFilter={filter || 'all'} />;
}
