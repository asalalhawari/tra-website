"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiPaperAirplane, HiOutlineChat } from "react-icons/hi"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

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

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971555767469"
        target="_blank"
        className="fixed right-6 bottom-20 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#f9a533]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#414042]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo & Slogan */}
        <div className="text-center mb-12">
          <img src="/logo.png" alt="On Point Audiovisual Logo" className="mx-auto w-40 mb-2" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414042] mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#f9a533] mx-auto mb-6"></div>
          <p className="text-xl text-[#414042]/80 max-w-3xl mx-auto">
            We're here to answer your questions and help you achieve your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#414042] mb-2">{info.title}</h3>
                    <p className="text-[#414042]/80">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-[#414042] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: FaFacebook, color: "hover:bg-blue-600" },
                  { icon: FaTwitter, color: "hover:bg-sky-500" },
                  { icon: FaInstagram, color: "hover:bg-pink-600" },
                  { icon: FaLinkedin, color: "hover:bg-blue-700" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#414042] mb-2">
                  Full Name *
                </label>
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
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#414042] mb-2">
                    Email *
                  </label>
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

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#414042] mb-2">
                    Phone *
                  </label>
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

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#414042] mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f9a533] focus:border-transparent transition-all duration-300 outline-none"
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

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#414042] mb-2">
                  Project Details *
                </label>
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

              <div>
                <label htmlFor="file" className="block text-sm font-medium text-[#414042] mb-2">
                  Attach File (Optional)
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f9a533] focus:border-transparent transition-all duration-300 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f9a533] file:text-white hover:file:bg-opacity-90"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#f9a533] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <HiPaperAirplane className="text-xl" />
                Send Request
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
