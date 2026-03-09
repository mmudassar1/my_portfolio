import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "Building Scalable Architectures with modern MERN",
            excerpt: "Learn how to optimize your MongoDB queries and Express server for high-traffic applications.",
            date: "Oct 24, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
        },
        {
            id: 2,
            title: "The Power of Serverless Functions in Next.js",
            excerpt: "A deep dive into deploying edge functions and reducing latency for global users.",
            date: "Nov 12, 2025",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
        },
        {
            id: 3,
            title: "Mastering React Hooks",
            excerpt: "Advanced patterns for useMemo, useCallback, and custom hooks to keep your apps fast.",
            date: "Dec 05, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="py-20 max-w-[1400px] mx-auto px-8" id="blogs">
            <h2 className="text-4xl text-center mb-12 font-bold text-white">Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]">Articles</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map(blog => (
                    <div key={blog.id} className="glow-card group">
                        <div className="glow-card-bg"></div>
                        <div className="glow-card-content overflow-hidden">
                            <img src={blog.image} alt={blog.title} className="w-full h-[200px] object-cover border-b border-white/10" />
                            <div className="p-6">
                                <div className="flex gap-4 text-[#9ca3af] text-[0.85rem] mb-2">
                                    <span>📅 {blog.date}</span>
                                    <span>⏱️ {blog.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{blog.title}</h3>
                                <p className="text-[#9ca3af] mb-6 line-clamp-2">{blog.excerpt}</p>
                                <button className="text-white border-b border-[#22d3ee] pb-0.5 hover:text-[#22d3ee] hover:border-white transition-all">Read More →</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
