"use client"

import { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "industries", label: "Industries" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img src="/logo.png" alt="ONPOINT" className="h-12 sm:h-14 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-base font-medium transition-all duration-300 hover:text-primary relative group ${
                    scrolled ? "text-dark" : "text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="hidden lg:block bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiX className={scrolled ? "text-dark" : "text-white"} />
            ) : (
              <HiMenu className={scrolled ? "text-dark" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white text-2xl font-medium hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
