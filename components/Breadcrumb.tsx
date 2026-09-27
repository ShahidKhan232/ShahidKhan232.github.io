'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export type BreadcrumbItem = {
    label: string;
    href?: string;
};

type Props = {
    items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-mono text-xs text-zinc-500 py-3">
            <Link
                href="/"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                aria-label="Home"
            >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
            </Link>

            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <div key={item.label} className="flex items-center gap-1.5">
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-700 flex-shrink-0" />
                        {isLast || !item.href ? (
                            <span className="text-cyan-400 font-medium truncate max-w-xs sm:max-w-md">
                                {item.label}
                            </span>
                        ) : (
                            <Link href={item.href} className="hover:text-cyan-400 transition-colors truncate">
                                {item.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
