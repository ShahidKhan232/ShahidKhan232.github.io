'use client';

import { useState } from 'react';
import { terminalScript } from '@/lib/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { Terminal, Check, Copy, Play, RotateCcw } from 'lucide-react';

export default function TerminalSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [copied, setCopied] = useState(false);

    const activeItem = terminalScript[activeIndex];

    const copyCommand = () => {
        navigator.clipboard.writeText(`${activeItem.prompt}\n${activeItem.output}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative py-20 bg-control-surface/40 border-y border-control-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    number="04.5 / RUNBOOK TERMINAL"
                    title="DevOps Bastion Console"
                    subtitle="Sample CLI workflows demonstrating daily engineering commands across AWS, Kubernetes, Terraform, Docker, and Git."
                />

                <Reveal>
                    {/* Command Selector Tabs - Horizontal swipeable on mobile */}
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none">
                        {terminalScript.map((cmd, idx) => (
                            <button
                                key={cmd.prompt}
                                onClick={() => setActiveIndex(idx)}
                                className={`px-3 py-2 rounded-lg text-xs font-mono transition-all border whitespace-nowrap flex-shrink-0 min-h-[38px] ${
                                    activeIndex === idx
                                        ? 'bg-control-card border-k8s/60 text-k8s-text font-semibold shadow-sm'
                                        : 'bg-control-surface border-control-border text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                                }`}
                            >
                                <span className="text-zinc-500 mr-1.5">$</span>
                                {cmd.prompt.replace('$ ', '').split(' ')[0]} {cmd.prompt.replace('$ ', '').split(' ')[1] || ''}
                            </button>
                        ))}
                    </div>

                    {/* Console Window */}
                    <div
                        className="rounded-2xl border border-control-border bg-[#070D18] overflow-hidden font-mono text-sm shadow-2xl"
                        aria-label="DevOps Bastion Terminal"
                    >
                        {/* Terminal Header Bar */}
                        <div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-control-border bg-control-surface/90">
                            <div className="flex items-center gap-2 min-w-0">
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-obs-red/70 border border-obs-red/40 inline-block" />
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-obs-amber/70 border border-obs-amber/40 inline-block" />
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-obs-green/70 border border-obs-green/40 inline-block" />
                                </div>
                                <div className="ml-2 flex items-center gap-1.5 text-xs text-zinc-400 min-w-0">
                                    <Terminal className="w-3.5 h-3.5 text-k8s flex-shrink-0" />
                                    <span className="hidden sm:inline truncate">bastion-01.internal.shahidkhan.cloud (prod-west-2)</span>
                                    <span className="sm:hidden truncate text-[11px]">bastion-01:~/infra</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] uppercase font-mono bg-obs-green/10 text-obs-green border border-obs-green/20">
                                    SSH: CONNECTED
                                </span>
                                <button
                                    onClick={copyCommand}
                                    className="p-1.5 rounded text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center"
                                    title="Copy command and output"
                                    aria-label="Copy terminal text"
                                >
                                    {copied ? <Check className="w-3.5 h-3.5 text-obs-green" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-4 sm:p-5 md:p-6 text-zinc-300 min-h-[200px] overflow-x-auto">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-control-border/60 text-xs flex-wrap">
                                <span className="text-obs-green font-semibold">shahid@workstation</span>
                                <span className="text-zinc-600">:</span>
                                <span className="text-k8s">~/infrastructure</span>
                                <span className="text-zinc-500">(main)</span>
                            </div>

                            <div className="space-y-3">
                                <p className="text-cyan-300 font-semibold text-xs sm:text-sm flex items-center gap-2">
                                    <span className="text-k8s select-none">➜</span>
                                    <span className="break-all sm:break-normal">{activeItem.prompt}</span>
                                </p>
                                <pre className="text-zinc-300 text-[11px] sm:text-xs md:text-sm leading-relaxed whitespace-pre font-mono bg-control-base/60 p-3 sm:p-4 rounded-xl border border-control-border/80 overflow-x-auto">
                                    {activeItem.output}
                                </pre>
                            </div>

                            <div className="mt-4 pt-3 border-t border-control-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-[11px] text-zinc-500">
                                <span>[Runbook Reference — Sample DevOps Workflows]</span>
                                <button
                                    onClick={() => setActiveIndex((activeIndex + 1) % terminalScript.length)}
                                    className="inline-flex items-center gap-1.5 text-k8s hover:text-k8s-text transition-colors py-1 font-semibold"
                                >
                                    <Play className="w-3 h-3" />
                                    <span>Next Command ({activeIndex + 1}/{terminalScript.length})</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

