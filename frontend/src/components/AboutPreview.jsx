import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="py-20 px-8 bg-[#0F0921]" id="about">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className=" mb-15 md:mb-24 relative" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                        <h2 className="text-6xl text-center font-bold text-white">About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea]">Me</span></h2>
                    </h2>
                    <p className="text-[#9ca3af] text-md max-w-[850px] mx-auto leading-relaxed px-4">
                        A passionate Full Stack Developer with 4+ years of experience in creating modern web solutions and solving complex technical challenges.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-stretch">
                    <div className="about-preview-content flex flex-col justify-between order-2 lg:order-1">
                        <div>
                            <p className="text-[#9ca3af] text-sm mb-8 leading-relaxed">
                                I started my journey in web development with a strong curiosity for how things work behind the screen. Over the past 4+ years, that curiosity has evolved into real-world experience building modern, scalable web applications.<br /><br />

                                Along the way, I’ve had the opportunity to work professionally for 2 years at Digigitz Software House, where I contributed to multiple real-world projects. From developing eCommerce platforms to building SaaS-based applications, each project helped me grow as a problem solver and a developer.<br /><br />

                                I specialize in the MERN stack — working with React, Node.js, and MongoDB to create fast, efficient, and user-friendly applications. I enjoy turning ideas into functional products and writing clean, maintainable code that delivers real value.<br /><br />

                                Today, with 10+ completed projects, I continue to focus on building scalable solutions while constantly learning and improving my craft.
                            </p>

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
                            className="inline-block bg-white/5 border border-white/10 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-white/10 transition-all font-medium text-center text-sm md:text-base"
                        >
                            Learn More About Me
                        </Link>
                    </div>
                    <div className="border border-[#22d3ee]/40 rounded-lg p-4 flex justify-center items-center h-full order-1 lg:order-2 mb-8 lg:mb-0">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" alt="Developer Illustration" className="w-full max-h-[250px] lg:max-h-full rounded-lg object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
