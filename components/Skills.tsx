'use client';

import { about } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Skills() {
    // Flatten all skills from all categories into a single array
    const allSkills = about.skills.flatMap(category => category.items);

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-800/80 rounded-lg border border-cyan-500/30">
                            <Terminal className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm">$ docker ps --filter "label=skills"</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Technical Skills
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full" />
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                            Technologies and tools I use to build scalable, secure cloud infrastructure
                        </p>
                    </div>
                </Reveal>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {allSkills.map((skill, index) => {
                        const skillData = typeof skill === 'string' ? { name: skill, iconUrl: null } : skill;
                        return (
                            <Reveal key={index} delay={0.05 + index * 0.02}>
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-default group"
                                >
                                    {skillData.iconUrl && (
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img
                                                src={skillData.iconUrl}
                                                alt={skillData.name}
                                                className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    <span className="text-sm font-mono text-cyan-400 text-center group-hover:text-cyan-300 transition-colors font-semibold">
                                        {skillData.name}
                                    </span>
                                </motion.div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
            </div>
        </section>
    );
}
