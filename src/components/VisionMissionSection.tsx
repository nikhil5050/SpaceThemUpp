import React, { useEffect, useState } from "react";
import { Eye, Target, Palette, Ruler, ArrowRight } from "lucide-react";

interface VisionMissionItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  text: string;
}

const VisionMissionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("vision");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content: VisionMissionItem[] = [
    {
      id: "vision",
      title: "Our Vision",
      subtitle: "The Dream",
      icon: <Eye className="w-6 h-6" />,
      text: "Everyone deserves a beautiful home. Our vision is to serve everyone who wants to decorate their beautiful space reflecting their persona. We propose best designs, interior decor, and styling within the budget of each client using our expertise.",
    },
    {
      id: "mission",
      title: "Our Mission",
      subtitle: "The Execution",
      icon: <Target className="w-6 h-6" />,
      text: "Our mission is to focus on visualizing and expressing the client’s desires and personal needs of style by exceeding the limits of perfection in their interiors. Our 3D rendering experts will bring your ideas to life-like visuals to better envision the fit-outs.",
    },
  ];

  return (
    <div className="w-full max-w-full mx-auto px-4 md:px-6 relative py-20 lg:py-28  overflow-hidden">
      
      {/* CSS for custom animations */}
      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .bg-blueprint-grid {
            background-image: linear-gradient(#E8DCCF 1px, transparent 1px), linear-gradient(90deg, #E8DCCF 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.3;
          }
        `}
      </style>

      {/* Architectural Grid Background */}
      <div className="absolute inset-0  pointer-events-none" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B98A6A]/10 rounded-full blur-[100px] -z-0 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9B29D]/10 rounded-full blur-[80px] -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* TEXT SIDE (Left) */}
        <div className={`w-full lg:w-1/2 flex flex-col gap-10 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="mb-2 relative">
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-[1px] w-12 bg-[#B98A6A]"></span>
                     <h3 className="text-[#B98A6A] text-sm tracking-widest uppercase mb-2 font-bold">
                  Design Philosophy
                </h3>
                </div>

                
                <h2 className="text-4xl md:text-5xl font-serif text-[#5A4032] mb-6">
                  Crafting Dreams into{" "}
                  <span className="text-[#B98A6A]">Reality</span>
                </h2>

                <p className="mt-6 text-[#8C7A6B] text-lg max-w-lg leading-relaxed">
                    We don't just fill spaces; we curate experiences. Every texture, tone, and light fixture is selected to tell your unique story.
                </p>
            </div>

            <div className="flex flex-col gap-6">
            {content.map((item) => (
                <div 
                    key={item.id} 
                    onMouseEnter={() => setActiveTab(item.id)}
                    className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-default
                        ${activeTab === item.id 
                            ? 'bg-white border-[#B98A6A]/30 shadow-xl scale-[1.02]' 
                            : 'bg-white/50 border-transparent hover:bg-white hover:border-[#B98A6A]/10'
                        }
                    `}
                >
                    <div className="flex gap-5">
                        <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300
                            ${activeTab === item.id ? 'bg-[#5A4032] text-[#E8DCCF]' : 'bg-[#E8DCCF] text-[#5A4032]'}
                        `}>
                            {item.icon}
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-2xl font-serif font-bold text-[#5A4032] group-hover:text-[#B98A6A] transition-colors">
                                    {item.title}
                                </h3>
                                <ArrowRight className={`w-5 h-5 text-[#B98A6A] transition-transform duration-300 ${activeTab === item.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                            </div>
                            <p className="text-[#8C7A6B] leading-relaxed text-[15px] md:text-base">
                                {item.text}
                            </p>
                        </div>
                    </div>
                    
                    {/* Left Active Indicator */}
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-[#B98A6A] rounded-r-full transition-all duration-300
                        ${activeTab === item.id ? 'opacity-100' : 'opacity-0'}
                    `} />
                </div>
            ))}
            </div>
        </div>

        {/* IMAGE SIDE (Right) - Interactive Composition */}
        <div className={`w-full lg:w-1/2 relative perspective-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            
            {/* Main Image Container */}
            <div className="relative z-20 group">
                <div className="relative overflow-hidden transform transition-transform duration-700 ease-out group-hover:rotate-1 group-hover:scale-[1.01]">
                    <img
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Modern Interior Living Room"
                        className="w-full h-auto object-cover aspect-[4/5]"
                    />
                    
                    {/* Interactive Hotspots (Example of detail focus) */}
                    <div className="absolute top-[30%] left-[40%] group/spot">
                        <div className="w-8 h-8 bg-white/30 backdrop-blur-md rounded-full border border-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                        </div>
                        <div className="absolute left-10 top-0 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-lg text-xs font-bold text-[#5A4032] opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap -translate-x-2 group-hover/spot:translate-x-0 duration-300">
                            Custom Lighting
                        </div>
                    </div>
                </div>

                {/* Floating "Material Swatch" Card */}
                <div className="absolute -left-12 bottom-20 z-30 hidden md:block animate-float">
                    <div className="bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#E8DCCF]/50 w-48">
                        <div className="flex items-center gap-2 mb-3 text-[#5A4032] font-serif font-bold text-sm border-b pb-2 border-[#E8DCCF]">
                            <Palette size={16} />
                            <span>Color Palette</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#5A4032] shadow-sm border border-gray-100"></div>
                                <span className="text-xs text-gray-500">Espresso Oak</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#B98A6A] shadow-sm border border-gray-100"></div>
                                <span className="text-xs text-gray-500">Warm Copper</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#E8DCCF] shadow-sm border border-gray-100"></div>
                                <span className="text-xs text-gray-500">Cream Linen</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating "Dimensions" Badge */}
                <div className="absolute -right-6 top-12 z-30 hidden md:flex items-center gap-2 bg-[#5A4032] text-white py-2 px-4 rounded-full shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Ruler size={16} />
                    <span className="text-xs font-bold tracking-wider">MEASURE TWICE</span>
                </div>

               
            </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;