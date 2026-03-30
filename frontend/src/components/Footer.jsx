import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#030014] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#a855f7]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10">
                    <div className="footer-left">
                        <div className="flex items-center gap-3">
                            <img src="/logo1.png" alt="Logo" className="w-12 h-10 object-contain" />
                            <span className="text-white font-bold tracking-wider text-xl">MUDASSAR<span className="text-[#a855f7]">.</span></span>
                        </div>
                    </div>

                    <div className="footer-right">
                        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 text-sm md:text-base font-medium">
                            <a href="#home" className="hover:text-white transition-colors">Home</a>
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#services" className="hover:text-white transition-colors">Services</a>
                            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
                            <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
                        </nav>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Muhammad Mudassar. Crafting digital excellence.
                    </p>
                    <div className="flex gap-6 text-gray-400 text-sm">
                        <Link to="/privacy-policy" className="hover:text-[#22d3ee] transition-colors text-gray-400 text-sm">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-[#22d3ee] transition-colors text-gray-400 text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
