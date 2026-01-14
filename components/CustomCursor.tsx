'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor */}
            <div
                className="fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                }}
            >
                <div className="w-4 h-4 bg-white rounded-full" />
            </div>

            {/* Trailing cursor */}
            <div
                className="fixed pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 2 : 1.5})`,
                }}
            >
                <div className="w-8 h-8 border-2 border-white rounded-full opacity-50" />
            </div>
        </>
    );
}
