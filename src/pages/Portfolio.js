'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiArrowRight, HiPlay } from 'react-icons/hi';
import "./Portfolio.css"; // احتفظ بالملف إذا عندك ستايلات إضافية

// بيانات المشاريع
const projects = [
  {
    title: "Drama Series - Season One",
    category: "Dubbing",
    description: "Complete dubbing for a 30-episode drama series with professional audio synchronization",
    stats: { Episodes: "30", Languages: "3", Duration: "900 min" },
    image: "/drama-series-production.jpg",
  },
  {
    title: "Documentary Film - Journey Through History",
    category: "Voice Over",
    description: "Professional voice-over for a historical documentary in three languages",
    stats: { Languages: "3", Duration: "120 min", Voices: "5" },
    image: "/documentary-film-production.jpg",
  },
  {
    title: "TV Show - Good Morning",
    category: "Production",
    description: "Complete production for a daily morning show with filming and editing",
    stats: { Episodes: "200", Duration: "60 min", Crew: "15" },
    image: "/tv-show-studio.jpg",
  },
  {
    title: "Advertising Campaign - Commercial Product",
    category: "Voice Over & Production",
    description: "Production and voice-over for a multi-platform advertising campaign",
    stats: { Ads: "10", Languages: "5", Platforms: "4" },
    image: "/advertising-campaign.jpg",
  },
  {
    title: "Animated Series",
    category: "Dubbing & Translation",
    description: "Dubbing and translation of a children's animated series",
    stats: { Episodes: "52", Languages: "4", Characters: "20" },
    image: "/animated-series.jpg",
  },
  {
    title: "Feature Film - The Journey",
    category: "Subtitling",
    description: "Translation and subtitling for a feature-length film",
    stats: { Languages: "6", Duration: "135 min", Subtitles: "1500" },
    image: "/cinema-film.jpg",
  },
  {
    title: "Art Magazine Editorial",
    category: "Editorial & Writing",
    description: "Critical writing and editorial contributions for regional art magazines",
    stats: { Articles: "12", Languages: "2", Pages: "36" },
    image: "/editorial-work.jpg",
  },
];

const CARD_BASE = 350; // أساس المسافة الأفقية بين البطاقات (تقدر تغييره حسب العرض)
const VISIBLE_RANGE = 2; // عدد البطاقات اليسار/اليمين اللي تظهر بوضوح

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = projects.length;

  const navigate = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = totalCards - 1;
    else if (newIndex >= totalCards) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  // حساب offset دائري عشان الكاروسيل يظهر دائماً ممتلئ يمين ويسار
  const getCircularOffset = (index) => {
    const half = Math.floor(totalCards / 2);
    let raw = index - currentIndex;
    // تحويل raw إلى مجال [-half, half]
    while (raw > half) raw -= totalCards;
    while (raw < -half) raw += totalCards;
    return raw;
  };

  const getCardPosition = (index) => {
    const offset = getCircularOffset(index); // دائري الآن
    const absOff = Math.abs(offset);

    // zIndex: كلما قربت البطاقة من المركز زادت الأولوية
    const zIndex = 100 - absOff;

    // مقياس البطاقة
    let scale = 1 - 0.12 * absOff;
    if (scale < 0.7) scale = 0.7;

    // شفافية: البطاقات البعيدة تخف
    let opacity = absOff <= VISIBLE_RANGE ? 1 : 0.0;

    // x حساب عام بديناميكية (يمكنك ضبط CARD_BASE لتغيير التباعد)
    const x = offset * CARD_BASE;

    // رفع ي/تدوير خفيف لو تحب — هنا خليته ثابت 0
    const y = 0;

    return { scale, x, y, zIndex, opacity, offset };
  };

  const CardVariants = {
    visible: ({ scale, x, y, zIndex, opacity }) => ({
      scale,
      x,
      y,
      zIndex,
      opacity,
      transition: { type: "spring", stiffness: 400, damping: 50 },
    }),
  };

  return (
    <section id="portfolio" className="portfolio-section bg-[#141416] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان بأقصى عرض ليكون واضح */}
        <div className="text-center mb-12">
          <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl font-extrabold mb-3 max-w-3xl mx-auto 
             bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 
             bg-clip-text text-transparent"
>
  Our Portfolio
</motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            We take pride in a diverse range of successful projects we've completed for our clients
          </motion.p>
        </div>

        {/* Carousel area */}
        <div className="relative flex justify-center items-center h-[650px] overflow-hidden">
          {/* wrapper مرن بالعرض كامل عشان البطاقات على الجانبين ما تقطع */}
          <div className="relative w-full h-full flex justify-center items-start pt-16">
            <AnimatePresence initial={false}>
              {projects.map((project, index) => {
                const { scale, x, y, zIndex, opacity, offset } = getCardPosition(index);
                const isCenter = offset === 0;

                return (
                  <motion.div
                    key={index}
                    className={`absolute card-nft ${isCenter ? 'z-50' : ''}`}
                    custom={{ scale, x, y, zIndex, opacity }}
                    variants={CardVariants}
                    initial="visible"
                    animate="visible"
                    onClick={() => {
                      // عند الضغط على بطاقة غير مركزية ننتقل باتجاهها (نهدي السلوك)
                      if (offset > 0) navigate(1);
                      else if (offset < 0) navigate(-1);
                    }}
                    style={{
                      zIndex,
                      cursor: isCenter ? 'default' : 'pointer',
                      // تحكم بالعرض هنا: يمكنك تعديله عبر CSS (Portfolio.css)
                      width: 420,
                    }}
                  >
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
                      {/* الصورة */}
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Top Info Bar */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white p-3 bg-black/50 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-semibold">{project.category}</span>
                        <div className="text-xs text-[#FBBF24] font-bold flex items-center gap-1">
                          {project.title.length > 20 ? project.title.substring(0, 20) + '...' : project.title}
                        </div>
                      </div>

                      {/* Overlay + Play Button */}
                      <div className={`absolute inset-0 transition-opacity duration-300 ${isCenter ? 'bg-black/20' : 'bg-black/50 hover:bg-black/30'}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 ${isCenter ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <HiPlay className="text-3xl text-white ml-1" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Info Bar - يظهر فقط للبطاقة المركزية */}
                      <AnimatePresence>
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.5 }}
                            className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur-md rounded-2xl border border-[#FBBF24]/30"
                          >
                            <div className="text-white mb-2">
                              <p className="text-xs font-light text-gray-300">Project Details</p>
                              <h4 className="text-lg font-bold">{project.title}</h4>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-gray-600/50">
                              <div className="text-left">
                                {Object.entries(project.stats).slice(0, 1).map(([key, value]) => (
                                  <div key={key} className="text-sm font-semibold text-gray-300">
                                    <span className="text-[#FBBF24] font-extrabold">{value}</span> {key}
                                  </div>
                                ))}
                              </div>
                              <button className="flex items-center text-white bg-[#FBBF24] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#D4A11E] transition-colors">
                                MORE <HiArrowRight className="ml-1" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 lg:left-8 z-50 p-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-3xl hover:bg-white/20 transition-all duration-300 transform -translate-y-1/2 top-1/2"
            aria-label="Previous Project"
          >
            <HiArrowLeft />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-0 lg:right-8 z-50 p-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-3xl hover:bg-white/20 transition-all duration-300 transform -translate-y-1/2 top-1/2"
            aria-label="Next Project"
          >
            <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
