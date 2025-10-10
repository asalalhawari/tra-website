import React, { useEffect, useState } from "react";
import { Play, ChevronDown, Mic2, Languages, Video, Globe } from "lucide-react";

// The Counter component remains the same
function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end) || end === 0) return;
    
    const duration = 2000;
    const stepTime = Math.max(1, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#f9a533]">{count}{label === "Quality" ? "%" : "+"}</div>
      <div className="text-sm md:text-base text-gray-400 mt-2">{label}</div>
    </div>
  );
}

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const floatingIcons = [
    {
      icon: Languages,
      position: "top-0 left-1/4",
      delay: "0s",
      color: "text-[#f9a533]",
      description: "Translation & Subtitling",
    },
    {
      icon: Mic2,
      position: "top-1/4 right-0",
      delay: "0.5s",
      color: "text-white",
      description: "Voice Over & Dubbing",
    },
    {
      icon: Video,
      position: "bottom-1/4 left-0",
      delay: "1s",
      color: "text-[#f9a533]",
      description: "Video Production",
    },
    {
      icon: Globe,
      position: "bottom-0 right-1/4",
      delay: "1.5s",
      color: "text-white",
      description: "Global Reach",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#414042] via-[#2a2a2b] to-[#414042]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div
            className={`space-y-6 order-1 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9a533] via-[#ffc166] to-[#f9a533] animate-gradient">
                Production
              </span>
              <span className="text-white mx-2">&</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc166] via-[#f9a533] to-[#ffc166] animate-gradient">
                Translation Excellence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              Connecting worlds through powerful and accurate{" "}
              <span className="text-[#f9a533] font-semibold">translation</span>,{" "}
              <span className="text-[#ffc166] font-semibold">voice-over</span>, and{" "}
              <span className="text-[#f9a533] font-semibold">dubbing</span> services.
            </p>

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

            {/* Stats Counters */}
           
          </div>

          {/* Right Content */}
          <div
            className={`relative order-2 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full h-[450px] flex items-center justify-center">
              {/* Glow Background */}
              <div className="absolute w-full h-full bg-gradient-to-r from-[#f9a533]/20 via-[#f9a533]/30 to-[#f9a533]/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Pulsing Rings */}
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

              {/* === Main Central Image (Restored) === */}
              {/* The user requested to restore the original clapperboard image. */}
              <div className="relative z-20 transform scale-x-[-1] hover:scale-x-[-1.05] hover:scale-y-105 transition-transform duration-500">
                <img
                  src="/freepik__the-style-is-candid-image-photography-with-natural__83762-removebg-preview.png"
                  alt="Clapperboard for production services"
                  className="w-[350px] h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating Service Icons */}
              <div className="absolute inset-0">
                {floatingIcons.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={i}
                      className={`absolute ${item.position} group/icon`}
                      style={{
                        animation: `floatAround 8s ease-in-out infinite`,
                        animationDelay: item.delay,
                      }}
                      onMouseEnter={() => setHoveredIcon(i)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <div className="relative flex items-center justify-center cursor-pointer">
                        <div
                          className={`relative p-3 bg-[#414042]/90 backdrop-blur-sm rounded-xl border border-[#f9a533]/30 shadow-xl transition-all duration-300 group-hover/icon:scale-125 group-hover/icon:-translate-y-2 group-hover/icon:border-[#f9a533] group-hover/icon:shadow-2xl group-hover/icon:shadow-[#f9a533]/50`}
                        >
                          <IconComponent className={`w-6 h-6 ${item.color} transition-transform duration-300 group-hover/icon:scale-110`} />
                        </div>

                        {/* Tooltip */}
                        {hoveredIcon === i && (
                          <div className="absolute z-20 top-full mt-3 left-1/2 transform -translate-x-1/2 bg-[#414042]/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#f9a533]/50 shadow-xl whitespace-nowrap animate-fadeIn">
                            <p className="text-xs text-white font-medium">{item.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
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
        @keyframes floatAround {0%,100%{transform:translate(0,0) rotate(0deg);}25%{transform:translate(15px,-15px) rotate(8deg);}50%{transform:translate(-8px,-20px) rotate(-8deg);}75%{transform:translate(-15px,8px) rotate(5deg);}}
        @keyframes fadeIn {from{opacity:0;transform:translate(-50%, -10px);}to{opacity:1;transform:translate(-50%, 0);}}
        @keyframes ping { 75%, 100% { transform: scale(1.8); opacity: 0; } }
        .animate-gradient{background-size:200% 200%;animation:gradient 3s ease infinite;}
        .animate-blob{animation:blob 7s infinite;}
        .animation-delay-2000{animation-delay:2s;}
        .animation-delay-4000{animation-delay:4s;}
        .animate-fadeIn{animation:fadeIn 0.3s ease-out forwards;}
      `}</style>
    </section>
  );
}

export default Home;