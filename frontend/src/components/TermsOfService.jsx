import React, { useEffect } from 'react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-20 md:py-32 bg-[#030014] min-h-screen relative overflow-hidden" id="terms-of-service">
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#22d3ee]/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-[800px] mx-auto px-6 md:px-10 relative z-10 text-gray-300">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#8b5cf6]">Terms</span> of Service</h1>
                <p className="mb-6 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p className="leading-relaxed">
                            By viewing or using this website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                        <p className="leading-relaxed">
                            Unless otherwise indicated, the website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection, and arrangement thereof) are owned by us, our licensors, or other providers of such material.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Representations</h2>
                        <p className="leading-relaxed">
                            By using the website, you represent and warrant that all information you submit will be true, accurate, current, and complete. You also agree to maintain the accuracy of such information and promptly update it as necessary.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
                        <p className="leading-relaxed">
                            These Terms shall be governed by and defined following the laws of your jurisdiction. Our company and yourself irrevocably consent that the courts of your jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfService;
