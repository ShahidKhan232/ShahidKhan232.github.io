'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CloudNode {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    type: 'server' | 'container' | 'cloud' | 'database';
    opacity: number;
}

export default function CloudBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create nodes
        const nodes: CloudNode[] = [];
        const nodeCount = 20;
        const types: CloudNode['type'][] = ['server', 'container', 'cloud', 'database'];

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 15 + 10,
                type: types[Math.floor(Math.random() * types.length)],
                opacity: Math.random() * 0.3 + 0.1,
            });
        }

        // Draw node
        const drawNode = (node: CloudNode) => {
            ctx.save();
            ctx.globalAlpha = node.opacity;
            ctx.fillStyle = getNodeColor(node.type);
            ctx.strokeStyle = getNodeColor(node.type);
            ctx.lineWidth = 2;

            switch (node.type) {
                case 'server':
                    // Draw server rack
                    ctx.fillRect(node.x - node.size / 2, node.y - node.size / 2, node.size, node.size);
                    ctx.strokeRect(node.x - node.size / 2, node.y - node.size / 2, node.size, node.size);
                    break;
                case 'container':
                    // Draw container (hexagon)
                    drawHexagon(ctx, node.x, node.y, node.size / 2);
                    break;
                case 'cloud':
                    // Draw cloud
                    drawCloud(ctx, node.x, node.y, node.size);
                    break;
                case 'database':
                    // Draw database (cylinder)
                    drawDatabase(ctx, node.x, node.y, node.size);
                    break;
            }
            ctx.restore();
        };

        const getNodeColor = (type: CloudNode['type']) => {
            switch (type) {
                case 'server': return '#06b6d4'; // cyan
                case 'container': return '#8b5cf6'; // purple
                case 'cloud': return '#3b82f6'; // blue
                case 'database': return '#10b981'; // green
                default: return '#06b6d4';
            }
        };

        const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const px = x + size * Math.cos(angle);
                const py = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        };

        const drawCloud = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
            ctx.beginPath();
            ctx.arc(x - size / 3, y, size / 3, 0, Math.PI * 2);
            ctx.arc(x, y - size / 4, size / 2.5, 0, Math.PI * 2);
            ctx.arc(x + size / 3, y, size / 3, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawDatabase = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
            const width = size;
            const height = size * 1.2;
            const ellipseHeight = size / 4;

            ctx.beginPath();
            ctx.ellipse(x, y - height / 2, width / 2, ellipseHeight, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillRect(x - width / 2, y - height / 2, width, height);
            ctx.strokeRect(x - width / 2, y - height / 2, width, height);

            ctx.beginPath();
            ctx.ellipse(x, y + height / 2, width / 2, ellipseHeight, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        };

        // Draw connections
        const drawConnections = () => {
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
            ctx.lineWidth = 1;

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        ctx.globalAlpha = (1 - distance / 200) * 0.2;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
            ctx.globalAlpha = 1;
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw nodes
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                drawNode(node);
            });

            drawConnections();

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }}
        />
    );
}
