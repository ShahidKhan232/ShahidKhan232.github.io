import Hero from '@/components/Hero';
import InfrastructureGlance from '@/components/InfrastructureGlance';
import Reveal from '@/components/Reveal';
import GitHubActivity from '@/components/GitHubActivity';
import TerminalSection from '@/components/TerminalSection';
import Link from 'next/link';
import { ArrowRight, Sparkles, Layers, Cpu, Briefcase, Mail, Download, Github } from 'lucide-react';
import { about, engineeringPrinciples, devOpsStack, experience, hero } from '@/lib/siteContent';
import { getFeaturedProjectRecords } from '@/lib/projectData';

export default function Home() {
    const featuredProjects = getFeaturedProjectRecords().slice(0, 3);
    const coreSkills = devOpsStack.slice(0, 8);

    return (
        <div className="bg-[#060B12]">
            {/* 1. Hero */}
            <Hero />

            {/* 2. Infrastructure Quick Glance */}
            <InfrastructureGlance />

            {/* 3. Short About Preview */}
            <section className="py-20 md:py-24 border-b border-control-border bg-control-surface/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7">
                            <Reveal>
                                <span className="font-mono text-xs font-semibold text-k8s-text tracking-widest uppercase mb-2 block">
                                    01 / ENGINEERING PROFILE
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight">
                                    Architecting Resilient Cloud Systems
                                </h2>
                                <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
                                    {about.intro}
                                </p>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {about.profile.focus.map((f) => (
                                        <span
                                            key={f}
                                            className="px-3 py-1 rounded-lg text-xs font-mono bg-control-card border border-control-border text-zinc-300"
                                        >
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>

                            <Reveal delay={0.15}>
                                <div className="mt-8">
                                    <Link
                                        href="/about"
                                        className="btn-secondary inline-flex items-center gap-2 text-xs font-mono group"
                                    >
                                        <span>Inspect Full Profile &amp; Principles</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </Reveal>
                        </div>

                        <div className="lg:col-span-5">
                            <Reveal delay={0.1}>
                                <div className="control-card rounded-2xl p-6 space-y-4">
                                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">
                                        Core Architectural Principles
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {engineeringPrinciples.map((p) => (
                                            <div
                                                key={p}
                                                className="p-3.5 rounded-xl border border-control-border bg-control-surface/80 font-mono text-xs text-k8s-text text-center font-semibold tracking-wider"
                                            >
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-3 border-t border-control-border text-xs font-mono text-zinc-500 space-y-1">
                                        <p className="text-zinc-300">{about.profile.education}</p>
                                        <p>{about.profile.location}</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Featured Projects Spotlight */}
            <section className="py-20 md:py-28 border-b border-control-border bg-[#060B12]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                        <Reveal>
                            <span className="font-mono text-xs font-semibold text-k8s-text tracking-widest uppercase mb-2 block">
                                02 / INFRASTRUCTURE &amp; WORKLOADS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight">
                                Production-Style Cloud &amp; DevOps Deployments
                            </h2>
                            <p className="mt-2 text-zinc-400 text-sm max-w-xl">
                                Highlights of containerization, Kubernetes clusters, and IaC architectures.
                            </p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <Link
                                href="/projects"
                                className="btn-primary inline-flex items-center gap-2 text-xs font-mono flex-shrink-0"
                            >
                                <span>Explore All Workloads (20+)</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredProjects.map((project, idx) => (
                            <Reveal key={project.slug} delay={idx * 0.08}>
                                <div className="control-card rounded-2xl p-6 flex flex-col justify-between h-full group hover:-translate-y-1">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-k8s/10 text-k8s-text border border-k8s/25 uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-aws-accent">
                                                <Sparkles className="w-2.5 h-2.5" />
                                                Featured
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-k8s-text transition-colors line-clamp-2">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 text-xs text-zinc-400 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-control-surface border border-control-border text-zinc-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-control-border flex items-center justify-between">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-k8s-text hover:text-cyan-300 transition-colors group/link"
                                        >
                                            <Layers className="w-3.5 h-3.5" />
                                            <span>Inspect Architecture →</span>
                                        </Link>

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-500 hover:text-zinc-200 transition-colors"
                                            aria-label={`GitHub repository for ${project.title}`}
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Core Tech Stack Preview */}
            <section className="py-20 md:py-24 border-b border-control-border bg-control-surface/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <Reveal>
                            <span className="font-mono text-xs font-semibold text-k8s-text tracking-widest uppercase mb-2 block">
                                03 / TECHNOLOGY STACK
                            </span>
                            <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
                                Primary Cloud &amp; DevOps Tooling
                            </h2>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <Link
                                href="/skills"
                                className="btn-secondary inline-flex items-center gap-2 text-xs font-mono"
                            >
                                <Cpu className="w-3.5 h-3.5" />
                                <span>Inspect Architecture Map</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {coreSkills.map((skill, idx) => (
                            <Reveal key={skill.name} delay={idx * 0.04}>
                                <div className="p-4 rounded-xl border border-control-border bg-control-surface/80 hover:border-k8s/40 transition-colors">
                                    <p className="font-medium text-zinc-100 text-sm">{skill.name}</p>
                                    <p className="font-mono text-[10px] text-k8s-text/90 mt-1">{skill.category}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Experience Preview */}
            <section className="py-20 md:py-24 border-b border-control-border bg-[#060B12]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <Reveal>
                            <span className="font-mono text-xs font-semibold text-k8s-text tracking-widest uppercase mb-2 block">
                                04 / ENGINEERING EXPERIENCE
                            </span>
                            <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
                                Hands-on Industry Track Record
                            </h2>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <Link
                                href="/experience"
                                className="btn-secondary inline-flex items-center gap-2 text-xs font-mono"
                            >
                                <Briefcase className="w-3.5 h-3.5" />
                                <span>Inspect Full Timeline</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </Reveal>
                    </div>

                    {experience.map((exp, i) => (
                        <Reveal key={i}>
                            <div className="control-card rounded-2xl p-6 md:p-8">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                                        <p className="font-mono text-sm text-k8s-text">{exp.company} · {exp.location}</p>
                                    </div>
                                    <span className="font-mono text-xs text-zinc-500">{exp.start} – {exp.end}</span>
                                </div>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {exp.bullets[0]}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.techTags.slice(0, 6).map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-control-surface border border-control-border text-zinc-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* 7. Authentic DevOps Terminal Bastion */}
            <TerminalSection />

            {/* 8. GitHub & Activity */}
            <GitHubActivity />

            {/* 9. Contact Conversion CTA */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-[#060B12] via-[#0A111C] to-[#060B12] border-t border-control-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-k8s/10 text-k8s-text border border-k8s/30 uppercase tracking-widest inline-block mb-4">
                            05 / ESTABLISH CONNECTION
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
                            Let&apos;s Build Something Resilient.
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
                            Open to DevOps, Cloud, Infrastructure, and Platform Engineering roles. Let&apos;s discuss how I can contribute to your production infrastructure.
                        </p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn-primary inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Open Communication Channel</span>
                            </Link>
                            <a
                                href={hero.resumeDriveLink || hero.resumePath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download Resume (PDF)</span>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}

