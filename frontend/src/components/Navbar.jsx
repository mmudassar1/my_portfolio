import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Blogs', path: '/blogs' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full py-2 bg-[#030014]/90 backdrop-blur-lg z-[1000] border-b border-white/10 transition-all duration-300">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-between items-center h-16 md:h-18">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
                        <img src="/logo1.png" alt="Logo" loading="eager" className="w-12 h-10 md:w-13 md:h-12 object-contain" />
                    </Link>
                </div>

                {/* Desktop Tabs */}
                <ul className="hidden lg:flex gap-8 items-center bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-sm font-medium text-gray-300 hover:text-[#a855f7] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a855f7] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Action (Desktop) */}
                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-white px-6 py-2.5 font-semibold rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center gap-2"
                    >
                        Contact
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <button
                    className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 top-[64px] bg-[#030014] z-[999] transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                    }`}
            >
                <div className="px-6 py-8 flex flex-col gap-6">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-white hover:text-[#a855f7] transition-all flex items-center justify-between group"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {link.name}
                            <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </Link>
                    ))}
                    <div className="pt-6 border-t border-white/10">
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full block text-center bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-white px-8 py-4 font-bold rounded-xl shadow-lg"
                        >
                            Start a Project
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
