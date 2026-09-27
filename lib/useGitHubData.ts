'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import type { EnrichedRepo, GitHubUser, FilterCategory, SortOption } from './types';
import { fetchGitHubRepos, fetchGitHubUser, getEnrichedRepos } from './github';
import { fallbackRepos } from './githubFallback';

type UseGitHubDataReturn = {
    repos: EnrichedRepo[];
    user: GitHubUser | null;
    loading: boolean;
    error: boolean;
    isLive: boolean;
    filteredRepos: EnrichedRepo[];
    featuredRepos: EnrichedRepo[];
    activeFilter: FilterCategory;
    setActiveFilter: (filter: FilterCategory) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    sortBy: SortOption;
    setSortBy: (sort: SortOption) => void;
};

export function useGitHubData(): UseGitHubDataReturn {
    const [repos, setRepos] = useState<EnrichedRepo[]>([]);
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isLive, setIsLive] = useState(false);
    const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('featured');

    useEffect(() => {
        let cancelled = false;

        async function load() {
            setLoading(true);

            // Fetch repos
            const rawRepos = await fetchGitHubRepos();
            if (!cancelled) {
                if (rawRepos) {
                    setRepos(getEnrichedRepos(rawRepos));
                    setIsLive(true);
                    setError(false);
                } else {
                    // Fallback
                    setRepos(getEnrichedRepos(fallbackRepos));
                    setIsLive(false);
                    setError(true);
                }
            }

            // Fetch user profile
            const userData = await fetchGitHubUser();
            if (!cancelled && userData) {
                setUser(userData);
            }

            if (!cancelled) setLoading(false);
        }

        load();
        return () => { cancelled = true; };
    }, []);

    // Featured repos
    const featuredRepos = useMemo(
        () => repos.filter((r) => r.isFeatured).sort((a, b) => {
            // Sort featured by stars descending, then forks, then updated
            if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
            if (b.forks_count !== a.forks_count) return b.forks_count - a.forks_count;
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        }),
        [repos]
    );

    // Filter + search + sort
    const filteredRepos = useMemo(() => {
        let result = [...repos];

        // Category filter
        if (activeFilter !== 'All') {
            result = result.filter((r) => r.categories.includes(activeFilter));
        }

        // Search
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            result = result.filter((r) =>
                r.displayName.toLowerCase().includes(q) ||
                r.name.toLowerCase().includes(q) ||
                r.enrichedDescription.toLowerCase().includes(q) ||
                r.technologies.some((t) => t.toLowerCase().includes(q)) ||
                r.categories.some((c) => c.toLowerCase().includes(q)) ||
                (r.language || '').toLowerCase().includes(q)
            );
        }

        // Sort
        switch (sortBy) {
            case 'featured':
                result.sort((a, b) => {
                    if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
                    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                });
                break;
            case 'updated':
                result.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
                break;
            case 'stars':
                result.sort((a, b) => b.stargazers_count - a.stargazers_count);
                break;
            case 'forks':
                result.sort((a, b) => b.forks_count - a.forks_count);
                break;
            case 'alphabetical':
                result.sort((a, b) => a.displayName.localeCompare(b.displayName));
                break;
        }

        return result;
    }, [repos, activeFilter, searchQuery, sortBy]);

    return {
        repos,
        user,
        loading,
        error,
        isLive,
        filteredRepos,
        featuredRepos,
        activeFilter,
        setActiveFilter,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
    };
}
