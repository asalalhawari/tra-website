"use client"

import {
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  Lightbulb,
  Shield,
  Heart,
  Star,
  Clock,
  Sparkles,
  Zap,
  GraduationCap,
} from "lucide-react"
import { useState, useEffect } from "react"

function About() {
  const [valuesIndex, setValuesIndex] = useState(0)
  const [whyIndex, setWhyIndex] = useState(0)
  const [isPausedValues, setIsPausedValues] = useState(false)
  const [isPausedWhy, setIsPausedWhy] = useState(false)

  const stats = [
    { number: "500+", label: "Completed Projects", icon: CheckCircle },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: TrendingUp },
    { number: "50+", label: "Languages Supported", icon: Globe },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Innovative solutions that preserve the identity of the work",
    },
    {
      icon: Shield,
      title: "Accuracy",
      description: "Commitment to linguistic and artistic standards",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Clarity and transparency with our clients and partners",
    },
    {
      icon: Star,
      title: "Professionalism",
      description: "Qualified team with academic and practical expertise",
    },
    {
      icon: Clock,
      title: "Commitment",
      description: "Delivering projects on time without compromising quality",
    },
  ]

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
      description: "We understand deadlines matter. Quick turnaround without compromising quality",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Premium Quality",
      description: "State-of-the-art equipment and rigorous quality control for exceptional results",
    },
    {
      number: "04",
      icon: Globe,
      title: "Cultural Awareness",
      description: "Deep understanding of cultural nuances ensures authentic and resonant translations",
    },
  ]

  useEffect(() => {
    if (!isPausedWhy) {
      const interval = setInterval(() => {
        setWhyIndex((prev) => (prev + 1) % whyChooseUs.length)
      }, 15000)
      return () => clearInterval(interval)
    }
  }, [isPausedWhy, whyChooseUs.length])

  return (
    <section id="about" className="w-full bg-[#414042] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#f9a533] mb-4">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f9a533] to-transparent mx-auto mb-6" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Leading the industry in media production and professional translation services
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-[#f9a533] mb-6">
              A Leading Company in Production & Translation
            </h3>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              We specialize in providing professional media production and translation services for the
              media, entertainment, and arts sectors. We combine extensive experience with modern
              technologies to deliver high-quality content that meets our clients' needs.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Our specialized team of translators, voice-over artists, and producers works passionately
              to transform your vision into tangible reality, while maintaining the highest standards of
              quality and professionalism in every project.
            </p>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-[#f9a533]/30">
            <img
              src="man-with-microphone-headphones-running-podcast-studio.jpg"
              alt="Production Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#414042] to-transparent opacity-60" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center space-y-3
                         hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-xl bg-[#f9a533]
                              flex items-center justify-center
                              group-hover:scale-110 group-hover:rotate-12
                              transition-all duration-300
                              shadow-lg shadow-[#f9a533]/30"
                >
                  <Icon className="w-8 h-8 text-[#414042]" />
                </div>
                <div className="text-5xl font-black text-[#f9a533]">{stat.number}</div>
                <div className="text-sm text-white/90 font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <div className="group relative bg-gradient-to-br from-[#2a2a2c] to-[#1a1a1c]
                        rounded-3xl p-8 border-2 border-[#f9a533]/30
                        hover:border-[#f9a533]/60 hover:scale-105
                        transition-all duration-500
                        shadow-xl shadow-[#f9a533]/10 hover:shadow-2xl hover:shadow-[#f9a533]/20
                        overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#f9a533]/5 rounded-full blur-3xl" />
            <div className="relative">
              <div
                className="w-16 h-16 rounded-2xl bg-[#f9a533] flex items-center justify-center mb-6
                            group-hover:rotate-12 transition-transform duration-300"
              >
                <Globe className="w-9 h-9 text-[#414042]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f9a533] mb-4">Our Vision</h3>
              <div className="w-16 h-1 bg-[#f9a533] mb-4" />
              <p className="text-white/80 text-sm leading-relaxed">
                To become the leading partner in the region for audiovisual translation of dramatic and
                creative works, contributing to the global reach of Arab and international productions
                with confidence and quality.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative bg-gradient-to-br from-[#2a2a2c] to-[#1a1a1c]
                        rounded-3xl p-8 border-2 border-[#f9a533]/30
                        hover:border-[#f9a533]/60 hover:scale-105
                        transition-all duration-500
                        shadow-xl shadow-[#f9a533]/10 hover:shadow-2xl hover:shadow-[#f9a533]/20
                        overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#f9a533]/5 rounded-full blur-3xl" />
            <div className="relative">
              <div
                className="w-16 h-16 rounded-2xl bg-[#f9a533] flex items-center justify-center mb-6
                            group-hover:rotate-12 transition-transform duration-300"
              >
                <Star className="w-9 h-9 text-[#414042]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f9a533] mb-4">Our Mission</h3>
              <div className="w-16 h-1 bg-[#f9a533] mb-4" />
              <p className="text-white/80 text-sm leading-relaxed">
                Delivering world-class audiovisual translation services that preserve the essence of the
                original text and highlight its artistic value, through a professional team combining
                linguistic expertise with dramatic awareness.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#f9a533] mb-4">Our Values</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f9a533] to-transparent mx-auto mb-4" />
            <p className="text-white/70 text-sm">The principles that guide everything we do</p>
          </div>

          <div className="relative overflow-hidden py-4">
            <div
              className={`flex gap-6 whitespace-nowrap 
                animate-[scroll_40s_linear_infinite]`}
              onMouseEnter={() => setIsPausedValues(true)}
              onMouseLeave={() => setIsPausedValues(false)}
              style={{
                animationPlayState: isPausedValues ? "paused" : "running",
              }}
            >
              {[...values, ...values].map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                    <div
                      className="group relative bg-gradient-to-br from-[#2a2a2c] to-[#1a1a1c]
                                  rounded-2xl p-6 h-full border-2 border-[#f9a533]/20
                                  hover:border-[#f9a533]/50 hover:-translate-y-2
                                  transition-all duration-300
                                  shadow-lg hover:shadow-2xl hover:shadow-[#f9a533]/10"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div
                          className="w-16 h-16 rounded-xl bg-[#f9a533]
                                      flex items-center justify-center
                                      group-hover:scale-110 group-hover:rotate-6
                                      transition-all duration-300"
                        >
                          <Icon className="w-8 h-8 text-[#414042]" />
                        </div>
                        <h4 className="text-xl font-bold text-[#f9a533]">{value.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
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
      </div>
    </section>
  )
}

export default About
