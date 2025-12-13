// src/components/ServiceDetails.tsx
import React, { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { servicesData } from "./servicesData"; // IMPORT DATA

// --- Background Assets ---
const bgAssets = {
  topLeft: "https://jncdesignstudio.com/wp-content/uploads/2023/12/2-1.png",
  bottomRight: "https://jncdesignstudio.com/wp-content/uploads/2023/12/object-2-1.png",
  topRightEffect: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-2.png",
  middleLeftEffect: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-12.png",
  bottomCenterEffect: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-52.png",
};

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const floatingVariant: Variants = {
  animate: {
    y: [0, -10, 0], // assuming these were your values
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" // Ensure this is a valid string literal, not a generic string
    }
  }
};

const ServiceDetails: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative py-20 bg-[#FFFFFF] min-h-screen overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <motion.img src={bgAssets.topLeft} alt="bg" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 0.8, x: 0 }} transition={{ duration: 1.5 }} className="absolute top-0 left-0 w-[400px] md:w-[600px] pointer-events-none z-0 mix-blend-multiply" />
      <motion.img src={bgAssets.topRightEffect} alt="effect" variants={floatingVariant} animate="animate" className="absolute top-10 right-0 w-[200px] opacity-80 pointer-events-none z-0" />
      <motion.img src={bgAssets.bottomRight} alt="bg" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 0.8, y: 0 }} viewport={{ once: true }} className="absolute bottom-0 right-0 w-[300px] md:w-[500px] pointer-events-none z-0 mix-blend-multiply" />

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-[#B98A6A] font-bold uppercase tracking-widest hover:text-[#5A4032] transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" /> Back to Home
        </motion.button>

        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-[#5A4032] mb-4 font-serif">
            Our Comprehensive Services
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-[#5A4032]/80">
            From the first measurement to the final polish, we handle every detail with precision and care.
          </motion.p>
        </div>

        {/* Grid Container */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/services/${service.id}`)} // DYNAMIC NAVIGATION
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-[#B98A6A]/20 flex flex-col group transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg backdrop-blur-sm shadow-md">
                  <service.icon className="w-6 h-6 text-[#B98A6A]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col bg-[#F9F9F9]">
                <h3 className="text-xl font-bold text-[#5A4032] mb-3 font-serif group-hover:text-[#B98A6A] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#5A4032]/70 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <div className="mt-auto pt-2 flex items-center gap-2 text-[#B98A6A] font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                    More Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;