'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import { contact, hero } from '@/lib/siteContent';
import {
    Mail,
    Send,
    Loader2,
    CheckCircle2,
    AlertCircle,
    Download,
    Github,
    Linkedin,
    MapPin,
    Phone,
    ExternalLink
} from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const errors: Record<string, string> = {};
        if (!formData.name.trim()) errors.name = 'Full name is required';
        if (!formData.email.trim()) errors.email = 'Email address is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) errors.message = 'Please provide a message or inquiry';
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('loading');

        try {
            // Direct mailto client fallback if no backend endpoint is configured
            if (!contact.formEndpoint) {
                const subject = encodeURIComponent(
                    formData.subject || `DevOps Inquiry from ${formData.name}`
                );
                const body = encodeURIComponent(
                    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
                );
                window.location.href = `mailto:${contact.contactInfo[0].value}?subject=${subject}&body=${body}`;
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
                return;
            }

            const response = await fetch(contact.formEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <PageTransition className="bg-[#060B12]">
            <PageHeader
                number="05 / CONTACT"
                title="Let's Build Something Reliable."
                subtitle="Open to DevOps, Cloud, Infrastructure, and Platform Engineering opportunities."
                badge="Available Now"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Contact Channels & Location */}
                    <div className="lg:col-span-5 space-y-6">
                        <Reveal>
                            <h2 className="text-2xl font-bold text-zinc-100 mb-2">
                                Direct Contact Channels
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Reach out directly for full-time employment opportunities, platform consultations, or open-source infrastructure collaborations.
                            </p>
                        </Reveal>

                        <div className="space-y-3">
                            {/* Email */}
                            <Reveal delay={0.05}>
                                <a
                                    href="mailto:shahidkhan.95173@gmail.com"
                                    className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:border-cyan-500/40 transition-colors flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Email</p>
                                        <p className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
                                            shahidkhan.95173@gmail.com
                                        </p>
                                    </div>
                                </a>
                            </Reveal>

                            {/* LinkedIn */}
                            <Reveal delay={0.1}>
                                <a
                                    href="https://linkedin.com/in/shahid-khan-985919317"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:border-cyan-500/40 transition-colors flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">LinkedIn</p>
                                        <p className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                                            <span>linkedin.com/in/shahid-khan</span>
                                            <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400" />
                                        </p>
                                    </div>
                                </a>
                            </Reveal>

                            {/* GitHub */}
                            <Reveal delay={0.15}>
                                <a
                                    href="https://github.com/ShahidKhan232"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:border-cyan-500/40 transition-colors flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">GitHub</p>
                                        <p className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                                            <span>@ShahidKhan232</span>
                                            <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400" />
                                        </p>
                                    </div>
                                </a>
                            </Reveal>

                            {/* Location */}
                            <Reveal delay={0.2}>
                                <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Location</p>
                                        <p className="text-sm font-semibold text-zinc-200">Mumbai, Maharashtra, India</p>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Resume Action */}
                            <Reveal delay={0.25}>
                                <a
                                    href={hero.resumeDriveLink || hero.resumePath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary w-full inline-flex items-center justify-center gap-2 mt-2"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Resume (PDF)</span>
                                </a>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <Reveal delay={0.1}>
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                className="control-card rounded-2xl p-6 md:p-10 space-y-5"
                            >
                                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-100">Send a Message</h3>
                                        <p className="text-xs text-zinc-500 font-mono">Response typically within 24 hours</p>
                                    </div>
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                </div>

                                {/* Full Name */}
                                <div>
                                    <label htmlFor="contact-name" className="block font-mono text-xs text-zinc-400 mb-1.5">
                                        Your Name <span className="text-cyan-400">*</span>
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g. Sarah Connor"
                                        className={`input-field w-full min-h-[44px] text-base sm:text-xs ${fieldErrors.name ? 'border-red-500/80 focus:border-red-500' : ''}`}
                                        autoComplete="name"
                                    />
                                    {fieldErrors.name && (
                                        <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" />
                                            {fieldErrors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label htmlFor="contact-email" className="block font-mono text-xs text-zinc-400 mb-1.5">
                                        Email Address <span className="text-cyan-400">*</span>
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="e.g. sarah@company.com"
                                        className={`input-field w-full min-h-[44px] text-base sm:text-xs ${fieldErrors.email ? 'border-red-500/80 focus:border-red-500' : ''}`}
                                        autoComplete="email"
                                    />
                                    {fieldErrors.email && (
                                        <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" />
                                            {fieldErrors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="contact-subject" className="block font-mono text-xs text-zinc-400 mb-1.5">
                                        Subject / Role Focus (Optional)
                                    </label>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        placeholder="e.g. DevOps Engineer Opportunity / Infrastructure Project"
                                        className="input-field w-full min-h-[44px] text-base sm:text-xs"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="contact-message" className="block font-mono text-xs text-zinc-400 mb-1.5">
                                        Message <span className="text-cyan-400">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell me about your team, stack requirements, or project objectives..."
                                        className={`input-field w-full resize-none text-base sm:text-xs min-h-[120px] ${fieldErrors.message ? 'border-red-500/80 focus:border-red-500' : ''}`}
                                    />
                                    {fieldErrors.message && (
                                        <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" />
                                            {fieldErrors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Status Feedback */}
                                {status === 'success' && (
                                    <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-mono text-xs flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                        <span>Message prepared! Opening mail client to dispatch...</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 font-mono text-xs flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                                        <span>Error preparing message. Please write directly to shahidkhan.95173@gmail.com.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn-primary w-full inline-flex items-center justify-center gap-2 text-xs font-mono disabled:opacity-50 min-h-[48px]"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Sending Message…</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
