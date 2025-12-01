import React from "react";
import { Eye, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface VisionMissionItem {
  title: string;
  icon: React.ReactNode;
  text: string;
}

const VisionMissionSection: React.FC = () => {
  const content: VisionMissionItem[] = [
    {
      title: "Our Vision",
      icon: <Eye className="w-8 h-8" />,
      text: "Everyone deserves a beautiful home. Our vision is to serve everyone who wants to decorate their beautiful space reflecting their persona. We propose best designs/interior decor/styling within the budget of each client with our expertise. Established in Pune by Sibling duo Interior Designers.",
    },
    {
      title: "Our Mission",
      icon: <Target className="w-8 h-8" />,
      text: "Our mission is to focus on visualizing and expressing the client’s desires and personal needs of style by exceeding the limits of perfection in their interiors. To provide the best customer service, our 3D rendering experts will bring your ideas to life-like visuals to better envision the classical or modern fit-outs of your choice before the project execution.",
    },
  ];

  return (
    <div className="container mx-auto px-6 relative z-20 py-10">
      <img
        src="https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-52.png"
        alt=""
        className="absolute top-0 right-0 w-[200px] h-auto opacity-80 pointer-events-none z-0 hidden lg:block rotate-180"
      />
      <img
        src="https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-12.png"
        alt=""
        className="absolute bottom-0 left-0 w-[200px] h-auto opacity-80 pointer-events-none z-0 hidden lg:block"
      />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        <AnimatedSection className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-[12px] border-[#B98A6A]/80 shadow-2xl overflow-hidden z-20">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block absolute top-[25%] right-0 translate-x-1/2 w-6 h-6 bg-[#B98A6A] rounded-full z-30 border-4 border-[#FFFFFF]" />
          <div className="hidden lg:block absolute bottom-[25%] right-0 translate-x-1/2 w-6 h-6 bg-[#B98A6A] rounded-full z-30 border-4 border-[#FFFFFF]" />
        </AnimatedSection>

        <div className="w-full lg:w-1/2 flex flex-col gap-12">
          {content.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 200}>
              <div className="flex gap-6 relative group">
                <div className="shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-[#B98A6A] rounded-full flex items-center justify-center text-white shadow-xl border-4 border-[#C9B29D] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="hidden lg:block absolute top-1/2 right-full w-[100px] h-[3px] bg-[#B98A6A] -translate-y-1/2 -z-10 opacity-70" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold text-[#5A4032] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#5A4032] leading-relaxed text-base md:text-lg bg-[#C9B29D]/30 p-6 rounded-r-xl border-l-4 border-[#B98A6A]">
                    {item.text}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
