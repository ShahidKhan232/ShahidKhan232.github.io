'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';
import {
    Cloud,
    Box,
    Server,
    GitBranch,
    Activity,
    Terminal,
    CheckCircle2,
    Cpu,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

type ArchitectureTier = {
    category: string;
    icon: typeof Cloud;
    accentColor: string;
    badge: string;
    items: {
        name: string;
        usage: string;
        highlight?: string;
    }[];
};

const ARCHITECTURE_TIERS: ArchitectureTier[] = [
    {
        category: 'CLOUD (AWS)',
        icon: Cloud,
        accentColor: '#FF9900',
        badge: 'PRIMARY_CLOUD',
        items: [
            { name: 'EC2', usage: 'Provisioning scalable virtual compute instances across multi-AZ architectures.', highlight: 'Compute' },
            { name: 'S3', usage: 'Object storage hosting static assets, Terraform remote state files, and event triggers.', highlight: 'Storage' },
            { name: 'VPC', usage: 'Custom network topology with isolated public/private subnets, NAT gateways, and routing.', highlight: 'Networking' },
            { name: 'IAM', usage: 'Least-privilege role-based access control, security policies, and service accounts.', highlight: 'Security' },
            { name: 'ECR', usage: 'Private container registry storage with automated vulnerability scanning.', highlight: 'Registry' },
            { name: 'ECS', usage: 'Containerized task definitions and service deployments on AWS infrastructure.', highlight: 'Containers' },
            { name: 'EKS', usage: 'Managed Kubernetes control planes orchestrating production microservices.', highlight: 'Kubernetes' },
            { name: 'RDS Multi-AZ', usage: 'Managed relational databases with automated cross-AZ failover and replication.', highlight: 'Database' },
            { name: 'Route 53', usage: 'Cloud DNS routing, domain registration, and failover health checks.', highlight: 'DNS' },
            { name: 'CloudFront', usage: 'Edge CDN distribution providing low-latency delivery and SSL termination.', highlight: 'CDN' },
            { name: 'ALB', usage: 'Application Load Balancers distributing incoming traffic with path-based routing.', highlight: 'Load Balancing' },
        ],
    },
    {
        category: 'CONTAINERS',
        icon: Box,
        accentColor: '#326CE5',
        badge: 'RUNTIME',
        items: [
            { name: 'Docker', usage: 'Building reproducible multi-stage images, minimizing layer sizes and attack surfaces.', highlight: 'Engine' },
            { name: 'Docker Compose', usage: 'Orchestrating multi-container local and staging environments with isolated networks.', highlight: 'Compose' },
            { name: 'Kubernetes', usage: 'Declarative deployments, services, ingress, configmaps, and pod auto-healing.', highlight: 'Orchestration' },
            { name: 'AWS EKS', usage: 'Production Kubernetes management on AWS with managed node groups.', highlight: 'Managed K8s' },
        ],
    },
    {
        category: 'INFRASTRUCTURE AS CODE',
        icon: Server,
        accentColor: '#A855F7',
        badge: 'AUTOMATION',
        items: [
            { name: 'Terraform', usage: 'Declarative HCL provisioning of VPCs, EKS, compute, and security groups with S3 state locking.', highlight: 'IaC' },
            { name: 'Ansible', usage: 'Configuration management, package deployments, and server hardening post-provisioning.', highlight: 'Config' },
        ],
    },
    {
        category: 'CI / CD',
        icon: GitBranch,
        accentColor: '#F97316',
        badge: 'PIPELINE',
        items: [
            { name: 'Jenkins', usage: 'Declarative pipelines automating build, lint, scan, test, and containerized deployment.', highlight: 'Automation Server' },
            { name: 'GitHub Actions', usage: 'Git-triggered workflow workflows building and deploying releases on pull requests.', highlight: 'Cloud CI' },
        ],
    },
    {
        category: 'OBSERVABILITY',
        icon: Activity,
        accentColor: '#10B981',
        badge: 'TELEMETRY',
        items: [
            { name: 'Prometheus', usage: 'Time-series metric collection, target scraping, and custom promQL alert expressions.', highlight: 'Metrics' },
            { name: 'Grafana', usage: 'Real-time telemetry dashboards visualizing node, container, and application health.', highlight: 'Dashboards' },
            { name: 'Alertmanager', usage: 'Deduplicating, grouping, and dispatching incident alerts to notification endpoints.', highlight: 'Alerting' },
            { name: 'Loki', usage: 'Log aggregation aligned with Grafana observability stacks for rapid troubleshooting.', highlight: 'Logs' },
        ],
    },
    {
        category: 'SYSTEMS & AUTOMATION',
        icon: Terminal,
        accentColor: '#38BDF8',
        badge: 'CORE_ENGINE',
        items: [
            { name: 'Linux (Ubuntu/Debian)', usage: 'Primary server OS administration, systemd service management, and security tuning.', highlight: 'OS' },
            { name: 'Bash', usage: 'Shell scripts for deployment hooks, initialization, and automation workflows.', highlight: 'Scripting' },
            { name: 'Python', usage: 'Automation tooling, Boto3 AWS API scripting, and serverless Lambda functions.', highlight: 'Language' },
            { name: 'Networking', usage: 'TCP/IP protocols, CIDR subnetting, DNS, reverse proxies, and firewall rules.', highlight: 'Protocols' },
        ],
    },
];

export default function SkillsPage() {
    const [selectedItem, setSelectedItem] = useState<{
        name: string;
        category: string;
        usage: string;
        highlight?: string;
        color: string;
    }>({
        name: 'AWS EKS',
        category: 'CLOUD (AWS)',
        usage: 'Managed Kubernetes control planes orchestrating production microservices with Terraform provisioning.',
        highlight: 'Kubernetes',
        color: '#FF9900',
    });

    return (
        <PageTransition className="bg-[#060B12]">
            <PageHeader
                number="02 / TECHNOLOGY STACK"
                title="Technology Architecture Map"
                subtitle="A structured blueprint of the cloud infrastructure tools, container systems, and automation frameworks I utilize."
                badge="6 ARCHITECTURE TIERS"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
                {/* Mobile Active Inspector Banner */}
                <div className="lg:hidden mb-8">
                    <div className="rounded-2xl border border-[#1E2C3F] bg-[#0A111C] p-5 space-y-3 shadow-xl">
                        <div className="flex items-center justify-between pb-2 border-b border-[#1E2C3F]">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                                    INSPECTOR (ACTIVE NODE)
                                </span>
                            </div>
                            <span
                                className="px-2 py-0.5 rounded text-[9px] font-mono border"
                                style={{
                                    borderColor: `${selectedItem.color}40`,
                                    backgroundColor: `${selectedItem.color}15`,
                                    color: selectedItem.color,
                                }}
                            >
                                {selectedItem.category}
                            </span>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-zinc-50 font-mono">
                                    {selectedItem.name}
                                </h3>
                                {selectedItem.highlight && (
                                    <span className="font-mono text-[11px] text-[#38BDF8]">
                                        [{selectedItem.highlight}]
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed font-mono mt-2 bg-[#060B12] p-3 rounded-lg border border-[#1E2C3F]">
                                {selectedItem.usage}
                            </p>
                        </div>
                        <div className="pt-1">
                            <Link
                                href="/projects"
                                className="btn-primary w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-mono min-h-[42px]"
                            >
                                <span>View Projects Using {selectedItem.name}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left Columns: Architecture Tiers */}
                    <div className="lg:col-span-8 space-y-6 sm:space-y-8">
                        {ARCHITECTURE_TIERS.map((tier, tIdx) => {
                            const Icon = tier.icon;

                            return (
                                <Reveal key={tier.category} delay={tIdx * 0.05}>
                                    <div className="rounded-xl border border-[#1E2C3F] bg-[#0A111C] overflow-hidden">
                                        {/* Tier Header */}
                                        <div className="px-5 py-3 border-b border-[#1E2C3F] bg-[#0D1624] flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <div
                                                    className="w-7 h-7 rounded-lg border border-[#1E2C3F] bg-[#060B12] flex items-center justify-center"
                                                    style={{ color: tier.accentColor }}
                                                >
                                                    <Icon className="w-3.5 h-3.5" />
                                                </div>
                                                <h3 className="font-mono text-xs font-bold text-zinc-100 tracking-wider">
                                                    {tier.category}
                                                </h3>
                                            </div>

                                            <span
                                                className="px-2 py-0.5 rounded text-[9px] font-mono border"
                                                style={{
                                                    borderColor: `${tier.accentColor}33`,
                                                    backgroundColor: `${tier.accentColor}11`,
                                                    color: tier.accentColor,
                                                }}
                                            >
                                                {tier.badge}
                                            </span>
                                        </div>

                                        {/* Tier Nodes Grid */}
                                        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                            {tier.items.map((item) => {
                                                const isSelected = selectedItem.name === item.name;

                                                return (
                                                    <button
                                                        key={item.name}
                                                        type="button"
                                                        onClick={() =>
                                                            setSelectedItem({
                                                                name: item.name,
                                                                category: tier.category,
                                                                usage: item.usage,
                                                                highlight: item.highlight,
                                                                color: tier.accentColor,
                                                            })
                                                        }
                                                        className={`text-left p-3 rounded-lg border transition-all text-xs font-mono flex flex-col justify-between ${
                                                            isSelected
                                                                ? 'bg-[#101A28] border-[#38BDF8]/50 shadow-[0_0_12px_rgba(56,189,248,0.15)] -translate-y-0.5'
                                                                : 'bg-[#060B12] border-[#1E2C3F]/80 hover:border-[#2A3C54] hover:bg-[#0D1624]'
                                                        }`}
                                                    >
                                                        <div className="flex items-center justify-between gap-1 mb-2">
                                                            <span className="font-bold text-zinc-100">{item.name}</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                        </div>
                                                        <span className="text-[10px] text-zinc-500 truncate">
                                                            {item.highlight}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    {/* Right Column: Sticky Inspector Pane */}
                    <div className="lg:col-span-4 sticky top-24">
                        <Reveal>
                            <div className="rounded-2xl border border-[#1E2C3F] bg-[#0A111C] shadow-2xl overflow-hidden">
                                <div className="px-5 py-3 border-b border-[#1E2C3F] bg-[#0D1624] flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                                            ARCHITECTURE_INSPECTOR
                                        </span>
                                    </div>
                                    <span className="font-mono text-[9px] text-emerald-400">ACTIVE</span>
                                </div>

                                <div className="p-6 space-y-5">
                                    <div>
                                        <span
                                            className="inline-block px-2 py-0.5 rounded text-[10px] font-mono mb-2 border"
                                            style={{
                                                borderColor: `${selectedItem.color}40`,
                                                backgroundColor: `${selectedItem.color}15`,
                                                color: selectedItem.color,
                                            }}
                                        >
                                            {selectedItem.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-zinc-50 font-mono">
                                            {selectedItem.name}
                                        </h3>
                                        {selectedItem.highlight && (
                                            <p className="font-mono text-xs text-zinc-400 mt-1">
                                                Role: {selectedItem.highlight}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                                            How I Use It in Infrastructure
                                        </h4>
                                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-[#060B12] p-4 rounded-xl border border-[#1E2C3F] font-mono">
                                            {selectedItem.usage}
                                        </p>
                                    </div>

                                    <div className="pt-2 border-t border-[#1E2C3F] text-xs font-mono text-zinc-400 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                            <span>Documented in active GitHub repositories</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                            <span>Configured via declarative IaC / pipelines</span>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-[#1E2C3F]">
                                        <Link
                                            href="/projects"
                                            className="btn-primary w-full inline-flex items-center justify-center gap-2 py-2 text-xs"
                                        >
                                            <span>View Projects Using This Stack</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
