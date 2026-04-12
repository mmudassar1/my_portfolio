import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-16 relative overflow-hidden bg-[#030014]" id="cta">
            {/* Dynamic Background Glows */}
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#a855f7]/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#22d3ee]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="max-w-[1100px] mx-auto px-6 relative z-10" data-aos="zoom-in">
                <div className="relative group">
                    {/* Animated Border/Glow Container */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#a855f7] via-[#22d3ee] to-[#a855f7] rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                    
                    {/* Glassmorphic Card Content */}
                    <div className="relative glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 text-center overflow-hidden">
                        {/* Decorative Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a855f7]/20 to-[#22d3ee]/20 text-white mb-6 border border-white/10 animate-float">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight tracking-tight">
                            Got a project? 
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#22d3ee]">Let's build together.</span>
                        </h2>
                        
                        <p className="text-gray-400 text-base md:text-lg max-w-[650px] mx-auto mb-10 leading-relaxed">
                            Looking for a developer who can turn complex problems into elegant solutions? 
                            Reach out today to discuss your next big idea.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                to="/contact"
                                className="group/btn relative px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 overflow-hidden text-sm md:text-base"
                            >
                                <span className="relative z-10 font-bold">Start a Conversation</span>
                                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                                {/* Button Hover Fill */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#22d3ee] to-[#a855f7] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            
                            <a 
                                href="mailto:mudassarmalik831@gmail.com" 
                                className="px-10 py-5 bg-transparent border-2 border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all backdrop-blur-sm flex items-center gap-3"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                mudassarmalik831@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#a855f7]/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#22d3ee]/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
