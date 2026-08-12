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
        <section id="contact" className="min-h-screen flex items-center justify-center py-16 section-cloud">
            <div className="section-grid opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-purple-950/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="terminal-badge mb-4">
                            <Send className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-mono text-sm font-medium">$ curl -X POST /api/contact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                            Get In Touch
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Modern Contact Info */}
                    <div className="space-y-6">
                        <Reveal delay={0.2}>
                            <div className="glass-card p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                                    {contact.cta.heading}
                                </h3>
                                <p className="text-gray-300 mb-6 text-lg font-light leading-relaxed">
                                    {contact.cta.body}
                                </p>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={contact.cta.resumeDriveLink || contact.cta.resumePath}
                                    {...(contact.cta.resumeDriveLink
                                        ? { target: '_blank', rel: 'noopener noreferrer' }
                                        : { download: true })}
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-semibold shadow-xl shadow-indigo-500/30 text-lg"
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
                                            className="flex items-center gap-4 p-4 bg-slate-900/40 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500 border border-indigo-500/20 hover:border-indigo-500/40"
                                        >
                                            <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30 backdrop-blur-sm">
                                                <Icon className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 font-mono mb-1">{info.label}</p>
                                                <p className="font-semibold text-gray-100">{info.value}</p>
                                            </div>
                                        </motion.a>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>

                    {/* Modern Contact Form */}
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
                                    className="w-full px-4 py-3 bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none text-gray-100 placeholder-gray-500 font-mono"
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
                                    className="w-full px-4 py-3 bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none text-gray-100 placeholder-gray-500 font-mono"
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
                                    className="w-full px-4 py-3 bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none text-gray-100 placeholder-gray-500 font-mono"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-indigo-500/30 font-mono"
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

                {/* Modern Footer */}
                <Reveal delay={0.6}>
                    <div className="mt-16 text-center text-gray-400 font-mono">
                        <p>{contact.footerText}</p>
                    </div>
                </Reveal>
            </div>

            {/* Modern background decorative elements */}
            <div className="absolute top-1/4 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
            <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
        </section>
    );
}
