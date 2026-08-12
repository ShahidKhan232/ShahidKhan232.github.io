'use client';

import { useState } from 'react';
import { projects, projectFilters } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cloud, Container, GitBranch, Workflow, Zap, ImageOff } from 'lucide-react';

function ProjectImage({ src, alt }: { src: string; alt: string }) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="relative h-48 overflow-hidden bg-slate-900/80 flex flex-col items-center justify-center gap-2">
                <ImageOff className="w-10 h-10 text-indigo-400/40" />
                <span className="text-xs text-gray-500 font-mono">preview unavailable</span>
            </div>
        );
    }

    return (
        <div className="relative h-48 overflow-hidden bg-slate-900/50">
            <motion.img
                whileHover={{ scale: 1.05 }}
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500"
                onError={() => setError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
        </div>
    );
}

export default function FilterablePortfolio() {
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const filteredProjects =
        activeFilter === 'All'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    const getProjectIcon = (project: (typeof projects)[0]) => {
        if (project.category === 'Kubernetes') return <Container className="w-6 h-6" />;
        if (project.category === 'Monitoring') return <Zap className="w-6 h-6" />;
        if (project.technologies.includes('Jenkins')) return <GitBranch className="w-6 h-6" />;
        return <Cloud className="w-6 h-6" />;
    };

    return (
        <section id="portfolio" className="min-h-screen flex items-center justify-center py-16 section-cloud">
            <div className="section-grid opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="terminal-badge mb-4">
                            <Workflow className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-mono text-sm font-medium">$ portfolio --list-all</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
                            Projects
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                        <p className="mt-4 text-lg text-gray-400 font-mono font-light">
                            <span className="text-indigo-400">›</span> Cloud infrastructure & DevOps deployments
                        </p>
                    </div>
                </Reveal>

                {/* Category filters */}
                <Reveal delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {projectFilters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-xl font-mono text-sm transition-all duration-300 border ${
                                    activeFilter === filter
                                        ? 'bg-indigo-600/30 border-indigo-400/60 text-indigo-300 shadow-lg shadow-indigo-500/20'
                                        : 'bg-slate-900/40 border-indigo-500/20 text-gray-400 hover:border-indigo-500/40 hover:text-indigo-400'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="flex justify-center items-center">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-items-center">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <Reveal key={project.title} delay={index * 0.05}>
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="glass-card shadow-xl overflow-hidden flex flex-col h-full group w-full max-w-sm"
                                    >
                                        <div className="bg-slate-900/60 backdrop-blur-sm px-4 py-3 border-b border-indigo-500/20 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                </div>
                                                <span className="text-gray-400 text-xs font-mono ml-2">
                                                    ~/projects/{project.category.toLowerCase().replace(/\s+/g, '-')}
                                                </span>
                                            </div>
                                            <div className="text-indigo-400">{getProjectIcon(project)}</div>
                                        </div>

                                        {project.image && (
                                            <ProjectImage src={project.image} alt={project.title} />
                                        )}

                                        <div className="p-5 flex-1 flex flex-col">
                                            <span className="inline-block w-fit px-2 py-0.5 mb-2 text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/30 rounded-md">
                                                {project.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-gray-100 mb-2 flex items-start gap-2">
                                                <span className="text-indigo-400 font-mono text-sm mt-1">›</span>
                                                <span>{project.title}</span>
                                            </h3>

                                            <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.slice(0, 5).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-slate-900/60 border border-indigo-500/30 text-indigo-400 rounded-lg text-xs font-mono hover:border-indigo-400/50 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 5 && (
                                                    <span className="px-2 py-1 text-gray-500 text-xs font-mono">
                                                        +{project.technologies.length - 5} more
                                                    </span>
                                                )}
                                            </div>

                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 justify-center font-mono text-sm font-medium"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>View Project</span>
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                </Reveal>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
