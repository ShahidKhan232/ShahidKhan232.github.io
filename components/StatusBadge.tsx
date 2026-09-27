'use client';

type StatusType = 'online' | 'active' | 'deployed' | 'verified' | 'idle' | 'warning';

type Props = {
    status?: StatusType;
    label?: string;
    prefix?: string;
    className?: string;
};

const STATUS_CONFIG: Record<StatusType, { dotColor: string; textColor: string; bgBorder: string; defaultLabel: string }> = {
    online: {
        dotColor: 'bg-emerald-400',
        textColor: 'text-emerald-400',
        bgBorder: 'bg-emerald-500/10 border-emerald-500/30',
        defaultLabel: 'ONLINE',
    },
    active: {
        dotColor: 'bg-cyan-400',
        textColor: 'text-cyan-400',
        bgBorder: 'bg-cyan-500/10 border-cyan-500/30',
        defaultLabel: 'ACTIVE',
    },
    deployed: {
        dotColor: 'bg-blue-400',
        textColor: 'text-blue-400',
        bgBorder: 'bg-blue-500/10 border-blue-500/30',
        defaultLabel: 'DEPLOYED',
    },
    verified: {
        dotColor: 'bg-emerald-400',
        textColor: 'text-emerald-300',
        bgBorder: 'bg-emerald-500/10 border-emerald-500/30',
        defaultLabel: 'VERIFIED',
    },
    idle: {
        dotColor: 'bg-zinc-500',
        textColor: 'text-zinc-400',
        bgBorder: 'bg-zinc-800/40 border-zinc-700/50',
        defaultLabel: 'IDLE',
    },
    warning: {
        dotColor: 'bg-amber-400',
        textColor: 'text-amber-300',
        bgBorder: 'bg-amber-500/10 border-amber-500/30',
        defaultLabel: 'PENDING',
    },
};

export default function StatusBadge({
    status = 'online',
    label,
    prefix,
    className = '',
}: Props) {
    const config = STATUS_CONFIG[status] || STATUS_CONFIG.online;
    const text = label || config.defaultLabel;

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-wider uppercase border ${config.bgBorder} ${config.textColor} ${className}`}
        >
            <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} animate-pulse-soft`} />
            {prefix && <span className="text-zinc-500 font-normal">{prefix}</span>}
            <span className="font-semibold">{text}</span>
        </span>
    );
}
