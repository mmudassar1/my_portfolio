import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Projects = () => {
    const location = useLocation();
    const isProjectsPage = location.pathname === '/projects';
    const [githubRepos, setGithubRepos] = useState([]);
    const [loading, setLoading] = useState(isProjectsPage);

    const featuredProjects = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
            title: 'Cloth Shoping Website',
            badge: 'Public',
            description: 'A full-featured e-commerce platform with product categories and payment integration.',
            tags: ['React', 'Commerce'],
            stars: 45,
            forks: 12,
            repoUrl: 'https://github.com/mmudassar1/codesistensy_ecommerce',
            demoUrl: 'https://codesistencyecommerce.netlify.app/'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80',
            title: 'Omni Food Project',
            badge: 'Public',
            description: 'A premium food delivery and subscription service platform.',
            tags: ['React', 'Food'],
            stars: 32,
            forks: 8,
            repoUrl: 'https://github.com/mmudassar1/Omni-food-project',
            demoUrl: 'https://cheerful-rabanadas-a43556.netlify.app/'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
            title: 'Store King',
            badge: 'Public',
            description: 'An advanced storefront and inventory management system.',
            tags: ['Dashboard', 'React'],
            stars: 28,
            forks: 5,
            repoUrl: 'https://github.com/mmudassar1/storeking',
            demoUrl: 'https://delightful-sunshine-bf5a04.netlify.app/'
        }
    ];

    useEffect(() => {
        if (isProjectsPage) {
            const fetchRepos = async () => {
                try {
                    const response = await fetch('https://api.github.com/users/mmudassar1/repos?sort=updated&per_page=100');
                    if (!response.ok) throw new Error('Failed to fetch');
                    const data = await response.json();

                    const formattedRepos = data
                        .filter(repo => !repo.fork)
                        .map((repo) => {
                            const repoName = repo.name.replace(/[-_]/g, ' ');

                            const t = repoName.toLowerCase();

                            // Demo URL overriding
                            let customDemoUrl = repo.homepage || repo.html_url;
                            if (t.includes('password')) {
                                customDemoUrl = 'https://sensational-valkyrie-c52022.netlify.app/';
                            } else if (t.includes('simon') || t.includes('siemen')) {
                                customDemoUrl = 'https://silver-bonbon-819e69.netlify.app/';
                            } else if (t.includes('cosmetic')) {
                                customDemoUrl = 'https://exquisite-crostata-b423e7.netlify.app/';
                            } else if (t.includes('omni') || t.includes('food')) {
                                customDemoUrl = 'https://cheerful-rabanadas-a43556.netlify.app/';
                            } else if (t.includes('store') && t.includes('king') || t.includes('storeking')) {
                                customDemoUrl = 'https://delightful-sunshine-bf5a04.netlify.app/';
                            } else if (t.includes('ecommerce') || t.includes('e commerce')) {
                                customDemoUrl = 'https://codesistencyecommerce.netlify.app/';
                            } else if (t.includes('hotel')) {
                                customDemoUrl = 'https://regal-smakager-693720.netlify.app/';
                            }

                            // Keyword-based image logic
                            let heroImage = '';
                            if (t.includes('ecommerce') || t.includes('shop') || t.includes('cart') || t.includes('store')) {
                                heroImage = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80'; // E-commerce
                            } else if (t.includes('chat') || t.includes('message') || t.includes('talk') || t.includes('social')) {
                                heroImage = 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80'; // Chat
                            } else if (t.includes('ai') || t.includes('deepseek') || t.includes('gpt') || t.includes('bot')) {
                                heroImage = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'; // AI
                            } else if (t.includes('portfolio') || t.includes('cv') || t.includes('resume')) {
                                heroImage = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80'; // Portfolio
                            } else if (t.includes('weather') || t.includes('climate')) {
                                heroImage = 'https://images.unsplash.com/photo-1504608524841-42fe6f0f5ee6?auto=format&fit=crop&q=80'; // Weather
                            } else if (t.includes('food') || t.includes('recipe') || t.includes('restaurant')) {
                                heroImage = 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80'; // Food
                            } else if (t.includes('dashboard') || t.includes('admin') || t.includes('analytics') || t.includes('panel')) {
                                heroImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'; // Dashboard
                            } else if (t.includes('game') || t.includes('play')) {
                                heroImage = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80'; // Gaming
                            } else if (t.includes('music') || t.includes('song') || t.includes('audio') || t.includes('player')) {
                                heroImage = 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80'; // Music
                            } else if (t.includes('health') || t.includes('fitness') || t.includes('gym') || t.includes('medical')) {
                                heroImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'; // Fitness
                            } else if (t.includes('hotel') || t.includes('booking') || t.includes('travel') || t.includes('tour')) {
                                heroImage = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80'; // Travel
                            } else if (t.includes('blog') || t.includes('news') || t.includes('post') || t.includes('article') || t.includes('notes')) {
                                heroImage = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80'; // Blog
                            } else {
                                const defaultImages = [
                                    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
                                    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
                                    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
                                    'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80',
                                    'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80',
                                    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80'
                                ];
                                let sum = 0;
                                for (let i = 0; i < t.length; i++) {
                                    sum += t.charCodeAt(i);
                                }
                                heroImage = defaultImages[sum % defaultImages.length];
                            }

                            return {
                                id: repo.id,
                                image: heroImage,
                                title: repoName,
                                badge: repo.private ? 'Private' : 'Public',
                                description: repo.description || 'A detailed project repository deployed on GitHub.',
                                tags: repo.language ? [repo.language] : ['Code'],
                                stars: repo.stargazers_count,
                                forks: repo.forks_count,
                                repoUrl: repo.html_url,
                                demoUrl: customDemoUrl
                            };
                        });
                    setGithubRepos(formattedRepos);
                } catch (error) {
                    console.error('Error fetching github repos:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchRepos();
        }
    }, [isProjectsPage]);

    const displayProjects = isProjectsPage ? githubRepos : featuredProjects;

    return (
        <section className="py-20 bg-[#0F0921]" id="projects">
            <div className="max-w-[1400px] mx-auto px-8">
                <h2 className="text-4xl text-center mb-12 font-bold text-white">
                    {isProjectsPage ? 'All ' : 'Featured '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]">Repositories</span>
                </h2>
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22d3ee]"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayProjects.map(project => (
                            <div key={project.id} className="glow-card group">
                                <div className="glow-card-bg"></div>
                                <div className="glow-card-content overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-[200px] object-cover border-b border-white/10" />
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                            <span className="text-[0.75rem] px-2 py-1 bg-white/10 rounded-full border border-white/10 text-white">{project.badge}</span>
                                        </div>
                                        <p className="text-[#9ca3af] text-sm mb-6 line-clamp-3">{project.description}</p>
                                        <div className="flex justify-between items-center mb-6 text-[0.85rem]">
                                            <div className="flex gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="before:content-['•'] before:text-[#3b82f6] before:mr-1 text-white">{tag}</span>
                                                ))}
                                            </div>
                                            <div className="flex gap-4 text-[#9ca3af]">
                                                <span>⭐ {project.stars}</span>
                                                <span>🔗 {project.forks}</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between border-t border-white/10 pt-4">
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-[#22d3ee] transition-colors flex items-center gap-1 group/link">
                                                Live Demo
                                                <svg className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                            </a>
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-[#22d3ee] transition-colors flex items-center gap-1 group/link">
                                                Repository
                                                <svg className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {!isProjectsPage && (
                    <div className="text-center mt-12">
                        <Link
                            to="/projects"
                            className="inline-block bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#3b82f6] text-white px-8 py-4 font-bold rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all shadow-lg hover:shadow-[#a855f7]/40"
                        >
                            See All Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
