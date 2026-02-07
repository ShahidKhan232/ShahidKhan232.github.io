'use client';

import { about } from '@/lib/siteContent';
import Reveal from './Reveal';
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
                            <span className="text-cyan-400 font-mono text-sm">$ terraform plan -out=about.tfplan</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full" />
                    </div>
                </Reveal>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Bio Section */}
                    <Reveal delay={0.2}>
                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {about.bio}
                            </p>
                        </div>
                    </Reveal>

                    {/* Education Section */}
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

                {/* Background decorative elements */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
            </div>
        </section>
    );
}
