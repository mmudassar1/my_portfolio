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

const Stats = () => {
    const statsData = [
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>,
            value: 4,
            suffix: "+",
            label: "Years Coding"
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><polyline points="9 14 12 17 16 11"></polyline></svg>,
            value: 15,
            suffix: "+",
            label: "Projects Completed"
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
            value: 15,
            suffix: "+",
            label: "Happy Clients"
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>,
            value: 100,
            suffix: "%",
            label: "Code Quality"
        }
    ];

    return (
        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center" id="stats">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2" data-aos="fade-right">
                {statsData.map((stat, i) => (
                    <div key={i} className="glow-card group h-full">
                        <div className="glow-card-bg"></div>
                        <div className="glow-card-content p-6 md:p-8 justify-center items-center text-center sm:items-start sm:text-left">
                            <div className="mb-4 text-[#22d3ee] group-hover:scale-110 transition-transform duration-500">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                                <CountUp end={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-gray-400 font-medium text-sm md:text-base">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Code Block Focus */}
            <div className="relative group w-full lg:w-1/2" data-aos="fade-left">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#020617] p-6 md:p-10 rounded-2xl font-mono text-xs md:text-sm lg:text-[15px] leading-relaxed border border-white/10 shadow-2xl overflow-x-auto">
                    <pre className="text-gray-300 min-w-fit">
                        <code>
                            <span className="text-[#c678dd]">class</span> <span className="text-[#e5c07b]">MuhammadMudassar</span> {'{\n'}
                            {'  '}<span className="text-[#61afef]">name</span>: <span className="text-[#98c379]">"Mudassar"</span>,<br />
                            {'  '}<span className="text-[#61afef]">role</span>: <span className="text-[#98c379]">"Full Stack Dev"</span>,<br />
                            {'  '}<span className="text-[#61afef]">skills</span>: {'{\n'}
                            {'    '}<span className="text-[#61afef]">frontend</span>: [<br />
                            {'      '}<span className="text-[#98c379]">"React/Next"</span>,<br />
                            {'      '}<span className="text-[#98c379]">"Tailwind"</span>,<br />
                            {'    '}],<br />
                            {'    '}<span className="text-[#61afef]">backend</span>: [<br />
                            {'      '}<span className="text-[#98c379]">"Node/Express"</span>,<br />
                            {'      '}<span className="text-[#98c379]">"MongoDB/SQL"</span>,<br />
                            {'    '}]<br />
                            {'  '}{'}\n'}
                            {'}'}
                        </code>
                    </pre>
                </div>

                {/* Decorative dots to mimic editor */}
                <div className="absolute top-4 left-6 flex space-x-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500/50"></div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
