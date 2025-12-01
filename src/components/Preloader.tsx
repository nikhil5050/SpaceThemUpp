import React from "react";

interface PreloaderProps {
  logoUrl: string;
}

const Preloader: React.FC<PreloaderProps> = ({ logoUrl }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#FFFFFF] flex flex-col items-center justify-center transition-opacity duration-700 ease-out">
      <div className="relative animate-pulse">
        <img
          src={logoUrl}
          alt="Loading..."
          className="w-32 h-auto md:w-48 object-contain drop-shadow-2xl"
        />
        <div className="absolute inset-0 bg-[#B98A6A] blur-3xl opacity-20 rounded-full" />
      </div>
      <div className="mt-8 flex gap-2">
        <div className="w-3 h-3 bg-[#B98A6A] rounded-full animate-bounce delay-75" />
        <div className="w-3 h-3 bg-[#B98A6A] rounded-full animate-bounce delay-150" />
        <div className="w-3 h-3 bg-[#B98A6A] rounded-full animate-bounce delay-300" />
      </div>
    </div>
  );
};

export default Preloader;
