import type { FilterCategory } from './types';
import { fallbackRepos } from './githubFallback';

export type WorkflowStage = {
    stage: string;
    tool: string;
    description: string;
};

export type ProjectCaseStudyRecord = {
    slug: string;
    repoName: string;
    title: string;
    subtitle: string;
    description: string;
    category: FilterCategory;
    categories: FilterCategory[];
    technologies: string[];
    githubUrl: string;
    liveDemoUrl?: string | null;
    image?: string;
    isFeatured: boolean;
    language: string | null;
    stars: number;
    forks: number;
    lastUpdated: string;
    architectureFlow?: string[];
    workflowStages?: WorkflowStage[];
    problem?: string;
    architecture?: string;
    implementation?: string;
    challenges?: string;
    outcome?: string;
};

// ─── Deep Case Study Definitions ─────────────────────────────────────
export const detailedCaseStudies: Record<string, Partial<ProjectCaseStudyRecord>> = {
    'netflix-clone-k8s': {
        slug: 'netflix-clone-k8s',
        repoName: 'Netflix-clone-k8s-end-to-end',
        title: 'Netflix Clone — Kubernetes & DevSecOps Pipeline',
        subtitle: 'Production-ready Netflix web clone deployed on Kubernetes with automated security scanning and observability.',
        description: 'Complete end-to-end DevOps deployment of a modern React/TypeScript Netflix clone featuring Docker containerization, Jenkins CI/CD, Kubernetes orchestration, Terraform IaC, and integrated Trivy & SonarQube DevSecOps scanning.',
        category: 'Kubernetes',
        categories: ['Kubernetes', 'DevSecOps', 'CI/CD', 'DevOps'],
        technologies: ['Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'AWS', 'Trivy', 'SonarQube', 'Prometheus', 'Grafana', 'React', 'TypeScript'],
        githubUrl: 'https://github.com/ShahidKhan232/Netflix-clone-k8s-end-to-end',
        image: '/Images/netflix-clone.gif',
        isFeatured: true,
        architectureFlow: [
            'Developer Push',
            'GitHub Webhook',
            'Jenkins / GitHub Actions CI',
            'SonarQube & Trivy Security Scan',
            'Docker Build & Tag',
            'Container Registry (Docker Hub)',
            'Kubernetes / EKS Deployment',
            'NGINX Ingress Controller',
            'Prometheus & Grafana Monitoring',
        ],
        workflowStages: [
            { stage: 'Source Code', tool: 'GitHub', description: 'React & TypeScript frontend version-controlled with branch protection rules.' },
            { stage: 'Continuous Integration', tool: 'Jenkins', description: 'Automated pipeline triggered on pull requests and commits to main.' },
            { stage: 'Code Quality', tool: 'SonarQube', description: 'Static analysis for code smells, vulnerabilities, and test coverage gates.' },
            { stage: 'Security Scanning', tool: 'Trivy', description: 'Container image vulnerability scanning prior to registry push.' },
            { stage: 'Containerization', tool: 'Docker', description: 'Multi-stage builds generating lean, secure production container images.' },
            { stage: 'Orchestration', tool: 'Kubernetes', description: 'Deployments, services, and ingress configurations with auto-healing pods.' },
            { stage: 'Observability', tool: 'Prometheus & Grafana', description: 'Cluster-level metrics scraping, custom dashboards, and alert triggers.' },
        ],
        problem: 'Modern web applications require fast, reliable delivery without sacrificing security or operational visibility. Manual deployments lead to configuration drift, overlooked vulnerabilities, and extended downtime.',
        architecture: 'A distributed architecture where code committed to GitHub triggers a Jenkins declarative pipeline. The pipeline executes quality gates (SonarQube) and vulnerability scans (Trivy) before containerizing the React app. Pods are deployed across a multi-node Kubernetes cluster with ingress routing and Prometheus scraping operational metrics.',
        implementation: 'Developed Kubernetes manifests including Deployment, ClusterIP Service, and Ingress resources with resource quotas and liveness/readiness probes. Provisioned supporting cloud resources with Terraform and configured Grafana dashboards for cluster health monitoring.',
        challenges: 'Integrating DevSecOps checks (Trivy image scanning and SonarQube static analysis) without introducing excessive build latency, solved by implementing artifact caching and parallel pipeline stages.',
        outcome: 'Achieved fully automated, zero-touch deployments with continuous security scanning and real-time observability across the Kubernetes cluster.',
    },
    'wisecow': {
        slug: 'wisecow',
        repoName: 'Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-',
        title: 'Wisecow Application — AWS EKS & TLS Deployment',
        subtitle: 'Containerized application deployment on AWS Elastic Kubernetes Service with automated TLS and CI/CD.',
        description: 'End-to-end containerization and production deployment of the Wisecow application on AWS EKS with Terraform-provisioned infrastructure, NGINX Ingress, TLS certificates managed by cert-manager, and GitHub Actions CI/CD.',
        category: 'Kubernetes',
        categories: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD'],
        technologies: ['AWS EKS', 'Kubernetes', 'Terraform', 'NGINX Ingress', 'cert-manager', 'Docker', 'GitHub Actions', 'HCL'],
        githubUrl: 'https://github.com/ShahidKhan232/Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-',
        image: '/Images/wisecow-deployment.png',
        isFeatured: true,
        architectureFlow: [
            'Source Code (Git)',
            'GitHub Actions CI Pipeline',
            'Docker Containerization',
            'Terraform AWS EKS Cluster',
            'NGINX Ingress & cert-manager',
            'Secure HTTPS Public Access',
        ],
        workflowStages: [
            { stage: 'Build & Package', tool: 'Docker', description: 'Optimized Dockerfile building lightweight runtime environment.' },
            { stage: 'IaC Provisioning', tool: 'Terraform', description: 'Provisions VPC, subnets, IAM roles, and AWS EKS managed node groups.' },
            { stage: 'Automated CI/CD', tool: 'GitHub Actions', description: 'Workflow building container image and applying Kubernetes manifests.' },
            { stage: 'Traffic & Ingress', tool: 'NGINX Ingress', description: 'Routing HTTP/HTTPS external traffic to Kubernetes services.' },
            { stage: 'Security & TLS', tool: 'cert-manager', description: 'Automated Let’s Encrypt TLS certificate provisioning and auto-renewal.' },
        ],
        problem: 'Deploying legacy or simple services to cloud-native platforms often suffers from poor security hygiene, lack of automated certificates, and manual infrastructure provisioning.',
        architecture: 'Terraform establishes the AWS networking and EKS control plane. GitHub Actions deploys the containerized workload behind an NGINX Ingress Controller. cert-manager interacts with Let’s Encrypt to issue and automatically renew valid SSL/TLS certificates.',
        implementation: 'Crafted parameterized Terraform modules for EKS cluster and node groups. Authored Kubernetes YAML manifests with health probes, ingress routing annotations, and automated GitHub Actions delivery workflows.',
        challenges: 'Configuring Ingress DNS propagation and IAM OIDC provider integration for Kubernetes service accounts.',
        outcome: 'High-availability EKS deployment with 99.9% uptime target, automated TLS encryption, and push-button deployment via GitHub Actions.',
    },
    'multi-env-iac': {
        slug: 'multi-env-iac',
        repoName: 'Multi-Env-IaC',
        title: 'Multi-Environment Infrastructure as Code',
        subtitle: 'Reusable Terraform modules and Ansible configuration management across Dev, Staging, and Production environments.',
        description: 'Production-grade Infrastructure as Code design using modular Terraform configurations with S3/DynamoDB remote state locking and post-provisioning Ansible automation for consistent, drift-free environments.',
        category: 'Terraform',
        categories: ['Terraform', 'Cloud', 'DevOps', 'AWS'],
        technologies: ['Terraform', 'Ansible', 'AWS S3', 'DynamoDB', 'Nginx', 'HCL', 'Linux'],
        githubUrl: 'https://github.com/ShahidKhan232/Multi-Env-IaC',
        image: '/Images/Multi-env-project.gif',
        isFeatured: true,
        architectureFlow: [
            'Terraform Codebase',
            'Environment Variables (Dev/Staging/Prod)',
            'AWS S3 Remote State & DynamoDB Locking',
            'AWS Cloud Infrastructure Provisioning',
            'Dynamic Ansible Inventory',
            'Automated Configuration & Hardening',
        ],
        workflowStages: [
            { stage: 'Code Structure', tool: 'Terraform', description: 'Modular design separating VPC, security, and compute patterns.' },
            { stage: 'State Management', tool: 'S3 & DynamoDB', description: 'Encrypted remote backend with distributed state locking to prevent conflicts.' },
            { stage: 'Environment Separation', tool: 'Terraform Workspaces/Vars', description: 'Isolated state and parameter sets for Dev, Staging, and Prod.' },
            { stage: 'Configuration Management', tool: 'Ansible', description: 'Playbooks executed post-provisioning to configure Nginx and OS parameters.' },
        ],
        problem: 'Managing multiple environments manually causes configuration drift, silent failures in production, and lengthy setup times.',
        architecture: 'Root and child Terraform modules defining compute, networking, and security. S3 stores encrypted state files while DynamoDB handles concurrency locks. Once servers are provisioned, Ansible executes playbooks to configure packages, users, and services.',
        implementation: 'Structured reusable modules with explicit inputs/outputs. Implemented remote backend with state locking and crafted idempotency-focused Ansible roles.',
        challenges: 'Keeping module interfaces uniform while supporting environment-specific sizing and network overrides.',
        outcome: 'Cut environment provisioning time from hours to under 15 minutes with guaranteed reproducibility and zero configuration drift.',
    },
    'three-tier-aws': {
        slug: 'three-tier-aws',
        repoName: 'Cloud-Projects',
        title: 'Three-Tier High Availability Architecture on AWS',
        subtitle: 'Fault-tolerant, multi-AZ cloud architecture with Application Load Balancers, Auto Scaling Groups, and Multi-AZ RDS.',
        description: 'Enterprise-style three-tier web application architecture designed on AWS for high availability, fault tolerance, and security isolation across multiple Availability Zones.',
        category: 'AWS',
        categories: ['AWS', 'Cloud', 'Terraform'],
        technologies: ['AWS ALB', 'Auto Scaling', 'RDS Multi-AZ', 'CloudFront', 'Route53', 'VPC', 'ACM'],
        githubUrl: 'https://github.com/ShahidKhan232/Cloud-Projects/tree/main/Three-Tier-Architecture',
        image: '/Images/three-tier-project.png',
        isFeatured: true,
        architectureFlow: [
            'Route 53 & CloudFront Edge',
            'Internet Gateway & Public Subnets',
            'Application Load Balancer (ALB)',
            'Auto Scaling Group (Web Tier)',
            'Private Application Subnets',
            'Multi-AZ Amazon RDS (Database Tier)',
        ],
        workflowStages: [
            { stage: 'Edge & DNS', tool: 'Route 53 + CloudFront', description: 'Global low-latency content delivery and SSL termination.' },
            { stage: 'Traffic Balancing', tool: 'AWS ALB', description: 'Distributes incoming HTTP/HTTPS requests evenly across healthy EC2 instances.' },
            { stage: 'Elastic Compute', tool: 'EC2 Auto Scaling', description: 'Dynamically scales EC2 instances based on CPU utilization and target tracking.' },
            { stage: 'Persistence', tool: 'Amazon RDS Multi-AZ', description: 'Managed relational database with automated synchronous replication across AZs.' },
        ],
        problem: 'Single points of failure in traditional architectures lead to catastrophic outages during hardware failures or sudden traffic surges.',
        architecture: 'Public edge with Route 53 and CloudFront routing to an ALB across two public subnets. Web/app instances run in private subnets with Auto Scaling policies. Database tier resides in isolated private subnets with synchronous Multi-AZ failover.',
        implementation: 'Constructed custom VPC with public and private subnet pairs across multiple AZs. Configured security group chaining so only the ALB can communicate with app instances, and only app instances can reach RDS.',
        challenges: 'Balancing cost constraints with high-availability requirements across multiple Availability Zones.',
        outcome: 'Resilient multi-tier architecture with zero single points of failure, automatic healing, and isolated database security boundaries.',
    },
    'serverless-aws': {
        slug: 'serverless-aws',
        repoName: 'Cloud-Projects',
        title: 'Serverless Event-Driven Architecture & Cost Optimization',
        subtitle: 'Scalable image processing and automated AWS cost governance using Lambda, S3 events, and SNS.',
        description: 'Event-driven serverless system on AWS executing asynchronous image processing with AWS Lambda and automated EBS snapshot cost optimization routines with near-zero idle expenses.',
        category: 'Cloud',
        categories: ['Cloud', 'AWS', 'Backend'],
        technologies: ['AWS Lambda', 'Amazon S3', 'Amazon SNS', 'IAM', 'Python', 'CloudWatch'],
        githubUrl: 'https://github.com/ShahidKhan232/Cloud-Projects/tree/main/AWS-Serverless',
        image: '/Images/Serverless.gif',
        isFeatured: true,
        architectureFlow: [
            'S3 Object Upload Event',
            'Event Notification Trigger',
            'AWS Lambda Execution (Python)',
            'Image Processing & Metadata Extraction',
            'SNS Notification Delivery',
            'CloudWatch Logging & Cost Metrics',
        ],
        workflowStages: [
            { stage: 'Event Ingestion', tool: 'Amazon S3', description: 'Bucket notification configured to emit events on ObjectCreated actions.' },
            { stage: 'Compute Execution', tool: 'AWS Lambda', description: 'Serverless Python function triggered automatically without persistent servers.' },
            { stage: 'Security', tool: 'IAM Least Privilege', description: 'Granular IAM policies restricting Lambda execution only to necessary resources.' },
            { stage: 'Notification', tool: 'Amazon SNS', description: 'Publishes processing results and alert notices to subscribed subscribers.' },
        ],
        problem: 'Traditional server-based image processing and maintenance tasks incur continuous compute costs even during hours of zero traffic.',
        architecture: 'S3 bucket event fires an AWS Lambda function running Python. The function processes images, optimizes storage parameters, and sends completion alerts through SNS with CloudWatch monitoring.',
        implementation: 'Authored Python Lambda handlers utilizing boto3 and Pillow. Formatted event notification triggers and IAM execution roles adhering to strict least-privilege principles.',
        challenges: 'Managing cold starts and setting safe execution timeout and memory boundaries.',
        outcome: 'Serverless workflow scaling from zero to thousands of executions with virtually zero idle operating costs.',
    },
    'alertops': {
        slug: 'alertops',
        repoName: 'AlertOps-Automated-Incident-Response-System',
        title: 'AlertOps — Automated Monitoring & Incident Response',
        subtitle: 'Proactive observability system utilizing Prometheus, Grafana, Alertmanager, and automated SMS alerts.',
        description: 'Complete monitoring and incident notification solution tracking 20+ system metrics in real time with Prometheus, Grafana dashboards, Alertmanager routing, and custom Python metric exporters.',
        category: 'Monitoring',
        categories: ['Monitoring', 'DevOps'],
        technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'Docker', 'Python', 'Flask', 'Twilio'],
        githubUrl: 'https://github.com/ShahidKhan232/AlertOps-Automated-Incident-Response-System',
        image: '/Images/alertops.png',
        isFeatured: true,
        architectureFlow: [
            'System & App Metric Sources',
            'Prometheus Metrics Scraper',
            'Threshold Breach Detection',
            'Alertmanager Routing & Grouping',
            'Twilio SMS & Webhook Incident Notification',
            'Grafana Real-Time Dashboard Visualization',
        ],
        workflowStages: [
            { stage: 'Metrics Collection', tool: 'Prometheus', description: 'Periodic scraping of node exporter, Windows exporter, and custom metrics.' },
            { stage: 'Data Visualization', tool: 'Grafana', description: 'Interactive panels displaying CPU, memory, network I/O, and custom app health.' },
            { stage: 'Alert Rules', tool: 'Alertmanager', description: 'Configured firing rules with deduplication, grouping, and silencing capabilities.' },
            { stage: 'Notification Delivery', tool: 'Twilio SMS', description: 'Instant dispatch of high-priority incident notifications to on-call numbers.' },
        ],
        problem: 'Unmonitored systems suffer extended Mean Time to Detect (MTTD) and delayed incident responses, causing service outages to go unnoticed.',
        architecture: 'Prometheus server scrapes metrics from exporters. When defined alert rules trigger, alerts are dispatched to Alertmanager, which handles deduplication and sends SMS notifications via Twilio while Grafana provides visual diagnostics.',
        implementation: 'Created Docker Compose environment deploying Prometheus, Grafana, Alertmanager, and a custom Flask metric collector with tailored alert rule thresholds.',
        challenges: 'Tuning alerting thresholds to eliminate alert fatigue while maintaining high sensitivity for critical degradation.',
        outcome: 'Real-time observability platform reducing incident detection times from hours to seconds.',
    },
    'ci-cd-ansible': {
        slug: 'ci-cd-ansible',
        repoName: 'CI-CD-Ansible',
        title: 'CI/CD Automation with Ansible & Jenkins',
        subtitle: 'Multi-AZ automated infrastructure provisioning Nginx reverse proxies and MongoDB replica set cluster.',
        description: 'Automated CI/CD and configuration management infrastructure deploying Nginx web servers and a 3-node MongoDB replica set across AWS EC2 instances with Ansible playbooks and Jenkins pipelines.',
        category: 'CI/CD',
        categories: ['CI/CD', 'DevOps'],
        technologies: ['Ansible', 'Jenkins', 'AWS', 'Nginx', 'MongoDB', 'Ubuntu', 'Linux'],
        githubUrl: 'https://github.com/ShahidKhan232/CI-CD-Ansible',
        isFeatured: true,
        architectureFlow: [
            'Git Commit / Pull Request',
            'Jenkins Master Node Trigger',
            'Syntax & Lint Validation',
            'Dynamic AWS EC2 Inventory',
            'Ansible Playbook Execution',
            'Nginx Reverse Proxy & MongoDB Replica Set',
        ],
        workflowStages: [
            { stage: 'Pipeline Orchestration', tool: 'Jenkins', description: 'Declarative pipeline orchestrating test, configuration, and verification stages.' },
            { stage: 'Configuration Automation', tool: 'Ansible', description: 'Playbooks enforcing desired system state, package installation, and firewall rules.' },
            { stage: 'Database Clustering', tool: 'MongoDB', description: 'Automated replica set initialization with primary-secondary failover.' },
            { stage: 'Traffic Routing', tool: 'Nginx', description: 'Reverse proxy configuration distributing application traffic to backend services.' },
        ],
        problem: 'Manual setup of database clusters and reverse proxies across multiple servers causes configuration discrepancies, security gaps, and extended downtime.',
        architecture: 'Jenkins pipeline connects to an Ansible control node that targets dynamic AWS EC2 instances across multiple Availability Zones to provision and configure Nginx reverse proxies and an interconnected MongoDB replica set.',
        implementation: 'Structured modular Ansible roles with parameterized variable files, automated MongoDB replica initiation scripts, and Jenkinsfile pipeline definition.',
        challenges: 'Handling SSH host verification and orchestrating database replica set handshakes without race conditions.',
        outcome: 'Zero-touch automated configuration of production-ready Nginx and MongoDB infrastructure in minutes.',
    },
    'docker-architecture': {
        slug: 'docker-architecture',
        repoName: 'Docker-Project',
        title: 'Multi-Container Docker Architecture',
        subtitle: 'Containerized multi-tier architecture demonstrating Docker networking, volume persistence, and Compose orchestration.',
        description: 'Comprehensive multi-container containerization project demonstrating Docker networking bridges, named volume persistence, multi-stage builds, and Docker Compose orchestration for scalable web services.',
        category: 'DevOps',
        categories: ['DevOps'],
        technologies: ['Docker', 'Docker Compose', 'Nginx', 'HTML/CSS', 'Linux'],
        githubUrl: 'https://github.com/ShahidKhan232/Docker-Project',
        isFeatured: true,
        architectureFlow: [
            'Developer Environment',
            'Multi-Stage Dockerfile Build',
            'Image Optimization & Security',
            'Docker Compose Service Orchestration',
            'Isolated Network Bridge',
            'Persistent Named Volumes',
        ],
        workflowStages: [
            { stage: 'Container Build', tool: 'Docker', description: 'Multi-stage Dockerfiles separating build dependencies from minimal runtime.' },
            { stage: 'Orchestration', tool: 'Docker Compose', description: 'Declarative YAML defining service relationships, port bindings, and environments.' },
            { stage: 'Networking', tool: 'Docker Network', description: 'Isolated bridge network allowing container discovery by service name.' },
            { stage: 'Storage', tool: 'Docker Volumes', description: 'Named volumes preserving state across container restarts and updates.' },
        ],
        problem: 'Inconsistent dependencies between development, testing, and staging environments cause unexpected deployment crashes and slow team onboarding.',
        architecture: 'Multi-tier web application split into discrete containerized services managed by Docker Compose with dedicated network bridges and data persistence volumes.',
        implementation: 'Designed production-grade Dockerfiles, implemented healthchecks, and structured Docker Compose configurations for seamless single-command environment spin-up.',
        challenges: 'Minimizing Docker image footprint and ensuring smooth inter-container communication without hardcoding IPs.',
        outcome: 'Lightweight, reproducible local and staging environments that spin up in seconds and eliminate environment inconsistencies.',
    },
    'aws-codepipeline': {
        slug: 'aws-codepipeline',
        repoName: 'AWS-codepipeline',
        title: 'AWS CodePipeline CI/CD Automation',
        subtitle: 'Cloud-native continuous delivery pipeline utilizing AWS Developer Tools for zero-touch deployments.',
        description: 'Automated continuous integration and deployment pipeline engineered with AWS CodePipeline, CodeBuild, and S3 artifact buckets for serverless and cloud-native application deployments.',
        category: 'AWS',
        categories: ['AWS', 'CI/CD', 'Cloud'],
        technologies: ['AWS CodePipeline', 'AWS CodeBuild', 'AWS CodeDeploy', 'Amazon S3', 'IAM', 'JavaScript', 'Node.js'],
        githubUrl: 'https://github.com/ShahidKhan232/AWS-codepipeline',
        isFeatured: true,
        architectureFlow: [
            'GitHub Code Push',
            'AWS CodePipeline Webhook Trigger',
            'AWS CodeBuild Test & Artifact Packaging',
            'Encrypted S3 Artifact Storage',
            'Automated Deployment Stage',
            'CloudWatch Pipeline Notification',
        ],
        workflowStages: [
            { stage: 'Source Stage', tool: 'GitHub + CodePipeline', description: 'Detects code changes via webhook and pulls the latest source code.' },
            { stage: 'Build Stage', tool: 'AWS CodeBuild', description: 'Executes buildspec.yml commands, runs unit tests, and packages deployable artifacts.' },
            { stage: 'Storage', tool: 'Amazon S3', description: 'Versioned, encrypted bucket storing release artifacts.' },
            { stage: 'Deployment', tool: 'AWS CodeDeploy', description: 'Rolls out updates with rollback mechanisms in case of healthcheck failures.' },
        ],
        problem: 'Operating external CI/CD servers increases maintenance overhead and introduces credential security risks in cloud-native AWS environments.',
        architecture: 'Fully managed serverless CI/CD pipeline using AWS native services with IAM least-privilege roles and automatic rollback on failure.',
        implementation: 'Crafted buildspec.yml definitions, IAM service role configurations, and pipeline trigger rules directly linked to repository branches.',
        challenges: 'Fine-tuning IAM policies and build artifact caching for optimal execution speed.',
        outcome: 'Completely serverless CI/CD workflow requiring zero infrastructure maintenance and deploying changes automatically on commit.',
    },
    'full-stack-cicd': {
        slug: 'full-stack-cicd',
        repoName: 'Full-stack-cicd-pipeline',
        title: 'Full-Stack CI/CD Deployment Pipeline',
        subtitle: 'Automated build, test, and containerized deployment workflow for modern web applications.',
        description: 'End-to-end continuous integration and deployment pipeline automating testing, Docker container builds, and registry publication for full-stack application releases.',
        category: 'CI/CD',
        categories: ['CI/CD', 'DevOps'],
        technologies: ['Docker', 'CI/CD', 'GitHub Actions', 'Linux', 'Dockerfile'],
        githubUrl: 'https://github.com/ShahidKhan232/Full-stack-cicd-pipeline',
        isFeatured: true,
        architectureFlow: [
            'Git Push / Pull Request',
            'Automated Lint & Test Run',
            'Docker Multi-Stage Build',
            'Image Vulnerability Scan',
            'Registry Release Publishing',
        ],
        problem: 'Delivering full-stack applications with synchronized frontend and backend releases without manual errors.',
        architecture: 'Automated pipeline triggered by GitHub webhooks that compiles source code, verifies test suites, builds production Docker images, and tags release versions.',
        implementation: 'Defined pipeline stages with environment secret handling and multi-stage Dockerfile packaging.',
        challenges: 'Managing secrets securely throughout the pipeline execution.',
        outcome: 'Standardized release cycle cutting deployment turnaround to under 3 minutes.',
    },
    'terraform-devops': {
        slug: 'terraform-devops',
        repoName: 'Devops-Project',
        title: 'DevOps Infrastructure with Terraform',
        subtitle: 'AWS infrastructure provisioning and resource management using declarative Terraform IaC.',
        description: 'AWS cloud infrastructure project utilizing Terraform Infrastructure as Code for automated, repeatable provisioning of VPC topologies, compute instances, and security group rules.',
        category: 'Terraform',
        categories: ['Terraform', 'DevOps', 'AWS'],
        technologies: ['Terraform', 'AWS', 'VPC', 'EC2', 'Security Groups', 'HCL'],
        githubUrl: 'https://github.com/ShahidKhan232/Devops-Project',
        isFeatured: true,
        architectureFlow: [
            'Terraform Plan',
            'AWS VPC & Subnet Topology',
            'Security Group Firewall Rules',
            'EC2 Compute Provisioning',
            'Output Configuration & Verification',
        ],
        problem: 'Manual cloud configuration via AWS console leads to untracked drift, human errors, and lack of reproducibility.',
        architecture: 'Declarative Terraform HCL scripts establishing a full AWS infrastructure footprint with explicit dependency graphs and parameterized variables.',
        implementation: 'Developed reusable HCL modules for networking, compute, and security with remote state locking.',
        challenges: 'Designing clean network boundaries and maintaining clean state management.',
        outcome: 'Fully reproducible cloud infrastructure deployable in minutes with comprehensive documentation.',
    },
};

// ─── Slug Generator Helper ───────────────────────────────────────────
export function repoNameToSlug(name: string): string {
    const customSlugs: Record<string, string> = {
        'Netflix-clone-k8s-end-to-end': 'netflix-clone-k8s',
        'Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-': 'wisecow',
        'Multi-Env-IaC': 'multi-env-iac',
        'Cloud-Projects': 'cloud-projects',
        'AlertOps-Automated-Incident-Response-System': 'alertops',
        'CI-CD-Ansible': 'ci-cd-ansible',
        'Docker-Project': 'docker-architecture',
        'AWS-codepipeline': 'aws-codepipeline',
        'Full-stack-cicd-pipeline': 'full-stack-cicd',
        'Devops-Project': 'terraform-devops',
        'Kubernetes-Troubleshooting': 'kubernetes-troubleshooting',
        'Kodekloud_Engineer_solution': 'kodekloud-solutions',
        'Scripts': 'automation-scripts',
        'KisanSaathi': 'kisan-saathi',
        'Smart-File-Upload-System': 'smart-file-upload',
        'FreshMart': 'freshmart',
        'Phoenix-College': 'phoenix-college',
        'Credit_Approval_System': 'credit-approval-system',
        'FingerPrint-Matcher': 'fingerprint-matcher',
        'Real-Time-Twitter-Sentiment-Analysis': 'twitter-sentiment-analysis',
        'Atttendence-Notifier': 'attendance-notifier',
        'Tours-and-Travels-website': 'tours-and-travels',
        'SheildMe': 'shieldme',
        'codebits_3.0': 'codebits',
        'devops-cheatsheet': 'devops-cheatsheet',
        'ultimate-linux-guide': 'ultimate-linux-guide',
    };

    if (customSlugs[name]) return customSlugs[name];
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

// ─── Unified Data Synthesizer ────────────────────────────────────────
export function getAllProjectRecords(): ProjectCaseStudyRecord[] {
    const records: ProjectCaseStudyRecord[] = [];
    const usedSlugs = new Set<string>();

    // First, add the pre-defined deep case studies
    for (const [slug, study] of Object.entries(detailedCaseStudies)) {
        usedSlugs.add(slug);
        const matchingFallback = fallbackRepos.find((r) => r.name.toLowerCase() === study.repoName?.toLowerCase());

        records.push({
            slug,
            repoName: study.repoName || slug,
            title: study.title || slug,
            subtitle: study.subtitle || study.description?.substring(0, 100) || '',
            description: study.description || matchingFallback?.description || '',
            category: study.category || 'DevOps',
            categories: study.categories || ['DevOps'],
            technologies: study.technologies || ['DevOps'],
            githubUrl: study.githubUrl || matchingFallback?.html_url || `https://github.com/ShahidKhan232/${study.repoName}`,
            liveDemoUrl: study.liveDemoUrl || matchingFallback?.homepage || null,
            image: study.image,
            isFeatured: study.isFeatured ?? false,
            language: matchingFallback?.language || null,
            stars: matchingFallback?.stargazers_count ?? 0,
            forks: matchingFallback?.forks_count ?? 0,
            lastUpdated: matchingFallback?.updated_at || new Date().toISOString(),
            architectureFlow: study.architectureFlow,
            workflowStages: study.workflowStages,
            problem: study.problem,
            architecture: study.architecture,
            implementation: study.implementation,
            challenges: study.challenges,
            outcome: study.outcome,
        });
    }

    // Next, add all remaining fallback repositories that aren't already represented
    for (const repo of fallbackRepos) {
        if (repo.name === 'ShahidKhan232' || repo.name === 'ShahidKhan232.github.io') continue;
        const slug = repoNameToSlug(repo.name);
        if (usedSlugs.has(slug)) continue;
        usedSlugs.add(slug);

        records.push({
            slug,
            repoName: repo.name,
            title: repo.name.replace(/[-_]/g, ' '),
            subtitle: repo.description || 'Public engineering repository on GitHub.',
            description: repo.description || 'Comprehensive open-source repository showcasing implementation practices and documentation.',
            category: (repo.language === 'HCL' ? 'Terraform' : repo.language === 'Python' ? 'Backend' : 'DevOps') as FilterCategory,
            categories: ['DevOps'],
            technologies: repo.language ? [repo.language] : ['Documentation'],
            githubUrl: repo.html_url,
            liveDemoUrl: repo.homepage,
            isFeatured: false,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            lastUpdated: repo.updated_at,
            problem: `Public engineering repository focusing on ${repo.name.replace(/[-_]/g, ' ')}.`,
            implementation: `Implemented using ${repo.language || 'modern development practices'} with full source code available on GitHub.`,
            outcome: `Maintained as a public open-source project on GitHub with ${repo.stargazers_count} stars.`,
        });
    }

    return records;
}

export function getProjectRecordBySlug(slug: string): ProjectCaseStudyRecord | undefined {
    const all = getAllProjectRecords();
    return all.find((p) => p.slug === slug);
}

export function getFeaturedProjectRecords(): ProjectCaseStudyRecord[] {
    return getAllProjectRecords().filter((p) => p.isFeatured);
}

export function getAllProjectSlugs(): { slug: string }[] {
    return getAllProjectRecords().map((p) => ({ slug: p.slug }));
}
