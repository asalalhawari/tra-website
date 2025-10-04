import React from 'react';
import { Search, Lightbulb, CheckCircle, Clock } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Understanding & Analysis",
    description: "Studying the text/work to understand its cultural and dramatic background.",
    // New warm gradient
    gradient: "from-amber-400 to-[#f9a533]"
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Creative Translation",
    description: "Precise linguistic formulation that preserves meaning and spirit.",
    // New warm gradient
    gradient: "from-[#f9a533] to-orange-500"
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Review & Editing",
    description: "Multi-stage linguistic and artistic proofreading.",
    // New warm gradient
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Clock,
    number: "04",
    title: "On-time Delivery",
    description: "Delivering on agreed deadlines with guaranteed quality.",
    // New warm gradient
    gradient: "from-red-500 to-rose-500"
  },
];

export default function OurApproach() {
  return (
    // Main background changed to #414042
    <div className="relative bg-[#414042] min-h-screen text-white py-20 px-6 overflow-hidden">
      {/* Decorative elements using the new accent color */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#f9a533]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            {/* Using #f9a533 for the accent text */}
            <span className="text-[#f9a533] text-lg font-semibold tracking-wider">✦ Our Methodology</span>
          </div>
          {/* New gradient for the main header */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 bg-clip-text text-transparent">
            Our Approach
          </h1>
          <p className="text-neutral-300 text-xl max-w-2xl mx-auto leading-relaxed">
            We follow a professional methodology to ensure the highest translation quality
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="group relative">
                {/* Connecting Line (for desktop) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#f9a533]/50 to-transparent z-0"></div>
                )}

                {/* Card */}
                <div className="relative bg-zinc-800/40 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50 hover:border-[#f9a533]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#f9a533]/20 h-full">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center font-bold text-2xl text-white shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 via-[#f9a533] to-orange-600 rounded-full text-white font-semibold shadow-lg hover:shadow-amber-500/40 transition-all duration-300 cursor-pointer hover:scale-105">
            Start Your Project With Us
          </div>
        </div>
      </div>
    </div>
  );
}