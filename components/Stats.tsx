'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/lib/siteContent';
import Reveal from './Reveal';
import { Activity, Terminal } from 'lucide-react';

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 1500;
                    const steps = 60;
                    const increment = value / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Number(current.toFixed(value % 1 !== 0 ? 1 : 0)));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    const display = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono">
            {display}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-16 relative overflow-hidden section-cloud">
            <div className="section-grid opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
                            <Activity className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-mono text-sm font-medium">$ kubectl top metrics --all</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
                            Infrastructure at a Glance
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 0.1}>
                            <div className="group p-6 bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500 text-center">
                                <div className="flex justify-center mb-3">
                                    <Terminal className="w-5 h-5 text-indigo-400/60 group-hover:text-indigo-400 transition-colors" />
                                </div>
                                <AnimatedStat value={stat.value} suffix={stat.suffix} />
                                <p className="mt-2 text-sm text-gray-400 font-mono">{stat.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
