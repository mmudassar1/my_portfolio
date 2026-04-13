import React, { useState, useEffect } from 'react';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

const About = () => {
    const [animateSkills, setAnimateSkills] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateSkills(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const skills = [
        { name: "React.js & Context API", level: 90 },
        { name: "Node.js & Express.js", level: 85 },
        { name: "MongoDB & Mongoose", level: 80 },
        { name: "Tailwind CSS & Zustand", level: 85 },
        { name: "Next.js & React Router", level: 80 },
        { name: "TypeScript & JavaScript", level: 85 },
        { name: "Redux & RTK Query", level: 80 },
        { name: "Git, GitHub & Postman", level: 85 }
    ];

    return (
        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-10" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Column: Bio */}
                <div className="about-content" data-aos="fade-right">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white leading-tight">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea]">Me</span>
                    </h2>
                    <p className="text-[#9ca3af] text-md leading-[1.8] mb-12">
                        I started my journey in web development with a strong curiosity for how things work behind the screen. Over the past 4+ years, that curiosity has evolved into real-world experience building modern, scalable web applications.<br /><br />

                        Along the way, I’ve had the opportunity to work professionally for 2 years at Digigitz Software House, where I contributed to multiple real-world projects. From developing eCommerce platforms to building SaaS-based applications, each project helped me grow as a problem solver and a developer.<br /><br />

                        I specialize in the MERN stack — working with React, Node.js, and MongoDB to create fast, efficient, and user-friendly applications. I enjoy turning ideas into functional products and writing clean, maintainable code that delivers real value.<br /><br />

                        Today, with 10+ completed projects, I continue to focus on building scalable solutions while constantly learning and improving my craft.
                    </p>
                </div>

                {/* Right Column: Stats Cards */}
                <div className="grid grid-cols-1 gap-8 md:sticky md:top-24" data-aos="fade-left">
                    {[
                        { label: "4+ Years Experience", value: 4, icon: "💻", color: "from-[#a855f7] to-[#c084fc]" },
                        { label: "10+ Projects Completed", value: 10, icon: "🚀", color: "from-[#22d3ee] to-[#06b6d4]" },
                        { label: "2 Years Industry Experience", value: 2, icon: "🏢", color: "from-[#6366f1] to-[#a855f7]" }
                    ].map((stat, i) => (
                        <div key={i} className="relative group/card">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] rounded-2xl blur opacity-10 group-hover/card:opacity-20 transition duration-500"></div>
                            <div className="relative bg-[#0d0c22]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 flex items-center gap-6 group-hover/card:border-[#a855f7]/30 transition-all duration-300">
                                <div className={`w-16 h-16 shrink-0 flex items-center justify-center bg-gradient-to-br ${stat.color} rounded-2xl text-2xl shadow-lg shadow-black/20 group-hover/card:scale-110 transition-transform`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-white text-2xl font-bold mb-1 flex items-center gap-3">
                                        <span className="text-[#22d3ee] text-3xl">✔</span>
                                        <span>{stat.label}</span>
                                    </div>
                                    <p className="text-[#9ca3af] text-sm font-medium">Delivering excellence through code.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Horizontally Spread Skills Section */}
            <div className="mt-24 mb-24" data-aos="fade-up">
                <h3 className="text-2xl font-bold mb-12 text-white font-mono flex items-center gap-3 justify-center">
                    <span className="w-8 h-[2px] bg-[#22d3ee]"></span>
                    Core Stack & Expert Skills
                    <span className="w-8 h-[2px] bg-[#22d3ee]"></span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map(skill => (
                        <div key={skill.name} className="skill bg-white/5 p-6 rounded-xl border border-white/5 hover:border-[#a855f7]/30 transition-all group/skill">
                            <div className="flex justify-between mb-4 text-white font-medium text-sm">
                                <span className="group-hover/skill:text-[#22d3ee] transition-colors">{skill.name}</span>
                                <span className="text-[#a855f7]">{animateSkills ? <CountUp end={skill.level} suffix="%" /> : "0%"}</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#a855f7] to-[#22d3ee] rounded-full transition-all duration-[2000ms] ease-out"
                                    style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative border-l-2 border-[#22d3ee]/20 ml-4 md:ml-6 space-y-10 md:space-y-12 py-8" data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl pl-15 md:pl-15 font-bold mb-6 text-white leading-tight">
                    My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea]">Journey</span>
                </h2>
                {[
                    { title: "AI & Modern Technologies", date: "Apr 2025 - Present", desc: "Working with modern technologies and AI, gaining hands-on experience and applying them to build practical, real-world applications. " },
                    { title: "Full Stack Developer, Digigitz Software House", date: "Jul 2023 - Mar 2025", desc: "Contributed to the development of complex web applications using the MERN stack. Focused on optimizing database performance, implementing secure authentication systems, and creating responsive user interfaces." },
                    { title: "Project-Based Learning & Development", date: "2021 - 2023", desc: "Focused on self-learning, overcoming challenges, and building real-world projects to strengthen my practical development skills." },
                    { title: "Started Learning Web Development", date: "2020", desc: "Started learning web development and built my first website using HTML, CSS, and JavaScript" }
                ].map((item, i) => (
                    <div key={i} className="relative pl-8 md:pl-12">
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#22d3ee] shadow-[0_0_15px_#22d3ee]"></div>
                        <div className="glow-card group">
                            <div className="glow-card-bg"></div>
                            <div className="glow-card-content p-6 md:p-8">
                                <div className="text-xl font-bold text-white mb-2">{item.title}</div>
                                <div className="text-[#a855f7] font-mono text-sm mb-4">{item.date}</div>
                                <div className="text-[#9ca3af] leading-relaxed text-sm md:text-base">{item.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
