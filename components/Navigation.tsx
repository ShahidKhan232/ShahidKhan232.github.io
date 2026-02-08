'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/siteContent';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        // Only add scroll listener on client-side
        if (typeof window === 'undefined') return;
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Check which section is currently active
            const sections = navItems.filter(item => item.href.startsWith('#'));
            for (const item of sections) {
                const sectionId = item.href.substring(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(item.href);
                        break;
                    }
                }
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href.startsWith('#')) {
            return activeSection === href;
        }
        return pathname === href;
    };

    const handleNavClick = (href: string) => {
        if (href.startsWith('#')) {
            // Only scroll on client-side
            if (typeof window !== 'undefined') {
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-slate-950/95 shadow-2xl backdrop-blur-xl border-b border-indigo-500/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#home');
                        }}
                        className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all hover:scale-105 font-mono"
                    >
                        Shahid Khan
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className={`relative text-gray-300 hover:text-indigo-400 transition-colors font-medium group font-mono text-lg ${active ? 'text-indigo-400' : ''
                                        }`}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-indigo-500/30 transition-all hover:border-indigo-400/50 shadow-lg"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-indigo-400" />
                            ) : (
                                <Menu className="w-6 h-6 text-indigo-400" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-950/95 border-t border-indigo-500/20 backdrop-blur-xl shadow-2xl">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        handleNavClick(item.href);
                                    }}
                                    className={`block px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900/60 hover:text-indigo-400 transition-all font-medium font-mono text-base ${active ? 'bg-indigo-900/40 text-indigo-400 border-l-4 border-indigo-400' : ''
                                        }`}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
