import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import StatusBadge from '@/components/StatusBadge';
import {
    getAllProjectSlugs,
    getProjectRecordBySlug,
    getAllProjectRecords
} from '@/lib/projectData';
import {
    Github,
    ExternalLink,
    Star,
    GitFork,
    Calendar,
    ArrowRight,
    ArrowLeft,
    Layers,
    Terminal,
    Globe,
    CheckCircle2,
    Shield,
    Activity,
    Boxes,
    Server,
    Network
} from 'lucide-react';

type PageProps = {
    params: Promise<{ slug: string }>;
};

const LANGUAGE_COLORS: Record<string, string> = {
    HCL: '#FF9900',
    Python: '#38BDF8',
    TypeScript: '#326CE5',
    JavaScript: '#F59E0B',
    Dockerfile: '#0284C7',
    HTML: '#E34F26',
    CSS: '#A855F7',
    Dart: '#00B4AB',
    Shell: '#10B981',
};

export async function generateStaticParams() {
    return getAllProjectSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectRecordBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found | Shahid Khan',
            description: 'The requested workload could not be found.',
        };
    }

    return {
        title: `${project.title} | Shahid Khan`,
        description: project.description,
        openGraph: {
            title: `${project.title} | DevOps Case Study`,
            description: project.description,
            type: 'article',
            url: `https://shahidkhan232.github.io/projects/${slug}`,
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectRecordBySlug(slug);

    if (!project) {
        notFound();
    }

    const allProjects = getAllProjectRecords();
    const currentIndex = allProjects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

    const formattedDate = new Date(project.lastUpdated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    const isKubernetesProject =
        project.categories.includes('Kubernetes') ||
        project.technologies.some((t) => t.toLowerCase().includes('kubernetes') || t.toLowerCase().includes('k8s'));

    const isTerraformProject =
        project.categories.includes('Terraform') ||
        project.technologies.some((t) => t.toLowerCase().includes('terraform') || t === 'HCL');

    const langColor = project.language
        ? LANGUAGE_COLORS[project.language] || '#38BDF8'
        : '#71717a';

    return (
        <PageTransition className="bg-[#060B12]">
            <div className="pt-24 pb-20 md:pt-28 md:pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Breadcrumbs */}
                <div className="border-b border-[#1E2C3F] pb-3">
                    <Breadcrumb
                        items={[
                            { label: 'Projects', href: '/projects' },
                            { label: project.title },
                        ]}
                    />
                </div>

                {/* Case Study Runbook Header */}
                <div className="space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <StatusBadge status="verified" label={project.category.toUpperCase()} prefix="TYPE:" />
                            <span className="font-mono text-xs text-zinc-500">
                                repo: {project.repoName}
                            </span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase">
                            RUNBOOK_SPEC.v1
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-50 font-mono tracking-tight leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-sans max-w-3xl">
                        {project.subtitle || project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((t) => (
                            <span
                                key={t}
                                className="px-2.5 py-1 text-xs font-mono rounded bg-[#0A111C] border border-[#1E2C3F] text-zinc-200"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Telemetry Bar */}
                    <div className="p-4 rounded-xl bg-[#0A111C] border border-[#1E2C3F] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
                        <div className="flex items-center gap-5 flex-wrap">
                            {project.language && (
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor }} />
                                    <span>{project.language}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-1.5">
                                <Star className="w-3.5 h-3.5 text-amber-400" />
                                <span>{project.stars} stars</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                                <span>{project.forks} forks</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-zinc-500">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Updated {formattedDate}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                            {project.liveDemoUrl && (
                                <a
                                    href={project.liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-ghost inline-flex items-center justify-center gap-1.5 text-xs min-h-[42px]"
                                >
                                    <Globe className="w-3.5 h-3.5" />
                                    <span>LIVE DEMO</span>
                                    <ExternalLink className="w-3 h-3 opacity-60" />
                                </a>
                            )}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center justify-center gap-2 text-xs min-h-[42px]"
                            >
                                <Github className="w-3.5 h-3.5" />
                                <span>VIEW REPOSITORY →</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Screenshot Frame if available */}
                {project.image && (
                    <Reveal>
                        <div className="rounded-xl border border-[#1E2C3F] overflow-hidden bg-[#0A111C] shadow-2xl">
                            <div className="px-4 py-2 border-b border-[#1E2C3F] bg-[#0D1624] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                                <span>ARCHITECTURE_SCREENSHOT</span>
                                <span>PNG_VIEWPORT</span>
                            </div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={`${project.title} screenshot / diagram`}
                                className="w-full h-auto max-h-[480px] object-cover"
                            />
                        </div>
                    </Reveal>
                )}

                {/* Architecture Pipeline Visualization */}
                {project.architectureFlow && project.architectureFlow.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Layers className="w-4 h-4 text-[#38BDF8]" />
                                <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold">
                                    PIPELINE &amp; ARCHITECTURE FLOW
                                </h2>
                            </div>
                            <span className="font-mono text-[10px] text-zinc-500">LIVE_SEQUENCE</span>
                        </div>

                        <div className="p-4 sm:p-6 md:p-8 rounded-xl border border-[#1E2C3F] bg-[#0A111C]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {project.architectureFlow.map((step, idx) => (
                                    <div
                                        key={step}
                                        className="p-3.5 sm:p-4 rounded-lg border border-[#1E2C3F] bg-[#060B12] hover:border-[#38BDF8]/40 transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-mono text-[10px] text-[#38BDF8] font-bold">
                                                STAGE {String(idx + 1).padStart(2, '0')}
                                            </span>
                                            {idx < project.architectureFlow!.length - 1 && (
                                                <span className="text-zinc-600 font-mono text-xs hidden lg:inline">
                                                    ↓
                                                </span>
                                            )}
                                        </div>
                                        <p className="font-mono text-xs text-zinc-100 font-medium">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {project.architecture && (
                                <div className="mt-6 pt-6 border-t border-[#1E2C3F]">
                                    <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
                                        Architectural Rationale
                                    </h3>
                                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                                        {project.architecture}
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Kubernetes Specific Topology Visual (if relevant) */}
                {isKubernetesProject && (
                    <section className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Boxes className="w-4 h-4 text-[#326CE5]" />
                            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold">
                                KUBERNETES WORKLOAD TOPOLOGY
                            </h2>
                        </div>

                        <div className="p-4 sm:p-6 rounded-xl border border-[#1E2C3F] bg-[#0A111C] font-mono text-xs space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#1E2C3F] text-zinc-500 text-[10px] gap-1">
                                <span>CLUSTER: AWS EKS / MANAGED NODE GROUP</span>
                                <span>NAMESPACE: PRODUCTION</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                <div className="p-3 rounded-lg border border-[#1E2C3F] bg-[#060B12]">
                                    <span className="text-[10px] text-[#38BDF8] uppercase font-bold block mb-1">Ingress</span>
                                    <p className="text-zinc-200">NGINX Ingress Controller</p>
                                    <span className="text-[10px] text-zinc-500 mt-1 block">TLS via cert-manager</span>
                                </div>
                                <div className="p-3 rounded-lg border border-[#1E2C3F] bg-[#060B12]">
                                    <span className="text-[10px] text-[#326CE5] uppercase font-bold block mb-1">Services</span>
                                    <p className="text-zinc-200">ClusterIP / App Service</p>
                                    <span className="text-[10px] text-zinc-500 mt-1 block">Port 80/443 mapping</span>
                                </div>
                                <div className="p-3 rounded-lg border border-[#1E2C3F] bg-[#060B12]">
                                    <span className="text-[10px] text-emerald-400 uppercase font-bold block mb-1">Pods &amp; Nodes</span>
                                    <p className="text-zinc-200">Auto-Healing Replicas</p>
                                    <span className="text-[10px] text-zinc-500 mt-1 block">Liveness / Readiness Probes</span>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Terraform IaC Specific Graph (if relevant) */}
                {isTerraformProject && (
                    <section className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Network className="w-4 h-4 text-[#A855F7]" />
                            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold">
                                TERRAFORM STATE DEPENDENCY GRAPH
                            </h2>
                        </div>

                        <div className="p-4 sm:p-6 rounded-xl border border-[#1E2C3F] bg-[#0A111C] font-mono text-xs space-y-3 overflow-x-auto">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#1E2C3F] text-zinc-500 text-[10px] gap-1">
                                <span>BACKEND: S3 ENCRYPTED STATE</span>
                                <span>LOCKING: DYNAMODB TABLE</span>
                            </div>
                            <div className="space-y-2 pt-2 text-zinc-300 whitespace-nowrap sm:whitespace-normal">
                                <p className="text-[#38BDF8]">
                                    module.vpc.aws_vpc.main
                                </p>
                                <p className="pl-4 text-zinc-400">
                                    ├── module.vpc.aws_subnet.public[*] → aws_internet_gateway
                                </p>
                                <p className="pl-4 text-zinc-400">
                                    └── module.vpc.aws_subnet.private[*] → aws_nat_gateway
                                </p>
                                <p className="pl-8 text-emerald-400">
                                    └── module.compute.aws_instance / aws_eks_node_group
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* DevOps Workflow Stages */}
                {project.workflowStages && project.workflowStages.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[#10B981]" />
                            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold">
                                CI / CD PIPELINE STAGES
                            </h2>
                        </div>

                        <div className="p-6 md:p-8 rounded-xl border border-[#1E2C3F] bg-[#0A111C] space-y-3">
                            {project.workflowStages.map((stg, i) => (
                                <div
                                    key={stg.stage}
                                    className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-3.5 rounded-lg bg-[#060B12] border border-[#1E2C3F]"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-md bg-[#101A28] border border-[#1E2C3F] font-mono text-[11px] text-[#38BDF8] flex items-center justify-center flex-shrink-0 font-bold">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <span className="font-mono text-xs font-bold text-zinc-100">
                                                {stg.stage}
                                            </span>
                                            <span className="ml-2 font-mono text-[11px] text-[#FF9900]">
                                                [{stg.tool}]
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-zinc-400 sm:max-w-md leading-relaxed sm:text-right font-sans">
                                        {stg.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Implementation & Engineering Challenges */}
                <div className="grid md:grid-cols-2 gap-6">
                    {project.implementation && (
                        <div className="p-6 rounded-xl border border-[#1E2C3F] bg-[#0A111C] space-y-3">
                            <div className="flex items-center gap-2 text-[#38BDF8] font-mono text-xs uppercase tracking-widest font-bold">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>IMPLEMENTATION ANALYSIS</span>
                            </div>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                                {project.implementation}
                            </p>
                        </div>
                    )}

                    {project.challenges && (
                        <div className="p-6 rounded-xl border border-[#1E2C3F] bg-[#0A111C] space-y-3">
                            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                                <Shield className="w-4 h-4" />
                                <span>CHALLENGES &amp; SOLUTIONS</span>
                            </div>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                                {project.challenges}
                            </p>
                        </div>
                    )}
                </div>

                {/* Outcome & Impact */}
                {project.outcome && (
                    <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-2">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                            DELIVERED ENGINEERING OUTCOME
                        </h3>
                        <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                            {project.outcome}
                        </p>
                    </div>
                )}

                {/* Large Bottom CTA */}
                <div className="p-8 rounded-2xl border border-[#1E2C3F] bg-[#0A111C] flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-zinc-100 font-mono">
                            Inspect Repository Source Code
                        </h3>
                        <p className="text-xs font-mono text-zinc-400 mt-1">
                            Review full configuration manifests, Terraform scripts, and pipeline definitions.
                        </p>
                    </div>

                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 text-xs py-2.5"
                    >
                        <Github className="w-4 h-4" />
                        <span>VIEW REPOSITORY →</span>
                    </a>
                </div>

                {/* Navigation Previous / Next Workload */}
                <div className="pt-6 border-t border-[#1E2C3F] flex items-center justify-between font-mono text-xs">
                    {prevProject ? (
                        <Link
                            href={`/projects/${prevProject.slug}`}
                            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#38BDF8] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">PREVIOUS:</span>
                            <span className="truncate max-w-[180px] sm:max-w-xs">{prevProject.title}</span>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextProject && (
                        <Link
                            href={`/projects/${nextProject.slug}`}
                            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#38BDF8] transition-colors ml-auto"
                        >
                            <span className="hidden sm:inline">NEXT:</span>
                            <span className="truncate max-w-[180px] sm:max-w-xs">{nextProject.title}</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>
        </PageTransition>
    );
}
