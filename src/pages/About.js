import {
  Globe,
  Lightbulb,
  Shield,
  Heart,
  Star,
  Clock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom"; // Import createPortal

// AnimatedCounter component remains unchanged
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <h3 ref={counterRef} className="text-4xl font-bold text-gray-900 mb-2">
      {count}
      {suffix}
    </h3>
  );
}

// Component to render the image via a portal
function ValuesPatternImage() {
  return createPortal(
    <img
      src="/values-pattern.png"
      alt="Values Pattern"
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl opacity-20 pointer-events-none z-[-1]"
    />,
    document.body // Render directly into <body>
  );
}

function About() {
  return (
    <section id="about" className="w-full bg-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 relative">
          {/* Left Side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 row-span-2 rounded-[40px] overflow-hidden h-[400px]">
                <img
                  src="/collage-about-movie-time-with-man-megaphone.jpg"
                  alt="Movie production with megaphone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 rounded-[40px] overflow-hidden h-[192px]">
                <img
                  src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Audio mixing console"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 rounded-[40px] overflow-hidden h-[192px]">
                <img
                  src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional camera lens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative">
            <div className="mb-8">
              <p className="text-[#f9a533] font-semibold text-lg mb-3">
                About Us
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-left">
                The Art of Audiovisual Translation
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <strong>On Point Audiovisual Translation Services</strong> is a
                specialized company offering audiovisual translation solutions
                in creative and dramatic fields. We see translation as an art
                and cultural bridge that brings dramatic works closer to
                diverse audiences worldwide.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our team combines expertise in specialized translation with a
                background in dramatic writing and scenography, ensuring every
                message reaches audiences with depth and impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <AnimatedCounter end={500} suffix="+" />
                <p className="text-gray-600 text-sm">Completed Projects</p>
              </div>
              <div>
                <AnimatedCounter end={200} suffix="+" />
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div>
                <AnimatedCounter end={15} suffix="+" />
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <div className="relative rounded-2xl p-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9a533] via-pink-500 to-purple-600 animate-moveBorder bg-[length:300%_300%]" />
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-[#f9a533] flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading partner in the region for audiovisual
                translation of dramatic and creative works, contributing to the
                global reach of Arab and international productions with
                confidence and quality.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative rounded-2xl p-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9a533] via-pink-500 to-purple-600 animate-moveBorder bg-[length:300%_300%]" />
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-[#f9a533] flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering world-class audiovisual translation services that
                preserve the essence of the original text and highlight its
                artistic value, through a professional team combining linguistic
                expertise with dramatic awareness.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20 relative">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr relative z-10">
            {/* Creativity */}
            <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Creativity"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-[#f9a533]/0 group-hover:bg-[#f9a533]/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-6 transition-all duration-500 group-hover:opacity-0">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="w-6 h-6 text-[#f9a533]" />
                  <h4 className="text-2xl font-bold text-white">Creativity</h4>
                </div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Lightbulb className="w-12 h-12 text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">Creativity</h4>
                <p className="text-white">
                  Innovative solutions that preserve the identity of the work
                </p>
              </div>
            </div>

            {/* Accuracy */}
            <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Accuracy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-[#f9a533]/0 group-hover:bg-[#f9a533]/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-6 transition-all duration-500 group-hover:opacity-0">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-[#f9a533]" />
                  <h4 className="text-xl font-bold text-white">Accuracy</h4>
                </div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Shield className="w-12 h-12 text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">Accuracy</h4>
                <p className="text-white">
                  Commitment to linguistic and artistic standards
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Integrity"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-[#f9a533]/0 group-hover:bg-[#f9a533]/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-6 transition-all duration-500 group-hover:opacity-0">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-6 h-6 text-[#f9a533]" />
                  <h4 className="text-xl font-bold text-white">Integrity</h4>
                </div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Heart className="w-12 h-12 text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">Integrity</h4>
                <p className="text-white">
                  Clarity and transparency with our clients and partners
                </p>
              </div>
            </div>

            {/* Professionalism */}
            <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professionalism"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-[#f9a533]/0 group-hover:bg-[#f9a533]/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-6 transition-all duration-500 group-hover:opacity-0">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-6 h-6 text-[#f9a533]" />
                  <h4 className="text-2xl font-bold text-white">
                    Professionalism
                  </h4>
                </div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Star className="w-12 h-12 text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">
                  Professionalism
                </h4>
                <p className="text-white">
                  Qualified team with academic and practical expertise
                </p>
              </div>
            </div>

            {/* Commitment */}
            <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commitment"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-[#f9a533]/0 group-hover:bg-[#f9a533]/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-6 transition-all duration-500 group-hover:opacity-0">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-[#f9a533]" />
                  <h4 className="text-xl font-bold text-white">Commitment</h4>
                </div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Clock className="w-12 h-12 text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">Commitment</h4>
                <p className="text-white">
                  Delivering projects on time without compromising quality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Render the ValuesPatternImage component */}
        <ValuesPatternImage />
      </div>
    </section>
  );
}

export default About;