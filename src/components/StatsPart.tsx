import React from "react";
import {
  Handshake,
  PencilRuler,
  Cloud,
  Wrench,
  Home as HomeIcon,
} from "lucide-react";

interface StepCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  height: string;
  iconColor: string;
}

const StatsPart: React.FC = () => {
  const steps: StepCard[] = [
    {
      id: 1,
      title: "MEET",
      description: "Meet up with our experts and get a free estimate",
      icon: <Handshake size={32} />,
      bgColor: "bg-[#FF5252]",
      textColor: "text-white",
      height: "lg:h-[400px]",
      iconColor: "text-[#FF5252]",
    },
    {
      id: 2,
      title: "DESIGN",
      description:
        "Tailor the perfect design for your place with the help of our experts",
      icon: <PencilRuler size={32} />,
      bgColor: "bg-[#6C85FA]",
      textColor: "text-white",
      height: "lg:h-[460px]",
      iconColor: "text-[#6C85FA]",
    },
    {
      id: 3,
      title: "VISUALIZE",
      description: "View 3D graphic renders and finialise the plan",
      icon: <Cloud size={32} />,
      bgColor: "bg-[#FFE066]",
      textColor: "text-[#5A4032]",
      height: "lg:h-[520px]",
      iconColor: "text-[#E6C229]",
    },
    {
      id: 4,
      title: "EXECUTION",
      description: "Setting up your interiors",
      icon: <Wrench size={32} />,
      bgColor: "bg-[#D946EF]",
      textColor: "text-white",
      height: "lg:h-[460px]",
      iconColor: "text-[#D946EF]",
    },
    {
      id: 5,
      title: "HANDOVER",
      description: "Move into your new home!",
      icon: <HomeIcon size={32} />,
      bgColor: "bg-[#96F2D7]",
      textColor: "text-[#5A4032]",
      height: "lg:h-[400px]",
      iconColor: "text-[#5A4032]",
    },
  ];

  return (
    <div className="bg-[#EBE7E0] py-16 px-4 md:px-8 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-4 lg:gap-0">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative w-full lg:w-[240px] flex flex-col items-center justify-start pt-10 px-4 text-center rounded-3xl lg:rounded-none lg:rounded-t-full ${step.bgColor} ${step.height} transition-all duration-300 hover:brightness-105 min-h-[300px] lg:min-h-0`}
            >
              <div className="bg-white rounded-full p-5 mb-6 shadow-sm flex items-center justify-center">
                <span className={step.iconColor}>{step.icon}</span>
              </div>
              <h3
                className={`text-xl font-bold uppercase tracking-wider mb-3 ${step.textColor}`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm md:text-[15px] font-medium leading-relaxed opacity-90 ${step.textColor}`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPart;
