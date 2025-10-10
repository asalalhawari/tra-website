"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { Globe, GraduationCap, Sparkles, Zap } from "lucide-react"

// --- Why Choose Us Data ---
const whyChooseUsData = [
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

// --- Contact Info Data ---
const contactInfo = [
  {
    icon: HiMail,
    title: "Email",
    content: "contact.us@tobeonpoint.com",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: HiPhone,
    title: "Phone",
    content: "+971555767469 / +963999141747",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: HiLocationMarker,
    title: "Address",
    content: "UAE - Dubai",
    color: "from-red-400 to-pink-500",
  },
]

// --- Reusable Motion Variants for staggered entrance ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}


// --- Main Contact Component with Integrated Why Choose Us ---
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for contacting us! We will respond to you as soon as possible.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      file: null,
    })
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971555767469"
        target="_blank"
        className="fixed right-6 bottom-20 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* --- Why Choose Us Section (Top, Dark Background) --- */}
      <div className="py-20 bg-[#414042] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f9a533] mb-4">Why Choose Us?</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Our commitment to quality, speed, and cultural precision makes us your ideal partner.
                </p>
            </motion.div>

            {/* Why Choose Us Grid - Modern Card Design */}
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {whyChooseUsData.map((reason, index) => {
                    const Icon = reason.icon
                    return (
                        <motion.div
                            key={reason.number}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px rgba(249, 165, 51, 0.4)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative group bg-gradient-to-br from-[#2a2a2c] to-[#1a1a1c] p-6 rounded-2xl shadow-xl border-2 border-[#f9a533]/20 overflow-hidden h-full"
                        >
                            {/* Large Background Number */}
                            <div className="absolute top-0 right-0 text-[100px] font-extrabold text-[#f9a533]/10 leading-none group-hover:text-[#f9a533]/20 transition-all duration-500">
                                {reason.number}
                            </div>
                            
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-full bg-[#f9a533] flex items-center justify-center mb-4 relative z-10 group-hover:rotate-6 transition-transform duration-300">
                                <Icon className="w-7 h-7 text-[#414042]" />
                            </div>
                            
                            {/* Content */}
                            <h4 className="text-xl font-bold text-white mb-2 relative z-10">
                                {reason.title}
                            </h4>
                            <p className="text-white/70 text-sm relative z-10">
                                {reason.description}
                            </p>
                            
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-[#f9a533]/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
      </div>


      {/* --- Contact Form & Info Section (Bottom, Light Background) --- */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header for Contact */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-[#414042] mb-4">Let's Talk Project</h2>
                <div className="w-24 h-1 bg-[#f9a533] mx-auto mb-6"></div>
                <p className="text-xl text-[#414042]/80 max-w-3xl mx-auto">
                    Fill out the form below or reach us directly. We're eager to hear about your needs.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12">
                
                {/* Contact Form (Takes 2/3 of the width on large screens) */}
                <motion.form
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    onSubmit={handleSubmit}
                    className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
                >
                    <div className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[#414042] mb-2">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f9a533] focus:border-transparent transition-all duration-300 outline-none"
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#414042] mb-2">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="example@email.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f9a533] focus:border-transparent transition-all duration-300 outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-[#414042] mb-2">Phone *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+971555767469 / +963999141747"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f9a533] focus:border-transparent transition-all duration-300 outline-none"
                                />
                            </div>
                        </div>

                        {/* Service Required */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-[#414042] mb-2">Service Required *</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f9a533] focus:border-transparent transition-all duration-300 outline-none bg-white appearance-none"
                            >
                                <option value="">Select Service</option>
                                <option value="voiceover">Voice Over</option>
                                <option value="translation">Professional Translation</option>
                                <option value="subtitling">Subtitling</option>
                                <option value="dubbing">Full Dubbing</option>
                                <option value="audio-production">Audio Production</option>
                                <option value="video-production">Video Production</option>
                            </select>
                        </div>

                        {/* Project Details */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-[#414042] mb-2">Project Details *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell us about your project and requirements"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f9a533] focus:border-transparent transition-all duration-300 outline-none resize-none"
                            ></textarea>
                        </div>

                        {/* Attach File */}
                        <div>
                            <label htmlFor="file" className="block text-sm font-medium text-[#414042] mb-2">Attach File (Optional)</label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx,.txt"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f9a533] focus:border-transparent transition-all duration-300 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f9a533] file:text-white hover:file:bg-opacity-90 cursor-pointer"
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-[#f9a533] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-8"
                        >
                            <HiPaperAirplane className="text-xl" />
                            Send Request
                        </motion.button>
                    </div>
                </motion.form>
                
                {/* Contact Info & Social Links (Takes 1/3 of the width on large screens) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="lg:col-span-1 space-y-8"
                >
                    {/* Contact Info */}
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ x: 5, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                                className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                                    >
                                        <info.icon className="text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-bold text-[#414042] mb-1">{info.title}</h3>
                                        <p className="text-[#414042]/80 text-sm">{info.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
                        <h3 className="text-lg font-bold text-[#414042] mb-4">Follow Us</h3>
                        <div className="flex gap-4 justify-center">
                            {[
                                { icon: FaFacebook, color: "hover:bg-blue-600", link: "#" },
                                { icon: FaTwitter, color: "hover:bg-sky-500", link: "#" },
                                { icon: FaInstagram, color: "hover:bg-pink-600", link: "#" },
                                { icon: FaLinkedin, color: "hover:bg-blue-700", link: "#" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 shadow-md`}
                                >
                                    <social.icon className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact