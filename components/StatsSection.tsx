'use client';

import { stats } from '@/lib/siteContent';
import Reveal from './Reveal';
import { useEffect, useState, useRef } from 'react';
import { Activity, TrendingUp } from 'lucide-react';

export default function StatsSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-800 via-blue-950 to-slate-800 dark:from-gray-850 dark:via-blue-950 dark:to-gray-850 relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-800/80 rounded-lg border border-cyan-500/30">
                            <Activity className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm">$ system --status</span>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <StatCard key={index} stat={stat} delay={index * 0.1} />
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
        </section>
    );
}

interface StatCardProps {
    stat: {
        label: string;
        value: number;
        suffix: string;
    };
    delay: number;
}

function StatCard({ stat, delay }: StatCardProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
                setCount(stat.value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, stat.value]);

    return (
        <Reveal delay={delay}>
            <div
                ref={ref}
                className="text-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2"
            >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 font-mono">
                    {count}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium font-mono">
                    {stat.label}
                </div>
            </div>
        </Reveal>
    );
}
