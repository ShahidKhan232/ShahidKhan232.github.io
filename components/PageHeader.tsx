'use client';

import Reveal from './Reveal';

type Props = {
    number: string;
    title: string;
    subtitle?: string;
    badge?: string;
    children?: React.ReactNode;
};

export default function PageHeader({ number, title, subtitle, badge, children }: Props) {
    return (
        <div className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-[#080b12] via-[#050608] to-[#050608]">
            {/* Background grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Subtle glow accent */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-semibold text-cyan-400/90 tracking-widest uppercase">
                            {number}
                        </span>
                        {badge && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                                {badge}
                            </span>
                        )}
                    </div>
                </Reveal>

                <Reveal delay={0.05}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
                        {title}
                    </h1>
                </Reveal>

                {subtitle && (
                    <Reveal delay={0.1}>
                        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                            {subtitle}
                        </p>
                    </Reveal>
                )}

                {children && (
                    <Reveal delay={0.15}>
                        <div className="mt-6">{children}</div>
                    </Reveal>
                )}
            </div>
        </div>
    );
}
