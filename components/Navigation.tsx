'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/siteContent';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname === href;
    };

    return (
        <nav
            className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled
                ? 'bg-slate-900/90 shadow-lg backdrop-blur-md border-b border-cyan-500/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        href="/"
                        className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all hover:scale-105 font-mono"
                    >
                        Shahid Khan
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative text-gray-300 hover:text-cyan-400 transition-colors font-medium group font-mono ${active ? 'text-cyan-400' : ''
                                        }`}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-slate-800 border border-cyan-500/30 transition-colors hover:border-cyan-400/50"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-cyan-400" />
                            ) : (
                                <Menu className="w-6 h-6 text-cyan-400" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900/95 border-t border-cyan-500/20 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors font-medium font-mono ${active ? 'bg-cyan-900/30 text-cyan-400 border-l-2 border-cyan-400' : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
