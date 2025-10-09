import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

function Services() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: 'Basic',
      features: [
        'Text Translation',
        'Audio Transcription (Up to 10 mins)',
        'Standard Subtitling',
        'Community Support',
      ],
      isBestValue: false,
      buttonText: 'Choose Plan',
      buttonVariant: 'outline',
      glowColor: 'rgba(249, 165, 51, 0.3)',
    },
    {
      name: 'Plus',
      features: [
        'Professional Voice Over',
        'Documentary Narration',
        'Full HD Video Production',
        'Book & Article Translation',
        'Priority Email Support',
      ],
      isBestValue: true,
      buttonText: 'Choose Plan',
      buttonVariant: 'solid-pink',
      glowColor: 'rgba(236, 72, 153, 0.4)',
    },
    {
      name: 'Pro',
      features: [
        'Everything in Plus',
        'Full Dubbing & Lip Sync',
        'Motion Graphics',
        'Simultaneous Interpretation',
        'Dedicated Project Manager',
      ],
      isBestValue: false,
      buttonText: 'Choose Plan',
      buttonVariant: 'solid',
      glowColor: 'rgba(249, 165, 51, 0.4)',
    },
    {
      name: 'Enterprise',
      features: [
        'Everything in Pro',
        'Complete Audio Production',
        '4K Video Editing & Grading',
        'API Access & Integration',
        '24/7 Premium Support',
      ],
      isBestValue: false,
      buttonText: 'Choose Plan',
      buttonVariant: 'solid',
      glowColor: 'rgba(249, 165, 51, 0.5)',
    },
  ];

  return (
    <section id="services" className="relative min-h-screen bg-[#414042] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#414042] via-[#4a4a4c] to-[#414042]"></div>

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f9a533] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#f9a533] to-white bg-clip-text text-transparent">
            Flexible Pricing and Plan
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choose the perfect plan that fits your needs. All plans are designed to deliver exceptional quality and value.
          </p>
        </div>

        {/* البطاقات */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-8">
          {plans.map((plan, index) => {
            const isHovered = hoveredPlan === plan.name;
            const buttonClasses = {
              outline: 'border border-[#f9a533] text-[#f9a533] hover:bg-[#f9a533] hover:text-[#414042]',
              solid: 'bg-[#f9a533] text-[#414042] hover:bg-opacity-90',
              'solid-pink': 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90',
            };

            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`
                  relative w-full max-w-sm bg-[#2d2d2f] rounded-2xl border border-white/10 p-8
                  transition-all duration-500 transform
                  ${plan.isBestValue ? 'lg:scale-110 border-pink-500/50' : 'lg:scale-100'}
                  ${isHovered ? 'scale-105' : ''}
                `}
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
                  opacity: 0,
                  boxShadow: isHovered ? `0 20px 60px -10px ${plan.glowColor}` : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                }}
              >
                {plan.isBestValue && (
                  <>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                      Best Value
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl overflow-hidden">
                      <svg className="absolute bottom-0 left-0 w-full text-[#2d2d2f]" fill="currentColor" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 10 C40 0 60 0 100 10 Z" />
                      </svg>
                    </div>
                  </>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`pt-8 ${plan.isBestValue ? 'text-center' : ''}`}>
                    <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest">{plan.name}</h3>
                  </div>

                  <ul className="space-y-4 mt-8 mb-10 text-white/80">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isBestValue ? 'text-pink-400' : 'text-[#f9a533]'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <button className={`w-full py-3 px-8 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${buttonClasses[plan.buttonVariant]}`}>
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Services;
