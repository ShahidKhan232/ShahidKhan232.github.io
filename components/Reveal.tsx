'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useReducedMotion } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const controls = useAnimation();
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
