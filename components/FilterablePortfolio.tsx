'use client';

import { useState, useMemo } from 'react';
import { useGitHubData } from '@/lib/useGitHubData';
import { FILTER_CATEGORIES, SORT_OPTIONS } from '@/lib/types';
import type { EnrichedRepo, FilterCategory, SortOption } from '@/lib/types';
import { projects } from '@/lib/siteContent';
import type { ProjectCaseStudy } from '@/lib/siteContent';
import SectionHeader from './SectionHeader';
import FeaturedProject from './FeaturedProject';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';
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
    Radio,
    SlidersHorizontal,
    Globe,
    Layers,
    RotateCcw
} from 'lucide-react';

// Language colors
const LANGUAGE_COLORS: Record<string, string> = {
    HCL: '#844FBA',
    Python: '#3572A5',
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    Dockerfile: '#384d54',
    HTML: '#E34F26',
    CSS: '#563D7C',
    Dart: '#00B4AB',
    Shell: '#89e051',
};

export default function FilterablePortfolio() {
    const {
        repos,
        user,
        loading,
        isLive,
        filteredRepos,
        activeFilter,
        setActiveFilter,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
    } = useGitHubData();

    const [selectedRepo, setSelectedRepo] = useState<EnrichedRepo | null>(null);

    // Calculate category counts
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: repos.length };
        FILTER_CATEGORIES.forEach((cat) => {
            if (cat === 'All') return;
            counts[cat] = repos.filter((r) => r.categories.includes(cat)).length;
        });
        return counts;
    }, [repos]);

    // Top featured repo for the architecture spotlight
    const topFeaturedRepo = useMemo(() => {
        return repos.find((r) => r.name === 'Netflix-clone-k8s-end-to-end') || repos[0] || null;
    }, [repos]);

    // Lookup case study if one exists for a given repo
    const getCaseStudyForRepo = (repo: EnrichedRepo | null): ProjectCaseStudy | null => {
        if (!repo) return null;
        const normalizedName = repo.name.toLowerCase();
        return (
            projects.find((p) => {
                const urlLower = p.github.toLowerCase();
                return urlLower.includes(`/${normalizedName}`) || urlLower.includes(`/${normalizedName}.git`);
            }) || null
        );
    };

    const handleOpenByTitle = (title: string) => {
        const caseStudy = projects.find((p) => p.title === title);
        if (!caseStudy) return;

        // Try to find matching repo
        const matchingRepo = repos.find((r) => {
            const urlLower = caseStudy.github.toLowerCase();
            return urlLower.includes(`/${r.name.toLowerCase()}`);
        });

        if (matchingRepo) {
            setSelectedRepo(matchingRepo);
        } else if (repos.length > 0) {
            // Create a virtual repo representation if needed
            setSelectedRepo({
                id: 0,
                name: caseStudy.title,
                full_name: `ShahidKhan232/${caseStudy.title}`,
                html_url: caseStudy.github,
                description: caseStudy.description,
                fork: false,
                language: 'HCL',
                stargazers_count: 0,
                forks_count: 0,
                watchers_count: 0,
                topics: [],
                updated_at: new Date().toISOString(),
                created_at: new Date().toISOString(),
                pushed_at: new Date().toISOString(),
                visibility: 'public',
                homepage: null,
                size: 0,
                default_branch: 'main',
                displayName: caseStudy.title,
                categories: ['Cloud', 'DevOps'],
                technologies: caseStudy.technologies,
                isFeatured: true,
                enrichedDescription: caseStudy.description,
            });
        }
    };

    const selectedCaseStudy = useMemo(() => {
        return getCaseStudyForRepo(selectedRepo);
    }, [selectedRepo]);

    return (
        <section id="portfolio" className="relative py-20 md:py-28 bg-[#050608]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionHeader
                    number="04 / PROJECTS"
                    title="Engineering Work & Repositories"
                    subtitle="Live showcase of public repositories spanning Cloud Architecture, Kubernetes orchestration, CI/CD automation, and DevOps tooling."
                />

                {/* GitHub Profile Live Sync Bar */}
                <Reveal delay={0.02} className="mb-10">
                    <div className="p-4 rounded-2xl border border-zinc-800/80 bg-[#0a0c10]/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                                <Github className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-sm text-zinc-100 font-mono">
                                        ShahidKhan232
                                    </span>
                                    <span
                                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono ${
                                            isLive
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                                        }`}
                                    >
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full ${
                                                isLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                                            }`}
                                        />
                                        {isLive ? 'Live GitHub Sync' : 'Static Cache'}
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-500 font-mono mt-0.5">
                                    {user
                                        ? `${user.public_repos} public repos · ${user.followers} followers`
                                        : `${repos.length} public engineering repositories`}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/ShahidKhan232?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10"
                            >
                                <Github className="w-3.5 h-3.5" />
                                All Repos on GitHub
                                <ExternalLink className="w-3 h-3 opacity-60" />
                            </a>
                        </div>
                    </div>
                </Reveal>

                {/* Top Featured Architecture Project */}
                <FeaturedProject
                    onOpenCaseStudy={handleOpenByTitle}
                    featuredRepo={topFeaturedRepo}
                />

                {/* Discovery Toolbar: Search & Sort */}
                <Reveal delay={0.06} className="mb-8">
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                            {/* Search bar */}
                            <div className="relative flex-1 max-w-lg">
                                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by repo name, tech (e.g. AWS, Docker), or keyword…"
                                    className="w-full pl-10 pr-9 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono"
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200"
                                        aria-label="Clear search"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Sort dropdown */}
                            <div className="flex items-center gap-2 self-end md:self-auto">
                                <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500" />
                                <span className="text-xs font-mono text-zinc-500">Sort:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                                    className="px-3 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                >
                                    {SORT_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Category Filter Tabs with count pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                            {FILTER_CATEGORIES.map((cat) => {
                                const count = categoryCounts[cat] || 0;
                                const isActive = activeFilter === cat;
                                return (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setActiveFilter(cat)}
                                        className={`px-3 py-1.5 rounded-lg font-mono text-xs border whitespace-nowrap transition-all flex items-center gap-1.5 ${
                                            isActive
                                                ? 'border-cyan-500/60 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.15)]'
                                                : 'border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 bg-zinc-950/40'
                                        }`}
                                    >
                                        <span>{cat}</span>
                                        <span
                                            className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                                                isActive
                                                    ? 'bg-cyan-500/20 text-cyan-200'
                                                    : 'bg-zinc-900 text-zinc-500'
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

                {/* Results count info */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6 px-1">
                    <span>
                        Showing {filteredRepos.length} of {repos.length} repositories
                        {activeFilter !== 'All' && ` in ${activeFilter}`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </span>

                    {(activeFilter !== 'All' || searchQuery) && (
                        <button
                            type="button"
                            onClick={() => {
                                setActiveFilter('All');
                                setSearchQuery('');
                            }}
                            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            <RotateCcw className="w-3 h-3" />
                            Reset filters
                        </button>
                    )}
                </div>

                {/* Loading Skeleton */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div
                                key={n}
                                className="h-64 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 animate-pulse p-6 flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="h-4 w-24 bg-zinc-800 rounded" />
                                    <div className="h-6 w-3/4 bg-zinc-800 rounded" />
                                    <div className="h-12 w-full bg-zinc-800/60 rounded" />
                                </div>
                                <div className="h-8 w-full bg-zinc-800/40 rounded" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && filteredRepos.length === 0 && (
                    <div className="py-16 text-center rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-8">
                        <Radio className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                        <h3 className="text-base font-semibold text-zinc-200">No repositories found</h3>
                        <p className="text-sm text-zinc-500 mt-1 max-w-sm mx-auto">
                            No projects matched your active category filter &quot;{activeFilter}&quot;
                            {searchQuery ? ` and search term &quot;${searchQuery}&quot;` : ''}.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveFilter('All');
                                setSearchQuery('');
                            }}
                            className="mt-4 btn-secondary inline-flex items-center gap-1.5 text-xs font-mono"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            Clear Search &amp; Filters
                        </button>
                    </div>
                )}

                {/* Repository Cards Grid */}
                {!loading && filteredRepos.length > 0 && (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredRepos.map((repo, index) => {
                                const hasCaseStudy = !!getCaseStudyForRepo(repo);
                                const langColor = repo.language
                                    ? LANGUAGE_COLORS[repo.language] || '#22d3ee'
                                    : '#71717a';
                                const formattedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                });

                                return (
                                    <Reveal key={repo.name} delay={Math.min(index * 0.03, 0.3)}>
                                        <motion.article
                                            layout
                                            className="group relative rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-[#0a0c10] to-[#06080c] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col h-full hover:shadow-[0_4px_24px_rgba(34,211,238,0.06)] hover:-translate-y-1"
                                        >
                                            {/* Top Card Bar: Categories + Language + Featured */}
                                            <div className="p-5 pb-3 flex items-start justify-between gap-2 border-b border-zinc-800/50">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {repo.categories.slice(0, 2).map((c) => (
                                                        <span
                                                            key={c}
                                                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider"
                                                        >
                                                            {c}
                                                        </span>
                                                    ))}
                                                    {repo.isFeatured && (
                                                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                                                            <Sparkles className="w-2.5 h-2.5" />
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>

                                                {repo.language && (
                                                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 flex-shrink-0">
                                                        <span
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: langColor }}
                                                        />
                                                        <span>{repo.language}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Card Main Content */}
                                            <div className="p-5 flex flex-col flex-1">
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() => setSelectedRepo(repo)}
                                                    role="button"
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.preventDefault();
                                                            setSelectedRepo(repo);
                                                        }
                                                    }}
                                                >
                                                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                                                        {repo.displayName}
                                                    </h3>
                                                    <p className="font-mono text-[11px] text-zinc-500 mt-0.5 line-clamp-1">
                                                        ShahidKhan232 / {repo.name}
                                                    </p>

                                                    <p className="mt-3 text-xs text-zinc-400 leading-relaxed line-clamp-3">
                                                        {repo.enrichedDescription}
                                                    </p>
                                                </div>

                                                {/* Tech Badges */}
                                                <div className="mt-4 flex flex-wrap gap-1.5">
                                                    {repo.technologies.slice(0, 4).map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-0.5 text-[10px] font-mono rounded border border-zinc-800 bg-zinc-900/50 text-zinc-400 group-hover:border-zinc-700 transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {repo.technologies.length > 4 && (
                                                        <span className="text-[10px] font-mono text-zinc-600 px-1 py-0.5">
                                                            +{repo.technologies.length - 4}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Metrics row */}
                                                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                                                    <div className="flex items-center gap-3">
                                                        <span className="flex items-center gap-1">
                                                            <Star className="w-3 h-3 text-amber-400/80" />
                                                            {repo.stargazers_count}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <GitFork className="w-3 h-3 text-cyan-400/80" />
                                                            {repo.forks_count}
                                                        </span>
                                                    </div>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3 text-zinc-600" />
                                                        {formattedDate}
                                                    </span>
                                                </div>

                                                {/* Action Bar */}
                                                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedRepo(repo)}
                                                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                                                    >
                                                        {hasCaseStudy ? (
                                                            <>
                                                                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                                                                <span>Case Study</span>
                                                            </>
                                                        ) : (
                                                            <span>Details</span>
                                                        )}
                                                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                                    </button>

                                                    <div className="flex items-center gap-2">
                                                        {repo.homepage && (
                                                            <a
                                                                href={repo.homepage}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                                                                title="Live Demo"
                                                                aria-label="Live Demo"
                                                            >
                                                                <Globe className="w-3.5 h-3.5" />
                                                            </a>
                                                        )}
                                                        <a
                                                            href={repo.html_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors p-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700"
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

            {/* Comprehensive Detail & Case Study Modal */}
            <ProjectModal
                repo={selectedRepo}
                caseStudy={selectedCaseStudy}
                onClose={() => setSelectedRepo(null)}
            />
        </section>
    );
}
