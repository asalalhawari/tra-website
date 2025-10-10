import React from 'react';
import { Square } from 'lucide-react';

const teamMembers = [
  {
    name: "Specialized Translators",
    role: "Technical Translation",
    company: "Expert Team",
    avatar: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "#414042",
    lanyard: "#414042"
  },
  {
    name: "Yasmine Abo Fakher",
    role: "Founder & Director",
    company: "Professional Translator",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "#f9a533",
    lanyard: "#f9a533"
  },
  {
    name: "Review & Quality",
    role: "Quality Assurance",
    company: "QA Specialists",
    avatar: "https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "#f9a533",
    lanyard: "#f9a533"
  },
];

export default function OurTeam() {
  return (
    <section
      id="team" // ✅ اضفنا ID للسكشن
      className="py-20 px-6 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 min-h-screen relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f9a533]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#414042]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-5xl font-bold text-[#414042] tracking-wide">Our Team</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#f9a533] to-[#414042] mx-auto mt-4"></div>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
          Meet our dedicated team of translation and quality experts
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 relative z-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center group ${
              index === 1 ? '-mt-8 lg:-mt-12' : ''
            }`} // ياسمين يطلع لفوق
          >
            {/* ID Card */}
            <div
              className="bg-white rounded-2xl shadow-2xl p-6 w-72 transform group-hover:scale-105 transition-all duration-300 relative"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
              }}
            >
              {/* Header with icon */}
              <div className="absolute top-4 left-4">
                <Square
                  className="w-5 h-5"
                  style={{ color: member.color }}
                  fill={member.color}
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#f9a533]/60"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400/40"></div>
                <div className="w-3 h-3 rounded-full bg-[#f9a533]/30"></div>
              </div>

              {/* Profile Image */}
              <div className="mt-8 mb-4 relative">
                <div
                  className="w-40 h-40 mx-auto rounded-full overflow-hidden relative"
                  style={{
                    background: member.color,
                    padding: '4px'
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative circle on image */}
                <div
                  className="absolute bottom-2 right-12 w-8 h-8 rounded-full"
                  style={{ backgroundColor: member.color, opacity: 0.5 }}
                ></div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: member.color }}
                >
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs">
                  {member.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
