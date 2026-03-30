import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-20 md:py-32 bg-[#030014] min-h-screen relative overflow-hidden" id="privacy-policy">
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#a855f7]/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-[800px] mx-auto px-6 md:px-10 relative z-10 text-gray-300">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]">Privacy</span> Policy</h1>
                <p className="mb-6 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="leading-relaxed">
                            When you interact with our website, we may collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="leading-relaxed">
                            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Will Your Information Be Shared With Anyone?</h2>
                        <p className="leading-relaxed">
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have questions or comments about this notice, you may contact us using the information provided on our contact page.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
