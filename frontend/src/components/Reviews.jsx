import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            company: "Tech Solutions",
            text: "An exceptional developer who delivered our project ahead of schedule with flawless code quality.",
            rating: 5,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=a855f7"
        },
        {
            id: 2,
            name: "Sarah Smith",
            company: "Creative Designs",
            text: "Transformed our vision into a stunning, responsive web application. The attention to detail is outstanding.",
            rating: 5,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=22d3ee"
        },
        {
            id: 3,
            name: "Michael Johnson",
            company: "Startup Inc",
            text: "The backend infrastructure built is incredibly robust. Scaled flawlessly during our launch.",
            rating: 5,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=3b82f6"
        },
        {
            id: 4,
            name: "Emily Chen",
            company: "E-Commerce Plus",
            text: "Implemented a flawless payment gateway and cart system for us. Sales increased by 20% due to the speed.",
            rating: 5,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=c084fc"
        }
    ];

    return (
        <section className="py-20 max-w-[1400px] mx-auto px-8" id="reviews">
            <h2 className="text-4xl text-center mb-12 font-bold text-white">Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#9333ea]">Reviews</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reviews.map(review => (
                    <div key={review.id} className="glow-card group">
                        <div className="glow-card-bg"></div>
                        <div className="glow-card-content p-8">
                            <div className="flex items-center gap-4">
                                <img src={review.avatar} alt={review.name} className="w-[50px] h-[50px] rounded-full bg-[#0d0c22] border-2 border-white/10" />
                                <div>
                                    <h4 className="text-white font-bold">{review.name}</h4>
                                    <p className="text-[#9ca3af] text-[0.85rem]">{review.company}</p>
                                </div>
                            </div>
                            <div className="my-4 text-[1.2rem]">
                                {"⭐".repeat(review.rating)}
                            </div>
                            <p className="text-[#9ca3af] italic">"{review.text}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
