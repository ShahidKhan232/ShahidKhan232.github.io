export type GitHubRepo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    fork: boolean;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    topics: string[];
    updated_at: string;
    created_at: string;
    pushed_at: string;
    visibility: string;
    homepage: string | null;
    size: number;
    default_branch: string;
};

export type GitHubUser = {
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
    bio: string | null;
    name: string | null;
};

export type FilterCategory =
    | 'All'
    | 'DevOps'
    | 'Cloud'
    | 'Kubernetes'
    | 'Terraform'
    | 'CI/CD'
    | 'AWS'
    | 'Monitoring'
    | 'DevSecOps'
    | 'Backend'
    | 'Full Stack'
    | 'AI / ML'
    | 'Other';

export const FILTER_CATEGORIES: FilterCategory[] = [
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
];

export type SortOption =
    | 'featured'
    | 'updated'
    | 'stars'
    | 'forks'
    | 'alphabetical';

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'updated', label: 'Recently Updated' },
    { value: 'stars', label: 'Most Stars' },
    { value: 'forks', label: 'Most Forked' },
    { value: 'alphabetical', label: 'Alphabetical' },
];

export type EnrichedRepo = GitHubRepo & {
    displayName: string;
    categories: FilterCategory[];
    technologies: string[];
    isFeatured: boolean;
    enrichedDescription: string;
};
