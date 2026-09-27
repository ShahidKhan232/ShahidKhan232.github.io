'use client';

import { useState, useMemo } from 'react';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    X,
    Github,
    ExternalLink,
    Star,
    GitFork,
    Calendar,
    ArrowRight,
    Sparkles,
    Globe,
    SlidersHorizontal,
    Radio,
    RotateCcw,
    Layers,
    Server,
    Boxes,
    Cpu
} from 'lucide-react';
import { getAllProjectRecords } from '@/lib/projectData';
import { useGitHubData } from '@/lib/useGitHubData';
import type { FilterCategory } from '@/lib/types';
import StatusBadge from '@/components/StatusBadge';

const WORKLOAD_CATEGORIES: { label: string; value: FilterCategory | 'All' | 'Docker' }[] = [
    { label: 'ALL', value: 'All' },
    { label: 'DEVOPS', value: 'DevOps' },
    { label: 'AWS', value: 'AWS' },
    { label: 'KUBERNETES', value: 'Kubernetes' },
    { label: 'TERRAFORM', value: 'Terraform' },
    { label: 'CI/CD', value: 'CI/CD' },
    { label: 'DOCKER', value: 'Docker' },
    { label: 'MONITORING', value: 'Monitoring' },
    { label: 'DEVSECOPS', value: 'DevSecOps' },
    { label: 'BACKEND', value: 'Backend' },
    { label: 'FULL STACK', value: 'Full Stack' },
    { label: 'AI / ML', value: 'AI / ML' },
    { label: 'OTHER', value: 'Other' },
];

type SortKey = 'featured' | 'updated' | 'stars' | 'alphabetical';

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
    { label: 'Featured First', value: 'featured' },
    { label: 'Recently Updated', value: 'updated' },
    { label: 'Most Stars', value: 'stars' },
    { label: 'Alphabetical', value: 'alphabetical' },
];

const LANGUAGE_COLORS: Record<string, string> = {
    HCL: '#FF9900', // Terraform / AWS
    Python: '#38BDF8',
    TypeScript: '#326CE5',
    JavaScript: '#F59E0B',
    Dockerfile: '#0284C7',
    HTML: '#E34F26',
    CSS: '#A855F7',
    Dart: '#00B4AB',
    Shell: '#10B981',
};

export default function ProjectsPage() {
    const staticProjects = useMemo(() => getAllProjectRecords(), []);
    const { repos: liveRepos, isLive, user } = useGitHubData();

    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<SortKey>('featured');

    // Merge static project data with live metrics from GitHub when available
    const projects = useMemo(() => {
        if (!liveRepos.length) return staticProjects;

        return staticProjects.map((p) => {
            const liveMatch = liveRepos.find((r) => r.name.toLowerCase() === p.repoName.toLowerCase());
            if (!liveMatch) return p;
            return {
                ...p,
                stars: liveMatch.stargazers_count,
                forks: liveMatch.forks_count,
                lastUpdated: liveMatch.updated_at,
                language: liveMatch.language || p.language,
                liveDemoUrl: liveMatch.homepage || p.liveDemoUrl,
            };
        });
    }, [staticProjects, liveRepos]);

    // Category counts
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: projects.length };
        WORKLOAD_CATEGORIES.forEach(({ value }) => {
            if (value === 'All') return;
            if (value === 'Docker') {
                counts['Docker'] = projects.filter(
                    (p) =>
                        p.technologies.some((t) => t.toLowerCase().includes('docker')) ||
                        p.categories.includes('DevOps')
                ).length;
            } else {
                counts[value] = projects.filter(
                    (p) => p.category === value || p.categories.includes(value as FilterCategory)
                ).length;
            }
        });
        return counts;
    }, [projects]);

    // Filter, Search, Sort
    const filteredProjects = useMemo(() => {
        let list = [...projects];

        if (activeFilter !== 'All') {
            if (activeFilter === 'Docker') {
                list = list.filter(
                    (p) =>
                        p.technologies.some((t) => t.toLowerCase().includes('docker')) ||
                        p.categories.includes('DevOps')
                );
            } else {
                list = list.filter(
                    (p) =>
                        p.category === activeFilter ||
                        p.categories.includes(activeFilter as FilterCategory)
                );
            }
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            list = list.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.repoName.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q) ||
                    p.technologies.some((t) => t.toLowerCase().includes(q)) ||
                    (p.language || '').toLowerCase().includes(q)
            );
        }

        switch (sortBy) {
            case 'featured':
                list.sort((a, b) => {
                    if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
                    return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
                });
                break;
            case 'updated':
                list.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
                break;
            case 'stars':
                list.sort((a, b) => b.stars - a.stars);
                break;
            case 'alphabetical':
                list.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }

        return list;
    }, [projects, activeFilter, searchQuery, sortBy]);

    return (
        <PageTransition className="bg-[#060B12]">
            <PageHeader
                number="03 / INFRASTRUCTURE & PROJECTS"
                title="Engineering Deployment Registry"
                subtitle="Production-style infrastructure projects, Kubernetes manifests, and cloud automation repositories."
                badge="REGISTRY_CATALOG"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Control Plane Sync Strip */}
                <Reveal className="mb-8">
                    <div className="p-4 rounded-xl border border-[#1E2C3F] bg-[#0A111C] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#060B12] border border-[#1E2C3F] flex items-center justify-center text-[#38BDF8]">
                                <Server className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs font-bold text-zinc-100">
                                        ShahidKhan232 / GitHub Registry
                                    </span>
                                    <StatusBadge
                                        status={isLive ? 'online' : 'verified'}
                                        label={isLive ? 'LIVE SYNC' : 'CACHED'}
                                        prefix="REGISTRY:"
                                    />
                                </div>
                                <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                                    {user
                                        ? `${user.public_repos} public repos indexed • ${user.followers} followers`
                                        : `${projects.length} public engineering repositories`}
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://github.com/ShahidKhan232?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost inline-flex items-center gap-1.5"
                        >
                            <Github className="w-3.5 h-3.5" />
                            <span>ALL REPOSITORIES</span>
                            <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                    </div>
                </Reveal>

                {/* SRE Filter & Search Console */}
                <Reveal delay={0.05} className="mb-6">
                    <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                            {/* Search box */}
                            <div className="relative flex-1 max-w-full sm:max-w-md">
                                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by repo, tech (e.g. AWS, Docker), or keyword..."
                                    className="input-field pl-10 min-h-[44px] text-sm sm:text-xs"
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center"
                                        aria-label="Clear search"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>

                            {/* Sort Selector */}
                            <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
                                <div className="flex items-center gap-1.5">
                                    <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500" />
                                    <span className="text-xs font-mono text-zinc-500">SORT:</span>
                                </div>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortKey)}
                                    className="px-3 py-2.5 rounded-lg bg-[#060B12] border border-[#1E2C3F] text-xs font-mono text-zinc-300 focus:outline-none focus:border-[#38BDF8]/60 transition-colors min-h-[42px] flex-1 sm:flex-none"
                                >
                                    {SORT_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Category Workload Tabs - Edge-to-Edge Swipeable Bar on Mobile */}
                        <div className="flex items-center gap-1.5 overflow-x-auto py-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
                            {WORKLOAD_CATEGORIES.map(({ label, value }) => {
                                const count = categoryCounts[value] || 0;
                                const isActive = activeFilter === value;
                                return (
                                    <button
                                        key={label}
                                        type="button"
                                        onClick={() => setActiveFilter(value)}
                                        className={`px-3 py-2 rounded-lg font-mono text-xs border whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 min-h-[38px] ${
                                            isActive
                                                ? 'border-[#38BDF8]/60 bg-[#101A28] text-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.12)] font-semibold'
                                                : 'border-[#1E2C3F] text-zinc-400 hover:border-[#2A3C54] hover:text-zinc-200 bg-[#0A111C]'
                                        }`}
                                    >
                                        <span>{label}</span>
                                        <span
                                            className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                                                isActive
                                                    ? 'bg-[#38BDF8]/20 text-cyan-200 font-semibold'
                                                    : 'bg-[#060B12] text-zinc-500'
                                            }`}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </Reveal>

                {/* Counter Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6 px-1">
                    <span>
                        WORKLOAD_COUNT: {filteredProjects.length} of {projects.length}
                        {activeFilter !== 'All' && ` [${activeFilter}]`}
                    </span>

                    {(activeFilter !== 'All' || searchQuery) && (
                        <button
                            type="button"
                            onClick={() => {
                                setActiveFilter('All');
                                setSearchQuery('');
                            }}
                            className="inline-flex items-center gap-1 text-[#38BDF8] hover:underline"
                        >
                            <RotateCcw className="w-3 h-3" />
                            <span>RESET FILTERS</span>
                        </button>
                    )}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center rounded-xl border border-[#1E2C3F] bg-[#0A111C] p-8">
                        <Radio className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                        <h3 className="text-base font-bold text-zinc-200 font-mono">No workloads found</h3>
                        <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto font-mono">
                            No project matches the active filter &quot;{activeFilter}&quot;.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveFilter('All');
                                setSearchQuery('');
                            }}
                            className="mt-4 btn-secondary inline-flex items-center gap-1.5 text-xs"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>RESET SEARCH</span>
                        </button>
                    </div>
                )}

                {/* Deployment Registry Workload Cards Grid */}
                {filteredProjects.length > 0 && (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, idx) => {
                                const langColor = project.language
                                    ? LANGUAGE_COLORS[project.language] || '#38BDF8'
                                    : '#71717a';
                                const formattedDate = new Date(project.lastUpdated).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                });

                                return (
                                    <Reveal key={project.slug} delay={Math.min(idx * 0.03, 0.25)}>
                                        <motion.article
                                            layout
                                            className="group rounded-xl border border-[#1E2C3F] bg-[#0A111C] hover:border-[#38BDF8]/40 transition-all duration-200 overflow-hidden flex flex-col h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                                        >
                                            {/* Workload Header */}
                                            <div className="p-4 pb-2.5 flex items-center justify-between gap-2 border-b border-[#1E2C3F]/80 bg-[#0D1624]">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060B12] text-cyan-300 border border-[#1E2C3F] uppercase tracking-wider font-bold">
                                                        {project.category}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500">
                                                    <span className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-amber-400/90" />
                                                        {project.stars}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <GitFork className="w-3 h-3 text-cyan-400/90" />
                                                        {project.forks}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Workload Card Content */}
                                            <div className="p-5 flex flex-col flex-1">
                                                <Link href={`/projects/${project.slug}`} className="group/title">
                                                    <h3 className="text-base font-bold text-zinc-100 group-hover/title:text-cyan-300 transition-colors line-clamp-1 font-mono">
                                                        {project.title}
                                                    </h3>
                                                    <p className="font-mono text-[10px] text-zinc-500 mt-0.5 line-clamp-1">
                                                        repo: {project.repoName}
                                                    </p>
                                                    <p className="mt-3 text-xs text-zinc-400 leading-relaxed line-clamp-3 font-sans">
                                                        {project.description}
                                                    </p>
                                                </Link>

                                                {/* Tech Stack Pills */}
                                                <div className="mt-4 flex flex-wrap gap-1.5">
                                                    {project.technologies.slice(0, 4).map((t) => (
                                                        <span
                                                            key={t}
                                                            className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#060B12] border border-[#1E2C3F] text-zinc-300"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                    {project.technologies.length > 4 && (
                                                        <span className="text-[10px] font-mono text-zinc-500 px-1 py-0.5">
                                                            +{project.technologies.length - 4}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Workload Metadata */}
                                                <div className="mt-4 pt-3 border-t border-[#1E2C3F]/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                                                    {project.language && (
                                                        <span className="flex items-center gap-1.5">
                                                            <span
                                                                className="w-2 h-2 rounded-full"
                                                                style={{ backgroundColor: langColor }}
                                                            />
                                                            <span>{project.language}</span>
                                                        </span>
                                                    )}
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3 text-zinc-600" />
                                                        <span>{formattedDate}</span>
                                                    </span>
                                                </div>

                                                {/* Action Bar */}
                                                <div className="mt-4 pt-3 border-t border-[#1E2C3F] flex items-center justify-between gap-2">
                                                    <Link
                                                        href={`/projects/${project.slug}`}
                                                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-cyan-300 font-semibold group/btn"
                                                    >
                                                        <Layers className="w-3.5 h-3.5" />
                                                        <span>VIEW ARCHITECTURE</span>
                                                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                                    </Link>

                                                    <div className="flex items-center gap-2">
                                                        {project.liveDemoUrl && (
                                                            <a
                                                                href={project.liveDemoUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="p-1.5 rounded-md border border-[#1E2C3F] text-zinc-400 hover:text-cyan-300 transition-colors"
                                                                title="Live Demo"
                                                                aria-label="Live Demo"
                                                            >
                                                                <Globe className="w-3.5 h-3.5" />
                                                            </a>
                                                        )}
                                                        <a
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-1.5 rounded-md border border-[#1E2C3F] text-zinc-400 hover:text-zinc-200 transition-colors"
                                                            title="GitHub Repository"
                                                            aria-label="GitHub Repository"
                                                        >
                                                            <Github className="w-3.5 h-3.5" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.article>
                                    </Reveal>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </PageTransition>
    );
}
