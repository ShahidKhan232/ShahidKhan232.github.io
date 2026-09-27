'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectCaseStudy } from '@/lib/siteContent';
import type { EnrichedRepo } from '@/lib/types';
import { fetchRepoReadme } from '@/lib/github';
import {
    X,
    Github,
    ExternalLink,
    Star,
    GitFork,
    Calendar,
    Code2,
    FileText,
    CheckCircle2,
    Sparkles,
    Globe,
    Layers
} from 'lucide-react';

type Props = {
    repo: EnrichedRepo | null;
    caseStudy?: ProjectCaseStudy | null;
    onClose: () => void;
};

const caseStudySections: { key: keyof ProjectCaseStudy; label: string; icon: string }[] = [
    { key: 'problem', label: 'Problem & Objective', icon: '🎯' },
    { key: 'architecture', label: 'Architecture & Design', icon: '🏗️' },
    { key: 'implementation', label: 'Implementation Details', icon: '⚙️' },
    { key: 'workflow', label: 'DevOps / CI/CD Workflow', icon: '🔄' },
    { key: 'challenges', label: 'Key Challenges & Solutions', icon: '⚡' },
    { key: 'outcome', label: 'Results & Engineering Impact', icon: '📈' },
];

// Language colors mapping
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

// Simple clean markdown formatter for README text
function SimpleReadmeRenderer({ content }: { content: string }) {
    const lines = content.split('\n');
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];

    const elements: React.ReactNode[] = [];

    lines.forEach((line, index) => {
        if (line.trim().startsWith('```')) {
            if (inCodeBlock) {
                // End code block
                elements.push(
                    <pre key={`code-${index}`} className="p-3 my-3 rounded-lg bg-zinc-950 border border-zinc-800/80 text-xs font-mono text-cyan-300 overflow-x-auto">
                        <code>{codeBlockContent.join('\n')}</code>
                    </pre>
                );
                codeBlockContent = [];
                inCodeBlock = false;
            } else {
                inCodeBlock = true;
            }
            return;
        }

        if (inCodeBlock) {
            codeBlockContent.push(line);
            return;
        }

        const trimmed = line.trim();
        if (!trimmed) {
            elements.push(<div key={`space-${index}`} className="h-2" />);
            return;
        }

        if (trimmed.startsWith('# ')) {
            elements.push(
                <h2 key={`h1-${index}`} className="text-lg font-bold text-zinc-100 mt-4 mb-2 pb-1 border-b border-zinc-800">
                    {trimmed.replace('# ', '')}
                </h2>
            );
        } else if (trimmed.startsWith('## ')) {
            elements.push(
                <h3 key={`h2-${index}`} className="text-base font-semibold text-zinc-200 mt-3 mb-1.5">
                    {trimmed.replace('## ', '')}
                </h3>
            );
        } else if (trimmed.startsWith('### ')) {
            elements.push(
                <h4 key={`h3-${index}`} className="text-sm font-semibold text-cyan-400 mt-2 mb-1">
                    {trimmed.replace('### ', '')}
                </h4>
            );
        } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            elements.push(
                <li key={`li-${index}`} className="ml-4 list-disc text-xs text-zinc-400 my-0.5 leading-relaxed">
                    {trimmed.substring(2)}
                </li>
            );
        } else {
            elements.push(
                <p key={`p-${index}`} className="text-xs text-zinc-400 leading-relaxed my-1">
                    {trimmed}
                </p>
            );
        }
    });

    return <div className="space-y-0.5 font-sans">{elements}</div>;
}

export default function ProjectModal({ repo, caseStudy, onClose }: Props) {
    const [readme, setReadme] = useState<string | null>(null);
    const [loadingReadme, setLoadingReadme] = useState(false);
    const [showReadme, setShowReadme] = useState(false);

    useEffect(() => {
        if (!repo) {
            setReadme(null);
            setShowReadme(false);
            return;
        }

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [repo, onClose]);

    const handleLoadReadme = async () => {
        if (!repo) return;
        if (readme) {
            setShowReadme(!showReadme);
            return;
        }

        setLoadingReadme(true);
        setShowReadme(true);
        try {
            const content = await fetchRepoReadme(repo.name);
            setReadme(content || 'No README file found in this repository.');
        } catch {
            setReadme('Unable to fetch README content directly from GitHub.');
        } finally {
            setLoadingReadme(false);
        }
    };

    if (!repo) return null;

    const formattedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    const langColor = repo.language ? (LANGUAGE_COLORS[repo.language] || '#22d3ee') : '#71717a';

    return (
        <AnimatePresence>
            <motion.button
                type="button"
                aria-label="Close dialog"
                className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="fixed inset-3 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[70] md:w-full md:max-w-3xl md:max-h-[88vh] flex flex-col rounded-2xl border border-cyan-500/20 bg-[#080a0f] shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.22 }}
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 p-5 md:p-6 border-b border-zinc-800 bg-[#0c0e14]/90 backdrop-blur-md">
                    <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            {repo.categories.map((cat) => (
                                <span
                                    key={cat}
                                    className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                                >
                                    {cat}
                                </span>
                            ))}
                            {repo.isFeatured && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                                    <Sparkles className="w-2.5 h-2.5" />
                                    Featured
                                </span>
                            )}
                            {repo.fork && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-400">
                                    Forked
                                </span>
                            )}
                        </div>

                        <h2 id="project-modal-title" className="text-xl md:text-2xl font-bold text-zinc-50">
                            {repo.displayName}
                        </h2>
                        <p className="font-mono text-xs text-zinc-500 mt-1">
                            ShahidKhan232 / {repo.name}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Live Stats Bar */}
                <div className="px-5 md:px-6 py-2.5 bg-zinc-950/80 border-b border-zinc-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                    {repo.language && (
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor }} />
                            <span>{repo.language}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        <span>{repo.stargazers_count} stars</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{repo.forks_count} forks</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Updated {formattedDate}</span>
                    </div>
                    {repo.visibility && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 ml-auto">
                            {repo.visibility}
                        </span>
                    )}
                </div>

                {/* Modal Body */}
                <div className="p-5 md:p-8 overflow-y-auto flex-1 space-y-6">
                    {/* Case study banner image if available */}
                    {caseStudy?.image && (
                        <div className="relative h-48 md:h-56 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={caseStudy.image}
                                alt={repo.displayName}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-80" />
                        </div>
                    )}

                    {/* Project Overview */}
                    <div>
                        <h3 className="font-mono text-xs uppercase text-zinc-500 tracking-wider mb-2 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-cyan-400" />
                            Project Overview
                        </h3>
                        <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/80">
                            {repo.enrichedDescription}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="font-mono text-xs uppercase text-zinc-500 tracking-wider mb-2 flex items-center gap-1.5">
                            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                            Technologies & Tools
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {repo.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Rich Case Study Sections if present */}
                    {caseStudy && (
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
                                <Layers className="w-4 h-4 text-cyan-400" />
                                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                                    Engineering Case Study
                                </h3>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {caseStudySections.map(({ key, label, icon }) => (
                                    <div
                                        key={key}
                                        className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors"
                                    >
                                        <h4 className="font-mono text-xs text-cyan-400 flex items-center gap-1.5 mb-2">
                                            <span>{icon}</span>
                                            {label}
                                        </h4>
                                        <p className="text-xs text-zinc-400 leading-relaxed">
                                            {caseStudy[key] as string}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* README Viewer Toggle */}
                    <div className="pt-2">
                        <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                            <span className="font-mono text-xs text-zinc-400">
                                Repository README documentation
                            </span>
                            <button
                                type="button"
                                onClick={handleLoadReadme}
                                className="text-xs font-mono px-3 py-1 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors inline-flex items-center gap-1.5"
                            >
                                <FileText className="w-3.5 h-3.5" />
                                {loadingReadme
                                    ? 'Loading README…'
                                    : showReadme
                                    ? 'Hide README'
                                    : 'View README'}
                            </button>
                        </div>

                        {showReadme && (
                            <div className="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 max-h-72 overflow-y-auto">
                                {loadingReadme ? (
                                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 py-4 justify-center">
                                        <span className="inline-block w-3 h-3 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                                        Fetching README from GitHub API…
                                    </div>
                                ) : readme ? (
                                    <SimpleReadmeRenderer content={readme} />
                                ) : (
                                    <p className="text-xs text-zinc-500">No README content available.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 md:p-5 border-t border-zinc-800 bg-[#0a0c10] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified Public Repository</span>
                    </div>

                    <div className="flex items-center gap-3">
                        {repo.homepage && (
                            <a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-2 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <Globe className="w-3.5 h-3.5" />
                                Live Demo
                                <ExternalLink className="w-3 h-3 opacity-60" />
                            </a>
                        )}

                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 text-xs"
                        >
                            <Github className="w-4 h-4" />
                            View on GitHub
                            <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
