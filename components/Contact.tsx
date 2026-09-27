'use client';

import { useState } from 'react';
import { contact } from '@/lib/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { Send, Loader2, Download } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const errors: Record<string, string> = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) errors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Enter a valid email';
        if (!formData.message.trim()) errors.message = 'Message is required';
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('loading');

        if (!contact.formEndpoint) {
            const body = encodeURIComponent(
                `From: ${formData.name} (${formData.email})\n\n${formData.message}`
            );
            window.location.href = `mailto:shahidkhan.95173@gmail.com?subject=${encodeURIComponent(
                `Portfolio contact from ${formData.name}`
            )}&body=${body}`;
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
            return;
        }

        try {
            const response = await fetch(contact.formEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else setStatus('error');
        } catch {
            setStatus('error');
        }
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section id="contact" className="relative py-20 md:py-28 bg-[#07090d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    number="05 / CONTACT"
                    title={contact.headline}
                    subtitle={contact.subtext}
                />

                <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <Reveal delay={0.1}>
                        <div className="space-y-3">
                            {contact.contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <a
                                        key={info.label}
                                        href={info.href}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/20 hover:border-cyan-500/25 transition-colors"
                                    >
                                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                                            <Icon className="w-5 h-5 text-cyan-400/80" />
                                        </div>
                                        <div>
                                            <p className="font-mono text-[10px] text-zinc-500">{info.label}</p>
                                            <p className="text-sm text-zinc-200">{info.value}</p>
                                        </div>
                                    </a>
                                );
                            })}
                            <a
                                href={contact.resumeDriveLink || contact.resumePath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary w-full inline-flex items-center justify-center gap-2 mt-4"
                            >
                                <Download className="w-4 h-4" />
                                Resume
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="panel-glass rounded-2xl p-6 md:p-8 border border-zinc-800/80 space-y-5"
                        >
                            <div>
                                <label htmlFor="name" className="block font-mono text-xs text-zinc-500 mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="input-field"
                                    autoComplete="name"
                                />
                                {fieldErrors.name && (
                                    <p className="text-xs text-red-400 mt-1">{fieldErrors.name}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-mono text-xs text-zinc-500 mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="input-field"
                                    autoComplete="email"
                                />
                                {fieldErrors.email && (
                                    <p className="text-xs text-red-400 mt-1">{fieldErrors.email}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-mono text-xs text-zinc-500 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="input-field resize-none"
                                />
                                {fieldErrors.message && (
                                    <p className="text-xs text-red-400 mt-1">{fieldErrors.message}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending…
                                    </>
                                ) : status === 'success' ? (
                                    'Opening mail client…'
                                ) : status === 'error' ? (
                                    'Error — try again'
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
