import { Code2, Wrench, Cloud, Monitor, Mail, Phone, MapPin } from 'lucide-react';

export const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/#contact' },
];

export const hero = {
    greeting: 'Welcome to my portfolio',
    name: 'Shahid Shahadat Khan',
    title: 'DevOps Engineer',
    tagline: 'Building scalable, automated cloud solutions with AWS and DevOps tools',
    socials: {
        github: 'https://github.com/ShahidKhan232',
        linkedin: 'https://linkedin.com/in/shahid-khan-985919317',
        email: 'mailto:shahidkhan.95173@gmail.com',
    },
    resumePath: '/resume.pdf',
    resumeDriveLink: 'https://drive.google.com/file/d/1vNl4eprM9F6LfbUGiYfRwIh464Zc5pSr/view?usp=sharing',
};

export const projects = [
    {
        title: 'AlertOps – Automated Incident Response System',
        description:
            'Built a comprehensive Docker-based monitoring stack with real-time alerting capabilities for production environments.',
        highlights: [
            'Implemented monitoring stack using Prometheus, Grafana, and Alertmanager',
            'Integrated Flask application and Windows Exporter for comprehensive metrics collection',
            'Configured Twilio SMS integration for real-time incident notifications',
            'Containerized entire stack for easy deployment and scalability',
        ],
        technologies: ['Docker', 'Prometheus', 'Grafana', 'Alertmanager', 'Flask', 'Twilio'],
        github: 'https://github.com/ShahidKhan232/AlertOps-Automated-Incident-Response-System',
        color: 'from-orange-500 via-red-500 to-pink-500',
    },
    {
        title: 'Ecommerce Website Deployment – Cloud Infrastructure',
        description:
            'Deployed a production-ready full-stack e-commerce application on AWS EKS with industry-standard DevOps practices.',
        highlights: [
            'Deployed application on AWS EKS (Elastic Kubernetes Service)',
            'Implemented MongoDB database with high availability',
            'Configured Nginx reverse proxy for load balancing',
            'Applied DevOps best practices for performance optimization and security',
        ],
        technologies: ['AWS EKS', 'Docker', 'Kubernetes', 'MongoDB', 'Nginx'],
        github: 'https://github.com/ShahidKhan232/Devops-Project',
        color: 'from-blue-500 via-purple-500 to-cyan-500',
    },
    {
        title: 'Full Stack CI/CD Pipeline – Microservices Deployment',
        description:
            'Automated complete deployment pipeline for a microservices architecture with zero-downtime deployments.',
        highlights: [
            'Automated CI/CD pipeline using Jenkins with GitHub webhooks',
            'Deployed React frontend, Spring Boot backend with dual database support',
            'Implemented Docker Compose for multi-container orchestration',
            'Configured automated SSH key management and deployment to AWS EC2',
        ],
        technologies: ['Jenkins', 'Docker', 'AWS EC2', 'React', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
        github: 'https://github.com/ShahidKhan232/Full-stack-cicd-pipeline',
        color: 'from-green-500 via-teal-500 to-cyan-500',
    },
];

export const certifications = [
    {
        name: 'Introduction to Linux',
        issuer: 'The Linux Foundation',
        link: 'https://www.credly.com/badges/ed7c4db1-8e23-4c2f-a95a-12bcf450ae88/linked_in_profile',
        icon: '🐧',
    },
    {
        name: 'Git',
        issuer: 'KodeKloud',
        link: 'https://learn.kodekloud.com/certificate/8d917505-3220-4eee-aab8-ab119dde5ebb',
        icon: '📦',
    },
    {
        name: 'Network Basics',
        issuer: 'Cisco',
        link: 'https://www.credly.com/badges/67412521-733f-4373-acbf-77995b51e55a/linked_in_profile',
        icon: '🌐',
    },
    {
        name: 'Docker',
        issuer: 'KodeKloud',
        link: 'https://learn.kodekloud.com/certificate/27e2b303-aa12-4718-9f28-230911eada41',
        icon: '🐳',
    },
    {
        name: 'Google Cloud Computing Foundations',
        issuer: 'Google',
        link: 'https://www.credly.com/badges/5be6f7da-3df6-44e7-aa6b-b5adea711c99/linked_in_profile',
        icon: '☁️',
    },
    {
        name: 'Jenkins',
        issuer: 'KodeKloud',
        link: 'https://learn.kodekloud.com/certificate/6a6fb192-2068-46fc-a148-4cf576d275d9',
        icon: '⚙️',
    },
];

export const about = {
    bio: "I'm a DevOps Engineer passionate about automation, cloud infrastructure, and CI/CD pipelines. Currently pursuing a BE in Computer Engineering at Gharda Institute of Technology, I aim to design secure, scalable, and efficient deployment architectures on AWS.",
    education: {
        degree: 'BE in Computer Engineering',
        school: 'Gharda Institute of Technology',
        status: 'Current Student',
    },
    skills: [
        {
            category: 'Programming',
            icon: Code2,
            items: ['Python', 'SQL', 'Shell Scripting'],
        },
        {
            category: 'DevOps Tools',
            icon: Wrench,
            items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Ansible', 'JFrog'],
        },
        {
            category: 'Cloud Services',
            icon: Cloud,
            items: ['EC2', 'S3', 'RDS', 'IAM', 'VPC', 'ECS', 'ECR'],
        },
        {
            category: 'Monitoring',
            icon: Monitor,
            items: ['Prometheus', 'Grafana', 'Alertmanager'],
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
        resumeDriveLink: 'https://drive.google.com/file/d/1vNl4eprM9F6LfbUGiYfRwIh464Zc5pSr/view?usp=sharing',
    },
    formEndpoint: '',
    footerText: '© 2025 Shahid Shahadat Khan. Built with Next.js, TypeScript, and Tailwind CSS.',
};

export const experience = [
    {
        role: 'AWS Intern',
        company: 'Therayu',
        start: 'May 2025',
        end: 'October 2025',
        location: 'Remote',
        bullets: [
            'Designed and implemented AWS cloud architectures including EC2, S3, RDS, IAM, VPC, ECS, and ECR',
            'Supported DevOps initiatives including CI/CD pipelines, Dockerization, and infrastructure automation using Terraform and Jenkins',
            'Collaborated with cross-functional teams to optimize deployment workflows and ensure scalable, secure infrastructure',
        ],
        techTags: ['AWS', 'Docker', 'Terraform', 'Jenkins', 'CI/CD'],
    },
];

export const stats = [
    { label: 'Projects Completed', value: 3, suffix: '+' },
    { label: 'Technologies Mastered', value: 15, suffix: '+' },
    { label: 'Certifications Earned', value: 6, suffix: '' },
    { label: 'Years Experience', value: 1, suffix: '+' },
];
