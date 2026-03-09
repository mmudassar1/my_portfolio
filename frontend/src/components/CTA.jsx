import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-20 bg-[#0a0624] relative overflow-hidden">
            {/* Circuit Background Pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url('/circuit.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Ready to Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#22d3ee]">Next Project?</span>
                </h2>
                <p className="text-[#9ca3af] text-lg max-w-[700px] mx-auto mb-10 leading-relaxed">
                    Let's collaborate to create innovative, high-quality solutions tailored to your needs. Get in touch today to discuss your project!
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#3b82f6] text-white px-10 py-4 font-bold rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all shadow-[0_10px_30px_-10px_rgba(168,85,247,0.5)] cursor-pointer"
                >
                    Contact Me
                </Link>
            </div>
        </section>
    );
};

export default CTA;
