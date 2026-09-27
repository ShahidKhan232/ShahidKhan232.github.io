'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Download } from 'lucide-react';
import { hero } from '@/lib/siteContent';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StatusBadge from './StatusBadge';

export const routes = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'EXPERIENCE', href: '/experience' },
    { name: 'CONTACT', href: '/contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    const isRouteActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#060B12]/95 backdrop-blur-xl border-b border-[#1E2C3F] shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-[#060B12]/80 backdrop-blur-md border-b border-[#1E2C3F]/60'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
                <div className="flex justify-between items-center h-16">
                    {/* Console Header / Brand */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="group inline-flex items-center gap-2 font-mono text-sm font-bold text-zinc-100 hover:text-[#38BDF8] transition-colors py-2"
                        >
                            <span className="w-2 h-2 rounded-sm bg-[#38BDF8] group-hover:rotate-45 transition-transform" />
                            <span>SHAHID.KHAN</span>
                        </Link>

                        <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#1E2C3F]">
                            <StatusBadge status="online" prefix="PORTFOLIO:" label="ONLINE" />
                        </div>
                    </div>

                    {/* Desktop Console Navigation Links */}
                    <div className="hidden lg:flex items-center gap-1 bg-[#0A111C] p-1 rounded-lg border border-[#1E2C3F]">
                        {routes.map((item) => {
                            const active = isRouteActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all tracking-wider ${
                                        active
                                            ? 'text-cyan-300 bg-[#101A28] border border-[#38BDF8]/40 shadow-[0_0_8px_rgba(56,189,248,0.15)] font-semibold'
                                            : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#101A28]/50 border border-transparent'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Console Right Actions */}
                    <div className="hidden lg:flex items-center gap-2">
                        <a
                            href={hero.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost inline-flex items-center gap-1.5 min-h-[36px]"
                            aria-label="GitHub profile"
                        >
                            <Github className="w-3.5 h-3.5" />
                            <span>GITHUB</span>
                        </a>
                        <a
                            href={hero.resumeDriveLink || hero.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-1.5 min-h-[36px]"
                        >
                            <Download className="w-3.5 h-3.5" />
                            <span>RESUME</span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 rounded-lg border border-[#1E2C3F] bg-[#0A111C] text-zinc-300 hover:text-cyan-400 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#060B12]/98 backdrop-blur-2xl border-t border-[#1E2C3F] z-40 overflow-y-auto overscroll-contain flex flex-col justify-between"
                    style={{ maxHeight: 'calc(100dvh - 4rem)' }}
                >
                    <div className="px-4 py-6 space-y-2 max-w-md mx-auto w-full">
                        <div className="pb-3 mb-3 border-b border-[#1E2C3F] flex items-center justify-between">
                            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">CONTROL_PLANE_NAV</span>
                            <StatusBadge status="online" prefix="STATUS:" label="ONLINE" />
                        </div>

                        <div className="space-y-1">
                            {routes.map((item) => {
                                const active = isRouteActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-mono text-xs tracking-wider transition-all min-h-[44px] ${
                                            active
                                                ? 'bg-[#101A28] text-cyan-300 border border-[#38BDF8]/40 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.12)]'
                                                : 'text-zinc-300 hover:bg-[#0A111C] active:bg-[#101A28] border border-transparent'
                                        }`}
                                    >
                                        <span>{item.name}</span>
                                        {active && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="pt-6 flex flex-col gap-2.5 border-t border-[#1E2C3F] mt-4">
                            <a
                                href={hero.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-center py-3 min-h-[44px] inline-flex items-center justify-center gap-2 text-xs"
                            >
                                <Github className="w-4 h-4" />
                                <span>GITHUB PROFILE</span>
                            </a>
                            <a
                                href={hero.resumeDriveLink || hero.resumePath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-center py-3 min-h-[44px] inline-flex items-center justify-center gap-2 text-xs"
                            >
                                <Download className="w-4 h-4" />
                                <span>DOWNLOAD RESUME (PDF)</span>
                            </a>
                        </div>
                    </div>

                    <div className="p-4 border-t border-[#1E2C3F]/40 text-center font-mono text-[10px] text-zinc-600">
                        <span>SHAHID.KHAN // CLOUD CONTROL PLANE</span>
                    </div>
                </div>
            )}
        </header>
    );
}
