'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    User,
    Github,
    GitBranch,
    Container,
    Boxes,
    Cloud,
    Activity,
} from 'lucide-react';

const nodes = [
    { id: 'dev', label: 'Developer', icon: User },
    { id: 'gh', label: 'GitHub', icon: Github },
    { id: 'cicd', label: 'CI/CD', icon: GitBranch },
    { id: 'docker', label: 'Docker', icon: Container },
    { id: 'k8s', label: 'Kubernetes / EKS', icon: Boxes },
    { id: 'aws', label: 'AWS Infrastructure', icon: Cloud },
    { id: 'obs', label: 'Monitoring & Observability', icon: Activity },
];

export default function InfrastructurePipeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (reduceMotion) return;

        const handleMove = (e: MouseEvent) => {
            const el = containerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            setOffset({
                x: ((e.clientX - cx) / rect.width) * 8,
                y: ((e.clientY - cy) / rect.height) * 8,
            });
        };

        window.addEventListener('mousemove', handleMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMove);
    }, [reduceMotion]);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none"
            aria-hidden="true"
        >
            <motion.div
                style={{
                    x: reduceMotion ? 0 : offset.x,
                    y: reduceMotion ? 0 : offset.y,
                }}
                className="panel-glass rounded-2xl p-6 md:p-8 border border-zinc-800/80"
            >
                <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                        control_plane.view
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                        synced
                    </span>
                </div>

                <div className="space-y-0">
                    {nodes.map((node, index) => {
                        const Icon = node.icon;
                        const isLast = index === nodes.length - 1;

                        return (
                            <div key={node.id} className="relative">
                                <motion.div
                                    initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
                                    className="flex items-center gap-4 py-3 px-3 rounded-xl hover:bg-cyan-500/5 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-900/80 border border-zinc-700/60 flex items-center justify-center text-cyan-400/90">
                                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="font-mono text-sm text-zinc-200 truncate">{node.label}</p>
                                        <p className="font-mono text-[10px] text-zinc-600">node/{node.id}</p>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-cyan-500/40 ring-2 ring-cyan-500/20" />
                                </motion.div>

                                {!isLast && (
                                    <div className="flex justify-center py-1">
                                        <div className="w-px h-6 bg-gradient-to-b from-cyan-500/40 via-zinc-700 to-transparent relative overflow-hidden">
                                            {!reduceMotion && (
                                                <motion.span
                                                    className="absolute left-0 w-full h-2 bg-cyan-400/30 blur-[1px]"
                                                    animate={{ y: [-8, 32] }}
                                                    transition={{
                                                        duration: 2.5,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                        delay: index * 0.3,
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
            </motion.div>
        </div>
    );
}
