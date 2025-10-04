import React from 'react';
import { Film, Tv, PlaySquare, Building2, Users, Sparkles } from 'lucide-react';

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

// Duplicate for infinite scroll effect
const doubledClients = [...clients, ...clients];

export default function OurClients() {
  return (
    // تم تغيير الخلفية الرئيسية إلى #414042
    <section className="relative py-24 px-6 bg-[#414042] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* تم تغيير ألوان التأثيرات لتناسب التصميم الجديد */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#f9a533]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
          </div>
          {/* تم تغيير تدرج ألوان العنوان الرئيسي */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 bg-clip-text text-transparent">
            Our Clients
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We serve Film & TV production houses, TV channels, streaming platforms,<br />
            Cultural & Art Institutions, and independent creators.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays - تم تحديث الألوان لتطابق الخلفية الجديدة */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#414042] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#414042] to-transparent z-10"></div>

          {/* Scrolling Track */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {doubledClients.map((client, index) => {
                const Icon = client.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-4 group"
                  >
                    {/* تم تحديث ألوان البطاقة والتأثيرات عند المرور */}
                    <div className="relative bg-zinc-800/40 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 hover:border-[#f9a533]/50 transition-all duration-500 w-48 h-32 flex flex-col items-center justify-center group-hover:shadow-2xl group-hover:shadow-[#f9a533]/20">
                      {/* Icon */}
                      <div className="mb-3 text-neutral-400 group-hover:text-[#f9a533] transition-colors duration-300">
                        <Icon className="w-12 h-12" />
                      </div>

                      {/* Client Name */}
                      <h3 className="text-white font-semibold text-center group-hover:text-[#f9a533] transition-colors duration-300">
                        {client.name}
                      </h3>

                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Badge - تم تحديث ألوانه */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-800/40 backdrop-blur-sm rounded-full border border-[#f9a533]/30">
            <Sparkles className="w-5 h-5 text-[#f9a533]" />
            <span className="text-neutral-300 font-medium">Trusted by 100+ Global Clients</span>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animation - لم يتغير */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}