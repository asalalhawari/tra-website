import React from 'react';
import { TrendingUp } from 'lucide-react';

// بيانات الفريق
const teamMembers = [
  {
    name: "Yasmine Abo Fakher",
    role: "Founder & Director",
    description:
      "Professional translator and screenwriter with extensive experience in dramatic and literary translation. Holds degrees in Translation and Scenic Design for Dramatic Arts.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Specialized Translators",
    role: "Technical & Artistic Translation",
    description:
      "Skilled in technical and artistic translation, with advanced training in subtitling and dubbing.",
    avatar: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Review & Quality Team",
    role: "Quality Assurance",
    description:
      "Ensures every project undergoes thorough linguistic and artistic review before delivery.",
    avatar: "https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function OurTeam() {
  return (
    // تم تغيير الخلفية الرئيسية إلى #414042
    <section className="py-20 px-6 bg-[#414042] min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-white tracking-wide">Our Team</h2>
        {/* تم تغيير لون النص الوصفي ليتناسب مع التصميم */}
        <p className="text-neutral-300 mt-4 max-w-3xl mx-auto">
          Our team combines specialized translators and dramatic experts, ensuring a balance between linguistic accuracy and artistic awareness.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            // تم تغيير تدرج لون الإطار الخارجي عند المرور
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm p-1 hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300"
          >
            <div className="relative bg-zinc-900/90 rounded-xl p-6 hover:bg-zinc-800/90 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    // تم تغيير لون حلقة الصورة إلى اللون البرتقالي
                    className="w-24 h-24 rounded-full object-cover ring-2 ring-[#f9a533]/50 group-hover:ring-[#f9a533] transition-all"
                  />
                  {/* تم تغيير لون خلفية الأيقونة */}
                  <div className="absolute -top-1 -right-1 bg-[#f9a533] rounded-full p-1">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-1 truncate w-full">
                  {member.name}
                </h3>
                {/* تم تغيير لون الدور الوظيفي إلى اللون البرتقالي */}
                <p className="text-[#f9a533] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-neutral-300 text-xs">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}