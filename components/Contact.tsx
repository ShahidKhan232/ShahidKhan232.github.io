'use client';

import { useState } from 'react';
import { contact } from '@/lib/siteContent';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // If no form endpoint, open mailto
        if (!contact.formEndpoint) {
            const mailtoLink = `mailto:${contact.contactInfo[0].value}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
            window.location.href = mailtoLink;
            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
            return;
        }

        // Otherwise submit to endpoint
        try {
            const response = await fetch(contact.formEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-800/80 rounded-lg border border-cyan-500/30">
                            <Send className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm">$ curl -X POST /api/contact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Get In Touch
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full" />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Reveal delay={0.2}>
                            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                                    {contact.cta.heading}
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    {contact.cta.body}
                                </p>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={contact.cta.resumeDriveLink || contact.cta.resumePath}
                                    {...(contact.cta.resumeDriveLink
                                        ? { target: '_blank', rel: 'noopener noreferrer' }
                                        : { download: true })}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-colors font-semibold shadow-lg shadow-cyan-500/30"
                                >
                                    Download Resume
                                </motion.a>
                            </div>
                        </Reveal>

                        <div className="space-y-4">
                            {contact.contactInfo.map((info, index) => {
                                const Icon = info.icon as any;
                                return (
                                    <Reveal key={index} delay={0.3 + index * 0.1}>
                                        <motion.a
                                            href={info.href}
                                            whileHover={{ x: 8 }}
                                            className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40"
                                        >
                                            <div className="p-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                                                <Icon className="w-6 h-6 text-cyan-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 font-mono">{info.label}</p>
                                                <p className="font-semibold text-gray-100">{info.value}</p>
                                            </div>
                                        </motion.a>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Reveal delay={0.4}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-gray-100 placeholder-gray-500 font-mono"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-gray-100 placeholder-gray-500 font-mono"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none resize-none text-gray-100 placeholder-gray-500 font-mono"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/30 font-mono"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    'Message Sent!'
                                ) : status === 'error' ? (
                                    'Error - Try Again'
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </Reveal>
                </div>

                {/* Footer */}
                <Reveal delay={0.6}>
                    <div className="mt-20 text-center text-gray-400 font-mono">
                        <p>{contact.footerText}</p>
                    </div>
                </Reveal>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-cyan-200 to-pink-200 dark:from-cyan-900/10 dark:to-pink-900/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
        </section>
    );
}
