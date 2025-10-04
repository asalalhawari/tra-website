import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Globe as Globe2, TrendingUp, Sparkles, Award, Target, Users, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Globe2,
    title: "Translation & Adaptation",
    description: "Translation and adaptation of several Arab and international dramatic works.",
    // تم تحديث التدرج اللوني
    gradient: "from-amber-400 to-[#f9a533]"
  },
  {
    icon: Users,
    title: "Strategic Collaborations",
    description: "Collaborations with regional companies and institutions.",
    // تم تحديث التدرج اللوني
    gradient: "from-[#f9a533] to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Market Expansion",
    description: "Expanding the reach of artistic productions into new markets.",
    // تم تحديث التدرج اللوني
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
      // تم تحديث تدرج لون العداد
      className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </div>
  );
}

export default function OurAchievements() {
  return (
    // تم تحديث لون الخلفية الرئيسية
    <section className="relative py-24 px-6 bg-[#414042] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* تم تحديث ألوان التأثيرات */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f9a533]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          {/* تم تحديث تدرج لون العنوان الرئيسي */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <p className="text-neutral-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Transforming visions into reality across borders and cultures
          </p>
        </div>

        {/* Main Achievements Cards - تم تقليل المسافة السفلية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                // تم تحديث ألوان البطاقة
                className="group relative bg-zinc-800/40 backdrop-blur-sm rounded-3xl p-8 border border-neutral-700/50 hover:border-[#f9a533]/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f9a533] transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {achievement.description}
                </p>
                {/* تم تحديث ألوان الزخرفة */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#f9a533]/20 rounded-tr-3xl group-hover:border-[#f9a533]/50 transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#f9a533]/20 rounded-bl-3xl group-hover:border-[#f9a533]/50 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Divider with Icon - تم تحديث ألوانه */}
        <div className="flex items-center justify-center mb-20">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#f9a533]/50"></div>
          <div className="mx-6 p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#f9a533]/50"></div>
        </div>

        {/* تم حذف قسم "In Numbers" من هنا */}

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                <div className="relative bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 backdrop-blur-sm rounded-3xl p-8 border border-neutral-700/50 hover:border-[#f9a533]/50 transition-all duration-500 text-center hover:scale-105 hover:shadow-2xl hover:shadow-[#f9a533]/20">
                  {/* تم تحديث ألوان الأيقونة */}
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-6 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#f9a533]" />
                  </div>
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  <p className="text-neutral-300 mt-4 font-medium">
                    {stat.label}
                  </p>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-500 pointer-events-none"></div>
                </div>
                {/* تم تحديث لون التأثير */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#f9a533] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - تم تحديث ألوانه */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-full border border-[#f9a533]/30 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-[#f9a533] animate-pulse" />
            <span className="text-neutral-300 font-medium text-lg">Driving Excellence in Every Project</span>
            <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}