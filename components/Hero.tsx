'use client';

import { ArrowRight, Download, Github, Terminal, Server } from 'lucide-react';
import { hero } from '@/lib/siteContent';
import Reveal from './Reveal';
import HeroBackground from './HeroBackground';
import CloudTopology from './CloudTopology';
import StatusBadge from './StatusBadge';
import Link from 'next/link';

const CORE_DEVOPS_STACK = [
    { name: 'AWS', color: 'text-amber-400', border: 'border-amber-500/30' },
    { name: 'Kubernetes', color: 'text-blue-400', border: 'border-blue-500/30' },
    { name: 'Terraform', color: 'text-purple-400', border: 'border-purple-500/30' },
    { name: 'Docker', color: 'text-sky-400', border: 'border-sky-500/30' },
    { name: 'CI/CD', color: 'text-orange-400', border: 'border-orange-500/30' },
    { name: 'Linux', color: 'text-emerald-400', border: 'border-emerald-500/30' },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#060B12]"
        >
            <HeroBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Column: Engineer Profile & Control Center Introduction */}
                    <div className="lg:col-span-6 space-y-6">
                        <Reveal>
                            <div className="flex items-center gap-3">
                                <StatusBadge status="online" prefix="PORTFOLIO STATUS:" label="ONLINE" />
                                <span className="font-mono text-[11px] text-zinc-500 hidden sm:inline">
                                    CONTROL_PLANE.v2
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.05}>
                            <div className="space-y-2">
                                <span className="font-mono text-xs font-semibold text-[#38BDF8] tracking-widest uppercase flex items-center gap-2">
                                    <Server className="w-3.5 h-3.5" />
                                    DEVOPS &amp; CLOUD ENGINEER
                                </span>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-50 tracking-tight leading-[1.1]">
                                    Shahid Khan
                                </h1>
                                <p className="font-mono text-base sm:text-lg text-zinc-300 font-medium pt-1">
                                    DevOps &amp; Cloud Engineer
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
                                Building automated, scalable and observable cloud infrastructure.
                            </p>
                        </Reveal>

                        {/* Core Stack Badges */}
                        <Reveal delay={0.15}>
                            <div className="pt-2">
                                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2.5">
                                    CORE_INFRASTRUCTURE_STACK
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {CORE_DEVOPS_STACK.map((tech) => (
                                        <span
                                            key={tech.name}
                                            className={`px-3 py-1 rounded-md bg-[#0A111C] border ${tech.border} font-mono text-xs font-semibold ${tech.color} shadow-sm`}
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* CTA Actions */}
                        <Reveal delay={0.2}>
                            <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-3">
                                <Link
                                    href="/projects"
                                    className="btn-primary group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]"
                                >
                                    <span>Inspect Engineering Work</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <a
                                    href={hero.resumeDriveLink || hero.resumePath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Resume</span>
                                </a>
                            </div>
                        </Reveal>

                        {/* Console Metadata Links */}
                        <Reveal delay={0.25}>
                            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-zinc-500">
                                <a
                                    href={hero.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-[#38BDF8] transition-colors py-1"
                                >
                                    <Github className="w-3.5 h-3.5" />
                                    <span>GitHub @ShahidKhan232</span>
                                </a>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-1 hover:text-[#38BDF8] transition-colors py-1"
                                >
                                    <Terminal className="w-3.5 h-3.5" />
                                    <span>Engineering Profile</span>
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Live Cloud Topology Diagram */}
                    <div className="lg:col-span-6">
                        <Reveal delay={0.15}>
                            <CloudTopology />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
