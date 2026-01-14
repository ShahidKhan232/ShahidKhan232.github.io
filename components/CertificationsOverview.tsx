'use client';

import { certifications } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CertificationsOverview() {
    // Show only first 6 certifications
    const featuredCertifications = certifications.slice(0, 6);

    return (
        <section id="certifications" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-800/80 rounded-lg border border-cyan-500/30">
                            <Shield className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm">$ list --certifications</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Certifications
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full" />
                        <p className="mt-4 text-lg text-gray-400 font-mono">
                            <span className="text-cyan-400">&gt;</span> Continuous learning and professional development
                        </p>
                    </div>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredCertifications.map((cert, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                className="block bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group transform-3d"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-4xl">{cert.icon}</div>
                                    <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                                        <Award className="w-5 h-5 text-cyan-400" />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                                    {cert.name}
                                </h3>

                                <p className="text-sm text-gray-400 mb-4 font-mono">
                                    {cert.issuer}
                                </p>

                                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium font-mono">
                                    <span>View Certificate</span>
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.a>
                        </Reveal>
                    ))}
                </div>

                {/* View All Certifications Button */}
                <Reveal delay={0.4}>
                    <div className="mt-12 text-center">
                        <Link href="/portfolio?filter=certifications">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all shadow-2xl shadow-cyan-500/30 font-mono text-lg font-semibold"
                            >
                                <span>View All Certifications</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </div>
                </Reveal>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
        </section>
    );
}
