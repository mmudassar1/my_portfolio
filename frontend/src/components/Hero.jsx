import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className="pt-[15vh] md:pt-[20vh] pb-20 md:pb-32 min-h-screen flex items-center relative overflow-hidden" id="home">
            {/* Background Circuit Pattern Overlay */}
            <div
                className="absolute inset-0 z-[-1] opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `url('/circuit.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            {/* Background Glows for Depth */}
            <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#a855f7]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#22d3ee]/5 rounded-full blur-[120px] md:blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                <div className="hero-content text-left order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e1b4b]/50 border border-white/10 text-[#a855f7] text-sm font-semibold mb-6 md:mb-8 animate-fade-in backdrop-blur-md">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#a855f7]"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight text-white">
                        <span className="text-3xl md:text-5xl lg:text-6xl block mb-2 text-gray-300 font-medium tracking-normal"> Hello I am</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#8b5cf6]">Muhammad </span><br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#3b82f6]">Mudassar</span>
                    </h1>

                    <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 h-[40px] md:h-[50px] flex items-center">
                        <TypeAnimation
                            sequence={[
                                "MERN Stack Developer",
                                1000,
                                'Frontend Developer',
                                1000,
                                'Wordpress Developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                                'Creative Thinker',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]"
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-gray-400 text-lg md:text-xl mb-8 md:mb-10 max-w-[600px] leading-relaxed">
                        I create <span className="text-white font-medium">high-performance</span>,
                        <span className="text-white font-medium"> scalable</span> solutions that drive meaningful user experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Link to="/projects" className="px-8 py-4 bg-[#a855f7] text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#a855f7]/25 hover:shadow-[#a855f7]/40 flex items-center justify-center gap-2 group">
                            View Projects
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                        <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all backdrop-blur-sm flex items-center justify-center">
                            My Skills
                        </Link>
                    </div>

                    {/* <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#030014] bg-gray-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" />
                                </div>
                            ))}
                        </div>
                        <p><span className="text-white font-bold text-base md:text-lg">135+</span> Happy clients worldwide</p>
                    </div> */}
                </div>

                {/* Profile Section Responsive */}
                <div className="relative flex justify-center items-center order-1 lg:order-2">
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] flex justify-center items-center">

                        {/* Outer Glow Ring */}
                        <div className="absolute inset-0 rounded-full border border-[#22d3ee]/20 shadow-[0_0_40px_rgba(34,211,238,0.1)] md:shadow-[0_0_80px_rgba(34,211,238,0.1)]"></div>

                        {/* Rotating Text Ring Track */}
                        <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-[#030014] border-2 md:border-4 border-[#22d3ee] shadow-[0_0_20px_rgba(34,211,238,0.3)] md:shadow-[0_0_30px_rgba(34,211,238,0.3)]"></div>

                        {/* Rotating Text */}
                        <svg viewBox="0 0 200 200" className="absolute w-[270px] h-[270px] sm:w-[370px] sm:h-[370px] md:w-[440px] md:h-[440px] animate-[spin_30s_linear_infinite] z-20 pointer-events-none overflow-visible">
                            <path id="circlePath" d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" fill="transparent" />
                            <text className="text-[10px] sm:text-[11px] md:text-[12.5px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]" fill="#f3f4f6" dominantBaseline="middle">
                                <textPath href="#circlePath" startOffset="0%">
                                    DEVELOPMENT • CODE • SYSTEM • CREATIVE • DESIGN •&nbsp;
                                    DEVELOPMENT • CODE • SYSTEM • CREATIVE • DESIGN •
                                </textPath>
                            </text>
                        </svg>

                        {/* Inner Profile Circle */}
                        <div className="relative w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 md:border-4 border-[#a855f7] shadow-[0_0_30px_rgba(168,85,247,0.4)] md:shadow-[0_0_50px_rgba(168,85,247,0.4)] z-30 group">
                            <img
                                src="/pic1.png"
                                alt="Developer Avatar"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Glow on Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#a855f7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
