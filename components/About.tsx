'use client';

import { about } from '@/lib/siteContent';
import Reveal from './Reveal';
import { Terminal, Code2 } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-slate-950 via-indigo-950/50 to-slate-950 relative overflow-hidden">
            {/* Modern grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px] opacity-5" />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
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
                    {/* Modern Bio Section */}
                    <Reveal delay={0.2}>
                        <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-3xl hover:shadow-indigo-500/20 transition-all duration-500">
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                {about.bio}
                            </p>
                        </div>
                    </Reveal>

                    {/* Modern Education Section */}
                    <Reveal delay={0.3}>
                        <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-purple-500/20 hover:border-purple-500/40 hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                                    <Code2 className="w-6 h-6 text-purple-400" />
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

                {/* Modern background decorative elements */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
            </div>
        </section>
    );
}
