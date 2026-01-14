'use client';

import { Github, Linkedin, Mail, Download, ChevronDown, Cloud, Server, Database, GitBranch, Container, Cpu, Terminal, Workflow, CloudCog, Network } from 'lucide-react';
import { hero } from '@/lib/siteContent';
import Reveal from './Reveal';
import TypingAnimation from './TypingAnimation';

export default function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 pt-16 overflow-hidden"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <Reveal className="text-center">
                    {/* Terminal-style greeting */}
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-800/80 dark:bg-slate-900/80 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <p className="text-cyan-400 font-mono text-sm">
                            $ {hero.greeting}
                        </p>
                        <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
                    </div>

                    {/* Name with gradient */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        <TypingAnimation
                            text={hero.name}
                            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent"
                            speed={80}
                        />
                    </h1>

                    {/* Title with cloud icon */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <CloudCog className="w-8 h-8 text-cyan-400" />
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 dark:text-gray-200">
                            {hero.title}
                        </h2>
                        <Server className="w-8 h-8 text-blue-400" />
                    </div>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto mb-12 font-mono">
                        <span className="text-cyan-400">&gt;</span> {hero.tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="#contact"
                            className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Terminal className="w-5 h-5" />
                                Get In Touch
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <a
                            href={hero.resumeDriveLink || hero.resumePath}
                            {...(hero.resumeDriveLink
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : { download: true })}
                            className="px-8 py-3 bg-slate-800/80 dark:bg-gray-800/80 text-cyan-400 dark:text-cyan-300 font-semibold rounded-lg shadow-lg border-2 border-cyan-500/50 hover:border-cyan-400 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-16 relative z-20">
                        <a
                            href={hero.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-800/80 dark:bg-gray-800/80 rounded-lg border border-gray-700/50 shadow-md hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 backdrop-blur-sm"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href={hero.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-800/80 dark:bg-gray-800/80 rounded-lg border border-gray-700/50 shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 text-gray-300 hover:text-blue-400 hover:border-blue-500/50 backdrop-blur-sm"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href={hero.socials.email}
                            className="p-3 bg-slate-800/80 dark:bg-gray-800/80 rounded-lg border border-gray-700/50 shadow-md hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 text-gray-300 hover:text-purple-400 hover:border-purple-500/50 backdrop-blur-sm"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <button
                        onClick={scrollToAbout}
                        className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
                        aria-label="Scroll down"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </button>
                </Reveal>
            </div>

            {/* Floating DevOps/Cloud icons with enhanced styling */}
            <div className="absolute top-1/4 left-1/4 text-cyan-400/20 dark:text-cyan-400/10 animate-float-slow pointer-events-none">
                <Cloud className="w-20 h-20" />
            </div>
            <div className="absolute top-1/3 right-1/4 text-blue-400/20 dark:text-blue-400/10 animate-float-medium pointer-events-none" style={{ animationDelay: '0.5s' }}>
                <Server className="w-24 h-24" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 text-purple-400/20 dark:text-purple-400/10 animate-float-slow pointer-events-none" style={{ animationDelay: '1s' }}>
                <Database className="w-16 h-16" />
            </div>
            <div className="absolute top-1/2 right-1/3 text-cyan-400/20 dark:text-cyan-400/10 animate-float-medium pointer-events-none" style={{ animationDelay: '1.5s' }}>
                <Container className="w-20 h-20" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 text-green-400/20 dark:text-green-400/10 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }}>
                <GitBranch className="w-18 h-18" />
            </div>
            <div className="absolute top-2/3 left-1/4 text-pink-400/20 dark:text-pink-400/10 animate-float-medium pointer-events-none" style={{ animationDelay: '2.5s' }}>
                <Cpu className="w-14 h-14" />
            </div>
            <div className="absolute top-1/4 right-1/3 text-blue-400/20 dark:text-blue-400/10 animate-float-slow pointer-events-none" style={{ animationDelay: '3s' }}>
                <Workflow className="w-16 h-16" />
            </div>
            <div className="absolute bottom-1/4 right-1/2 text-purple-400/20 dark:text-purple-400/10 animate-float-medium pointer-events-none" style={{ animationDelay: '3.5s' }}>
                <Network className="w-14 h-14" />
            </div>

            {/* Glowing orbs with cloud colors */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-full mix-blend-normal filter blur-3xl opacity-40 animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mix-blend-normal filter blur-3xl opacity-40 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 dark:from-purple-900/10 dark:to-cyan-900/10 rounded-full mix-blend-normal filter blur-3xl opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
        </section>
    );
}
