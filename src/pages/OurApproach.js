import React from 'react';
import { Search, Lightbulb, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Understanding & Analysis",
    description: "Studying the text/work to understand its cultural and dramatic background.",
    gradient: "from-amber-400 to-[#f9a533]"
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Creative Translation",
    description: "Precise linguistic formulation that preserves meaning and spirit.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Review & Editing",
    description: "Multi-stage linguistic and artistic proofreading.",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: Clock,
    number: "04",
    title: "On-time Delivery",
    description: "Delivering on agreed deadlines with guaranteed quality.",
    gradient: "from-green-400 to-teal-500"
  },
];

// Reusable Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function OurApproach() {
  return (
    // ✅ أضفنا ID هون
    <div id="approach" className="relative bg-[#414042] min-h-screen text-white overflow-hidden">
      
      {/* Container الرئيسي الذي يحوي الشريط الجانبي والمحتوى */}
      <div className="flex relative max-w-7xl mx-auto min-h-screen">
        
        {/* الشريط الجانبي */}
        <div className="hidden lg:flex w-24 xl:w-32 bg-[#f9a533] flex-shrink-0 items-center justify-center p-4 shadow-xl">
          <div className="transform -rotate-90 whitespace-nowrap">
            <h2 className="text-3xl font-extrabold text-[#414042] tracking-widest uppercase">
              Our Approach
            </h2>
          </div>
        </div>

        {/* المحتوى */}
        <div className="flex-grow p-8 sm:p-12 lg:p-16">
          <div className="lg:hidden text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f9a533] mb-2">
              Our Approach
            </h1>
            <p className="text-neutral-300 text-lg">Our professional methodology</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 xl:gap-y-16 mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(249, 165, 51, 0.3)" }}
                  className="flex items-center space-x-4 h-full"
                >
                  {/* المربع الأيسر */}
                  <div className={`flex-shrink-0 w-28 h-28 xl:w-32 xl:h-32 rounded-xl flex flex-col items-center justify-center bg-gradient-to-br ${step.gradient} shadow-2xl relative overflow-hidden`}>
                    <div className='absolute inset-0 bg-white/10 opacity-30'></div>
                    <Icon className="w-10 h-10 text-white z-10" />
                    <span className="text-3xl font-black text-white/80 mt-1 z-10">
                      {step.number}
                    </span>
                  </div>

                  {/* المستطيل الأيمن */}
                  <div className="flex-grow bg-[#2e2d2f] p-4 sm:p-6 rounded-xl self-stretch flex flex-col justify-center border-l-4 border-[#f9a533]">
                    <h3 className="text-xl font-bold text-[#f9a533] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-neutral-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* CTA */}
          <div className="text-center mt-20">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 via-[#f9a533] to-orange-600 rounded-full text-white font-semibold shadow-lg hover:shadow-amber-500/40 transition-all duration-300 cursor-pointer hover:scale-105">
              Start Your Project With Us
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
