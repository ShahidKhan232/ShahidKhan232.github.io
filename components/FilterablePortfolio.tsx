'use client';

import { projects } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { ExternalLink, Cloud, Server, Database, Container, GitBranch, Workflow, Zap } from 'lucide-react';

export default function FilterablePortfolio() {
    return (
        <section id="portfolio" className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-slate-950 via-indigo-950/50 to-slate-950 relative overflow-hidden">
            {/* Modern grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px] opacity-5" />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
                            <Workflow className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-mono text-sm font-medium">$ portfolio --list-all</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
                            Projects
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                        <p className="mt-4 text-lg text-gray-400 font-mono font-light">
                            <span className="text-indigo-400">›</span> Explore my projects
                        </p>
                    </div>
                </Reveal>

                {/* Modern Projects Section */}
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-items-center">
                        {projects.map((project, index) => {
                            const getProjectIcon = () => {
                                if (project.technologies.includes('AWS EKS') || project.technologies.includes('Kubernetes')) {
                                    return <Container className="w-6 h-6" />;
                                } else if (project.technologies.includes('Prometheus') || project.technologies.includes('Grafana')) {
                                    return <Zap className="w-6 h-6" />;
                                } else if (project.technologies.includes('Jenkins')) {
                                    return <GitBranch className="w-6 h-6" />;
                                }
                                return <Cloud className="w-6 h-6" />;
                            };

                            return (
                                <Reveal key={index} delay={index * 0.1}>
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="bg-slate-900/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col h-full group"
                                    >
                                        {/* Modern terminal-style header */}
                                        <div className="bg-slate-900/60 backdrop-blur-sm px-4 py-3 border-b border-indigo-500/20 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                </div>
                                                <span className="text-gray-400 text-xs font-mono ml-2">~/projects/{index + 1}</span>
                                            </div>
                                            <div className="text-indigo-400">
                                                {getProjectIcon()}
                                            </div>
                                        </div>

                                        {/* Project Image */}
                                        {project.image && (
                                            <div className="relative h-48 overflow-hidden bg-slate-900/50">
                                                <motion.img
                                                    whileHover={{ scale: 1.05 }}
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                                            </div>
                                        )}

                                        <div className="p-5 flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-gray-100 mb-2 flex items-start gap-2">
                                                <span className="text-indigo-400 font-mono text-sm mt-1">›</span>
                                                <span>{project.title}</span>
                                            </h3>

                                            <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-slate-900/60 border border-indigo-500/30 text-indigo-400 rounded-lg text-xs font-mono hover:border-indigo-400/50 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-3">
                                                <motion.a
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 flex-1 justify-center font-mono text-sm font-medium"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span>View Project</span>
                                                </motion.a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* Modern floating infrastructure icons */}
            <div className="absolute top-1/4 right-20 text-indigo-400/10 animate-float-slow pointer-events-none">
                <Server className="w-40 h-40" />
            </div>
            <div className="absolute bottom-1/4 left-20 text-purple-400/10 animate-float-medium pointer-events-none">
                <Database className="w-36 h-36" />
            </div>

            {/* Modern glowing orbs */}
            <div className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
            <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
        </section>
    );
}
