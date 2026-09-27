'use client';

import { projects, featuredProjectSlug } from '@/lib/siteContent';
import Reveal from './Reveal';
import type { EnrichedRepo } from '@/lib/types';
import { ArrowRight, Github, Star, GitFork, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const pipeline = [
    'Developer',
    'GitHub',
    'Jenkins / GitHub Actions',
    'Docker',
    'Container Registry',
    'Kubernetes / EKS',
    'Ingress',
    'Application',
];

type Props = {
    onOpenCaseStudy: (title: string) => void;
    featuredRepo?: EnrichedRepo | null;
};

export default function FeaturedProject({ onOpenCaseStudy, featuredRepo }: Props) {
    const project = projects.find((p) => p.title === featuredProjectSlug);
    const reduceMotion = useReducedMotion();

    if (!project) return null;

    return (
        <Reveal className="mb-16 md:mb-20">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-zinc-900/50 via-[#0a0f18] to-[#050608] overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="font-mono text-[10px] tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5" />
                                FEATURED ARCHITECTURE
                            </span>
                            {featuredRepo && (
                                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                                    <span className="inline-flex items-center gap-1 text-amber-400">
                                        <Star className="w-3 h-3" />
                                        {featuredRepo.stargazers_count}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-cyan-400">
                                        <GitFork className="w-3 h-3" />
                                        {featuredRepo.forks_count}
                                    </span>
                                </div>
                            )}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-50 leading-snug">
                            {project.title}
                        </h3>
                        <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed">
                            {project.description}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.technologies.slice(0, 6).map((t) => (
                                <span
                                    key={t}
                                    className="px-2 py-1 text-xs font-mono rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-400"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => onOpenCaseStudy(project.title)}
                                className="btn-primary inline-flex items-center gap-2 text-sm"
                            >
                                Explore Architecture
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <a
                                href={featuredRepo?.html_url || project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center gap-2 text-sm"
                            >
                                <Github className="w-4 h-4" />
                                GitHub Repository
                            </a>
                        </div>
                    </div>

                    <div className="p-6 md:p-10 border-t lg:border-t-0 lg:border-l border-zinc-800/80 bg-zinc-950/40">
                        <p className="font-mono text-[10px] text-zinc-500 mb-4">ARCHITECTURE_FLOW</p>
                        <div className="space-y-2">
                            {pipeline.map((step, i) => (
                                <div key={step}>
                                    <motion.div
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg border border-zinc-800/60 bg-zinc-900/40"
                                        initial={false}
                                        animate={
                                            reduceMotion
                                                ? undefined
                                                : { borderColor: ['rgba(39,39,42,0.6)', 'rgba(34,211,238,0.25)', 'rgba(39,39,42,0.6)'] }
                                        }
                                        transition={
                                            reduceMotion
                                                ? undefined
                                                : { duration: 3, repeat: Infinity, delay: i * 0.35 }
                                        }
                                    >
                                        <span className="font-mono text-[10px] text-zinc-600 w-5">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="font-mono text-xs text-zinc-300">{step}</span>
                                    </motion.div>
                                    {i < pipeline.length - 1 && (
                                        <div className="flex justify-center py-0.5 text-zinc-700 font-mono text-xs">
                                            ↓
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 font-mono text-[10px] text-zinc-600">
                            + Prometheus · Grafana · Trivy · SonarQube (pipeline)
                        </p>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
