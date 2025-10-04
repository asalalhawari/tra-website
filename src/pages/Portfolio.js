"use client"

import { motion } from "framer-motion"
import { HiPlay } from "react-icons/hi"
import "./Portfolio.css"

function Portfolio() {
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
    // إضافة المشروع الجديد للكتابة النقدية
    {
      title: "Art Magazine Editorial",
      category: "Editorial & Writing",
      description: "Critical writing and editorial contributions for regional art magazines",
      stats: { Articles: "12", Languages: "2", Pages: "36" },
      image: "/editorial-work.jpg",
    },
  ]

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="portfolio-title"
          >
            Our Portfolio
          </motion.h2>
          <div className="portfolio-divider"></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="portfolio-description"
          >
            We take pride in a diverse range of successful projects we've completed for our clients
          </motion.p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="portfolio-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="portfolio-image-wrapper relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="portfolio-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="portfolio-image-overlay absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60"></div>

                <div className="portfolio-category absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  {project.category}
                </div>

                <div className="portfolio-play-button absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="portfolio-play-icon-wrapper w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <HiPlay className="portfolio-play-icon text-3xl text-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="portfolio-content p-6">
                <h3 className="portfolio-card-title text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="portfolio-card-description text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="portfolio-stats grid grid-cols-3 gap-3">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx} className="portfolio-stat text-center">
                      <div className="portfolio-stat-value text-lg font-bold text-primary">{value}</div>
                      <div className="portfolio-stat-label text-xs text-gray-500">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر CTA الجديد */}
        <div className="text-center mt-10">
          <a
            href="/portfolio-full"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/80 transition-all duration-300"
          >
            Explore Portfolio / تصفح الأعمال
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
