'use client';

import { useState, useEffect } from 'react';
import { projects, certifications } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { ExternalLink, Cloud, Server, Database, Container, GitBranch, Workflow, Shield, Zap, Award, Filter } from 'lucide-react';

type FilterType = 'all' | 'projects' | 'certifications';

interface FilterablePortfolioProps {
    initialFilter?: FilterType;
}

export default function FilterablePortfolio({ initialFilter = 'all' }: FilterablePortfolioProps) {
    const [activeFilter, setActiveFilter] = useState<FilterType>(initialFilter);

    const filters: { id: FilterType; label: string }[] = [
        { id: 'all', label: 'All' },
        { id: 'projects', label: 'Projects' },
        { id: 'certifications', label: 'Certifications' },
    ];

    const showProjects = activeFilter === 'all' || activeFilter === 'projects';
    const showCertifications = activeFilter === 'all' || activeFilter === 'certifications';

    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 relative overflow-hidden min-h-screen">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-800/80 rounded-lg border border-cyan-500/30">
                            <Workflow className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm">$ portfolio --list-all</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
                            My Portfolio
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full" />
                        <p className="mt-4 text-lg text-gray-400 font-mono">
                            <span className="text-cyan-400">&gt;</span> Explore my projects and certifications
                        </p>
                    </div>
                </Reveal>

                {/* Filter Buttons */}
                <Reveal delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                            <Filter className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-400 font-mono text-sm">Filter:</span>
                        </div>
                        {filters.map((filter) => (
                            <motion.button
                                key={filter.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-3 rounded-lg font-mono font-semibold transition-all duration-300 ${activeFilter === filter.id
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/50'
                                        : 'bg-slate-800/50 text-gray-300 border border-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-400'
                                    }`}
                            >
                                {filter.label}
                            </motion.button>
                        ))}
                    </div>
                </Reveal>

                {/* Projects Section */}
                {showProjects && (
                    <div className="mb-20">
                        <Reveal>
                            <div className="flex items-center gap-3 mb-8">
                                <Workflow className="w-8 h-8 text-cyan-400" />
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-mono">
                                    <span className="text-cyan-400">&gt;</span> Projects
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                            whileHover={{ y: -8 }}
                                            className="bg-slate-800/50 dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col h-full"
                                        >
                                            {/* Terminal-style header */}
                                            <div className="bg-slate-900/80 px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex gap-1.5">
                                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                    </div>
                                                    <span className="text-gray-400 text-xs font-mono ml-2">~/projects/{index + 1}</span>
                                                </div>
                                                <div className="text-cyan-400">
                                                    {getProjectIcon()}
                                                </div>
                                            </div>

                                            <div className="p-6 flex-1 flex flex-col">
                                                <h3 className="text-xl font-bold text-gray-100 mb-3 flex items-start gap-2">
                                                    <span className="text-cyan-400 font-mono text-sm mt-1">&gt;</span>
                                                    <span>{project.title}</span>
                                                </h3>

                                                <p className="text-gray-400 mb-4 text-sm">
                                                    {project.description}
                                                </p>

                                                <div className="space-y-2 mb-6 flex-1">
                                                    {project.highlights.map((highlight, idx) => (
                                                        <div key={idx} className="flex items-start gap-2">
                                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                                            <p className="text-sm text-gray-300">{highlight}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.technologies.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-slate-900/50 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono hover:border-cyan-400/50 transition-colors"
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
                                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/30 flex-1 justify-center font-mono text-sm"
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
                )}

                {/* Certifications Section */}
                {showCertifications && (
                    <div>
                        <Reveal>
                            <div className="flex items-center gap-3 mb-8">
                                <Shield className="w-8 h-8 text-cyan-400" />
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-mono">
                                    <span className="text-cyan-400">&gt;</span> Certifications
                                </h2>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, rotateY: 5 }}
                                        className="block bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group transform-3d"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="text-4xl">{cert.icon}</div>
                                            <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                                                <Award className="w-5 h-5 text-cyan-400" />
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                                            {cert.name}
                                        </h3>

                                        <p className="text-sm text-gray-400 mb-4 font-mono">
                                            {cert.issuer}
                                        </p>

                                        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium font-mono">
                                            <span>View Certificate</span>
                                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </motion.a>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Floating infrastructure icons */}
            <div className="absolute top-1/4 right-10 text-cyan-400/10 animate-float-slow pointer-events-none">
                <Server className="w-32 h-32" />
            </div>
            <div className="absolute bottom-1/4 left-10 text-blue-400/10 animate-float-medium pointer-events-none">
                <Database className="w-28 h-28" />
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
        </section>
    );
}
