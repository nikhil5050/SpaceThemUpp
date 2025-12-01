import React from "react";

interface BgImage {
  src: string;
  style: string;
}

const DecorativeBackgrounds: React.FC = () => {
  const images: BgImage[] = [
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/2-1.png",
      style: "top-0 right-0 w-[200px] md:w-[400px] opacity-100",
    },
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/object-2-1.png",
      style: "top-[10%] left-0 w-[150px] md:w-[300px] opacity-80",
    },
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-2.png",
      style: "top-[25%] right-0 w-[150px] md:w-[300px] opacity-80",
    },
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-12.png",
      style: "top-[40%] left-0 w-[180px] md:w-[350px] opacity-80",
    },
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-52.png",
      style: "top-[55%] right-0 w-[200px] md:w-[400px] opacity-80",
    },
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-2.png",
      style: "bottom-0 right-0 w-[150px] md:w-[300px] opacity-80",
    },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt=""
          className={`absolute ${img.style} object-contain transition-transform duration-[2000ms] hover:scale-110`}
        />
      ))}
    </div>
  );
};

export default DecorativeBackgrounds;
