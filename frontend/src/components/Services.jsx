import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Web Development (Frontend + Backend)",
            description: "Building responsive, high-performance web applications using React, Next.js, Node.js, and Express for seamless frontend and backend integration.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>
        },
        {
            title: "API Development & Integration",
            description: "Designing and implementing robust, secure RESTful and GraphQL APIs, with seamless integration to third-party services and microservices.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        },
        {
            title: "Database Design & Optimization",
            description: "Creating efficient database architectures with MongoDB, PostgreSQL, and MySQL, optimized for performance and scalability.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        },
        {
            title: "DevOps & Deployment",
            description: "Streamlining development pipelines with Docker, AWS, and CI/CD workflows to ensure reliable, automated deployments and scalability.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
        },
        {
            title: "UI/UX Implementation",
            description: "Translating designs into intuitive, pixel-perfect interfaces using Tailwind CSS and modern frontend frameworks for exceptional user experiences.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        },
        {
            title: "Maintenance & Support",
            description: "Providing ongoing support, bug fixes, and performance enhancements to keep your applications running smoothly and up-to-date.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
        }
    ];

    return (
        <section className="py-24 bg-[#030014] relative overflow-hidden" id="services">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url('/circuit.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
                <div className="text-center mb-16 md:mb-24 relative" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#22d3ee]">Services</span>
                    </h2>
                    <p className="text-[#9ca3af] text-lg max-w-[850px] mx-auto leading-relaxed px-4">
                        As a Full Stack Developer, I offer end-to-end solutions to build scalable, user-focused web applications using modern technologies like React, Node.js, AWS, and more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="glow-card group" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="glow-card-bg"></div>
                            <div className="glow-card-content p-8 md:p-10 flex flex-col items-start transition-all duration-300">
                                <div className="p-3 rounded-xl bg-[#22d3ee]/10 text-[#22d3ee] mb-6 group-hover:bg-[#22d3ee] group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#22d3ee] font-mono tracking-tight group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#9ca3af] leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
