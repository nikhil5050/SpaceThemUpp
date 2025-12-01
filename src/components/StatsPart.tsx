import React from "react";
import {
  PhoneCall,
  ClipboardList,
  FileText,
  CheckCircle,
  Rocket,
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
      title: "INQUIRY",
      description: "Reach out via our contact form or give us a quick call",
      icon: <PhoneCall size={32} />,
      bgColor: "bg-[#6B4F3A]", // Dark Brown
      textColor: "text-white",
      height: "lg:h-[400px]",
      iconColor: "text-[#6B4F3A]",
    },
    {
      id: 2,
      title: "CONSULTATION",
      description:
        "Free 30-minute discovery session to discuss your vision",
      icon: <ClipboardList size={32} />,
      bgColor: "bg-[#C6A98B]", // Medium Brown
      textColor: "text-white",
      height: "lg:h-[460px]",
      iconColor: "text-[#C6A98B]",
    },
    {
      id: 3,
      title: "PROPOSAL",
      description: "Receive a tailored roadmap and transparent quote",
      icon: <FileText size={32} />,
      bgColor: "bg-[#E8DCCF]", // Light Beige (Center)
      textColor: "text-[#6B4F3A]", // Dark text
      height: "lg:h-[520px]",
      iconColor: "text-[#6B4F3A]",
    },
    {
      id: 4,
      title: "AGREEMENT",
      description: "Review terms, sign the contract, and secure your slot",
      icon: <CheckCircle size={32} />,
      bgColor: "bg-[#D7C7B4]", // Beige
      textColor: "text-[#6B4F3A]", // Dark text
      height: "lg:h-[460px]",
      iconColor: "text-[#6B4F3A]",
    },
    {
      id: 5,
      title: "LIFT OFF",
      description: "We launch the project and start building your dream!",
      icon: <Rocket size={32} />,
      bgColor: "bg-[#6B4F3A]", // Dark Brown
      textColor: "text-white",
      height: "lg:h-[400px]",
      iconColor: "text-[#6B4F3A]",
    },
  ];

  return (
    <div className="w-full max-w-full mx-auto px-4 md:px-6 relative py-16 z-20 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B4F3A] mb-4">
            Ready to Start?
          </h2>
          <p className="text-[#8C7A6B] max-w-2xl mx-auto">
            Kickstart your journey with us in 5 simple steps. From the first hello to the final launch, we make the process seamless.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-4 lg:gap-0">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative w-full lg:w-[240px] flex flex-col items-center justify-start pt-10 px-4 text-center rounded-3xl lg:rounded-none lg:rounded-t-full ${step.bgColor} ${step.height} transition-all duration-300 hover:brightness-105 min-h-[300px] lg:min-h-0 shadow-lg group cursor-pointer`}
            >
              <div className="bg-white rounded-full p-5 mb-6 shadow-md flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
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

        <div className="mt-12 text-center">
            <a 
              href="/#contact"
              className="bg-[#6B4F3A] hover:bg-[#5a4230] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg inline-flex items-center gap-2 mx-auto"
            >
                <PhoneCall size={20} />
                Book Your Free Consultation
            </a>
        </div>
      </div>
    </div>
  );
};

export default StatsPart;