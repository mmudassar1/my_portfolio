import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="py-20 px-8 bg-[#0F0921]" id="about">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-stretch">
                    <div className="about-preview-content flex flex-col justify-between">
                        <div>
                            <h2 className="font-mono text-4xl font-bold mb-2 text-white">Muhammad Mudassar</h2>
                            <p className="text-[#9ca3af] text-sm mb-8 leading-relaxed">
                                Full Stack Developer with 2 years of professional experience at Digigitz Software House. Specialized in the MERN stack with a passion for building scalable and efficient web solutions.
                            </p>

                            <h3 className="font-mono text-xl mb-4 text-white">Work History</h3>
                            <div className="mb-4">
                                <h4 className="text-sm mb-1 text-white font-medium"><span className="text-[#22d3ee]">AI & Modern Technologies</span> (2025-Present)</h4>
                                <p className="text-[#9ca3af] text-[0.85rem] leading-[1.5] mb-3">Working with modern technologies and AI, gaining hands-on experience and applying them to build practical, real-world applications.</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-sm mb-1 text-white font-medium"><span className="text-[#22d3ee]">Developer, Digigitz Software House</span> (2023-2025)</h4>
                                <p className="text-[#9ca3af] text-[0.85rem] leading-[1.5] mb-3">Professional experience in full-stack development, focusing on MERN stack architectures and performant web applications.</p>
                            </div>

                            <h3 className="font-mono text-xl mb-4 text-white">My Skills</h3>
                            <div className="flex flex-col gap-5 mb-8">
                                <div className="preview-skill">
                                    <div className="flex justify-between mb-1 text-[0.85rem] font-medium"><span className="text-[#22d3ee]">React.js</span><span className="text-white">90%</span></div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#22d3ee] rounded-full" style={{ width: '90%' }}></div></div>
                                </div>
                                <div className="preview-skill">
                                    <div className="flex justify-between mb-1 text-[0.85rem] font-medium"><span className="text-[#22d3ee]">Node.js / Express</span><span className="text-white">85%</span></div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#22d3ee] rounded-full" style={{ width: '85%' }}></div></div>
                                </div>
                                <div className="preview-skill">
                                    <div className="flex justify-between mb-1 text-[0.85rem] font-medium"><span className="text-[#22d3ee]">MongoDB</span><span className="text-white">85%</span></div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#22d3ee] rounded-full" style={{ width: '85%' }}></div></div>
                                </div>
                                <div className="preview-skill">
                                    <div className="flex justify-between mb-1 text-[0.85rem] font-medium"><span className="text-[#22d3ee]">Tailwind CSS</span><span className="text-white">80%</span></div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#22d3ee] rounded-full" style={{ width: '80%' }}></div></div>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/about"
                            className="inline-block bg-white/5 border border-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-medium text-center"
                        >
                            Learn More About Me
                        </Link>
                    </div>
                    <div className="border border-[#22d3ee]/40 rounded-lg p-4 flex justify-center items-center h-full">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" alt="Developer Illustration" className="w-full h-full rounded-lg object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
