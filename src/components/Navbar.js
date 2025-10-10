"use client"

import { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

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
      setOpenDropdown(null)
    }
  }

  const navLinks = [
    { id: "home", label: "Home" },
    {
      label: "About Us",
      children: [
        { id: "vision", label: "Our Vision" },
        { id: "mission", label: "Our Mission" },
        { id: "values", label: "Our Values" },
      ],
    },
    {
      label: "Services",
      children: [
        { id: "industries", label: "Industries We Serve" },
        { id: "languages", label: "Our Languages" },
      ],
    },
    {
      label: "Insights",
      children: [
        { id: "team", label: "Our Team" },
        { id: "approach", label: "Our Approach" },
        { id: "achievements", label: "Our Achievements" },
        { id: "portfolio", label: "Our Portfolio" },
        { id: "clients", label: "Our Clients" },
      ],
    },
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
              <li key={index} className="relative group">
                {!link.children ? (
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-base font-medium transition-all duration-300 hover:text-primary ${
                      scrolled ? "text-dark" : "text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <>
                    <button
                      className={`text-base font-medium transition-all duration-300 hover:text-primary flex items-center ${
                        scrolled ? "text-dark" : "text-white"
                      }`}
                    >
                      {link.label}
                      {/* مثلث صغير فقط للعناصر الرئيسية التي لها children */}
                      <span className="text-xs ml-1 text-gray-400">▼</span>
                    </button>
                    {/* Dropdown with borders */}
                    <ul className="absolute hidden group-hover:block bg-white text-dark shadow-lg rounded-md mt-2 w-56 border p-1">
                      {link.children.map((child) => (
                        <li key={child.label} className="border border-gray-200 rounded-md m-1">
                          <button
                            onClick={() => scrollToSection(child.id)}
                            className="block w-full text-left px-4 py-2 hover:bg-primary hover:text-white transition"
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
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
            <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
              {navLinks.map((link) => (
                <div key={link.label} className="w-full">
                  {!link.children ? (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white text-xl font-medium hover:text-primary transition-colors duration-300 w-full text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        className="text-white text-xl font-medium hover:text-primary transition-colors duration-300 w-full text-left flex items-center justify-between"
                      >
                        {link.label}
                        {/* مثلث صغير فقط للعناصر الرئيسية التي لها children */}
                        <span className="text-xs text-gray-400 ml-2">▼</span>
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {link.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => scrollToSection(child.id)}
                              className="block w-full text-left px-4 py-2 border border-gray-700 rounded-md hover:bg-primary hover:text-white transition"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg"
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
