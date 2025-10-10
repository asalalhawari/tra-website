import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Globe as Globe2, TrendingUp, Sparkles, Award, Target, Users, Zap, Star, Rocket } from 'lucide-react';

const achievements = [
  {
    icon: Globe2,
    title: "Translation & Adaptation",
    description: "Translation and adaptation of several Arab and international dramatic works.",
    gradient: "from-amber-400 to-[#f9a533]"
  },
  {
    icon: Users,
    title: "Strategic Collaborations",
    description: "Collaborations with regional companies and institutions.",
    gradient: "from-[#f9a533] to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Market Expansion",
    description: "Expanding the reach of artistic productions into new markets.",
    gradient: "from-orange-500 to-red-500"
  }
];

const stats = [
  { number: 250, suffix: "+", label: "Projects Completed", icon: Trophy },
  { number: 45, suffix: "+", label: "Regional Partners", icon: Award },
  { number: 15, suffix: "+", label: "Countries Reached", icon: Globe2 },
  { number: 98, suffix: "%", label: "Client Satisfaction", icon: Sparkles },
];

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </div>
  );
}

export default function OurAchievements() {
  return (
    // ✅ أضفنا ID هنا
    <section id="achievements" className="relative py-24 px-6 bg-[#414042] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f9a533]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
          to { opacity: 1; transform: rotate(0) scale(1); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
            <div className="relative">
              <Rocket className="w-16 h-16 text-amber-400 animate-bounce" />
              <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full"></div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full border border-amber-500/30 mb-6">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Excellence in Action</span>
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 bg-clip-text text-transparent leading-tight">
            Our Achievements
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></div>
            <Sparkles className="w-6 h-6 text-amber-400" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
          </div>

          <p className="text-neutral-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Transforming visions into reality across borders and cultures
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation: 'slideIn 0.6s ease-out forwards',
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 transform rotate-3 rounded-3xl group-hover:rotate-6 transition-transform duration-500"></div>

                  <div className="relative bg-zinc-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-neutral-700/50 hover:border-amber-500/50 transition-all duration-500 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-tr-full"></div>

                    <div className="relative mb-6 inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className={`relative p-5 rounded-2xl bg-gradient-to-br ${achievement.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
                    </div>

                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-500/30">
                      <span className="text-amber-400 font-bold text-lg">0{index + 1}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300 relative z-10">
                      {achievement.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed relative z-10">
                      {achievement.description}
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent -z-10"></div>
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full border border-amber-500/30 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">By The Numbers</span>
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation: 'rotateIn 0.8s ease-out forwards',
                    animationDelay: `${index * 0.15}s`,
                    opacity: 0
                  }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-neutral-700/50 hover:border-amber-500/50 transition-all duration-500 text-center transform hover:-translate-y-2">
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-50"></div>
                      <div className="relative p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-amber-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      </div>
                    </div>

                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    <p className="text-neutral-300 mt-4 font-medium">
                      {stat.label}
                    </p>

                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-500/30 rounded-tl-lg group-hover:border-amber-500/60 transition-colors duration-300"></div>
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-500/30 rounded-br-lg group-hover:border-amber-500/60 transition-colors duration-300"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-2xl rounded-full"></div>
            <div className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-zinc-800/60 to-zinc-900/60 rounded-full border-2 border-amber-500/30 backdrop-blur-sm hover:border-amber-500/60 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
              <span className="text-white font-semibold text-lg bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Driving Excellence in Every Project
              </span>
              <Sparkles className="w-6 h-6 text-orange-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
