// src/components/TestimonialsSlider.js
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard'; // ✅ تم تعديل الاستيراد هنا

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Director at TechCorp',
    comment: 'On Point made our business reach a global audience with exceptional quality. Their attention to detail is unmatched.',
    rating: 5,
    image: '/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg'
  },
  {
    id: 2,
    name: 'James Anderson',
    role: 'CEO at Global Solutions',
    comment: 'Accurate and creative translation... A smooth and professional work experience. Highly recommended for international projects.',
    rating: 5,
    image: '/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Content Manager at MediaHub',
    comment: 'The quality of work exceeded our expectations. Professional team with incredible turnaround times and flawless communication.',
    rating: 5,
    image: 'young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg'
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'Founder at StartupLab',
    comment: 'Outstanding service from start to finish. They understood our vision perfectly and delivered results that transformed our brand.',
    rating: 5,
    image: '/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg'
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    role: 'Brand Strategist at CreativeWorks',
    comment: 'Working with On Point was a game-changer for us. Their expertise and dedication brought our content to life across multiple markets.',
    rating: 5,
    image: '/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg'
  },
  {
    id: 6,
    name: 'David Rodriguez',
    role: 'Product Manager at InnovateCo',
    comment: 'Exceptional quality and professionalism. They made our complex technical content accessible to audiences worldwide with precision.',
    rating: 5,
    image: '/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg'
  }
];

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-3xl text-[#f9a533]">✦</span>
          <h2 className="text-4xl font-bold text-[#414042]">Client Testimonials</h2>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-[#f9a533] text-[#414042] hover:text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#f9a533]"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-[#f9a533] text-[#414042] hover:text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#f9a533]"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#f9a533] w-8'
                  : 'bg-gray-300 hover:bg-[#f9a533]/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSlider;
