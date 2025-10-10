import { Mic, Languages, FileText, Globe, Subtitles, Video } from 'lucide-react';

const services = [
  {
    id: '01',
    category: 'Production Services',
    title: 'Voiceover',
    icon: Mic,
    description: 'Professional voiceover services in multiple languages for all your media needs.',
  },
  {
    id: '02',
    category: 'Translation Services',
    title: 'Document Translation',
    icon: FileText,
    description: 'Accurate and culturally sensitive document translation services.',
  },
  {
    id: '03',
    category: 'Translation Services',
    title: 'Website Localization',
    icon: Globe,
    description: 'Comprehensive website localization to reach global audiences.',
  },
  {
    id: '04',
    category: 'Media Localization',
    title: 'Subtitling',
    icon: Subtitles,
    description: 'Professional subtitling services for videos and multimedia content.',
  },
  {
    id: '05',
    category: 'Media Localization',
    title: 'Dubbing',
    icon: Video,
    description: 'High-quality dubbing services to make your content accessible worldwide.',
  },
  {
    id: '06',
    category: 'Media Localization',
    title: 'Transcription',
    icon: Languages,
    description: 'Accurate transcription services for audio and video content.',
  },
];

interface ServiceCardProps {
  service: typeof services[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  
  // Define the border gradient classes for reuse
  const glowBorderClasses = 'border-4 border-transparent p-1 group-hover:border-white/10 transition-all duration-300 relative';
  
  return (
    <div className="flex flex-col items-center text-center p-4">
      
      {/* Circle Icon Holder with Glow Effect */}
      <div className={`w-36 h-36 rounded-full overflow-hidden mb-4 shadow-xl ${glowBorderClasses}`}>
        
        {/* Glow Layer (Simulates the light border effect) */}
        <div className="absolute inset-0 rounded-full blur-sm opacity-50 
                      bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 
                      scale-0 group-hover:scale-105 transition-transform duration-500">
        </div>
        
        {/* Inner Circle (White Background for the icon) */}
        <div className="absolute inset-0 bg-white flex items-center justify-center rounded-full z-10">
            <Icon className="w-16 h-16 text-[#414042] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
        </div>
      </div>

      {/* Title with Gradient Text */}
      <h3 className="text-xl font-bold mb-1.5 
                     bg-gradient-to-r from-amber-300 via-[#f9a533] to-orange-500 
                     bg-clip-text text-transparent">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
        {service.description}
      </p>
      
    </div>
  );
}

function Services() {
  return (
    <div
      id="services"  // ✅ أضفنا هذا لتعمل روابط Navbar
      className="min-h-screen bg-gradient-to-br from-[#414042] via-[#2a2a2b] to-[#414042] py-12 md:py-20 px-4"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section (Our Services with Logo) - Centered */}
        <div className="text-center mb-10 md:mb-16">
          
          <div className="flex flex-col md:flex-row items-center justify-center mb-2">
            
            {/* Logo with white background */}
            <div className="bg-white p-2 rounded-full shadow-lg mb-4 md:mb-0 md:mr-4 flex-shrink-0">
              <img
                src="/logo7.png" 
                alt="Professional Services Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            
            {/* Our Services text and subtext - Centered */}
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                    Our Services
                </h2>
                {/* Wrap the subtext to apply a max-width and center it */}
                <div className="mx-auto max-w-lg">
                    <p className="text-gray-400 text-base italic inline-block">
                        These are the services we provide, these make us stand apart.
                    </p>
                    {/* Amber separator */}
                    <div className="h-0.5 bg-amber-500 mx-auto mt-2.5 rounded-full w-full"></div>
                </div>
            </div>
          </div>
          
        </div>

        {/* Grid Container for Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6 justify-items-center">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Services;
