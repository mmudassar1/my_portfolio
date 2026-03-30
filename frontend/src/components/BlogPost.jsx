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
                    
                    <p className="mb-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Introduction to the Architecture</h2>
                    <p className="mb-6 leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Implementation Details</h2>
                    <p className="mb-6 leading-relaxed">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                    </p>

                    <div className="bg-[#020617] p-6 rounded-xl border border-white/10 my-10 shadow-xl overflow-x-auto relative group">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a855f7] to-[#22d3ee]"></div>
                         <pre className="m-0 text-[#22d3ee] text-sm md:text-base font-mono">
{`// Example Implementation
const optimizeQuery = async () => {
    return await db.collection.find().lean();
};`}
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
                    <p className="mb-6 leading-relaxed">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
