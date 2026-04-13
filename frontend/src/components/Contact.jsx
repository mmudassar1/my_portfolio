import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm('mgonowww');
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
        }
    }, [state.succeeded]);

    return (
        <section className="py-24 bg-[#0a0624]" id="contact">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="text-center mb-16 px-4" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Connect With Me <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]">Today</span>
                    </h2>
                    <p className="text-[#9ca3af] text-lg max-w-[700px] mx-auto leading-relaxed">
                        I'm excited to collaborate on innovative projects or discuss your next big idea. Reach out via email, phone, or social media!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div className="contact-info order-2 lg:order-1" data-aos="fade-right">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/5 h-full">
                            <h3 className="text-2xl font-bold mb-8 text-white font-mono flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-[#22d3ee]"></span>
                                Contact Details
                            </h3>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#22d3ee]/10 rounded-xl flex items-center justify-center text-[#22d3ee]">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1 font-medium">Email Me</div>
                                        <a href="mailto:mudassarmalik831@gmail.com" className="text-white hover:text-[#22d3ee] transition-colors break-all">mudassarmalik831@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#a855f7]/10 rounded-xl flex items-center justify-center text-[#a855f7] group hover:scale-110 hover:ring-2 ring-[#a855f7]/50 transition-all">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-12 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1 font-medium">Call Me</div>
                                        <a href="tel:+923224146584" className="text-white hover:text-[#a855f7] transition-colors break-all font-medium">+92 (322) 414-6584</a>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-lg font-bold mb-6 text-white">Social Connections</h4>
                            <div className="flex gap-4">
                            {[
                                    { icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>, url: "https://github.com/mmudassar1" },
                                    { icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></>, url: "https://linkedin.com/in/mmudassar001" },
                                    { icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.049c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.046-5.411 12.049-12.05a11.811 11.811 0 00-3.533-8.528z" fill="currentColor" stroke="none"/>, url: "https://wa.me/923224146584" },
                                 ].map((social, i) => (
                                    <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex justify-center items-center text-white transition-all hover:bg-[#a855f7] hover:scale-110">
                                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">{social.icon}</svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glow-card group order-1 lg:order-2" data-aos="fade-left">
                        <div className="glow-card-bg opacity-40"></div>
                        <div className="glow-card-content p-8 md:p-10 min-h-[450px] flex flex-col justify-center">
                            {!showSuccess ? (
                                <>
                                    <h3 className="text-2xl font-bold mb-8 text-white font-mono">Send Message</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-white text-sm font-medium">Full Name</label>
                                                <input type="text" name="name" className="w-full bg-[#0d0c22] border border-white/10 rounded-xl p-3.5 text-white focus:ring-2 focus:ring-[#22d3ee]/50 focus:border-[#22d3ee] transition-all" required />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-white text-sm font-medium">Phone Number</label>
                                                <input type="tel" name="phone" className="w-full bg-[#0d0c22] border border-white/10 rounded-xl p-3.5 text-white focus:ring-2 focus:ring-[#22d3ee]/50 focus:border-[#22d3ee] transition-all" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-white text-sm font-medium">Email Address</label>
                                            <input type="email" name="email" className="w-full bg-[#0d0c22] border border-white/10 rounded-xl p-3.5 text-white focus:ring-2 focus:ring-[#a855f7]/50 focus:border-[#a855f7] transition-all" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-white text-sm font-medium">Message</label>
                                            <textarea name="message" rows="4" className="w-full bg-[#0d0c22] border border-white/10 rounded-xl p-3.5 text-white focus:ring-2 focus:ring-[#a855f7]/50 focus:border-[#a855f7] transition-all resize-none" required></textarea>
                                        </div>
                                        <button type="submit" disabled={state.submitting} className={`w-full bg-gradient-to-r from-[#a855f7] to-[#3b82f6] text-white py-4 font-bold rounded-xl transition-all shadow-lg ${state.submitting ? 'opacity-50' : 'hover:shadow-[#a855f7]/40 hover:-translate-y-1'}`}>
                                            {state.submitting ? 'Transmitting...' : 'Send Message'}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center space-y-8 py-10">
                                    <div className="w-24 h-24 bg-gradient-to-br from-[#22d3ee] to-[#a855f7] rounded-full mx-auto flex items-center justify-center text-white text-5xl animate-bounce shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-3">Transmission Successful</h3>
                                        <p className="text-[#9ca3af] text-lg leading-relaxed">
                                            Message received! I'll process the data and get back to you across the network shortly.
                                        </p>
                                    </div>
                                    <button onClick={() => window.location.reload()} className="text-[#22d3ee] hover:underline font-bold text-lg">Send Another Transmission</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
