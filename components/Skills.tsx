'use client';

import { about } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Skills() {
    const allSkills = about.skills.flatMap((category) =>
        category.items.map((item) => ({
            ...item,
            category: category.category,
        }))
    );

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-16 section-cloud">
            <div className="section-grid opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="terminal-badge mb-4">
                            <Terminal className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-mono text-sm font-medium">$ docker ps --filter &quot;label=skills&quot;</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Technical Skills
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto font-light">
                            Technologies and tools I use to build scalable, secure cloud infrastructure
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {allSkills.map((skill, index) => (
                        <Reveal key={`${skill.name}-${index}`} delay={0.05 + index * 0.02}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="glass-card flex flex-col items-center gap-3 p-6 cursor-default group"
                            >
                                {skill.iconUrl && (
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                )}
                                <span className="text-xs font-mono text-indigo-400 text-center group-hover:text-indigo-300 transition-colors font-semibold">
                                    {skill.name}
                                </span>
                                <span className="text-[10px] text-gray-600 font-mono text-center leading-tight">
                                    {skill.category}
                                </span>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
