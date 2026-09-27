import { footer } from '@/lib/siteContent';
import { Github, Linkedin, Download, ShieldCheck } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-control-border bg-[#060B12] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-control-border/60">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-obs-green" />
                            <p className="text-zinc-100 font-semibold font-mono text-sm tracking-wide">SHAHID.KHAN // CONTROL CENTER</p>
                        </div>
                        <p className="font-mono text-xs text-k8s-text mt-1">{footer.title}</p>
                        <p className="font-mono text-[11px] text-zinc-500 mt-2">{footer.tagline}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono w-full md:w-auto">
                        <a
                            href={footer.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 rounded-lg border border-control-border bg-control-surface text-zinc-300 hover:text-cyan-300 hover:border-k8s/40 transition-colors inline-flex items-center justify-center gap-2 min-h-[40px] flex-1 sm:flex-none"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-3.5 h-3.5 text-zinc-400" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href={footer.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 rounded-lg border border-control-border bg-control-surface text-zinc-300 hover:text-cyan-300 hover:border-k8s/40 transition-colors inline-flex items-center justify-center gap-2 min-h-[40px] flex-1 sm:flex-none"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={footer.links.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 rounded-lg border border-control-border bg-control-surface text-zinc-300 hover:text-cyan-300 hover:border-k8s/40 transition-colors inline-flex items-center justify-center gap-2 min-h-[40px] flex-1 sm:flex-none"
                        >
                            <Download className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Resume</span>
                        </a>
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-600">
                    <p>{footer.copyright}</p>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 text-zinc-500">
                            <ShieldCheck className="w-3 h-3 text-obs-green" />
                            <span>DEPLOYMENT: PRODUCTION (GITHUB PAGES)</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
