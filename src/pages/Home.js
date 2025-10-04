import React, { useEffect, useState } from "react";
import { Play, Globe, Users, ChevronDown, Mic2, Languages, Video, Award } from "lucide-react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    scrollToHome();
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#414042] via-[#2a2a2b] to-[#414042]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#f9a533] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[calc(100vh-8rem)]">
          {/* Left Content - Text */}
          <div className={`space-y-6 order-1 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white inline">Your Partner in </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9a533] via-[#ffc166] to-[#f9a533] animate-gradient inline">Production</span>
              <span className="text-white ml-2 inline">&</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc166] via-[#f9a533] to-[#ffc166] animate-gradient ml-2 inline">Translation Excellence</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              Connecting worlds through powerful and accurate{" "}
              <span className="text-[#f9a533] font-semibold">translation</span>,{" "}
              <span className="text-[#ffc166] font-semibold">voice-over</span>, and{" "}
              <span className="text-[#f9a533] font-semibold">dubbing</span> services.
            </p>

            {/* Get a Quote Button */}
            <div className="mt-2">
              <button
                onClick={scrollToContact}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f9a533] to-[#e89419] rounded-full font-semibold text-[#414042] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f9a533]/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote
                  <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffc166] to-[#f9a533] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 py-6 mt-6">
              <div className="text-center p-4 bg-[#414042]/50 backdrop-blur-sm rounded-xl border border-[#f9a533]/20 hover:border-[#f9a533]/50 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-[#f9a533]">500+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-[#414042]/50 backdrop-blur-sm rounded-xl border border-[#f9a533]/20 hover:border-[#f9a533]/50 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-[#f9a533]">50+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Languages</div>
              </div>
              <div className="text-center p-4 bg-[#414042]/50 backdrop-blur-sm rounded-xl border border-[#f9a533]/20 hover:border-[#f9a533]/50 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-[#f9a533]">100%</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Quality</div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="pt-6 md:pt-8">
              <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 uppercase tracking-wider">Trusted by Industry Leaders</p>
              <div className="grid grid-cols-4 gap-4 md:gap-8 items-center opacity-40 hover:opacity-70 transition-all duration-500">
                <img
                  src="engineer_2705141.png"
                  alt="Warner Bros"
                  className="h-6 md:h-8 object-contain filter brightness-0 invert"
                />
                <img
                  src="competitive_10266484.png"
                  alt="Universal Pictures"
                  className="h-6 md:h-8 object-contain filter brightness-0 invert"
                />
                <img
                  src="stamping_11702943.png"
                  alt="Paramount Pictures"
                  className="h-6 md:h-8 object-contain filter brightness-0 invert"
                />
                <img
                  src="ribbon_15395691.png"
                  alt="20th Century Studios"
                  className="h-6 md:h-8 object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Clapperboard */}
          <div className={`relative order-2 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full max-w-lg mx-auto mt-6">
              <div className="relative z-10 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[450px] h-[450px] bg-gradient-to-r from-[#f9a533]/20 via-[#f9a533]/30 to-[#f9a533]/20 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-full border-2 border-[#f9a533]/20 rounded-full"
                      style={{
                        animation: `ping ${2 + i * 0.5}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Clapperboard Image */}
                <div className="relative z-20 transform scale-x-[-1] hover:scale-x-[-1.05] hover:scale-y-105 transition-transform duration-500">
                  <img src="/freepik__the-style-is-candid-image-photography-with-natural__83762-removebg-preview.png" alt="Clapperboard" className="w-[350px] h-auto drop-shadow-2xl" />
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0">
                  {[
                    { icon: Mic2, position: "top-0 left-1/4", delay: "0s", color: "text-[#f9a533]" },
                    { icon: Languages, position: "top-1/4 right-0", delay: "0.5s", color: "text-white" },
                    { icon: Video, position: "bottom-1/4 left-0", delay: "1s", color: "text-[#f9a533]" },
                    { icon: Globe, position: "bottom-0 right-1/4", delay: "1.5s", color: "text-white" },
                  ].map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={i}
                        className={`absolute ${item.position} p-3 bg-[#414042]/80 backdrop-blur-sm rounded-xl border border-[#f9a533]/20 shadow-xl`}
                        style={{
                          animation: `floatAround 8s ease-in-out infinite`,
                          animationDelay: item.delay,
                        }}
                      >
                        <IconComponent className={`w-6 h-6 ${item.color}`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#f9a533]/50" />
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes gradient {0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
        @keyframes blob {0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(30px,-50px) scale(1.1);}66%{transform:translate(-20px,20px) scale(0.9);}}
        @keyframes float {0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
        @keyframes floatAround {0%,100%{transform:translate(0,0) rotate(0deg);}25%{transform:translate(10px,-10px) rotate(5deg);}50%{transform:translate(-5px,-15px) rotate(-5deg);}75%{transform:translate(-10px,5px) rotate(3deg);}}
        .animate-gradient{background-size:200% 200%;animation:gradient 3s ease infinite;}
        .animate-blob{animation:blob 7s infinite;}
        .animation-delay-2000{animation-delay:2s;}
        .animation-delay-4000{animation-delay:4s;}
      `}</style>
    </section>
  );
}

export default Home;
