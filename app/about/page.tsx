import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import StatusBadge from '@/components/StatusBadge';
import { about, engineeringPrinciples } from '@/lib/siteContent';
import {
    Cloud,
    Server,
    Box,
    GitBranch,
    Activity,
    Terminal,
    Zap,
    GraduationCap,
    Compass,
    CheckCircle2,
    ArrowRight,
    Layers,
    Cpu
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'About | Shahid Khan',
    description:
        'Engineering profile of Shahid Khan, DevOps & Cloud Engineer specializing in AWS, Kubernetes, Terraform, Docker, and CI/CD automation.',
};

const workCategories = [
    {
        title: 'Cloud Infrastructure',
        icon: Cloud,
        color: '#FF9900', // AWS orange
        description:
            'Architecting scalable, fault-tolerant infrastructure on AWS using EC2, EKS, VPC, ALB, S3, RDS Multi-AZ, and IAM least-privilege security controls.',
        tools: ['AWS', 'EKS', 'ALB', 'VPC', 'RDS Multi-AZ', 'S3', 'IAM'],
    },
    {
        title: 'Infrastructure as Code',
        icon: Server,
        color: '#A855F7', // Terraform purple
        description:
            'Provisioning reproducible, multi-environment cloud infrastructure using modular Terraform with S3/DynamoDB remote state locking and Ansible playbooks.',
        tools: ['Terraform', 'Ansible', 'HCL', 'Remote State', 'DynamoDB Lock'],
    },
    {
        title: 'Containers & Kubernetes',
        icon: Box,
        color: '#326CE5', // K8s blue
        description:
            'Designing lean multi-stage Docker builds, orchestrating workloads on Kubernetes and AWS EKS, configuring ingress controllers, and automating TLS via cert-manager.',
        tools: ['Docker', 'Kubernetes', 'AWS EKS', 'NGINX Ingress', 'cert-manager'],
    },
    {
        title: 'CI/CD Pipelines',
        icon: GitBranch,
        color: '#F97316', // CI/CD orange
        description:
            'Building declarative continuous integration and delivery pipelines with Jenkins, GitHub Actions, and AWS CodePipeline with integrated security gates.',
        tools: ['Jenkins', 'GitHub Actions', 'AWS CodePipeline', 'Docker Compose'],
    },
    {
        title: 'Observability & Monitoring',
        icon: Activity,
        color: '#10B981', // Prometheus/Grafana green
        description:
            'Implementing centralized telemetry, custom metric exporters, real-time Grafana operational dashboards, and Alertmanager incident notification routing.',
        tools: ['Prometheus', 'Grafana', 'Alertmanager', 'Loki', 'Node Exporter'],
    },
    {
        title: 'Systems & Automation',
        icon: Terminal,
        color: '#38BDF8', // Cyan
        description:
            'Linux systems engineering, shell scripting, automation tools with Python and Boto3, and automated maintenance workflows.',
        tools: ['Linux (Ubuntu/Debian)', 'Bash', 'Python', 'Boto3', 'Systemd'],
    },
];

export default function AboutPage() {
    return (
        <PageTransition className="bg-[#060B12]">
            <PageHeader
                number="01 / ENGINEERING PROFILE"
                title="Engineering Profile &amp; Focus"
                subtitle="Designing automated, scalable, and observable cloud infrastructure engineered for production reliability."
                badge="CONTROL_PLANE_PROFILE"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
                {/* 1. Dashboard-Style Telemetry Cards */}
                <section>
                    <Reveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* ROLE Card */}
                            <div className="p-5 rounded-xl border border-[#1E2C3F] bg-[#0A111C] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                                            ROLE
                                        </span>
                                        <Server className="w-3.5 h-3.5 text-[#38BDF8]" />
                                    </div>
                                    <h3 className="font-mono text-base font-bold text-zinc-100">
                                        DevOps / Cloud Engineer
                                    </h3>
                                </div>
                                <p className="font-mono text-[11px] text-zinc-400 mt-3 pt-2 border-t border-[#1E2C3F]/60">
                                    Specialized in AWS &amp; Kubernetes
                                </p>
                            </div>

                            {/* FOCUS Card */}
                            <div className="p-5 rounded-xl border border-[#1E2C3F] bg-[#0A111C] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                                            CORE_FOCUS
                                        </span>
                                        <Cpu className="w-3.5 h-3.5 text-[#FF9900]" />
                                    </div>
                                    <h3 className="font-mono text-xs font-semibold text-zinc-200 leading-relaxed">
                                        Cloud Infrastructure • Automation • CI/CD • Kubernetes
                                    </h3>
                                </div>
                                <p className="font-mono text-[11px] text-zinc-400 mt-3 pt-2 border-t border-[#1E2C3F]/60">
                                    Zero-to-Production Deployments
                                </p>
                            </div>

                            {/* ENVIRONMENT Card */}
                            <div className="p-5 rounded-xl border border-[#1E2C3F] bg-[#0A111C] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                                            ENVIRONMENT
                                        </span>
                                        <Layers className="w-3.5 h-3.5 text-[#326CE5]" />
                                    </div>
                                    <h3 className="font-mono text-xs font-semibold text-zinc-200 leading-relaxed">
                                        AWS • Linux • Containers • Infrastructure as Code
                                    </h3>
                                </div>
                                <p className="font-mono text-[11px] text-zinc-400 mt-3 pt-2 border-t border-[#1E2C3F]/60">
                                    Declarative HCL &amp; YAML
                                </p>
                            </div>

                            {/* CURRENT STATUS Card */}
                            <div className="p-5 rounded-xl border border-[#1E2C3F] bg-[#0A111C] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                                            CURRENT_STATUS
                                        </span>
                                        <StatusBadge status="online" label="OPEN" />
                                    </div>
                                    <h3 className="font-mono text-sm font-bold text-emerald-400">
                                        OPEN TO OPPORTUNITIES
                                    </h3>
                                </div>
                                <p className="font-mono text-[11px] text-zinc-400 mt-3 pt-2 border-t border-[#1E2C3F]/60">
                                    DevOps / Cloud / Platform Roles
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* 2. Engineering Profile Narrative */}
                <section className="pt-4">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-8 space-y-5">
                            <Reveal>
                                <span className="font-mono text-xs font-semibold text-[#38BDF8] uppercase tracking-widest">
                                    PROFILE_NARRATIVE
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
                                    Infrastructure Engineering Philosophy
                                </h2>
                                <p className="text-base text-zinc-300 leading-relaxed mt-4">
                                    {about.intro}
                                </p>
                                <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                                    I treat infrastructure as software: version-controlled in Git, tested through CI/CD pipelines, secured with least-privilege policies, and observed with real-time metrics. By eliminating manual configuration steps through Terraform and Ansible, I ensure every cloud environment is reproducible, auditable, and resilient.
                                </p>
                            </Reveal>
                        </div>

                        <div className="lg:col-span-4">
                            <Reveal delay={0.1}>
                                <div className="p-6 rounded-xl border border-[#1E2C3F] bg-[#0A111C] space-y-4">
                                    <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 pb-2 border-b border-[#1E2C3F]">
                                        Location &amp; Education
                                    </h3>
                                    <div>
                                        <p className="font-mono text-[10px] text-zinc-500 uppercase">Degree</p>
                                        <p className="font-semibold text-sm text-zinc-100">{about.profile.education}</p>
                                        <p className="text-xs text-zinc-400 mt-0.5">{about.profile.educationDetail}</p>
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] text-zinc-500 uppercase">Location</p>
                                        <p className="font-semibold text-sm text-zinc-200">{about.profile.location}</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* 3. What I Work With (Technical Domain Cards) */}
                <section className="pt-8 border-t border-[#1E2C3F]">
                    <Reveal>
                        <div className="max-w-2xl mb-8">
                            <span className="font-mono text-xs font-semibold text-[#38BDF8] uppercase tracking-widest">
                                DOMAIN_STACK
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
                                What I Work With
                            </h2>
                            <p className="mt-2 text-sm text-zinc-400">
                                Comprehensive technical tools applied across cloud provisioning, container orchestration, and incident observability.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {workCategories.map((cat, idx) => {
                            const Icon = cat.icon;
                            return (
                                <Reveal key={cat.title} delay={idx * 0.04}>
                                    <div className="p-6 rounded-xl border border-[#1E2C3F] bg-[#0A111C] h-full flex flex-col justify-between hover:border-[#2A3C54] transition-colors">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div
                                                    className="w-10 h-10 rounded-lg border border-[#1E2C3F] bg-[#060B12] flex items-center justify-center"
                                                    style={{ color: cat.color }}
                                                >
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                                            </div>

                                            <h3 className="font-mono text-sm font-bold text-zinc-100 mb-2">
                                                {cat.title}
                                            </h3>
                                            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                                                {cat.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1E2C3F]/60">
                                            {cat.tools.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2 py-0.5 rounded bg-[#060B12] border border-[#1E2C3F] text-[10px] font-mono text-zinc-400"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </section>

                {/* 4. Engineering Principles */}
                <section className="pt-8 border-t border-[#1E2C3F]">
                    <Reveal>
                        <div className="max-w-2xl mb-8">
                            <span className="font-mono text-xs font-semibold text-[#38BDF8] uppercase tracking-widest">
                                CORE_PILLARS
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
                                Engineering Principles
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                name: 'AUTOMATE',
                                desc: 'Codify every resource using Terraform & Ansible. Eliminate human error in repeatable deployments.',
                                icon: '⚡',
                            },
                            {
                                name: 'OBSERVE',
                                desc: 'Collect telemetry with Prometheus and Grafana. Alert on leading indicators rather than reacting to outages.',
                                icon: '📈',
                            },
                            {
                                name: 'SECURE',
                                desc: 'Implement IAM least privilege, container vulnerability scanning with Trivy, and TLS encryption by default.',
                                icon: '🛡️',
                            },
                            {
                                name: 'SCALE',
                                desc: 'Design stateless compute tiers, auto-scaling groups, and multi-AZ persistence designed for zero downtime.',
                                icon: '🌐',
                            },
                        ].map((principle, idx) => (
                            <Reveal key={principle.name} delay={idx * 0.06}>
                                <div className="p-5 rounded-xl border border-[#1E2C3F] bg-[#0A111C] flex flex-col justify-between h-full hover:border-[#38BDF8]/40 transition-colors">
                                    <div>
                                        <span className="text-lg mb-2 block">{principle.icon}</span>
                                        <h3 className="font-mono text-sm font-bold text-cyan-300 tracking-wider">
                                            {principle.name}
                                        </h3>
                                        <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                                            {principle.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* 5. Career Direction Box */}
                <section className="pt-8 border-t border-[#1E2C3F]">
                    <div className="p-8 rounded-2xl border border-[#1E2C3F] bg-[#0A111C] flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Compass className="w-4 h-4 text-[#38BDF8]" />
                                <span className="font-mono text-xs font-semibold text-[#38BDF8] uppercase tracking-wider">
                                    CAREER_DIRECTION
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-100">
                                Ready to scale cloud infrastructure on your team
                            </h3>
                            <p className="text-xs font-mono text-zinc-400">
                                Open to DevOps Engineer, Cloud Engineer, and Platform Engineer positions.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                            <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
                                <span>Inspect Projects</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                                <span>Establish Connection</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
