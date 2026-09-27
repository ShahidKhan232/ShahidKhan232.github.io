'use client';

import { experience } from '@/lib/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience() {
    return (
        <section id="experience" className="relative py-20 md:py-28 bg-[#07090d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    number="03 / EXPERIENCE"
                    title="Impact Timeline"
                    subtitle="Hands-on cloud and DevOps work from my AWS internship."
                />

                <div className="max-w-3xl mx-auto">
                    {experience.map((exp, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="relative pl-8 md:pl-10 pb-12 last:pb-0">
                                <div className="absolute left-[11px] md:left-[15px] top-2 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-zinc-800 to-transparent" />
                                <div className="absolute left-0 top-1.5 w-[22px] h-[22px] md:w-[30px] md:h-[30px] rounded-full border border-cyan-500/40 bg-[#07090d] flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                </div>

                                <div className="panel-glass rounded-2xl p-6 md:p-8 border border-zinc-800/80">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-zinc-100">
                                                {exp.role}
                                            </h3>
                                            <p className="font-mono text-cyan-400/90 mt-1">{exp.company}</p>
                                        </div>
                                        <div className="font-mono text-xs text-zinc-500 space-y-1 sm:text-right">
                                            <p>
                                                {exp.start} – {exp.end}
                                            </p>
                                            <p>{exp.location}</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {exp.bullets.map((bullet, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-3 text-sm text-zinc-400 leading-relaxed"
                                            >
                                                <span className="mt-2 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 pt-6 border-t border-zinc-800/80">
                                        <p className="font-mono text-[10px] tracking-widest text-zinc-500 mb-3">
                                            STACK
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techTags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 rounded-md text-xs font-mono border border-zinc-800 text-zinc-400"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
