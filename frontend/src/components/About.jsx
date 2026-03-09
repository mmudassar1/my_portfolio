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
        { name: "Tailwind CSS & Zustand", level: 85 }
    ];

    return (
        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-10" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                <div className="about-content order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Muhammad <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea]">Mudassar</span>
                    </h2>
                    <p className="text-[#9ca3af] text-lg leading-relaxed mb-10">
                        A results-driven Full Stack Developer with 2 years of professional experience at Digigitz Software House and a solid background in the MERN stack. I specialize in building scalable, high-performance web applications and have a proven track record of delivering clean, efficient code for real-world projects.
                    </p>

                    <h3 className="text-2xl font-bold mb-8 text-white font-mono flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#22d3ee]"></span>
                        My Skills
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map(skill => (
                            <div key={skill.name} className="skill bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#a855f7]/30 transition-all">
                                <div className="flex justify-between mb-3 text-white font-medium text-sm">
                                    <span>{skill.name}</span>
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
                <div className="flex justify-center items-center order-1 lg:order-2">
                    <div className="relative border border-[#22d3ee]/30 p-6 md:p-8 rounded-2xl bg-[#0d0c22]/40 backdrop-blur-sm group overflow-hidden max-w-[500px] w-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 to-[#22d3ee]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png"
                            alt="Developer Illustration"
                            className="w-full h-auto object-contain relative z-10"
                        />
                    </div>
                </div>
            </div>

            <div className="relative border-l-2 border-[#22d3ee]/20 ml-2 md:ml-4 space-y-10 md:space-y-12 py-8">
                {[
                    { title: "MERN Stack Trainee, PNY Trainings", date: "Apr 2025 - Jul 2025", desc: "Intensive training in MERN stack at Arfa Tower. Proficient in JavaScript, React, Node.js, and MongoDB, with a strong foundation in building responsive web applications." },
                    { title: "Full Stack Developer, Digigitz Software House", date: "Jul 2023 - Mar 2025", desc: "Contributed to the development of complex web applications using the MERN stack. Focused on optimizing database performance, implementing secure authentication systems, and creating responsive user interfaces." },
                    { title: "ADP in Computer Science, Riphah International University", date: "2021 - 2023", desc: "Specialized in computer science principles, programming, and software development, providing a solid theoretical and practical foundation." }
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
