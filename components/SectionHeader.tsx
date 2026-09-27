'use client';

import Reveal from './Reveal';

type SectionHeaderProps = {
    number: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
};

export default function SectionHeader({
    number,
    title,
    subtitle,
    align = 'center',
}: SectionHeaderProps) {
    const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

    return (
        <Reveal className={`mb-12 md:mb-16 max-w-3xl ${alignClass}`}>
            <div className={`inline-flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
                <span className="w-1.5 h-1.5 rounded-sm bg-[#38BDF8]" />
                <p className="font-mono text-xs tracking-[0.2em] text-[#38BDF8]/90 uppercase font-semibold">
                    {number}
                </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}

            <div
                className={`mt-6 h-px w-20 bg-gradient-to-r from-[#38BDF8]/50 via-[#1E2C3F] to-transparent ${
                    align === 'center' ? 'mx-auto' : ''
                }`}
            />
        </Reveal>
    );
}
