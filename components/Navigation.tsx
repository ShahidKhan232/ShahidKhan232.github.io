'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/siteContent';
import Link from 'next/link';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Check if it's a hash link (could be #section or /#section)
        const isHashLink = href.includes('#');

        if (isHashLink) {
            e.preventDefault();

            // Extract the hash part (e.g., #home from /#home or #home)
            const hash = href.includes('/#') ? href.split('/#')[1] : href.substring(1);
            const targetId = `#${hash}`;

            // Check if we're on the home page
            const isOnHomePage = window.location.pathname === '/';

            if (isOnHomePage) {
                // We're on the home page, just scroll to the section
                const element = document.querySelector(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                }
            } else {
                // We're on a different page, navigate to home page with hash
                window.location.href = `/${targetId}`;
            }
        } else {
            // For regular links, just close the mobile menu
            setIsOpen(false);
        }
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
                    <a
                        href="/#home"
                        onClick={(e) => scrollToSection(e, '/#home')}
                        className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all hover:scale-105 font-mono"
                    >
                        Shahid Khan
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isHashLink = item.href.startsWith('#');
                            const isActive = isHashLink && activeSection === item.href.substring(1);

                            if (isHashLink) {
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className={`relative text-gray-300 hover:text-cyan-400 transition-colors font-medium group font-mono ${isActive ? 'text-cyan-400' : ''
                                            }`}
                                    >
                                        {item.name}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                }`}
                                        />
                                    </a>
                                );
                            } else {
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="relative text-gray-300 hover:text-cyan-400 transition-colors font-medium group font-mono"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 w-0 group-hover:w-full" />
                                    </Link>
                                );
                            }
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
                            const isHashLink = item.href.startsWith('#');
                            const isActive = isHashLink && activeSection === item.href.substring(1);

                            if (isHashLink) {
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className={`block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors font-medium font-mono ${isActive ? 'bg-cyan-900/30 text-cyan-400 border-l-2 border-cyan-400' : ''
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                );
                            } else {
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors font-medium font-mono"
                                    >
                                        {item.name}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
