import React from "react";
import AnimatedSection from "./AnimatedSection";

interface Step {
  id: string;
  title: string;
  desc: string;
}

const ProcessWaveSection: React.FC = () => {
  const steps: Step[] = [
    {
      id: "01",
      title: "Consultation",
      desc: "Discover client goals and preferences in detail.",
    },
    {
      id: "02",
      title: "Design Concept",
      desc: "Craft personalized plans with 3D visualizations.",
    },
    {
      id: "03",
      title: "Execution",
      desc: "Oversee sourcing, construction, and installation.",
    },
    {
      id: "04",
      title: "Completion",
      desc: "Deliver exquisitely transformed spaces exceeding expectations.",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 relative py-10 z-20">
     <div className="text-left mb-16 relative z-10 md:ml-auto md:w-1/2 md:pr-16">
  <AnimatedSection>
    <h3 className="text-[#B98A6A] text-sm tracking-widest uppercase mb-2 font-bold">
      Our Workflow
    </h3>
    <h2 className="text-4xl md:text-5xl font-serif text-[#5A4032] whitespace-nowrap">
      Our Design Process
    </h2>
    <p className="text-[#5A4032]/70 mt-4 text-lg">From Vision to Reality</p>
  </AnimatedSection>
</div>
      {/* Mobile */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <AnimatedSection key={step.id} delay={index * 100}>
            <div className="bg-[#C9B29D] p-6 rounded-2xl relative shadow-lg border-l-8 border-[#B98A6A]">
              <div className="absolute -top-4 -right-2 w-10 h-10 bg-[#B98A6A] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                {step.id}
              </div>
              <h3 className="text-[#5A4032] text-xl font-bold mb-2 font-serif">
                {step.title}
              </h3>
              <p className="text-[#5A4032]/80 leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Desktop wave */}
      <div className="hidden md:block relative h-[500px] w-full">
        <div className="absolute top-1/2 left-0 w-full h-[12px] bg-[#B98A6A] rounded-full -translate-y-1/2 z-0 opacity-80 shadow-[0_0_15px_rgba(185,138,106,0.5)]" />

        <div className="grid grid-cols-4 gap-8 h-full relative z-10">
          {steps.map((step, index) => {
            const isTop = index % 2 !== 0;

            return (
              <AnimatedSection
                key={step.id}
                delay={index * 200}
                className={`flex flex-col items-center justify-center h-full relative ${
                  isTop ? "pb-32" : "pt-32"
                }`}
              >
                <div
                  className={`absolute left-1/2 w-[2px] bg-[#B98A6A] -translate-x-1/2 z-0 ${
                    isTop ? "bottom-1/2 h-[80px]" : "top-1/2 h-[80px]"
                  }`}
                />
                <div className="bg-[#C9B29D] text-[#5A4032] w-full p-8 rounded-[20px] shadow-2xl relative hover:-translate-y-2 transition-transform duration-300 border-b-4 border-[#B98A6A]">
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-[#B98A6A] text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-[#FFFFFF] shadow-xl ${
                      isTop ? "-bottom-7" : "-top-7"
                    }`}
                  >
                    {step.id}
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-3 mt-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[#5A4032]/90 text-center leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessWaveSection;
