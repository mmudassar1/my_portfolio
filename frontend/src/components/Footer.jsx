import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#030014] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#a855f7]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-5">
                    <div className="footer-left">
                        <div className="flex items-center gap-3">
                            <img src="/logo1.png" alt="Logo" loading="eager" className="w-12 h-10 object-contain" />
                            <span className="text-white font-bold tracking-wider text-xl">MUDASSAR<span className="text-[#a855f7]"></span></span>
                        </div>
                    </div>

                    <div className="footer-right">
                        {/* <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 text-sm md:text-base font-medium">
                            <a href="#home" className="hover:text-white transition-colors">Home</a>
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#services" className="hover:text-white transition-colors">Services</a>
                            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
                            <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
                        </nav> */}
                        
                        {/* Social Icons */}
                        {/* <h4 className="text-white text-base font-semibold mb-4 text-center w-full">Connect with me</h4> */}
                        <div className="flex gap-4 justify-center">
                            {[
                                { 
                                    icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>, 
                                    url: "https://github.com/mmudassar1" 
                                },
                                { 
                                    icon: (<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></>), 
                                    url: "https://linkedin.com/in/mmudassar001" 
                                },
                                { 
                                    icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.049c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.046-5.411 12.049-12.05a11.811 11.811 0 00-3.533-8.528z" fill="currentColor" stroke="none"/>, 
                                    url: "https://wa.me/923224146584" 
                                }
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-12 h-12 rounded-xl bg-white/5 flex justify-center items-center text-white transition-all hover:bg-[#a855f7] hover:scale-110"
                                >
                                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                <div className=" border-t border-white/5 text-center">

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Muhammad Mudassar. Crafting digital excellence.
                    </p>
                </div>
            </div>
        </footer>
    ); 
}; 

export default Footer;
