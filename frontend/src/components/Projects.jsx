import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
            title: 'E-Commerce Platform',
            badge: 'Public',
            description: 'A full-featured MERN stack e-commerce platform with product search, cart, and payment processing. Features JWT authentication and Stripe API integration.',
            tags: ['MERN', 'Zustand', 'Stripe'],
            stars: 45,
            forks: 12,
            repoUrl: 'https://github.com/mmudassar1/codesistensy_ecommerce',
            demoUrl: '#'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80',
            title: 'Full Stack Chat App',
            badge: 'Public',
            description: 'Real-time chat application with user authentication and private messaging using WebSocket (Socket.io) for instant delivery.',
            tags: ['Socket.io', 'React', 'Node.js'],
            stars: 32,
            forks: 8,
            repoUrl: 'https://github.com/mmudassar1/Chat-App1',
            demoUrl: '#'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
            title: 'Deepseek AI Integration',
            badge: 'Public',
            description: 'Advanced AI-driven application focusing on natural language processing and real-time response generation.',
            tags: ['AI', 'Next.js', 'Deepseek'],
            stars: 67,
            forks: 15,
            repoUrl: 'https://github.com/mmudassar1/deepseekai',
            demoUrl: '#'
        }
    ];

    return (
        <section className="py-20 bg-[#0F0921]" id="projects">
            <div className="max-w-[1400px] mx-auto px-8">
                <h2 className="text-4xl text-center mb-12 font-bold text-white">Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]">Repositories</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
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
                <div className="text-center mt-12">
                    <Link
                        to="/projects"
                        className="inline-block bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#3b82f6] text-white px-8 py-4 font-bold rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all shadow-lg hover:shadow-[#a855f7]/40"
                    >
                        See All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
