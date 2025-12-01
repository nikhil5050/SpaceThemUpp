import React from "react";
import { Phone } from "lucide-react";

const EstimateSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-[30px] lg:my-[100px] px-4 md:px-0 relative z-20">
      {/* Mobile View */}
      <div className="md:hidden relative h-[380px] w-full max-w-[360px] mx-auto rounded-tr-[100px] overflow-hidden shadow-2xl mt-[50px]">
        <img
          loading="lazy"
          src="https://vishwaswamiinteriors.com//estimate1Img.png"
          alt="Modern interior mobile"
          className="h-full w-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
          <p className="text-white text-[18px] font-medium leading-snug w-full mb-4">
            Get a free estimate for your interior design project today! Contact
            us now to schedule a consultation.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-white text-[#B98A6A] shadow-lg">
              <Phone className="h-[24px] w-[24px]" />
            </div>
            <div className="text-white">
              <p className="text-[18px] font-semibold">7722083718</p>
              <p className="text-sm opacity-90">Call Us Anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative h-[650px] w-full rounded-tr-[200px] overflow-hidden shadow-2xl group">
        <img
          loading="lazy"
          src="https://vishwaswamiinteriors.com//new.png"
          alt="Modern living room interior"
          className="h-full w-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-28 left-[80px] z-10 max-w-[600px]">
          <p className="text-[22px] leading-[34px] font-medium text-white drop-shadow-md mb-8">
            Get a free estimate for your interior <br /> design project today!
            Contact us now to schedule a consultation.
          </p>

          <div className="flex gap-6 items-center">
            <div className="h-[70px] w-[70px] rounded-full flex justify-center items-center bg-white hover:bg-[#B98A6A] text-[#B98A6A] hover:text-white transition-all duration-300 shadow-xl cursor-pointer transform hover:scale-110">
              <Phone className="h-[32px] w-[32px]" />
            </div>
            <div className="text-white drop-shadow-md">
              <p className="text-[26px] font-bold tracking-wide">7722083718</p>
              <p className="text-[18px] font-medium uppercase tracking-wider opacity-90">
                Call Us Anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateSection;
