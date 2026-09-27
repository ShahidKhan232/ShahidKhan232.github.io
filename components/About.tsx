'use client';

import { about, engineeringPrinciples } from '@/lib/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { motion, useReducedMotion } from 'framer-motion';

export default function About() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="about" className="relative py-20 md:py-28 bg-[#07090d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    number="01 / ABOUT"
                    title="Engineering Profile"
                    subtitle="Cloud infrastructure with reliability, security, and automation at the center."
                    align="left"
                />

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <Reveal delay={0.1}>
                        <p className="text-lg text-zinc-400 leading-relaxed">{about.intro}</p>
                        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
                            {about.profile.educationDetail}
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="panel-glass rounded-2xl p-6 md:p-8 border border-zinc-800/80 space-y-6">
                            {[
                                { label: 'ROLE', value: about.profile.role },
                                { label: 'EDUCATION', value: about.profile.education },
                                { label: 'LOCATION', value: about.profile.location },
                            ].map((row) => (
                                <div key={row.label} className="border-b border-zinc-800/80 pb-4 last:border-0 last:pb-0">
                                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 mb-1">
                                        {row.label}
                                    </p>
                                    <p className="text-zinc-100">{row.value}</p>
                                </div>
                            ))}
                            <div>
                                <p className="font-mono text-[10px] tracking-widest text-zinc-500 mb-3">FOCUS</p>
                                <div className="flex flex-wrap gap-2">
                                    {about.profile.focus.map((item) => (
                                        <span
                                            key={item}
                                            className="px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.2} className="mt-16">
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 mb-4 text-center">
                        ENGINEERING PRINCIPLES
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
                        {engineeringPrinciples.map((principle, i) => (
                            <motion.div
                                key={principle}
                                className="text-center py-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 font-mono text-sm text-cyan-400/90"
                                animate={
                                    reduceMotion
                                        ? undefined
                                        : { opacity: [0.7, 1, 0.7] }
                                }
                                transition={
                                    reduceMotion
                                        ? undefined
                                        : { duration: 4, repeat: Infinity, delay: i * 0.5 }
                                }
                            >
                                {principle}
                            </motion.div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
