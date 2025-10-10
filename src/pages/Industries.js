import { motion } from "framer-motion";
import {
  Tv,
  Film,
  Radio,
  Gamepad2,
  Smartphone,
  GraduationCap,
  Megaphone,
  Mic2,
  Play,
  Power,
} from "lucide-react";

function Industries() {
  const industries = [
    {
      icon: Tv,
      title: "Media & Television",
      description: "Comprehensive services for TV channels and radio stations",
      color: "from-orange-400 to-red-500",
      accentColor: "bg-orange-500",
    },
    {
      icon: Film,
      title: "Cinema & Films",
      description: "Professional dubbing and translation for feature films",
      color: "from-blue-400 to-indigo-500",
      accentColor: "bg-blue-500",
    },
    {
      icon: Radio,
      title: "Theater & Arts",
      description: "Technical and production support for theatrical performances",
      color: "from-amber-400 to-orange-500",
      accentColor: "bg-amber-500",
    },
    {
      icon: Gamepad2,
      title: "Video Games",
      description: "Localization and translation of gaming content",
      color: "from-green-400 to-teal-500",
      accentColor: "bg-green-500",
    },
    {
      icon: Smartphone,
      title: "Digital Content",
      description: "Production for digital platforms and social media",
      color: "from-cyan-400 to-blue-500",
      accentColor: "bg-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Multilingual educational content production",
      color: "from-violet-400 to-purple-500",
      accentColor: "bg-violet-500",
    },
    {
      icon: Megaphone,
      title: "Advertising & Marketing",
      description: "Voice-over for advertising campaigns",
      color: "from-pink-400 to-rose-500",
      accentColor: "bg-pink-500",
    },
    {
      icon: Mic2,
      title: "Music & Podcasts",
      description: "Production of musical and podcast content",
      color: "from-emerald-400 to-green-500",
      accentColor: "bg-emerald-500",
    },
  ];

  return (
    <section
      id="industries"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#f9a533] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gray-900 opacity-5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Decorative Image Above Title */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent to-[#f9a533]"
            />
            
            {/* Image بدل المثلث */}
            <motion.img
              src="/logo7.png" // استبدل هذا بالمسار الصحيح للصورة عندك
              alt="decorative"
              initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ type: "spring", delay: 0.5 }}
  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            />

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-l from-transparent to-[#f9a533]"
            />
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide our services to a wide range of media and artistic sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                className={`absolute inset-0 bg-gradient-to-br ${industry.color}`}
              />

              {/* Top Decorative Element - Power Symbol */}
              <div className="absolute -top-8 -right-8 w-24 h-24 opacity-5">
                <Power className="w-full h-full text-gray-900" />
              </div>

              <div className="relative z-10">
                {/* Icon Container with Play Button Style */}
                <div className="mb-6 flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`relative w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                  >
                    <industry.icon className="text-2xl text-white" strokeWidth={2} />

                    {/* Small Play Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                      <Play className="w-2 h-2 text-[#f9a533] fill-[#f9a533] ml-0.5" />
                    </div>
                  </motion.div>

                  {/* Vertical Accent Line */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className={`w-1 ${industry.accentColor} rounded-full opacity-30`}
                  />
                </div>

                {/* Title with ON/OFF Style */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f9a533] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="h-0.5 bg-gradient-to-r from-[#f9a533] to-transparent"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Corner Decorative Element */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#f9a533] opacity-0 group-hover:opacity-5 rounded-br-full transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#f9a533] rounded-full"
            />
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#f9a533] to-transparent" />
            <Play className="w-5 h-5 text-[#f9a533] fill-[#f9a533]" />
            <div className="w-24 h-0.5 bg-gradient-to-l from-[#f9a533] to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-2 h-2 bg-gray-900 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Industries;
