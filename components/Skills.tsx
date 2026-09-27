'use client';

import { useMemo, useState } from 'react';
import { devOpsStack, skillCategories } from '@/lib/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { AnimatePresence, motion } from 'framer-motion';

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [hovered, setHovered] = useState<string | null>(null);

    const filtered = useMemo(() => {
        if (activeCategory === 'All') return devOpsStack;
        return devOpsStack.filter((s) => s.category === activeCategory);
    }, [activeCategory]);

    const activeSkill = devOpsStack.find((s) => s.name === hovered);

    return (
        <section id="skills" className="relative py-20 md:py-28 bg-[#050608]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    number="02 / SKILLS"
                    title="DevOps Stack"
                    subtitle="Interactive map of tools I use — hover a technology for context."
                />

                <Reveal delay={0.05}>
                    <div className="flex flex-wrap gap-2 mb-10 justify-center">
                        {skillCategories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCategory(cat)}
                                className={`px-3 py-1.5 rounded-lg font-mono text-xs border transition-colors ${
                                    activeCategory === cat
                                        ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300'
                                        : 'border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
                    <motion.div
                        layout
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((skill) => (
                                <motion.button
                                    key={skill.name}
                                    type="button"
                                    layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.2 }}
                                    onMouseEnter={() => setHovered(skill.name)}
                                    onFocus={() => setHovered(skill.name)}
                                    onMouseLeave={() => setHovered(null)}
                                    onBlur={() => setHovered(null)}
                                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                                        hovered === skill.name
                                            ? 'border-cyan-500/40 bg-cyan-500/5 -translate-y-0.5'
                                            : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700'
                                    }`}
                                >
                                    <p className="font-medium text-zinc-100 text-sm">{skill.name}</p>
                                    <p className="font-mono text-[10px] text-zinc-600 mt-1 truncate">
                                        {skill.category}
                                    </p>
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <Reveal delay={0.1} className="hidden lg:block sticky top-24">
                        <div className="panel-glass rounded-xl p-5 border border-zinc-800/80 min-h-[140px]">
                            {activeSkill ? (
                                <>
                                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                                        Tooltip
                                    </p>
                                    <p className="text-lg font-medium text-zinc-100 mt-2">{activeSkill.name}</p>
                                    <p className="font-mono text-xs text-cyan-400/80 mt-1">{activeSkill.category}</p>
                                    <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{activeSkill.usage}</p>
                                </>
                            ) : (
                                <p className="text-sm text-zinc-500">Hover a technology to see how I use it.</p>
                            )}
                        </div>
                    </Reveal>
                </div>

                {activeSkill && (
                    <div className="lg:hidden mt-6 panel-glass rounded-xl p-4 border border-zinc-800/80">
                        <p className="font-medium text-zinc-100">{activeSkill.name}</p>
                        <p className="font-mono text-xs text-cyan-400/80">{activeSkill.category}</p>
                        <p className="text-sm text-zinc-400 mt-2">{activeSkill.usage}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
