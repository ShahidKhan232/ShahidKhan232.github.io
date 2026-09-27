import Link from 'next/link';
import { Terminal, ArrowLeft, Layers } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-[#050608]">
            <div className="max-w-lg w-full text-center space-y-8">
                {/* 404 Status Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span>HTTP 404 / NOT FOUND</span>
                </div>

                {/* Big Title */}
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-zinc-50 tracking-tight">
                        Resource Not Found
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-zinc-400">
                        The requested cloud route or resource does not exist or has been relocated.
                    </p>
                </div>

                {/* DevOps Terminal Mock */}
                <div className="panel-glass rounded-2xl p-5 border border-zinc-800 bg-zinc-950/90 text-left font-mono text-xs shadow-2xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-zinc-600">
                        <div className="flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                            <span>cloud-cluster-v1</span>
                        </div>
                        <span className="text-[10px] text-zinc-500">bash</span>
                    </div>
                    <div className="space-y-1 text-zinc-300">
                        <p className="text-cyan-400">
                            $ kubectl get route <span className="text-amber-300">target-path</span> -n production
                        </p>
                        <p className="text-red-400">
                            Error from server (NotFound): route &quot;target-path&quot; not found in namespace &quot;production&quot;
                        </p>
                        <p className="text-zinc-500 pt-1">
                            $ # Ready for redirection
                        </p>
                    </div>
                </div>

                {/* Action Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Return Home</span>
                    </Link>

                    <Link
                        href="/projects"
                        className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono"
                    >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Browse Projects</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
