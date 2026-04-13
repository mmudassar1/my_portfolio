import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogData } from './Blogs';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogData.find(b => b.id.toString() === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="py-32 text-center text-white min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                <button onClick={() => navigate('/blogs')} className="text-[#22d3ee] hover:underline">← Back to Blogs</button>
            </div>
        );
    }

    return (
        <article className="py-20 md:py-32 bg-[#030014] min-h-screen relative overflow-hidden" id="blog-post">
            {/* Ambient Background */}
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#a855f7]/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-[800px] mx-auto px-6 md:px-10 relative z-10 text-gray-300">
                <Link to="/blogs" className="text-[#22d3ee] hover:underline mb-8 inline-flex items-center gap-2 transition-all hover:-translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Articles
                </Link>

                <div className="flex gap-4 text-[#9ca3af] text-sm mb-6 font-medium">
                    <span>📅 {blog.date}</span>
                    <span className="text-[#22d3ee]">⏱️ {blog.readTime}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-[1.2] tracking-tight">
                    {blog.title}
                </h1>

                <div className="relative mb-12 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <img src={blog.image} alt={blog.title} className="relative w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-2xl border border-white/10" />
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="text-xl text-gray-200 leading-relaxed mb-10 border-l-4 border-[#22d3ee] pl-6 italic bg-white/5 py-4 pr-4 rounded-r-lg">
                        {blog.excerpt}
                    </p>
                    
                    {blog.content ? (
                        blog.content.map((section, index) => {
                            if (section.type === 'paragraph') {
                                return <p key={index} className="mb-6 leading-relaxed text-gray-300">{section.text}</p>;
                            }
                            if (section.type === 'heading') {
                                return <h2 key={index} className="text-3xl font-bold text-white mt-12 mb-6">{section.text}</h2>;
                            }
                            if (section.type === 'code') {
                                return (
                                    <div key={index} className="bg-[#020617] p-6 rounded-xl border border-white/10 my-10 shadow-xl overflow-x-auto relative group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a855f7] to-[#22d3ee]"></div>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Code Block</span>
                                            <button 
                                                onClick={() => navigator.clipboard.writeText(section.code)}
                                                className="text-xs text-[#22d3ee] hover:text-white transition-colors flex items-center gap-1"
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                                Copy
                                            </button>
                                        </div>
                                        <pre className="m-0 text-[#22d3ee] text-sm md:text-base font-mono leading-relaxed">
                                            {section.code}
                                        </pre>
                                    </div>
                                );
                            }
                            return null;
                        })
                    ) : (
                        <p className="text-gray-400">Content is being updated...</p>
                    )}
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
