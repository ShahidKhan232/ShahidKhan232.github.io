'use client';

import { Github, Linkedin, Mail, Download, ChevronDown, Cloud, Server, Database, GitBranch, Container, Cpu, Terminal, Workflow, CloudCog, Network } from 'lucide-react';
import { hero } from '@/lib/siteContent';
import Reveal from './Reveal';
import TypingAnimation from './TypingAnimation';
import Typewriter from './Typewriter';

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
            className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-16 overflow-hidden"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />
            
            {/* Modern gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-purple-950/20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <Reveal className="text-center">
                    {/* Modern terminal-style greeting */}
                    <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
                        <Terminal className="w-5 h-5 text-indigo-400" />
                        <p className="text-indigo-400 font-mono text-sm font-medium">
                            $ npm run dev:portfolio
                        </p>
                        <span className="w-2 h-4 bg-indigo-400 animate-pulse rounded-full" />
                    </div>

                    {/* Name with enhanced gradient */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        <TypingAnimation
                            text={hero.name}
                            className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
                            speed={80}
                        />
                    </h1>

                    {/* Title with enhanced icons and typewriter */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
                            <CloudCog className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-100">
                            <Typewriter
                                words={['DevOps Engineer', 'Cloud Architect']}
                                typingSpeed={100}
                                deletingSpeed={50}
                                pauseDuration={2000}
                            />
                        </h2>
                        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                            <Server className="w-8 h-8 text-purple-400" />
                        </div>
                    </div>

                    {/* Enhanced tagline */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
                        <span className="text-indigo-400 font-mono">›</span> {hero.tagline}
                    </p>

                    {/* Modern CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <a
                            href="#contact"
                            className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-2xl shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3 text-lg">
                                <Terminal className="w-5 h-5" />
                                Get In Touch
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </a>
                        <a
                            href={hero.resumeDriveLink || hero.resumePath}
                            {...(hero.resumeDriveLink
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : { download: true })}
                            className="px-8 py-3 bg-slate-900/60 backdrop-blur-xl text-indigo-400 font-semibold rounded-2xl shadow-2xl border-2 border-indigo-500/30 hover:border-indigo-400/60 hover:bg-slate-900/80 transition-all duration-500 transform hover:-translate-y-2 flex items-center gap-3 text-lg"
                        >
                            <Download className="w-5 h-5" />
                            Resume
                        </a>
                    </div>

                    {/* Modern Social Links */}
                    <div className="flex justify-center gap-6 mb-8 relative z-20">
                        <a
                            href={hero.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 text-gray-400 hover:text-white hover:border-indigo-500/50"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href={hero.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 text-gray-400 hover:text-white hover:border-blue-500/50"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href={hero.socials.email}
                            className="group p-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 text-gray-400 hover:text-white hover:border-purple-500/50"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Enhanced scroll indicator */}
                    <button
                        onClick={scrollToAbout}
                        className="group animate-bounce text-indigo-400 hover:text-indigo-300 transition-all duration-300 transform hover:scale-110"
                        aria-label="Scroll down"
                    >
                        <ChevronDown className="w-10 h-10" />
                    </button>
                </Reveal>
            </div>

            {/* Modern floating DevOps/Cloud icons */}
            <div className="absolute top-1/4 left-1/4 text-indigo-400/15 animate-float-slow pointer-events-none">
                <Cloud className="w-24 h-24" />
            </div>
            <div className="absolute top-1/3 right-1/4 text-purple-400/15 animate-float-medium pointer-events-none" style={{ animationDelay: '0.5s' }}>
                <Server className="w-28 h-28" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 text-pink-400/15 animate-float-slow pointer-events-none" style={{ animationDelay: '1s' }}>
                <Database className="w-20 h-20" />
            </div>
            <div className="absolute top-1/2 right-1/3 text-indigo-400/15 animate-float-medium pointer-events-none" style={{ animationDelay: '1.5s' }}>
                <Container className="w-24 h-24" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 text-purple-400/15 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }}>
                <GitBranch className="w-20 h-20" />
            </div>
            <div className="absolute top-2/3 left-1/4 text-pink-400/15 animate-float-medium pointer-events-none" style={{ animationDelay: '2.5s' }}>
                <Cpu className="w-16 h-16" />
            </div>
            <div className="absolute top-1/4 right-1/3 text-indigo-400/15 animate-float-slow pointer-events-none" style={{ animationDelay: '3s' }}>
                <Workflow className="w-20 h-20" />
            </div>
            <div className="absolute bottom-1/4 right-1/2 text-purple-400/15 animate-float-medium pointer-events-none" style={{ animationDelay: '3.5s' }}>
                <Network className="w-16 h-16" />
            </div>

            {/* Modern glowing orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full mix-blend-normal filter blur-3xl opacity-40 animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-normal filter blur-3xl opacity-40 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-pink-500/15 to-indigo-500/15 rounded-full mix-blend-normal filter blur-3xl opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
        </section>
    );
}
