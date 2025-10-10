import React, { useState } from 'react';
import { Film, Tv, PlaySquare, Building2, Users, Sparkles, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// ===================================
// 1. بيانات العملاء والشهادات
// ===================================
// بيانات العملاء
const clients = [
    { name: "Netflix", icon: PlaySquare, category: "streaming" },
    { name: "HBO", icon: Tv, category: "tv" },
    { name: "Warner Bros", icon: Film, category: "production" },
    { name: "Disney+", icon: PlaySquare, category: "streaming" },
    { name: "Paramount", icon: Film, category: "production" },
    { name: "Amazon Prime", icon: PlaySquare, category: "streaming" },
    { name: "Universal", icon: Film, category: "production" },
    { name: "BBC", icon: Tv, category: "tv" },
    { name: "Al Jazeera", icon: Tv, category: "tv" },
    { name: "MBC", icon: Tv, category: "tv" },
    { name: "Cultural Arts", icon: Building2, category: "cultural" },
    { name: "Art Institute", icon: Sparkles, category: "cultural" },
    { name: "Independent", icon: Users, category: "creators" },
    { name: "Sony Pictures", icon: Film, category: "production" },
];
const doubledClients = [...clients, ...clients];

// بيانات آراء العملاء
const testimonials = [
    {
        id: 1,
        name: 'Kerri James',
        comment: 'Very responsive and he always ensured the work was done to the standard we requested. We will work with Atanu again.',
        role: 'Founder',
        avatar: '/path/to/kerri-james-avatar.jpg',
        rating: 5,
        isHighlighted: false,
    },
    {
        id: 2,
        name: 'Noliq BW',
        comment: 'Great working with Atanu and his team, they did a great job with our website. Flexible working with the team.',
        role: 'Client',
        avatar: '/path/to/noliq-bw-avatar.jpg',
        rating: 5,
        isHighlighted: true,
    },
    {
        id: 3,
        name: 'Sarah Mitchell',
        comment: 'On Point جعلت أعمالنا تصل للجمهور العالمي بجودة استثنائية.',
        role: 'Marketing Director',
        avatar: '/path/to/sarah-mitchell-avatar.jpg',
        rating: 5,
        isHighlighted: false,
    },
    {
        id: 4,
        name: 'James Anderson',
        comment: 'ترجمة دقيقة ومبدعة… تجربة عمل سلسة واحترافية.',
        role: 'CEO',
        avatar: '/path/to/james-anderson-avatar.jpg',
        rating: 5,
        isHighlighted: false,
    },
];

// ===================================
// 2. مكون بطاقة الشهادة (بالتصميم الفاتح)
// ===================================
const LightTestimonialCard = ({ comment, name, role, avatar, rating, isHighlighted }) => {
    const cardClasses = isHighlighted
        ? 'bg-indigo-50 text-gray-800 shadow-xl'
        : 'bg-white text-gray-700 shadow-md';

    const starColor = isHighlighted ? 'text-yellow-500 fill-yellow-500' : 'text-amber-500 fill-amber-500';

    return (
        <div className={`flex flex-col p-8 rounded-xl border border-gray-100 min-h-[250px] transition-all duration-300 hover:shadow-lg ${cardClasses}`}>
            <span className={`text-4xl font-serif mb-4 ${isHighlighted ? 'text-indigo-600' : 'text-gray-400'}`}>“</span>
            
            <p className={`text-lg mb-6 leading-relaxed flex-grow`}>
                {comment}
            </p>

            <div className="mt-auto flex justify-between items-center pt-4">
                <div className="flex items-center">
                    <div>
                        <p className="font-bold text-gray-900">{name}</p>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>
                </div>

                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ml-0.5 ${i < rating ? starColor : 'text-gray-300'}`}
                            fill={i < rating ? starColor : 'none'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// ===================================
// 3. المكون الرئيسي
// ===================================
export function OurClientsAndTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative overflow-hidden">
            
            {/* --- القسم 1: العملاء (الخلفية الداكنة) --- */}
            <section id="clients" className="relative pt-24 pb-32 px-6 bg-[#414042] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f9a533]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 bg-clip-text text-transparent">
                            ✦ Our Clients
                        </h2>
                        <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
                            We serve Film & TV production houses, TV channels, streaming platforms,<br />
                            Cultural & Art Institutions, and independent creators.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#414042] to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#414042] to-transparent z-10"></div>
                        <div className="overflow-hidden">
                            <div className="flex animate-scroll hover:pause-animation">
                                {doubledClients.map((client, index) => {
                                    const Icon = client.icon;
                                    return (
                                        <div key={index} className="flex-shrink-0 mx-4 group">
                                            <div className="relative bg-zinc-800/40 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 hover:border-[#f9a533]/50 transition-all duration-500 w-48 h-32 flex flex-col items-center justify-center group-hover:shadow-2xl group-hover:shadow-[#f9a533]/20">
                                                <div className="mb-3 text-neutral-400 group-hover:text-[#f9a533] transition-colors duration-300">
                                                    <Icon className="w-12 h-12" />
                                                </div>
                                                <h3 className="text-white font-semibold text-center group-hover:text-[#f9a533] transition-colors duration-300">
                                                    {client.name}
                                                </h3>
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-500 pointer-events-none"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll { animation: scroll 40s linear infinite; }
                    .pause-animation:hover { animation-play-state: paused; }
                `}</style>
            </section>

            {/* --- القسم 2: الشهادات (الخلفية الداكنة مثل العملاء) --- */}
            <section id="testimonials" className="py-20 px-6 bg-[#414042] border-t border-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f9a533]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 bg-clip-text text-transparent">
                            Testimonials
                        </h2>
                        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                           What our customers say about us.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                        <LightTestimonialCard {...testimonial} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 shadow-md hover:bg-gray-50 transition z-20"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition z-20"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'bg-indigo-600 w-8'
                                            : 'bg-gray-300 hover:bg-indigo-300'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurClientsAndTestimonials;
