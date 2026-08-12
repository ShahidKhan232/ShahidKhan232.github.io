'use client';

import { experience } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Terminal } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-20 section-cloud">
            <div className="section-grid opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="terminal-badge mb-4">
                            <Terminal className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-mono text-sm">$ git log --experience</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Experience
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                    </div>
                </Reveal>

                <div className="max-w-5xl mx-auto space-y-8">
                    {experience.map((exp, index) => (
                        <Reveal key={index} delay={index * 0.2}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                className="glass-card shadow-xl overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 border-b border-indigo-500/20">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-bold text-gray-100 mb-2">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-lg mb-3">
                                                <Briefcase className="w-5 h-5" />
                                                <span className="font-mono">{exp.company}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-indigo-400" />
                                                    <span>{exp.start} - {exp.end}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-indigo-400" />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {exp.end === 'Present' && (
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded-full text-sm font-semibold font-mono">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                Current Position
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                                            <span className="text-indigo-400">›</span>
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-3">
                                            {exp.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-sm leading-relaxed">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-3 font-mono">
                                            Technologies Used:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techTags.map((tag, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-3 py-1.5 bg-slate-900/50 border border-indigo-500/30 text-indigo-400 rounded-lg text-xs font-mono hover:border-indigo-400/50 hover:bg-slate-900/70 transition-all cursor-default"
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
