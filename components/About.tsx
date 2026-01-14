'use client';

import { about } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Terminal, Code2 } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-800/80 rounded-lg border border-cyan-500/30">
                            <Terminal className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm">$ cat ~/about.md</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full" />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Bio Section */}
                    <div className="space-y-6">
                        <Reveal delay={0.2}>
                            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {about.bio}
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-4">
                                    <Code2 className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-2xl font-bold text-gray-100">Education</h3>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-200 font-semibold">
                                        {about.education.degree}
                                    </p>
                                    <p className="text-gray-400">
                                        {about.education.school}
                                    </p>
                                    <p className="text-gray-500 text-sm font-mono">
                                        {about.education.status}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-6">
                        <Reveal delay={0.2}>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-cyan-400 font-mono">&gt;</span>
                                <h3 className="text-2xl font-bold text-gray-100">
                                    Technical Skills
                                </h3>
                            </div>
                        </Reveal>
                        <div className="grid gap-6">
                            {about.skills.map((skillGroup, index) => {
                                const Icon = skillGroup.icon as any;
                                return (
                                    <Reveal key={index} delay={0.3 + index * 0.1}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                                                    <Icon className="w-6 h-6 text-cyan-400" />
                                                </div>
                                                <h4 className="text-lg font-semibold text-gray-100 font-mono">
                                                    {skillGroup.category}
                                                </h4>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {skillGroup.items.map((skill, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        whileHover={{ scale: 1.05 }}
                                                        className="px-3 py-1 bg-slate-900/50 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-mono hover:border-cyan-400/50 hover:bg-slate-900/70 transition-all cursor-default"
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
            </div>
        </section>
    );
}
