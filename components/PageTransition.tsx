'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function PageTransition({ children, className = '' }: Props) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
