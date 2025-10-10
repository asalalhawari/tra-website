import React from 'react';
import { Star } from 'lucide-react';

/**
 * Testimonial Card Component (Based on the golden/dark theme image)
 * @param {object} props - The component props
 * @param {string} props.comment - The client's testimonial comment.
 * @param {string} props.name - The client's name.
 * @param {string} props.role - The client's role or company.
 * @param {number} props.rating - The client's rating (out of 5).
 */
export function TestimonialCard({ comment, name, role, rating }) {
  const isMinimalDesign = !role; // Use a simpler design if role is not provided, matching the first image's format

  if (isMinimalDesign) {
    // Design for the first image (simpler quote box, no profile image)
    return (
      <div className="relative p-8 md:p-12 max-w-lg mx-auto bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 shadow-2xl shadow-zinc-950/50">
        {/* Large Quote Icon - Adjusted to be white/gold for contrast */}
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-serif text-white/10 select-none pointer-events-none">“</span>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#f9a533] flex items-center justify-center text-white text-4xl font-serif z-10">
          “
        </div>

        {/* Comment Text */}
        <p className="text-white text-xl md:text-2xl italic mb-6 text-center pt-8 relative z-20">
          {comment}
        </p>

        {/* Separator */}
        <div className="w-16 h-0.5 bg-[#f9a533] mx-auto mb-4"></div>
        
        {/* Client Info */}
        <div className="text-center">
          <p className="text-[#f9a533] font-semibold text-lg">
            -{name}
          </p>
          {/* 5-Star Rating */}
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Design for the second image (Golden outline and quote icons)
  return (
    <div className="relative p-8 md:p-10 max-w-md mx-auto bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-[#f9a533] transition-all duration-300 shadow-xl shadow-zinc-950/50">
      
      {/* Golden Quote Container - Mimics the glow/outline effect */}
      <div className="absolute inset-0 p-1.5 rounded-xl pointer-events-none">
        <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[#f9a533]/50 transition-colors duration-300"></div>
        <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(249,165,51,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Golden Quote Icon */}
      <div className="absolute top-[-40px] right-[-10px] sm:top-[-50px] sm:right-[-20px] text-8xl sm:text-9xl text-[#f9a533] opacity-80 select-none pointer-events-none transform rotate-[-10deg]">
        <span role="img" aria-label="Quote Mark">”</span>
      </div>

      {/* 5-Star Rating (Top) */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-600'}`}
          />
        ))}
      </div>

      {/* Comment Text */}
      <p className="text-neutral-200 text-lg italic mb-6 relative z-10 leading-relaxed">
        {comment}
      </p>

      {/* Client Info */}
      <div className="mt-4">
        <p className="text-[#f9a533] font-bold text-lg">
          -{name}
        </p>
        <p className="text-neutral-400 text-sm">
          {role}
        </p>
      </div>
    </div>
  );
}