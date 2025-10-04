import { useState } from 'react';
import { Mic, Globe, Files as Subtitles, Drama, Music, Video, FileText, Headphones, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      id: 'voiceover',
      icon: Mic,
      title: 'Voice Over',
      description:
        'Professional voice-over artists in multiple languages for all types of media and advertising content',
      features: ['Commercial Voice Over', 'Documentary Narration', 'Educational Content', 'Dramatic Performance'],
      color: 'from-[#f9a533] to-[#ffb84d]',
      glowColor: 'rgba(249, 165, 51, 0.4)',
    },
    {
      id: 'translation',
      icon: Globe,
      title: 'Professional Translation',
      description:
        'Accurate and specialized translation for media and artistic content with cultural context consideration',
      features: ['Text Translation', 'Simultaneous Interpretation', 'Specialized Translation', 'Language Review'],
      color: 'from-[#f9a533] to-[#414042]',
      glowColor: 'rgba(249, 165, 51, 0.3)',
    },
    {
      id: 'editorial',
      icon: FileText,
      title: 'Editorial Translation',
      description:
        'Professional editorial translation and adaptation for books, articles, and written content with style preservation',
      features: ['Book Translation', 'Article Adaptation', 'Content Localization', 'Style Matching'],
      color: 'from-[#414042] to-[#5a5a5c]',
      glowColor: 'rgba(249, 165, 51, 0.25)',
    },
    {
      id: 'subtitling',
      icon: Subtitles,
      title: 'Subtitling',
      description: 'Translation and subtitling services for films, series, and television programs',
      features: ['Film Subtitles', 'Series Subtitles', 'Precise Timing', 'Professional Formatting'],
      color: 'from-[#f9a533] to-[#e69428]',
      glowColor: 'rgba(249, 165, 51, 0.4)',
    },
    {
      id: 'transcription',
      icon: Headphones,
      title: 'Transcription',
      description:
        'Accurate audio and video transcription services with timestamps and speaker identification',
      features: ['Audio Transcription', 'Video Transcription', 'Time Coding', 'Multi-Speaker ID'],
      color: 'from-[#414042] to-[#f9a533]',
      glowColor: 'rgba(249, 165, 51, 0.3)',
    },
    {
      id: 'dubbing',
      icon: Drama,
      title: 'Full Dubbing',
      description: 'Professional dubbing for visual content with perfect audio synchronization',
      features: ['Drama Dubbing', 'Documentary Dubbing', 'Animation Dubbing', 'Lip Sync'],
      color: 'from-[#f9a533] to-[#ffb84d]',
      glowColor: 'rgba(249, 165, 51, 0.4)',
    },
    {
      id: 'audio',
      icon: Music,
      title: 'Audio Production',
      description: 'High-quality audio production and recording in studios equipped with the latest technology',
      features: ['Studio Recording', 'Audio Processing', 'Sound Effects', 'Background Music'],
      color: 'from-[#414042] to-[#5a5a5c]',
      glowColor: 'rgba(249, 165, 51, 0.25)',
    },
    {
      id: 'video',
      icon: Video,
      title: 'Video Production',
      description: 'Complete visual content production from filming to editing and final output',
      features: ['Professional Filming', 'Editing & Directing', 'Motion Graphics', 'Color Correction'],
      color: 'from-[#f9a533] to-[#414042]',
      glowColor: 'rgba(249, 165, 51, 0.3)',
    },
  ];

  return (
    <section id="services" className="relative min-h-screen bg-[#414042] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#414042] via-[#4a4a4c] to-[#414042]"></div>

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f9a533]/10 to-[#f9a533]/20 border border-[#f9a533]/30 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#f9a533]" />
            <span className="text-sm text-[#f9a533] font-medium">Premium Services</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ffffff] via-[#f9a533] to-[#ffffff] bg-clip-text text-transparent">
            Our Services
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f9a533]"></div>
            <div className="w-2 h-2 rounded-full bg-[#f9a533] shadow-[0_0_10px_rgba(249,165,51,0.5)]"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f9a533]"></div>
          </div>

          <p className="text-xl text-[#ffffff]/80 max-w-2xl mx-auto">
            We offer a comprehensive range of media and production services to meet all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;
            const isActive = activeCard === service.id;

            return (
              <div
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(isActive ? null : service.id)}
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div
                  className={`
                    relative h-full bg-gradient-to-br from-[#2a2a2b]/95 to-[#1f1f20]/95
                    rounded-2xl border border-[#f9a533]/20 overflow-hidden
                    backdrop-blur-xl transition-all duration-500 cursor-pointer
                    ${isHovered ? 'scale-[1.02] border-[#f9a533]/40' : ''}
                    ${isActive ? 'ring-2 ring-[#f9a533]/60' : ''}
                  `}
                  style={{
                    boxShadow: isHovered
                      ? `0 20px 60px -10px ${service.glowColor}, 0 0 40px -10px ${service.glowColor}`
                      : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-full blur-2xl`}></div>
                  </div>

                  <div className="relative p-6 h-full flex flex-col">
                    <div className={`relative w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                      <Icon className="w-7 h-7 text-white" />

                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    </div>

                    <h3 className="text-xl font-bold text-[#ffffff] mb-3 group-hover:text-[#f9a533] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#ffffff]/70 mb-4 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div className={`space-y-2 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-[#ffffff]/80"
                          style={{
                            animation: isActive ? `slideInLeft 0.4s ease-out forwards ${idx * 0.1}s` : 'none',
                            opacity: isActive ? 1 : 0,
                          }}
                        >
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#f9a533]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`
                        mt-auto flex items-center gap-2 text-sm font-medium
                        px-4 py-2 rounded-lg transition-all duration-300
                        ${isActive
                          ? `bg-gradient-to-r ${service.color} text-white shadow-lg shadow-[#f9a533]/30`
                          : 'text-[#ffffff]/70 hover:text-[#f9a533] border border-[#f9a533]/20 hover:border-[#f9a533]/50'
                        }
                      `}
                    >
                      <span>{isActive ? 'Show Less' : 'Learn More'}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f9a533] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default Services;
