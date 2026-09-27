'use client';

import { useEffect, useState } from 'react';
import { githubStatic } from '@/lib/siteContent';
import { fetchGitHubUser } from '@/lib/github';
import type { GitHubUser } from '@/lib/types';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { Github, ExternalLink, Star, GitFork, Users, BookOpen } from 'lucide-react';

const highlightedProjects = [
    {
        name: 'Cloud-Projects',
        description: 'AWS infrastructure automation, serverless processing, and 3-tier HA architecture with Terraform.',
        language: 'HCL',
        stars: 3,
        forks: 5,
    },
    {
        name: 'Netflix-clone-k8s-end-to-end',
        description: 'Kubernetes cluster deployment with Jenkins CI/CD, Trivy/SonarQube DevSecOps, and Prometheus monitoring.',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
    },
    {
        name: 'CI-CD-Ansible',
        description: 'Multi-AZ Ansible playbooks automating Nginx and MongoDB replica set with Jenkins pipeline.',
        language: 'Ansible',
        stars: 2,
        forks: 2,
    },
    {
        name: 'AlertOps-Automated-Incident-Response-System',
        description: 'Observability stack using Prometheus, Grafana, Alertmanager with custom Python exporter.',
        language: 'Python',
        stars: 0,
        forks: 1,
    },
];

export default function GitHubActivity() {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [imgFailed, setImgFailed] = useState(false);

    useEffect(() => {
        let cancelled = false;
        fetchGitHubUser().then((data) => {
            if (!cancelled && data) setUser(data);
        });
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section className="relative py-20 md:py-24 bg-[#050608]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    number="05 / GITHUB"
                    title="Engineering Activity & Codebase"
                    subtitle="Open-source contributions, repositories, and continuous code activity."
                />

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* User Profile Card */}
                    <Reveal className="lg:col-span-1">
                        <div className="panel-glass rounded-2xl p-6 border border-zinc-800/80 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <a
                                            href={githubStatic.profileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono font-bold text-zinc-100 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                                        >
                                            @{githubStatic.username}
                                            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                                        </a>
                                        <p className="text-xs text-zinc-500 font-mono">DevOps & Cloud Engineer</p>
                                    </div>
                                </div>

                                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-mono">
                                    {user?.bio || 'Building reliable, automated and observable cloud systems using AWS, Kubernetes, Terraform & CI/CD.'}
                                </p>

                                <dl className="space-y-3 font-mono text-xs">
                                    <div className="flex justify-between border-b border-zinc-800/80 pb-2.5">
                                        <dt className="text-zinc-500 flex items-center gap-1.5">
                                            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                                            Public repositories
                                        </dt>
                                        <dd className="text-zinc-200 font-semibold">{user?.public_repos ?? 22}</dd>
                                    </div>
                                    <div className="flex justify-between border-b border-zinc-800/80 pb-2.5">
                                        <dt className="text-zinc-500 flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 text-cyan-400" />
                                            Followers
                                        </dt>
                                        <dd className="text-zinc-200 font-semibold">{user?.followers ?? 0}</dd>
                                    </div>
                                    <div className="flex justify-between pb-1">
                                        <dt className="text-zinc-500 flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 text-zinc-600" />
                                            Following
                                        </dt>
                                        <dd className="text-zinc-400">{user?.following ?? 1}</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="mt-8 pt-4 border-t border-zinc-800/80">
                                <p className="text-[11px] font-mono text-zinc-500 mb-2">Primary Languages & Stacks:</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {githubStatic.languages.map((lang) => (
                                        <span
                                            key={lang}
                                            className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                                        >
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Highlighted Repositories */}
                    <Reveal delay={0.08} className="lg:col-span-2">
                        <div className="space-y-3.5">
                            <div className="grid sm:grid-cols-2 gap-3">
                                {highlightedProjects.map((repo) => (
                                    <a
                                        key={repo.name}
                                        href={`https://github.com/${githubStatic.username}/${repo.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="panel-glass rounded-xl p-4 border border-zinc-800/80 hover:border-cyan-500/30 transition-all group flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <span className="font-mono text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 line-clamp-1">
                                                    {repo.name}
                                                </span>
                                                <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 flex-shrink-0 transition-colors" />
                                            </div>
                                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                                                {repo.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/60">
                                            <span className="text-zinc-400">{repo.language}</span>
                                            <div className="flex items-center gap-2.5">
                                                <span className="inline-flex items-center gap-1 text-amber-400/90">
                                                    <Star className="w-3 h-3" />
                                                    {repo.stars}
                                                </span>
                                                <span className="inline-flex items-center gap-1 text-cyan-400/90">
                                                    <GitFork className="w-3 h-3" />
                                                    {repo.forks}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Public GitHub Contribution Heatmap Card */}
                            {!imgFailed && (
                                <div className="control-card rounded-xl p-4 sm:p-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                        <span className="font-mono text-xs text-zinc-300 font-semibold">GitHub Annual Contributions</span>
                                        <a
                                            href={`https://github.com/${githubStatic.username}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 py-0.5"
                                        >
                                            View Calendar on GitHub
                                            <ExternalLink className="w-3 h-3 opacity-60" />
                                        </a>
                                    </div>
                                    <div className="overflow-x-auto py-2 -mx-2 px-2">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={`https://ghchart.rshah.org/06b6d4/${githubStatic.username}`}
                                            alt={`${githubStatic.username}'s GitHub contribution chart`}
                                            className="min-w-[620px] w-full max-w-none opacity-85 hover:opacity-100 transition-opacity"
                                            onError={() => setImgFailed(true)}
                                            loading="lazy"
                                        />
                                    </div>
                                    <p className="text-[10px] font-mono text-zinc-600 mt-1 sm:hidden">
                                        ← Swipe to inspect full calendar year →
                                    </p>
                                </div>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
