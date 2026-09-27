import type { GitHubRepo, GitHubUser, EnrichedRepo, FilterCategory } from './types';

const GITHUB_USERNAME = 'ShahidKhan232';
const CACHE_KEY_REPOS = 'gh_repos_cache';
const CACHE_KEY_USER = 'gh_user_cache';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

// ─── Excluded repos (not relevant to portfolio) ────────────────────
const EXCLUDED_REPOS = new Set([
    'ShahidKhan232',           // profile readme
    'ShahidKhan232.github.io', // this portfolio itself
]);

// ─── Repo name → display name mapping ──────────────────────────────
const DISPLAY_NAMES: Record<string, string> = {
    'Cloud-Projects': 'Cloud Projects Collection',
    'Netflix-clone-k8s-end-to-end': 'Netflix Clone — K8s End-to-End',
    'Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-': 'Wisecow App — Kubernetes Deployment',
    'Multi-Env-IaC': 'Multi-Environment Infrastructure as Code',
    'CI-CD-Ansible': 'CI/CD with Ansible & Jenkins',
    'AlertOps-Automated-Incident-Response-System': 'AlertOps — Automated Incident Response',
    'Docker-Project': 'Docker Multi-Container Project',
    'Full-stack-cicd-pipeline': 'Full-Stack CI/CD Pipeline',
    'AWS-codepipeline': 'AWS CodePipeline Deployment',
    'Devops-Project': 'DevOps Infrastructure Project',
    'Kubernetes-Troubleshooting': 'Kubernetes Troubleshooting Guide',
    'Kodekloud_Engineer_solution': 'KodeKloud Engineer Solutions',
    'Scripts': 'Automation Scripts',
    'KisanSaathi': 'KisanSaathi — Agricultural Platform',
    'Smart-File-Upload-System': 'Smart File Upload System',
    'FreshMart': 'FreshMart — E-Commerce Platform',
    'Phoenix-College': 'Phoenix College Website',
    'Credit_Approval_System': 'Credit Approval System',
    'FingerPrint-Matcher': 'Fingerprint Matcher',
    'Real-Time-Twitter-Sentiment-Analysis': 'Real-Time Twitter Sentiment Analysis',
    'Atttendence-Notifier': 'Attendance Notifier',
    'Tours-and-Travels-website': 'Tours & Travels Website',
    'SheildMe': 'ShieldMe — Safety App',
    'codebits_3.0': 'CodeBits 3.0 — Hackathon Project',
    'devops-cheatsheet': 'DevOps Cheatsheet',
    'ultimate-linux-guide': 'Ultimate Linux Guide',
};

// ─── Enriched descriptions from README content ─────────────────────
const ENRICHED_DESCRIPTIONS: Record<string, string> = {
    'Cloud-Projects': 'Comprehensive collection of AWS infrastructure projects: cost reporting, WordPress on EC2, S3 static hosting with CloudFront, image recognition with Rekognition, serverless image processing, EBS snapshot cost optimization, and three-tier HA architecture.',
    'Netflix-clone-k8s-end-to-end': 'Production-ready Netflix clone with React/TypeScript frontend deployed on Kubernetes with Jenkins CI/CD, Docker containerization, Terraform IaC, and Prometheus/Grafana monitoring. Includes DevSecOps security scanning with Trivy and SonarQube.',
    'Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-': 'Containerized application deployed on AWS EKS with Terraform-provisioned infrastructure, NGINX Ingress, TLS via cert-manager, and GitHub Actions CI/CD pipeline.',
    'Multi-Env-IaC': 'Reusable Terraform modules for dev, staging, and production environments with AWS S3/DynamoDB remote state and Ansible configuration management.',
    'CI-CD-Ansible': 'Ansible playbooks automating Nginx and MongoDB cluster configuration with Jenkins CI/CD integration. Multi-AZ infrastructure with Ansible Master, Nginx reverse proxies, and MongoDB replica set.',
    'AlertOps-Automated-Incident-Response-System': 'Complete monitoring solution using Prometheus, Grafana, Alertmanager, and Windows Exporter. Flask web app with custom metrics, SMS alerts via Twilio, and Docker Compose deployment.',
    'Docker-Project': 'Multi-container Docker project demonstrating containerization best practices, Docker Compose orchestration, and container networking.',
    'Full-stack-cicd-pipeline': 'End-to-end CI/CD pipeline for a full-stack application using Docker, automated builds, tests, and deployments.',
    'AWS-codepipeline': 'AWS CodePipeline implementation for automated deployment workflows using native AWS CI/CD services.',
    'Devops-Project': 'DevOps infrastructure project with Terraform IaC for AWS resource provisioning and deployment automation.',
    'Kubernetes-Troubleshooting': 'Collection of Kubernetes troubleshooting guides, common issues, and resolution strategies for cluster management.',
    'Kodekloud_Engineer_solution': 'Solutions to KodeKloud Engineer tasks covering Linux, Docker, Kubernetes, Ansible, and other DevOps tools.',
    'Scripts': 'Collection of Python automation scripts for system administration and DevOps tasks.',
    'KisanSaathi': 'Agricultural platform built with TypeScript/Next.js to connect farmers with resources and market information.',
    'Smart-File-Upload-System': 'Intelligent file upload system with drag-and-drop, file validation, and cloud storage integration. Deployed on Vercel.',
    'FreshMart': 'E-commerce grocery platform with responsive design, product catalog, and cart functionality. Deployed on Vercel.',
    'Phoenix-College': 'College website with responsive design, department pages, and information portal. Deployed on Vercel.',
    'Credit_Approval_System': 'Machine learning-based credit approval system using Python for automated credit risk assessment.',
    'FingerPrint-Matcher': 'Python-based fingerprint matching system using image processing and pattern recognition algorithms.',
    'Real-Time-Twitter-Sentiment-Analysis': 'Big Data project for real-time Twitter sentiment analysis using Kafka, Spark Streaming, MongoDB, and Django dashboard.',
    'Atttendence-Notifier': 'Python-based attendance notification system for automated attendance tracking and alerts.',
    'Tours-and-Travels-website': 'Responsive tours and travel website with booking interface and destination showcase.',
    'SheildMe': 'Mobile safety application built with Dart/Flutter for personal security and emergency response.',
    'codebits_3.0': 'Hackathon project built with Dart/Flutter during CodeBits 3.0 event.',
    'devops-cheatsheet': 'Comprehensive DevOps cheatsheet covering CI/CD, containerization, monitoring, security, cloud infrastructure, and networking.',
    'ultimate-linux-guide': 'Ultimate guide to learning Linux from scratch — comprehensive command reference and system administration.',
};

// ─── Category assignment rules ──────────────────────────────────────
const CATEGORY_RULES: Record<string, FilterCategory[]> = {
    'Cloud-Projects': ['Cloud', 'AWS', 'Terraform'],
    'Netflix-clone-k8s-end-to-end': ['Kubernetes', 'DevSecOps', 'CI/CD', 'DevOps'],
    'Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-': ['Kubernetes', 'AWS', 'Terraform', 'CI/CD'],
    'Multi-Env-IaC': ['Terraform', 'Cloud', 'DevOps'],
    'CI-CD-Ansible': ['CI/CD', 'DevOps'],
    'AlertOps-Automated-Incident-Response-System': ['Monitoring', 'DevOps'],
    'Docker-Project': ['DevOps'],
    'Full-stack-cicd-pipeline': ['CI/CD', 'DevOps'],
    'AWS-codepipeline': ['AWS', 'CI/CD', 'Cloud'],
    'Devops-Project': ['DevOps', 'Terraform', 'AWS'],
    'Kubernetes-Troubleshooting': ['Kubernetes', 'DevOps'],
    'Kodekloud_Engineer_solution': ['DevOps'],
    'Scripts': ['DevOps'],
    'KisanSaathi': ['Full Stack'],
    'Smart-File-Upload-System': ['Full Stack'],
    'FreshMart': ['Full Stack'],
    'Phoenix-College': ['Full Stack'],
    'Credit_Approval_System': ['AI / ML', 'Backend'],
    'FingerPrint-Matcher': ['AI / ML'],
    'Real-Time-Twitter-Sentiment-Analysis': ['AI / ML', 'Backend'],
    'Atttendence-Notifier': ['Backend'],
    'Tours-and-Travels-website': ['Full Stack'],
    'SheildMe': ['Other'],
    'codebits_3.0': ['Other'],
    'devops-cheatsheet': ['DevOps'],
    'ultimate-linux-guide': ['DevOps'],
};

// ─── Technology inference ───────────────────────────────────────────
const TECH_RULES: Record<string, string[]> = {
    'Cloud-Projects': ['AWS', 'Terraform', 'Lambda', 'S3', 'CloudFront', 'EC2', 'RDS', 'Route53', 'SNS', 'Python', 'HCL'],
    'Netflix-clone-k8s-end-to-end': ['React', 'TypeScript', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'AWS', 'Prometheus', 'Grafana', 'Trivy', 'SonarQube'],
    'Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-': ['AWS EKS', 'Terraform', 'Kubernetes', 'NGINX Ingress', 'GitHub Actions', 'cert-manager', 'Docker', 'HCL'],
    'Multi-Env-IaC': ['Terraform', 'Ansible', 'AWS', 'S3', 'DynamoDB', 'Nginx', 'HCL'],
    'CI-CD-Ansible': ['Ansible', 'Jenkins', 'AWS', 'Nginx', 'MongoDB', 'Ubuntu'],
    'AlertOps-Automated-Incident-Response-System': ['Prometheus', 'Grafana', 'Alertmanager', 'Docker', 'Python', 'Flask', 'Twilio'],
    'Docker-Project': ['Docker', 'Docker Compose', 'HTML', 'Nginx'],
    'Full-stack-cicd-pipeline': ['Docker', 'CI/CD', 'Dockerfile', 'GitHub Actions'],
    'AWS-codepipeline': ['AWS', 'CodePipeline', 'JavaScript', 'Node.js'],
    'Devops-Project': ['Terraform', 'AWS', 'HCL'],
    'Kubernetes-Troubleshooting': ['Kubernetes', 'kubectl', 'Linux'],
    'Kodekloud_Engineer_solution': ['Linux', 'Docker', 'Kubernetes', 'Ansible'],
    'Scripts': ['Python', 'Bash', 'Automation'],
    'KisanSaathi': ['TypeScript', 'Next.js', 'React'],
    'Smart-File-Upload-System': ['HTML', 'CSS', 'JavaScript'],
    'FreshMart': ['HTML', 'CSS', 'JavaScript'],
    'Phoenix-College': ['HTML', 'CSS', 'JavaScript'],
    'Credit_Approval_System': ['Python', 'Machine Learning', 'Pandas'],
    'FingerPrint-Matcher': ['Python', 'OpenCV', 'Image Processing'],
    'Real-Time-Twitter-Sentiment-Analysis': ['Kafka', 'Spark', 'MongoDB', 'Django', 'Python'],
    'Atttendence-Notifier': ['Python'],
    'Tours-and-Travels-website': ['HTML', 'CSS', 'JavaScript'],
    'SheildMe': ['Dart', 'Flutter'],
    'codebits_3.0': ['Dart', 'Flutter'],
    'devops-cheatsheet': ['TypeScript', 'DevOps'],
    'ultimate-linux-guide': ['Linux', 'Bash'],
};

// ─── Featured repos ─────────────────────────────────────────────────
const FEATURED_REPOS = new Set([
    'Cloud-Projects',
    'Netflix-clone-k8s-end-to-end',
    'Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-',
    'Multi-Env-IaC',
    'CI-CD-Ansible',
    'AlertOps-Automated-Incident-Response-System',
    'Docker-Project',
    'Full-stack-cicd-pipeline',
    'AWS-codepipeline',
    'Devops-Project',
]);

// ─── Cache helpers ──────────────────────────────────────────────────
type CacheEntry<T> = { data: T; timestamp: number };

function getCache<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    try {
        const raw = sessionStorage.getItem(key);
        if (!raw) return null;
        const entry: CacheEntry<T> = JSON.parse(raw);
        if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
            sessionStorage.removeItem(key);
            return null;
        }
        return entry.data;
    } catch {
        return null;
    }
}

function setCache<T>(key: string, data: T): void {
    if (typeof window === 'undefined') return;
    try {
        const entry: CacheEntry<T> = { data, timestamp: Date.now() };
        sessionStorage.setItem(key, JSON.stringify(entry));
    } catch {
        // quota exceeded — silently fail
    }
}

// ─── Enrichment ─────────────────────────────────────────────────────
export function enrichRepo(repo: GitHubRepo): EnrichedRepo | null {
    if (EXCLUDED_REPOS.has(repo.name)) return null;

    const categories = CATEGORY_RULES[repo.name] || inferCategories(repo);
    const technologies = TECH_RULES[repo.name] || inferTechnologies(repo);
    const isFeatured = FEATURED_REPOS.has(repo.name);
    const displayName = DISPLAY_NAMES[repo.name] || repo.name.replace(/-/g, ' ').replace(/_/g, ' ');
    const enrichedDescription = ENRICHED_DESCRIPTIONS[repo.name] || repo.description || 'No description available.';

    return {
        ...repo,
        displayName,
        categories,
        technologies,
        isFeatured,
        enrichedDescription,
    };
}

function inferCategories(repo: GitHubRepo): FilterCategory[] {
    const cats: FilterCategory[] = [];
    const name = repo.name.toLowerCase();
    const desc = (repo.description || '').toLowerCase();
    const lang = (repo.language || '').toLowerCase();

    if (name.includes('k8s') || name.includes('kubernetes')) cats.push('Kubernetes');
    if (name.includes('terraform') || lang === 'hcl') cats.push('Terraform');
    if (name.includes('aws') || name.includes('cloud')) cats.push('Cloud', 'AWS');
    if (name.includes('docker') || lang === 'dockerfile') cats.push('DevOps');
    if (name.includes('ci-cd') || name.includes('cicd') || name.includes('pipeline')) cats.push('CI/CD');
    if (name.includes('ansible')) cats.push('CI/CD', 'DevOps');
    if (name.includes('monitor') || name.includes('alert') || name.includes('prometheus') || name.includes('grafana')) cats.push('Monitoring');
    if (name.includes('devops')) cats.push('DevOps');
    if (desc.includes('machine learning') || desc.includes('ml') || desc.includes('sentiment')) cats.push('AI / ML');

    if (cats.length === 0) cats.push('Other');
    return [...new Set(cats)];
}

function inferTechnologies(repo: GitHubRepo): string[] {
    const techs: string[] = [];
    if (repo.language) techs.push(repo.language);
    if (repo.topics?.length) techs.push(...repo.topics);
    if (techs.length === 0) techs.push('Documentation');
    return techs;
}

// ─── API Fetchers ───────────────────────────────────────────────────
export async function fetchGitHubRepos(): Promise<GitHubRepo[] | null> {
    const cached = getCache<GitHubRepo[]>(CACHE_KEY_REPOS);
    if (cached) return cached;

    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            { headers: { Accept: 'application/vnd.github.v3+json' } }
        );
        if (!res.ok) return null;
        const data: GitHubRepo[] = await res.json();
        setCache(CACHE_KEY_REPOS, data);
        return data;
    } catch {
        return null;
    }
}

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
    const cached = getCache<GitHubUser>(CACHE_KEY_USER);
    if (cached) return cached;

    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}`,
            { headers: { Accept: 'application/vnd.github.v3+json' } }
        );
        if (!res.ok) return null;
        const data: GitHubUser = await res.json();
        setCache(CACHE_KEY_USER, data);
        return data;
    } catch {
        return null;
    }
}

export async function fetchRepoReadme(repoName: string): Promise<string | null> {
    const cacheKey = `gh_readme_${repoName}`;
    const cached = getCache<string>(cacheKey);
    if (cached) return cached;

    try {
        const res = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`,
            { headers: { Accept: 'application/vnd.github.v3+json' } }
        );
        if (!res.ok) return null;
        const data = await res.json();
        const content = atob(data.content);
        setCache(cacheKey, content);
        return content;
    } catch {
        return null;
    }
}

export function getEnrichedRepos(rawRepos: GitHubRepo[]): EnrichedRepo[] {
    return rawRepos
        .map(enrichRepo)
        .filter((r): r is EnrichedRepo => r !== null);
}
