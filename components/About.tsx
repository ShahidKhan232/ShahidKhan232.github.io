'use client';

import { about } from '@/lib/siteContent';
import Reveal from './Reveal';
import { Terminal, GraduationCap } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-16 section-cloud">
            <div className="section-grid opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="terminal-badge mb-4">
                            <Terminal className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-mono text-sm font-medium">$ terraform plan -out=about.tfplan</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                    </div>
                </Reveal>

                <div className="max-w-4xl mx-auto space-y-8">
                    <Reveal delay={0.2}>
                        <div className="glass-card p-8 shadow-2xl">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                {about.bio}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="glass-card p-8 shadow-2xl border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                                    <GraduationCap className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-100">Education</h3>
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-200 font-semibold text-lg">
                                    {about.education.degree}
                                </p>
                                <p className="text-gray-400 text-lg">
                                    {about.education.school}
                                </p>
                                <p className="text-gray-500 text-sm font-mono bg-slate-900/40 inline-block px-4 py-2 rounded-lg">
                                    {about.education.status}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
