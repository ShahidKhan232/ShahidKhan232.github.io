'use client';

import { about } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Skills() {
    // Flatten all skills from all categories into a single array
    const allSkills = about.skills.flatMap(category => category.items);

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-slate-950 via-indigo-950/50 to-slate-950 relative overflow-hidden">
            {/* Modern grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px] opacity-5" />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
                            <Terminal className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-mono text-sm font-medium">$ docker ps --filter "label=skills"</span>
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

                {/* Modern Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {allSkills.map((skill, index) => {
                        const skillData = typeof skill === 'string' ? { name: skill, iconUrl: null } : skill;
                        return (
                            <Reveal key={index} delay={0.05 + index * 0.02}>
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    className="flex flex-col items-center gap-4 p-6 bg-slate-900/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl hover:border-indigo-500/40 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500 cursor-default group"
                                >
                                    {skillData.iconUrl && (
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img
                                                src={skillData.iconUrl}
                                                alt={skillData.name}
                                                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    <span className="text-xs font-mono text-indigo-400 text-center group-hover:text-indigo-300 transition-colors font-semibold">
                                        {skillData.name}
                                    </span>
                                </motion.div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Modern background decorative elements */}
                <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
            </div>
        </section>
    );
}
