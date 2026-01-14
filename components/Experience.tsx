'use client';

import { experience } from '@/lib/siteContent';
import Reveal from './Reveal';
import { Briefcase, MapPin, Calendar, Terminal } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-gradient-to-b from-slate-800 via-blue-950 to-slate-800 dark:from-gray-850 dark:via-blue-950 dark:to-gray-850 relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-800/80 rounded-lg border border-cyan-500/30">
                            <Terminal className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm">$ git log --experience</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Experience
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full" />
                    </div>
                </Reveal>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600" />

                        {experience.map((exp, index) => (
                            <Reveal key={index} delay={index * 0.2}>
                                <div className="relative mb-12 md:mb-16">
                                    {/* Timeline dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 dark:border-gray-900 transform -translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50" />

                                    {/* Content */}
                                    <div className="ml-20 md:ml-0 md:w-[calc(50%-3rem)] md:pr-12 md:text-right md:float-left md:clear-left">
                                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
                                            {/* Header */}
                                            <div className="mb-4">
                                                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                                                    {exp.role}
                                                </h3>
                                                <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2 md:justify-end">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span className="font-mono">{exp.company}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-3 text-sm text-gray-400 md:justify-end font-mono">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{exp.start} - {exp.end}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bullets */}
                                            <ul className="space-y-2 mb-4">
                                                {exp.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-sm">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Tech Tags */}
                                            <div className="flex flex-wrap gap-2 md:justify-end">
                                                {exp.techTags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-slate-900/50 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-mono hover:border-cyan-400/50 transition-colors"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Current badge */}
                                            {exp.end === 'Present' && (
                                                <div className="mt-4 inline-block px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-400 rounded-full text-xs font-semibold font-mono">
                                                    Current Position
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
            </div>
        </section>
    );
}
