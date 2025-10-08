"use client"

import { useState, useEffect } from "react"
import { Globe, GraduationCap, Sparkles, Zap } from "lucide-react"

const whyChooseUs = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Expert Team",
    description:
      "Professional translators and voice-over artists with years of experience in audiovisual translation",
  },
  {
    number: "02",
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We understand deadlines matter. Quick turnaround without compromising quality",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "State-of-the-art equipment and rigorous quality control for exceptional results",
  },
  {
    number: "04",
    icon: Globe,
    title: "Cultural Awareness",
    description:
      "Deep understanding of cultural nuances ensures authentic and resonant translations",
  },
]

export default function WhyChooseUs() {
  const [whyIndex, setWhyIndex] = useState(0)
  const [isPausedWhy, setIsPausedWhy] = useState(false)

  useEffect(() => {
    if (!isPausedWhy) {
      const interval = setInterval(() => {
        setWhyIndex((prev) => (prev + 1) % whyChooseUs.length)
      }, 15000)
      return () => clearInterval(interval)
    }
  }, [isPausedWhy])

  return (
    <section className="w-full py-16 px-4 bg-[#414042]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-[#f9a533] mb-4">Why Choose Us</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f9a533] to-transparent mx-auto mb-4" />
          <p className="text-white/70 text-sm">What makes us the preferred choice for your projects</p>
        </div>

        <div className="relative overflow-hidden py-4">
          <div
            className="flex gap-6 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${whyIndex * 100}%)` }}
            onMouseEnter={() => setIsPausedWhy(true)}
            onMouseLeave={() => setIsPausedWhy(false)}
          >
            {[...whyChooseUs, ...whyChooseUs].map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="flex-shrink-0 w-full md:w-[calc(50%-12px)]">
                  <div
                    className="group relative bg-gradient-to-br from-[#2a2a2c] to-[#1a1a1c]
                                rounded-2xl p-6 h-full border-2 border-[#f9a533]/30
                                hover:border-[#f9a533]/60 hover:scale-105
                                transition-all duration-300
                                shadow-xl hover:shadow-2xl hover:shadow-[#f9a533]/20
                                overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 text-7xl font-black text-[#f9a533]/10">
                      {reason.number}
                    </div>
                    <div className="relative flex items-start gap-6">
                      <div
                        className="w-16 h-16 rounded-xl bg-[#f9a533] flex-shrink-0
                                    flex items-center justify-center
                                    group-hover:scale-110 group-hover:rotate-12
                                    transition-all duration-300
                                    shadow-lg shadow-[#f9a533]/30"
                      >
                        <Icon className="w-8 h-8 text-[#414042]" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-[#f9a533] mb-3">{reason.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {whyChooseUs.map((_, index) => (
            <button
              key={index}
              onClick={() => setWhyIndex(index)}
              className={`h-2 rounded-full transition-all duration-300
                        ${whyIndex === index ? "bg-[#f9a533] w-8" : "bg-white/30 w-2 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
