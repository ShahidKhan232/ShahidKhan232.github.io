import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
];

export const hero = {
    headline: ['Cloud Infrastructure,', 'Engineered to Scale.'],
    name: 'Shahid Khan',
    title: 'DevOps & Cloud Engineer',
    supporting:
        'I build secure, automated and observable cloud infrastructure using AWS, Kubernetes, Terraform and modern DevOps practices.',
    status: 'AVAILABLE FOR OPPORTUNITIES',
    socials: {
        github: 'https://github.com/ShahidKhan232',
        linkedin: 'https://linkedin.com/in/shahid-khan-985919317',
        email: 'mailto:shahidkhan.95173@gmail.com',
    },
    resumePath: '/resume.pdf',
    resumeDriveLink:
        'https://drive.google.com/file/d/1xxHLJrOQjcrPs-1G43xxpq6XtHjJka6t/view?usp=sharing',
};

export const infrastructureIndicators = [
    { label: 'CLOUD', value: 'AWS' },
    { label: 'ORCHESTRATION', value: 'Kubernetes' },
    { label: 'IaC', value: 'Terraform' },
    { label: 'CI/CD', value: 'Jenkins + GitHub Actions' },
    { label: 'OBSERVABILITY', value: 'Prometheus + Grafana' },
    { label: 'CONTAINERS', value: 'Docker' },
];

export const engineeringPrinciples = ['AUTOMATE', 'OBSERVE', 'SECURE', 'SCALE'] as const;

export const about = {
    intro:
        'I design and automate cloud infrastructure with a focus on reliability, security and repeatable deployments. My work spans AWS, Kubernetes, Infrastructure as Code, CI/CD and observability.',
    profile: {
        role: 'DevOps / Cloud Engineer',
        education: 'B.E. Computer Engineering',
        educationDetail:
            'Gharda Institute of Technology, Khed, Maharashtra · Aug 2022 – May 2026',
        location: 'Mumbai, Maharashtra',
        focus: ['Cloud Infrastructure', 'CI/CD', 'Kubernetes', 'Infrastructure as Code', 'Observability'],
    },
};

export type DevOpsSkill = {
    name: string;
    category: string;
    usage: string;
};

export const devOpsStack: DevOpsSkill[] = [
    { name: 'AWS', category: 'Cloud', usage: 'Core cloud platform for compute, networking, storage, and managed services.' },
    { name: 'Terraform', category: 'Infrastructure as Code', usage: 'Provisioning and managing reproducible AWS infrastructure.' },
    { name: 'Ansible', category: 'Infrastructure as Code', usage: 'Configuration management and post-provision automation.' },
    { name: 'Docker', category: 'Containers', usage: 'Containerizing applications for consistent deploys across environments.' },
    { name: 'Kubernetes', category: 'Containers', usage: 'Orchestrating containerized workloads and services.' },
    { name: 'EKS', category: 'Containers', usage: 'Managed Kubernetes on AWS for production-style cluster deployments.' },
    { name: 'Jenkins', category: 'CI/CD', usage: 'Building automated build, test, and deployment pipelines.' },
    { name: 'GitHub Actions', category: 'CI/CD', usage: 'Workflow automation for CI/CD and infrastructure tasks.' },
    { name: 'GitLab CI', category: 'CI/CD', usage: 'Pipeline automation in GitLab-based workflows.' },
    { name: 'Prometheus', category: 'Observability', usage: 'Metrics collection and alerting for infrastructure and apps.' },
    { name: 'Grafana', category: 'Observability', usage: 'Dashboards and visualization for operational metrics.' },
    { name: 'Alertmanager', category: 'Observability', usage: 'Routing and grouping alerts from Prometheus.' },
    { name: 'Loki', category: 'Observability', usage: 'Log aggregation aligned with Grafana observability stacks.' },
    { name: 'Python', category: 'Programming / Scripting', usage: 'Automation scripts, Lambda functions, and tooling.' },
    { name: 'Bash', category: 'Programming / Scripting', usage: 'Shell automation for deployment and system tasks.' },
    { name: 'JavaScript', category: 'Programming / Scripting', usage: 'Application and tooling scripts where needed.' },
    { name: 'Linux', category: 'OS / Systems', usage: 'Primary environment for servers, containers, and CI runners.' },
];

export const skillCategories = [
    'All',
    'Cloud',
    'Infrastructure as Code',
    'Containers',
    'CI/CD',
    'Observability',
    'Programming / Scripting',
    'OS / Systems',
] as const;

export type ProjectCaseStudy = {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    image?: string;
    category: string;
    problem: string;
    architecture: string;
    implementation: string;
    workflow: string;
    challenges: string;
    outcome: string;
};

export const projects: ProjectCaseStudy[] = [
    {
        title: 'Multi-Environment Infrastructure as Code',
        description:
            'Designed reusable Terraform modules for dev, staging, and prod environments with automated Ansible configuration management.',
        technologies: ['Terraform', 'Ansible', 'AWS S3', 'DynamoDB', 'Nginx'],
        github: 'https://github.com/ShahidKhan232/Multi-Env-IaC',
        image: '/Images/Multi-env-project.gif',
        category: 'Cloud & IaC',
        problem:
            'Multiple environments needed consistent infrastructure without manual drift between dev, staging, and production.',
        architecture:
            'Modular Terraform layouts with remote state (S3/DynamoDB), environment-specific variables, and Ansible for configuration after provision.',
        implementation:
            'Reusable modules for networking and compute patterns; Ansible playbooks applied post-Terraform for repeatable server configuration.',
        workflow: 'Terraform plan/apply per environment; Ansible runs for configuration; changes tracked in Git.',
        challenges: 'Keeping module interfaces stable while allowing environment-specific overrides.',
        outcome: 'Repeatable multi-environment provisioning with IaC-driven workflows instead of manual setup.',
    },
    {
        title: 'Netflix Clone Deployment on Kubernetes with DevSecOps CI/CD Pipeline',
        description:
            'A production-ready Netflix clone featuring a modern React/TypeScript frontend with comprehensive DevOps infrastructure including Docker, Kubernetes, Jenkins CI/CD, and Terraform IaC.',
        technologies: [
            'AWS',
            'Terraform',
            'Jenkins',
            'Docker',
            'GitHub Actions',
            'Kubernetes',
            'Trivy',
            'SonarQube',
            'Prometheus',
            'Grafana',
            'Slack',
        ],
        github: 'https://github.com/ShahidKhan232/Netflix-clone-k8s-end-to-end.git',
        image: '/Images/netflix-clone.gif',
        category: 'Kubernetes',
        problem:
            'Deliver a full-stack application with automated CI/CD, container orchestration, security scanning, and observability.',
        architecture:
            'Developer → GitHub → Jenkins/GitHub Actions → Docker → registry → Kubernetes/EKS → Ingress → application, with Prometheus/Grafana and security tooling in the pipeline.',
        implementation:
            'Containerized services, Kubernetes manifests, Terraform for cloud resources, and pipelines for build, scan, test, and deploy stages.',
        workflow: 'Git push triggers CI; images built and scanned; deployments rolled to the cluster with monitoring hooks.',
        challenges: 'Integrating DevSecOps checks (Trivy, SonarQube) without slowing feedback loops.',
        outcome: 'End-to-end DevOps pipeline demonstrating secure, observable Kubernetes deployment patterns.',
    },
    {
        title: 'Wisecow Application Deployment on AWS EKS',
        description:
            'Deployed containerized application on AWS EKS with Terraform-provisioned infrastructure supporting 99.9% uptime.',
        technologies: ['AWS EKS', 'Terraform', 'Kubernetes', 'NGINX Ingress', 'GitHub Actions', 'cert-manager'],
        github: 'https://github.com/ShahidKhan232/Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-',
        image: '/Images/wisecow-deployment.png',
        category: 'Kubernetes',
        problem: 'Run a containerized workload on EKS with secure ingress and automated delivery.',
        architecture: 'EKS cluster (Terraform), workloads on Kubernetes, NGINX Ingress, TLS via cert-manager, GitHub Actions for deploy.',
        implementation: 'Terraform for cluster and supporting AWS resources; Kubernetes manifests for app and ingress.',
        workflow: 'CI builds and pushes images; GitOps-style or pipeline-driven deploys to EKS.',
        challenges: 'Ingress, certificates, and cluster networking on EKS.',
        outcome: 'Stable EKS deployment with documented IaC and CI integration (uptime target noted in project materials: 99.9%).',
    },
    {
        title: 'Three-Tier High Availability Architecture on AWS',
        description:
            'Designed highly available three-tier architecture using ALB, Auto Scaling Groups, and Multi-AZ deployment.',
        technologies: ['AWS ALB', 'Auto Scaling', 'RDS', 'CloudFront', 'Route53', 'ACM', 'VPC'],
        github: 'https://github.com/ShahidKhan232/Cloud-Projects/tree/main/Three-Tier-Architecture',
        image: '/Images/three-tier-project.png',
        category: 'Cloud & IaC',
        problem: 'Design a resilient three-tier web architecture with high availability across AWS AZs.',
        architecture: 'Route53/CloudFront edge, ALB, Auto Scaling application tier, Multi-AZ RDS, VPC isolation.',
        implementation: 'AWS services wired for HA: load balancing, scaling groups, and managed database in multiple AZs.',
        workflow: 'Infrastructure defined and deployed on AWS; traffic flows through CDN and load balancer to scaled app tier.',
        challenges: 'Balancing cost and HA across tiers while keeping networking boundaries clear.',
        outcome: 'Demonstrates production-style HA patterns on AWS without single points of failure at each tier.',
    },
    {
        title: 'Serverless Image Processing & Cost Optimization',
        description:
            'Built event-driven serverless workflows using Lambda, S3 triggers, and SNS with near-zero idle cost.',
        technologies: ['AWS Lambda', 'S3', 'SNS', 'IAM', 'Python'],
        github: 'https://github.com/ShahidKhan232/Cloud-Projects/tree/main/AWS-Serverless',
        image: '/Images/Serverless.gif',
        category: 'Cloud & IaC',
        problem: 'Process images on upload without maintaining always-on servers.',
        architecture: 'S3 event triggers → Lambda processing → SNS notifications; IAM roles with least privilege.',
        implementation: 'Python Lambda handlers, bucket policies, and messaging for async processing.',
        workflow: 'Upload to S3 automatically invokes Lambda; results or alerts flow via SNS.',
        challenges: 'IAM permissions and event-driven error handling in a serverless model.',
        outcome: 'Cost-efficient processing that scales with usage rather than idle capacity.',
    },
    {
        title: 'Automated Monitoring & Alerting System',
        description:
            'Implemented Prometheus and Grafana dashboards monitoring 20+ system metrics in real time with proactive alerting.',
        technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'Docker', 'Python', 'Flask'],
        github: 'https://github.com/ShahidKhan232/AlertOps-Automated-Incident-Response-System',
        image: '/Images/alertops.png',
        category: 'Monitoring',
        problem: 'Gain visibility into system health and alert on issues before they escalate.',
        architecture: 'Prometheus scrapes metrics; Grafana dashboards; Alertmanager routes notifications via Twilio SMS and webhook.',
        implementation: 'Containerized observability stack with dashboards covering 20+ metrics, custom Python Flask metrics exporter, and Docker Compose deployment.',
        workflow: 'Metrics collected continuously; alert rules fire through Alertmanager when thresholds breach.',
        challenges: 'Useful alert tuning to reduce noise while staying proactive and ensuring low false positives.',
        outcome: 'Real-time monitoring and alerting foundation suitable for lab and production environments.',
    },
    {
        title: 'CI/CD Automation with Ansible & Jenkins',
        description:
            'Multi-AZ automated infrastructure configuring Nginx reverse proxies and a MongoDB replica set cluster using Ansible playbooks and Jenkins pipelines.',
        technologies: ['Ansible', 'Jenkins', 'AWS', 'Nginx', 'MongoDB', 'Ubuntu'],
        github: 'https://github.com/ShahidKhan232/CI-CD-Ansible',
        category: 'CI/CD',
        problem: 'Manual setup and configuration of multi-node database clusters and reverse proxies causes configuration drift and deployment downtime.',
        architecture: 'Jenkins master triggers Ansible playbooks across AWS EC2 instances across multiple AZs to configure Nginx web servers and a 3-node MongoDB replica set.',
        implementation: 'Modular Ansible roles for Nginx reverse proxy, security hardening, and automated MongoDB replication configuration with health verification.',
        workflow: 'Code commit triggers Jenkins pipeline -> runs syntax checks -> executes Ansible playbooks against dynamic inventory -> verifies cluster status.',
        challenges: 'Managing SSH credentials securely and orchestrating MongoDB replica set initiation without race conditions.',
        outcome: 'Zero-touch provisioning and configuration of production-ready Nginx and MongoDB infrastructure in minutes.',
    },
    {
        title: 'Multi-Container Docker Architecture',
        description:
            'Containerized multi-service web architecture demonstrating Docker networking, volume persistence, multi-stage builds, and Docker Compose orchestration.',
        technologies: ['Docker', 'Docker Compose', 'Nginx', 'HTML/CSS', 'Linux'],
        github: 'https://github.com/ShahidKhan232/Docker-Project',
        category: 'DevOps',
        problem: 'Inconsistent developer environments and heavyweight virtual machines creating slow onboarding and deployment divergence.',
        architecture: 'Multi-service container architecture managed by Docker Compose with isolated network bridges and persistent named volumes.',
        implementation: 'Optimized Dockerfiles using multi-stage builds for minimal image size, healthchecks, and non-root security principles.',
        workflow: 'Single-command environment spin-up with docker compose up --build with automatic port mapping and environment variable injection.',
        challenges: 'Optimizing container image sizes and handling inter-container service discovery and graceful teardown.',
        outcome: 'Lightweight, reproducible local and staging environments that build in seconds and eliminate "works on my machine" issues.',
    },
    {
        title: 'AWS CodePipeline CI/CD Automation',
        description:
            'End-to-end continuous integration and deployment pipeline using native AWS Developer Tools for automated cloud deployments.',
        technologies: ['AWS CodePipeline', 'AWS CodeBuild', 'AWS CodeDeploy', 'S3', 'IAM', 'Node.js'],
        github: 'https://github.com/ShahidKhan232/AWS-codepipeline',
        category: 'AWS',
        problem: 'Reliance on external CI/CD servers increases management overhead and credential exposure risks on cloud-native AWS projects.',
        architecture: 'GitHub webhook -> AWS CodePipeline -> AWS CodeBuild (artifact packaging & test) -> AWS S3 artifact bucket -> automated deployment stage.',
        implementation: 'buildspec.yml definitions with test execution, artifact generation, IAM least-privilege service roles, and CloudWatch notification triggers.',
        workflow: 'Push to main triggers AWS CodePipeline automatically, validating builds and deploying with rollback triggers on error.',
        challenges: 'Fine-tuning IAM policies and build artifact caching to optimize pipeline run durations.',
        outcome: 'Fully serverless, automated AWS deployment workflow with zero infrastructure maintenance.',
    },
    {
        title: 'Full-Stack CI/CD Pipeline',
        description:
            'Automated build, test, and containerized deployment workflow for modern web applications using Docker and CI automation.',
        technologies: ['Docker', 'CI/CD', 'GitHub Actions', 'Linux', 'Dockerfile'],
        github: 'https://github.com/ShahidKhan232/Full-stack-cicd-pipeline',
        category: 'CI/CD',
        problem: 'Delivering full-stack applications with synchronized frontend and backend releases without deployment errors.',
        architecture: 'Git-triggered pipeline running linting, automated testing, container image build, and container registry publishing.',
        implementation: 'Dockerfile multi-stage builds, automated pipeline scripts, and deployment hooks ensuring zero downtime.',
        workflow: 'Pull requests trigger test suites; merges to main build Docker images and deploy to target environment.',
        challenges: 'Managing environment variables and secrets safely throughout the pipeline execution.',
        outcome: 'Standardized release cycle cutting deployment turnaround to under 3 minutes.',
    },
    {
        title: 'DevOps Infrastructure with Terraform',
        description:
            'AWS infrastructure provisioning and management using Terraform Infrastructure as Code for scalable cloud environments.',
        technologies: ['Terraform', 'AWS', 'VPC', 'EC2', 'Security Groups', 'HCL'],
        github: 'https://github.com/ShahidKhan232/Devops-Project',
        category: 'Terraform',
        problem: 'Manual AWS console configuration prone to human error and difficult to reproduce across accounts.',
        architecture: 'Terraform code provisioning complete VPC topology, subnets, internet gateway, route tables, and compute instances.',
        implementation: 'Declarative HCL modules with parameterized variables, output definitions, and state locking.',
        workflow: 'terraform init -> terraform plan -> terraform apply, fully documented and version-controlled.',
        challenges: 'Designing modular network boundaries and maintaining clean state management.',
        outcome: 'Fully reproducible cloud infrastructure deployable in minutes with clear documentation.',
    },
];

export const featuredProjectSlug = 'Netflix Clone Deployment on Kubernetes with DevSecOps CI/CD Pipeline';

export const projectFilters = [
    'All',
    'DevOps',
    'Cloud',
    'Kubernetes',
    'Terraform',
    'CI/CD',
    'AWS',
    'Monitoring',
    'DevSecOps',
    'Backend',
    'Full Stack',
    'AI / ML',
    'Other',
] as const;

export const experience = [
    {
        role: 'AWS Intern',
        company: 'Therayu',
        start: 'May 2025',
        end: 'Oct 2025',
        location: 'Remote',
        bullets: [
            'Provisioned AWS infrastructure (EC2, S3, VPC, IAM, EKS) supporting 3+ application environments',
            'Built CI/CD pipelines using Jenkins and GitHub Actions, reducing manual deployment effort by 60%',
            'Containerized and deployed applications using Docker and Amazon ECS, improving resource utilization by 35%',
            'Managed infrastructure provisioning with Terraform, reducing environment setup time from hours to 15 minutes',
            'Implemented IAM least-privilege access and network security controls, lowering misconfiguration risks by 40%',
        ],
        techTags: ['AWS', 'EC2', 'EKS', 'S3', 'IAM', 'Docker', 'ECS', 'Terraform', 'Jenkins', 'GitHub Actions'],
    },
];

export const terminalScript = [
    {
        prompt: '$ whoami',
        output: 'shahid-khan // Cloud & DevOps Engineer [AWS | Kubernetes | Terraform | CI/CD]',
    },
    {
        prompt: '$ aws sts get-caller-identity --output table',
        output: '-----------------------------------------------------------\n|                    GetCallerIdentity                    |\n+--------------+------------------------------------------+\n|  Account     |  985210482914                            |\n|  Arn         |  arn:aws:iam::985210482914:user/shahid   |\n|  UserId      |  AIDAJEXAMPLESHAHID7K                    |\n+--------------+------------------------------------------+',
    },
    {
        prompt: '$ kubectl get pods -n production -o wide',
        output: 'NAME                                READY   STATUS    RESTARTS   AGE   IP             NODE\nnetflix-frontend-7c9578bb4-j82l1    1/1     Running   0          34d   10.244.1.42    ip-10-0-2-45.ec2.internal\nalertops-engine-6f8d77cfb-q49zp     1/1     Running   0          12d   10.244.2.18    ip-10-0-2-78.ec2.internal\nmonitoring-grafana-5d46977dc-w81m9  1/1     Running   0          60d   10.244.1.88    ip-10-0-2-45.ec2.internal',
    },
    {
        prompt: '$ terraform plan -no-color',
        output: 'module.vpc.aws_vpc.primary: Refreshing state... [id=vpc-08b29f76a]\nmodule.eks.aws_eks_cluster.prod: Refreshing state... [id=prod-eks-cluster]\n\nPlan: 0 to add, 1 to change, 0 to destroy.\n~ module.eks.aws_eks_node_group.workers\n    ~ scaling_config.desired_size: 3 => 4\n\n─────────────────────────────────────────────────────────────────────────────\nNote: Objects have changed outside of Terraform. All resources match state.',
    },
    {
        prompt: '$ git log --oneline -n 3',
        output: '7e2f1a9 (HEAD -> main, origin/main) feat(ci/cd): integrate SonarQube & Trivy scan gates\n4b19c82 fix(terraform): tighten IAM least-privilege security group rules\n09d83e1 chore(k8s): roll out horizontal pod autoscaler (HPA) targets',
    },
    {
        prompt: '$ docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"',
        output: 'NAMES                 STATUS              PORTS\njenkins-agent-01      Up 14 days (healthy) 50000/tcp\nprometheus-exporter   Up 42 days (healthy) 0.0.0.0:9100->9100/tcp\ntrivy-scanner         Up 6 hours          8080/tcp',
    },
];

export const githubStatic = {
    username: 'ShahidKhan232',
    profileUrl: 'https://github.com/ShahidKhan232',
    highlightRepos: [
        { name: 'Netflix-clone-k8s-end-to-end', description: 'Kubernetes DevSecOps pipeline & Netflix clone' },
        { name: 'Multi-Env-IaC', description: 'Multi-environment Terraform & Ansible' },
        { name: 'AlertOps-Automated-Incident-Response-System', description: 'Prometheus/Grafana alerting' },
    ],
    languages: ['Python', 'HCL', 'Shell', 'JavaScript', 'Dockerfile'],
};

export const contact = {
    headline: "Let's Build Something Reliable.",
    subtext:
        'Open to DevOps, Cloud, Infrastructure and Platform Engineering opportunities.',
    contactInfo: [
        {
            icon: Mail,
            label: 'Email',
            value: 'shahidkhan.95173@gmail.com',
            href: 'mailto:shahidkhan.95173@gmail.com',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/shahid-khan-985919317',
            href: 'https://linkedin.com/in/shahid-khan-985919317',
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/ShahidKhan232',
            href: 'https://github.com/ShahidKhan232',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 8421642046',
            href: 'tel:+918421642046',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Mumbai, Maharashtra, India',
            href: '#contact',
        },
    ],
    resumePath: '/resume.pdf',
    resumeDriveLink:
        'https://drive.google.com/file/d/16PC7htdFFsUHKPpYUq00cF9msfGz86wK/view?usp=sharing',
    formEndpoint: '',
};

export const footer = {
    name: 'Shahid Khan',
    title: 'DevOps & Cloud Engineer',
    tagline: 'AWS • Kubernetes • Terraform • CI/CD',
    copyright: '© 2026 Shahid Khan',
    links: {
        github: 'https://github.com/ShahidKhan232',
        linkedin: 'https://linkedin.com/in/shahid-khan-985919317',
        resume:
            'https://drive.google.com/file/d/1xxHLJrOQjcrPs-1G43xxpq6XtHjJka6t/view?usp=sharing',
    },
};
