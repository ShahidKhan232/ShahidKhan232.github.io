'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    Terminal,
    Github,
    GitBranch,
    Container,
    Boxes,
    Cloud,
    Activity,
    CheckCircle2,
    Server,
    Shield
} from 'lucide-react';

const topologyNodes = [
    {
        id: 'dev',
        number: '01',
        label: 'DEVELOPER',
        sublabel: 'Local Dev & Git commits',
        icon: Terminal,
        badge: 'SOURCE',
        color: '#38BDF8',
        detail: 'Workstation running Linux/macOS with version control & branch protection.',
    },
    {
        id: 'gh',
        number: '02',
        label: 'GITHUB',
        sublabel: 'Webhook & Repository',
        icon: Github,
        badge: 'VCS',
        color: '#E2E8F0',
        detail: 'Centralized repository with automated webhooks triggering CI/CD pipelines.',
    },
    {
        id: 'cicd',
        number: '03',
        label: 'CI / CD PIPELINE',
        sublabel: 'Jenkins • GitHub Actions',
        icon: GitBranch,
        badge: 'AUTOMATION',
        color: '#F97316',
        detail: 'Build, automated testing, static code analysis (SonarQube) & security scan (Trivy).',
    },
    {
        id: 'docker',
        number: '04',
        label: 'CONTAINERIZATION',
        sublabel: 'Docker Multi-Stage',
        icon: Container,
        badge: 'IMAGE',
        color: '#0284C7',
        detail: 'Optimized, minimal container images pushed to container registry.',
    },
    {
        id: 'k8s',
        number: '05',
        label: 'KUBERNETES / EKS',
        sublabel: 'Pods • Services • Ingress',
        icon: Boxes,
        badge: 'ORCHESTRATION',
        color: '#326CE5',
        detail: 'Auto-healing deployments, NGINX Ingress controller, and TLS cert-manager.',
    },
    {
        id: 'aws',
        number: '06',
        label: 'AWS CLOUD PLATFORM',
        sublabel: 'EC2 • VPC • ALB • S3 • RDS Multi-AZ',
        icon: Cloud,
        badge: 'INFRASTRUCTURE',
        color: '#FF9900',
        detail: 'Terraform-provisioned high-availability VPC topology across multiple AZs.',
    },
    {
        id: 'obs',
        number: '07',
        label: 'OBSERVABILITY & SRE',
        sublabel: 'Prometheus • Grafana • Alertmanager',
        icon: Activity,
        badge: 'TELEMETRY',
        color: '#10B981',
        detail: 'Real-time infrastructure metric scraping, dashboard panels, and incident alerts.',
    },
];

export default function CloudTopology() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const reduceMotion = useReducedMotion();

    const currentDetail = topologyNodes.find((n) => n.id === activeNode);

    return (
        <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Control Plane Frame */}
            <div className="rounded-2xl border border-[#1E2C3F] bg-[#0A111C]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Console Bar Header */}
                <div className="px-5 py-3 border-b border-[#1E2C3F] bg-[#0D1624] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                        <span className="font-mono text-[11px] font-semibold tracking-wider text-zinc-200 uppercase">
                            CLOUD_TOPOLOGY.MAP
                        </span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-[10px] text-zinc-400">
                        <span className="flex items-center gap-1 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                            DEPLOYED
                        </span>
                        <span className="hidden sm:inline text-zinc-600">|</span>
                        <span className="hidden sm:inline text-zinc-500">AWS / K8s / IaC</span>
                    </div>
                </div>

                {/* Topology Pipeline Body */}
                <div className="p-5 md:p-6 space-y-1">
                    {topologyNodes.map((node, index) => {
                        const Icon = node.icon;
                        const isLast = index === topologyNodes.length - 1;
                        const isHovered = activeNode === node.id;

                        return (
                            <div key={node.id} className="relative">
                                <motion.div
                                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                                    onMouseEnter={() => setActiveNode(node.id)}
                                    onMouseLeave={() => setActiveNode(null)}
                                    className={`group cursor-pointer rounded-xl p-2.5 sm:p-3 border transition-all duration-200 flex items-center justify-between gap-3 ${
                                        isHovered
                                            ? 'bg-[#101A28] border-[#38BDF8]/50 shadow-[0_0_16px_rgba(56,189,248,0.12)] -translate-x-0.5'
                                            : 'bg-[#0A111C] border-[#1E2C3F]/80 hover:border-[#2A3C54] hover:bg-[#0D1624]'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                        <div
                                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[#1E2C3F] bg-[#060B12] flex items-center justify-center flex-shrink-0"
                                            style={{ color: node.color }}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-[10px] text-zinc-500">
                                                    {node.number}
                                                </span>
                                                <h4 className="font-mono text-xs font-bold text-zinc-100 tracking-wide group-hover:text-cyan-300 transition-colors truncate">
                                                    {node.label}
                                                </h4>
                                            </div>
                                            <p className="font-mono text-[10px] sm:text-[11px] text-zinc-400 truncate mt-0.5">
                                                {node.sublabel}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <span
                                            className="hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-mono border"
                                            style={{
                                                borderColor: `${node.color}33`,
                                                backgroundColor: `${node.color}11`,
                                                color: node.color,
                                            }}
                                        >
                                            {node.badge}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                                    </div>
                                </motion.div>

                                {/* Connector Line with subtle data-packet animation */}
                                {!isLast && (
                                    <div className="flex justify-center py-0.5">
                                        <div className="w-px h-3.5 bg-[#1E2C3F] relative overflow-hidden">
                                            {!reduceMotion && (
                                                <motion.span
                                                    className="absolute left-0 w-full h-2 bg-[#38BDF8]"
                                                    animate={{ y: [-8, 20] }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                        delay: index * 0.25,
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Active Inspector Footer */}
                <div className="px-4 sm:px-5 py-3 bg-[#060B12] border-t border-[#1E2C3F] min-h-[48px] flex items-center justify-between text-xs font-mono">
                    <div className="text-zinc-400 leading-normal text-[11px] sm:text-xs pr-2">
                        {currentDetail ? (
                            <span className="text-cyan-300 flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{currentDetail.detail}</span>
                            </span>
                        ) : (
                            <span className="text-zinc-500">
                                Tap or hover any tier to inspect operational parameters.
                            </span>
                        )}
                    </div>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest hidden sm:inline flex-shrink-0">
                        HA_TIER_V1
                    </span>
                </div>
            </div>
        </div>
    );
}
