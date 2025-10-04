"use client"

import { motion } from "framer-motion"
import {
  FaTv,
  FaFilm,
  FaTheaterMasks,
  FaGamepad,
  FaMobileAlt,
  FaGraduationCap,
  FaBullhorn,
  FaPodcast,
} from "react-icons/fa"

function Industries() {
  const industries = [
    {
      icon: FaTv,
      title: "Media & Television",
      description: "Comprehensive services for TV channels and radio stations",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: FaFilm,
      title: "Cinema & Films",
      description: "Professional dubbing and translation for feature films",
      color: "from-purple-400 to-indigo-500",
    },
    {
      icon: FaTheaterMasks,
      title: "Theater & Arts",
      description: "Technical and production support for theatrical and artistic performances",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: FaGamepad,
      title: "Video Games",
      description: "Localization and translation of gaming content for all types",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: FaMobileAlt,
      title: "Digital Content",
      description: "Production and translation for digital platforms and social media",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: FaGraduationCap,
      title: "Education & Training",
      description: "Multilingual educational and training content production",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: FaBullhorn,
      title: "Advertising & Marketing",
      description: "Production and voice-over for advertising campaigns",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: FaPodcast,
      title: "Music & Podcasts",
      description: "Production and recording of musical and podcast audio content",
      color: "from-orange-400 to-yellow-500",
    },
  ]

  return (
    <section id="industries" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">Industries We Serve</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide our services to a wide range of media and artistic sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}
                  >
                    <industry.icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
