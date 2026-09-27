import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { experience } from '@/lib/siteContent';
import {
    Briefcase,
    Calendar,
    MapPin,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Shield,
    Clock,
    Zap
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Experience | Shahid Khan',
    description:
        'Explore Shahid Khan’s DevOps and AWS engineering experience, including verified metrics, infrastructure provisioning, and CI/CD pipelines.',
};

const verifiedMetrics = [
    {
        label: 'Manual Deployment Effort',
        stat: '-60%',
        desc: 'Automated CI/CD pipelines using Jenkins and GitHub Actions',
        icon: TrendingUp,
    },
    {
        label: 'Resource Utilization',
        stat: '+35%',
        desc: 'Containerization and workload deployment via Docker and Amazon ECS',
        icon: Zap,
    },
    {
        label: 'Environment Setup Time',
        stat: '15 min',
        desc: 'Reduced from several hours using modular Terraform IaC',
        icon: Clock,
    },
    {
        label: 'Misconfiguration Risks',
        stat: '-40%',
        desc: 'IAM least-privilege policies and VPC network security controls',
        icon: Shield,
    },
];

export default function ExperiencePage() {
    return (
        <PageTransition className="bg-[#060B12]">
            <PageHeader
                number="04 / EXPERIENCE"
                title="Engineering Impact Timeline"
                subtitle="Documented industry experience delivering automated cloud infrastructure, containerized workloads, and CI/CD pipelines."
                badge="AWS Engineering"
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
                {/* Verified Engineering Impact Metrics Grid */}
                <section>
                    <Reveal>
                        <div className="mb-6">
                            <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-widest block mb-1">
                                VERIFIED METRICS
                            </span>
                            <h2 className="text-2xl font-bold text-zinc-100">
                                Engineering Results &amp; Impact
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {verifiedMetrics.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <Reveal key={item.label} delay={i * 0.06}>
                                    <div className="control-card rounded-2xl p-5 flex flex-col justify-between h-full">
                                        <div>
                                            <div className="w-8 h-8 rounded-lg bg-control-surface border border-control-border flex items-center justify-center text-k8s-text mb-3">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <div className="font-mono text-2xl font-bold text-k8s-text">
                                                {item.stat}
                                            </div>
                                            <p className="font-mono text-xs font-semibold text-zinc-200 mt-1">
                                                {item.label}
                                            </p>
                                        </div>
                                        <p className="text-xs text-zinc-400 mt-2 leading-relaxed pt-2 border-t border-control-border/60">
                                            {item.desc}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </section>

                {/* Timeline Card */}
                <section>
                    <Reveal>
                        <div className="mb-8">
                            <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-widest block mb-1">
                                CAREER HISTORY
                            </span>
                            <h2 className="text-2xl font-bold text-zinc-100">
                                Work Experience
                            </h2>
                        </div>
                    </Reveal>

                    <div className="space-y-8">
                        {experience.map((exp, idx) => (
                            <Reveal key={idx}>
                                <div className="relative pl-6 sm:pl-8 md:pl-10 pb-4">
                                    {/* Timeline line */}
                                    <div className="absolute left-[9px] sm:left-[11px] md:left-[15px] top-4 bottom-0 w-px bg-gradient-to-b from-k8s/60 via-control-border to-transparent" />

                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-1.5 w-[19px] h-[19px] sm:w-[22px] sm:h-[22px] md:w-[30px] md:h-[30px] rounded-full border border-k8s/40 bg-control-base flex items-center justify-center shadow-[0_0_12px_rgba(50,108,229,0.3)]">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-k8s animate-pulse" />
                                    </div>

                                    <div className="control-card rounded-2xl p-4 sm:p-6 md:p-8 space-y-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-zinc-800/80">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-cyan-400" />
                                                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                                                        Cloud / Infrastructure Engineering
                                                    </span>
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-1">
                                                    {exp.role}
                                                </h3>
                                                <p className="font-mono text-sm sm:text-base text-cyan-300 font-semibold mt-0.5">
                                                    {exp.company}
                                                </p>
                                            </div>

                                            <div className="font-mono text-xs text-zinc-400 sm:text-right space-y-1">
                                                <p className="flex items-center sm:justify-end gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                                                    <span>{exp.start} – {exp.end}</span>
                                                </p>
                                                <p className="flex items-center sm:justify-end gap-1.5 text-zinc-500">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    <span>{exp.location}</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Responsibilities & Achievements */}
                                        <div className="space-y-3">
                                            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                                                Key Responsibilities &amp; Delivered Contributions
                                            </h4>
                                            <ul className="space-y-3">
                                                {exp.bullets.map((bullet, bIdx) => (
                                                    <li
                                                        key={bIdx}
                                                        className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technology Stack Tags */}
                                        <div className="pt-4 border-t border-zinc-800/80">
                                            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-3">
                                                Technologies &amp; Tools Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.techTags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-200"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="control-card rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-zinc-100">
                            Looking for a disciplined DevOps / Cloud Engineer?
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1">
                            Available for full-time opportunities and infrastructure automation engagements.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center justify-center gap-2 text-xs font-mono flex-shrink-0 min-h-[44px]"
                    >
                        <span>Initiate Contact</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
}
