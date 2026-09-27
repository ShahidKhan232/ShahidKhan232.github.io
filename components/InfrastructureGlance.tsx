'use client';

import { infrastructureIndicators } from '@/lib/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function InfrastructureGlance() {
    return (
        <section className="relative py-20 md:py-24 bg-[#050608] border-y border-zinc-900/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    number="00 / INFRASTRUCTURE"
                    title="Infrastructure at a Glance"
                    subtitle="Core platforms and tooling I work with — no vanity metrics, just the stack."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {infrastructureIndicators.map((item, index) => (
                        <Reveal key={item.label} delay={index * 0.05}>
                            <div className="panel-glass rounded-xl p-5 border border-zinc-800/80 hover:border-cyan-500/25 transition-colors">
                                <p className="font-mono text-[10px] tracking-widest text-zinc-500 mb-2">
                                    {item.label}
                                </p>
                                <p className="text-lg font-medium text-zinc-100">{item.value}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
