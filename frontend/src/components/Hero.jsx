import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

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

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center relative z-10">
                <div className="hero-content text-left order-2 lg:order-1" data-aos="fade-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e1b4b]/50 border border-white/10 text-[#a855f7] text-sm font-semibold mb-6 md:mb-8 animate-fade-in backdrop-blur-md">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#a855f7]"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold leading-[1.1] mb-4 md:mb-6 tracking-tight text-white">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2 text-gray-300 font-poppins font-bold tracking-normal"> Hi, I'm <span className="text-transparent font-poppins bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">Mudassar</span></span>
                    </h1>

                    <div className="text-md sm:text-xl md:text-2xl lg:text-2xl font-bold h-[50px] sm:h-[40px] md:h-[50px] flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">
                        I&nbsp;
                        <Typewriter
                            options={{
                                strings: [
                                    "Build Responsive Web Apps",
                                    "Build MERN Stack Applications",
                                    "Build Scalable Backend Systems",
                                    "Build Modern UI/UX Designs",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 70,
                                deleteSpeed: 70,
                            }}
                        />I&nbsp;
                    </div>

                    <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-[600px] leading-relaxed">
                        I create <span className="text-white font-medium">high-performance</span>,
                        <span className="text-white font-medium"> scalable</span> solutions that drive meaningful user experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Link to="/projects" className="px-6 py-3 md:px-8 md:py-4 bg-[#a855f7] text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#a855f7]/25 hover:shadow-[#a855f7]/40 flex items-center justify-center gap-2 group text-sm md:text-base">
                            View Projects
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                        <Link to="/contact" className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all backdrop-blur-sm flex items-center justify-center text-sm md:text-base">
                            Connect With
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        {[
                            { icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>, url: "https://github.com/mmudassar1" },
                            { icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></>, url: "https://linkedin.com/in/mmudassar001" },
                            { icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.049c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.046-5.411 12.049-12.05a11.811 11.811 0 00-3.533-8.528z" fill="currentColor" stroke="none" />, url: "https://wa.me/923224146584" },
                        ].map((social, i) => (
                            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex justify-center items-center text-white transition-all hover:bg-[#a855f7] hover:scale-110">
                                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">{social.icon}</svg>
                            </a>
                        ))}
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
                <div className="relative flex justify-center items-center order-1 lg:order-2 w-full overflow-hidden py-8" data-aos="fade-left">
                    <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] flex justify-center items-center max-w-full">

                        {/* Outer Glow Ring */}
                        <div className="absolute inset-0 rounded-full border border-[#22d3ee]/20 shadow-[0_0_40px_rgba(34,211,238,0.1)] md:shadow-[0_0_80px_rgba(34,211,238,0.1)]"></div>

                        {/* Rotating Text Ring Track */}
                        <div className="absolute w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-[#030014] border-2 md:border-4 border-[#22d3ee] shadow-[0_0_20px_rgba(34,211,238,0.3)] md:shadow-[0_0_30px_rgba(34,211,238,0.3)]"></div>

                        {/* Rotating Text */}
                        <svg viewBox="0 0 200 200" className="absolute w-[190px] h-[190px] sm:w-[330px] sm:h-[330px] md:w-[440px] md:h-[440px] animate-[spin_30s_linear_infinite] z-20 pointer-events-none overflow-visible">
                            <path id="circlePath" d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" fill="transparent" />
                            <text className="text-[10px] sm:text-[11px] md:text-[12.5px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]" fill="#f3f4f6" dominantBaseline="middle">
                                <textPath href="#circlePath" startOffset="0%">
                                    DEVELOPMENT • CODE • SYSTEM • CREATIVE • DESIGN •&nbsp;
                                    DEVELOPMENT • CODE • SYSTEM • CREATIVE • DESIGN •
                                </textPath>
                            </text>
                        </svg>

                        {/* Inner Profile Circle */}
                        <div className="relative w-[130px] h-[130px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 md:border-4 border-[#a855f7] shadow-[0_0_30px_rgba(168,85,247,0.4)] md:shadow-[0_0_50px_rgba(168,85,247,0.4)] z-30 group">
                            <img
                                src="/pic1.png"
                                alt="Developer Avatar"
                                loading="eager"
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
