import React from 'react';

const Pricing = () => {
    return (
        <section className="py-20 bg-[#0a0624]" id="pricing">
            <div className="max-w-[1400px] mx-auto px-8">
                <h2 className="text-4xl text-center mb-12 font-bold text-white">Pricing <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea]">Plans</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
                    <div className="glow-card group">
                        <div className="glow-card-bg"></div>
                        <div className="glow-card-content p-12 px-8 text-center">
                            <h3 className="text-2xl font-bold mb-4 text-white">Basic Plan</h3>
                            <div className="text-4xl font-bold mb-4 font-mono text-white"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]">99$</span>/month</div>
                            <p className="text-[#9ca3af] mb-8">Perfect for startups and small businesses looking to establish an online presence.</p>
                            <ul className="text-left mb-8 space-y-4 text-white text-[0.95rem]">
                                <li className="flex items-center gap-2">✓ Custom Website (Up to 5 Pages)</li>
                                <li className="flex items-center gap-2">✓ Responsive Design</li>
                                <li className="flex items-center gap-2">✓ Basic SEO Optimization</li>
                                <li className="flex items-center gap-2">✓ 1 Month Support</li>
                            </ul>
                            <button className="w-full bg-transparent border border-[#22d3ee]/50 text-white px-6 py-3 font-medium rounded-lg hover:bg-[#22d3ee]/5 transition-all">Choose Plan</button>
                        </div>
                    </div>
                    <div className="glow-card group scale-[1.05] z-10">
                        <div className="glow-card-bg opacity-40"></div>
                        <div className="glow-card-content p-12 px-8 text-center relative overflow-hidden">
                            <div className="absolute top-6 right-[-2rem] bg-[#a855f7] text-white px-12 py-1 rotate-45 text-[0.8rem] font-bold">Most Popular</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Pro Plan</h3>
                            <div className="text-4xl font-bold mb-4 font-mono text-white"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea]">299$</span>/month</div>
                            <p className="text-[#9ca3af] mb-8">Ideal for growing businesses needing advanced features and scalability.</p>
                            <ul className="text-left mb-8 space-y-4 text-white text-[0.95rem]">
                                <li className="flex items-center gap-2">✓ Custom Website (Unlimited Pages)</li>
                                <li className="flex items-center gap-2">✓ E-Commerce Integration</li>
                                <li className="flex items-center gap-2">✓ Advanced SEO & Analytics</li>
                                <li className="flex items-center gap-2">✓ 3 Months Support</li>
                            </ul>
                            <button className="w-full bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#3b82f6] text-white px-6 py-3 font-medium rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-[0_10px_20px_-10px_rgba(168,85,247,0.5)]">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
