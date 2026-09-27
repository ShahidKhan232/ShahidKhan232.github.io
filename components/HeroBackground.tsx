'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || reduceMotion) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let frame: number;
        // Subtle infrastructure node vertices
        const nodes: { x: number; y: number; vx: number; vy: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            nodes.length = 0;
            // Small number of calm nodes
            const count = Math.min(24, Math.floor((canvas.width * canvas.height) / 50000));
            for (let i = 0; i < count; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.1,
                    vy: (Math.random() - 0.5) * 0.1,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodes.forEach((n, i) => {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

                // Subtle node dot
                ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
                ctx.beginPath();
                ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
                ctx.fill();

                // Faint connection lines between nearby vertices
                for (let j = i + 1; j < nodes.length; j++) {
                    const o = nodes[j];
                    const dx = n.x - o.x;
                    const dy = n.y - o.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 130) {
                        ctx.strokeStyle = `rgba(30, 44, 63, ${0.4 * (1 - d / 130)})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(n.x, n.y);
                        ctx.lineTo(o.x, o.y);
                        ctx.stroke();
                    }
                }
            });

            frame = requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', resize);
        };
    }, [reduceMotion]);

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
            {/* Technical Cloud Grid */}
            <div className="hero-grid absolute inset-0" />

            {/* Subtle Deep Navy Ambient Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(14,165,233,0.06),transparent)]" />

            {/* Vertices Canvas */}
            {!reduceMotion && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 opacity-60"
                />
            )}
        </div>
    );
}
