'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[45] h-0.5 bg-zinc-900/90 pointer-events-none">
            <div
                className="h-full bg-cyan-500/80 transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}
