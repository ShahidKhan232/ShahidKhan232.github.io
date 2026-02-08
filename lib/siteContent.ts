import { Code2, Wrench, Cloud, Monitor, Mail, Phone, MapPin } from 'lucide-react';

export const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

export const hero = {
    greeting: 'Welcome to my portfolio',
    name: 'Shahid Shahadat Khan',
    title: 'DevOps Engineer',
    tagline: 'I turn infrastructure chaos into calm, automated systems.',
    socials: {
        github: 'https://github.com/ShahidKhan232',
        linkedin: 'https://linkedin.com/in/shahid-khan-985919317',
        email: 'mailto:shahidkhan.95173@gmail.com',
    },
    resumePath: '/resume.pdf',
    resumeDriveLink: 'https://drive.google.com/file/d/10bihR728rXyvaNHt68AFia9EFhATAf5G/view?usp=sharing',
};

export const projects = [
    {
        title: 'Multi-Environment Infrastructure as Code',
        description:
            'Designed reusable Terraform modules for dev, staging, and prod environments with automated Ansible configuration management.',
        technologies: ['Terraform', 'Ansible', 'AWS S3', 'DynamoDB', 'Nginx'],
        github: 'https://github.com/ShahidKhan232/Multi-Env-IaC',
        image: '/Images/Multi-env-project.gif',
        color: 'from-purple-500 via-indigo-500 to-blue-500',
    },
    {
        title: 'Wisecow Application Deployment on AWS EKS',
        description:
            'Deployed containerized application on AWS EKS with Terraform-provisioned infrastructure supporting 99.9% uptime.',
        technologies: ['AWS EKS', 'Terraform', 'Kubernetes', 'NGINX Ingress', 'GitHub Actions', 'cert-manager'],
        github: 'https://github.com/ShahidKhan232/Containerisation-and-Deployment-of-Wisecow-Application-on-Kubernetes-',
        image: '/Images/wisecow-deployment.png',
        color: 'from-blue-500 via-cyan-500 to-teal-500',
    },
    {
        title: 'Three-Tier High Availability Architecture on AWS',
        description:
            'Designed highly available three-tier architecture using ALB, Auto Scaling Groups, and Multi-AZ deployment.',
        technologies: ['AWS ALB', 'Auto Scaling', 'RDS', 'CloudFront', 'Route53', 'ACM', 'VPC'],
        github: 'https://github.com/ShahidKhan232/Cloud-Projects/tree/main/Three-Tier-Architecture',
        image: '/Images/three-tier-project.png',
        color: 'from-orange-500 via-red-500 to-pink-500',
    },
    {
        title: 'Serverless Image Processing & Cost Optimization',
        description:
            'Built event-driven serverless workflows using Lambda, S3 triggers, and SNS with near-zero idle cost.',
        technologies: ['AWS Lambda', 'S3', 'SNS', 'IAM', 'Python'],
        github: 'https://github.com/ShahidKhan232/Cloud-Projects/tree/main/AWS-Serverless',
        image: '/Images/Serverless.gif',
        color: 'from-green-500 via-emerald-500 to-teal-500',
    },
    {
        title: 'Automated Monitoring & Alerting System',
        description:
            'Implemented Prometheus and Grafana dashboards monitoring 20+ system metrics in real time with proactive alerting.',
        technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'Docker'],
        github: 'https://github.com/ShahidKhan232/AlertOps-Automated-Incident-Response-System',
        image: '/Images/alertops.png',
        color: 'from-yellow-500 via-orange-500 to-red-500',
    },
];


export const about = {
    bio: "I design and operate cloud-native systems that scale reliably and ship fast. From infrastructure as code to Kubernetes deployments and CI/CD automation, I focus on building systems that are secure, observable, and easy to operate. I care about clean automation, ownership, and shipping resilient products.",
    education: {
        degree: 'Bachelor of Engineering in Computer Engineering',
        school: 'Gharda Institute of Technology, Khed, Maharashtra',
        status: 'Aug 2022 – May 2026',
    },
    skills: [
        {
            category: 'Infrastructure & Cloud',
            icon: Cloud,
            items: [
                { name: 'Linux', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png' },
                { name: 'AWS', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
                { name: 'Terraform', iconUrl: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg' },
                { name: 'Ansible', iconUrl: 'https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg' },
            ],
        },
        {
            category: 'Containerization & Orchestration',
            icon: Code2,
            items: [
                { name: 'Docker', iconUrl: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
                { name: 'Kubernetes', iconUrl: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg' },
                { name: 'Helm', iconUrl: 'https://www.vectorlogo.zone/logos/helmsh/helmsh-icon.svg' },
                { name: 'ArgoCD', iconUrl: 'https://avatars.githubusercontent.com/u/30269780?s=200&v=4' },
            ],
        },
        {
            category: 'CI/CD & Automation',
            icon: Wrench,
            items: [
                { name: 'Jenkins', iconUrl: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg' },
                { name: 'Git', iconUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
                { name: 'GitHub Actions', iconUrl: 'https://avatars.githubusercontent.com/u/44036562?s=200&v=4' },
            ],
        },
        {
            category: 'Monitoring & Observability',
            icon: Monitor,
            items: [
                { name: 'Prometheus', iconUrl: 'https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg' },
                { name: 'Grafana', iconUrl: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg' },
            ],
        },
        {
            category: 'Programming Languages',
            icon: Code2,
            items: [
                { name: 'Python', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
                { name: 'Bash', iconUrl: 'https://upload.vectorlogo.zone/logos/gnu_bash/images/66582b8e-a291-4a1b-b89c-76628277a33b.svg' },
            ],
        },
    ],
};

export const contact = {
    contactInfo: [
        {
            icon: Mail,
            label: 'Email',
            value: 'shahidkhan.95173@gmail.com',
            href: 'mailto:shahidkhan.95173@gmail.com',
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
            value: 'Devgad, Maharashtra, India',
            href: '#',
        },
    ],
    cta: {
        heading: 'Looking for a DevOps Engineer?',
        body: "I'm currently open to new opportunities and would love to discuss how I can contribute to your team.",
        resumePath: '/resume.pdf',
        resumeDriveLink: 'https://drive.google.com/file/d/10bihR728rXyvaNHt68AFia9EFhATAf5G/view?usp=sharing',
    },
    formEndpoint: '',
    footerText: '© 2025 Shahid Shahadat Khan. Built with Next.js, TypeScript, and Tailwind CSS.',
};

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

export const stats = [
    { label: 'Projects Completed', value: 5, suffix: '+' },
    { label: 'Technologies Mastered', value: 20, suffix: '+' },
    { label: 'Deployment Time Reduction', value: 65, suffix: '%' },
    { label: 'Uptime Achievement', value: 99.9, suffix: '%' },
];
