import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Ruler,
  PencilRuler,
  Monitor,
  Scale,
  MessageCircle,
  Users,
  ClipboardList,
  Armchair,
  HardHat,
  Utensils,
  Wrench,
  Grid,
  Lightbulb,
  PaintBucket,
  Trees,
  Sparkles,
  ShieldCheck,
  Headset,
} from "lucide-react";

// --- Background Assets ---
const bgAssets = {
  topLeft: "https://jncdesignstudio.com/wp-content/uploads/2023/12/2-1.png",
  bottomRight: "https://jncdesignstudio.com/wp-content/uploads/2023/12/object-2-1.png",
  topRightEffect: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-2.png",
  middleLeftEffect: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-12.png",
  bottomCenterEffect: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-52.png",
};

// --- Data ---
const servicesData = [
  {
    title: "Site Measurement",
    icon: Ruler,
    description: "Precise laser measurements of your entire property to ensure 100% accuracy before design begins.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Space Planning",
    icon: PencilRuler,
    description: "Optimizing your layout to maximize functionality, flow, and spatial efficiency tailored to your needs.",
    imageUrl: "https://i.pinimg.com/736x/01/ad/49/01ad49cbce425c3ea01cd9e58eefc0a0.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "3D Render",
    icon: Monitor,
    description: "Photorealistic 3D visualizations allowing you to see your future home before a single brick is laid.",
    imageUrl: "https://i.pinimg.com/736x/9f/5d/84/9f5d845b5bb3f11faab810c318e00f88.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Honest Advice",
    icon: Scale,
    description: "Unbiased, professional consultation to help you make informed decisions regarding budget and materials.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Transparent Communication",
    icon: MessageCircle,
    description: "Open channels via WhatsApp and email with regular updates, ensuring you are never left in the dark.",
    imageUrl: "https://i.pinimg.com/736x/b6/e6/62/b6e6627b23ad8aa1c4e17f0841f40519.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Experienced Team",
    icon: Users,
    description: "A dedicated team of senior architects, interior designers, and skilled craftsmen working on your project.",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Project Management",
    icon: ClipboardList,
    description: "End-to-end supervision of timelines, vendors, and budget to ensure a hassle-free handover.",
    imageUrl: "https://i.pinimg.com/1200x/6c/01/89/6c0189669ebc0d4f2bf31d410383e1cf.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Furniture",
    icon: Armchair,
    description: "Custom-made furniture design and selection that blends aesthetics with ergonomic comfort.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Civil Work",
    icon: HardHat,
    description: "Heavy-duty structural changes, tiling, masonry, and demolition handled by expert contractors.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Modular Kitchen",
    icon: Utensils,
    description: "Sleek, modern modular kitchens designed for high storage, durability, and ease of cooking.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Plumbing",
    icon: Wrench,
    description: "Leak-proof piping solutions and installation of high-end sanitary ware and bathroom fittings.",
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Ceiling Design",
    icon: Grid,
    description: "Creative false ceiling designs (POP/Gypsum) with integrated lighting to define the mood of the room.",
    imageUrl: "https://i.pinimg.com/736x/47/cf/16/47cf16bb79e9cfab5d617ee091f302b8.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Light & Decor",
    icon: Lightbulb,
    description: "Strategic lighting planning (ambient, task, accent) paired with curated decor pieces.",
    imageUrl: "https://i.pinimg.com/736x/c0/2c/62/c02c62f6716ae229b153a7a1d52bcd1b.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Paint & Decor",
    icon: PaintBucket,
    description: "Premium texture painting, wallpapers, and color consulting to bring vibrancy to your walls.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Landscape & Balcony",
    icon: Trees,
    description: "Transforming balconies and outdoor areas into lush, green vertical gardens and relaxation spots.",
    imageUrl: "https://i.pinimg.com/1200x/04/bd/4e/04bd4e7061a8c31c09df18cd3c144738.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Site Cleaning",
    icon: Sparkles,
    description: "Deep cleaning of the entire site post-construction so you move into a sparkling new home.",
    imageUrl: "https://i.pinimg.com/736x/e6/19/59/e619597b998ba0b556660bb9cab81e66.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
    description: "Rigorous 50+ point quality checklist inspection before the final handover.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "After Sales Service",
    icon: Headset,
    description: "Dedicated support for maintenance and warranty claims even after the project is completed.",
    imageUrl: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=800&auto=format&fit=crop",
  },
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Subtle floating animation for background elements
const floatingVariant = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ServiceDetails: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative py-20 bg-[#FFFFFF] min-h-screen overflow-hidden">
      
      {/* --- BACKGROUND DECORATIVE ELEMENTS --- */}
      
      {/* Top Left - Large Abstract Shape */}
      <motion.img
        src={bgAssets.topLeft}
        alt="Decorative Background"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.8, x: 0 }} // CHANGED: Opacity 0.8
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-[400px] md:w-[600px] lg:w-[800px] pointer-events-none z-0 mix-blend-multiply"
      />

      {/* Top Right - Effect Splash */}
      <motion.img
        src={bgAssets.topRightEffect}
        alt="Decorative Effect"
        variants={floatingVariant}
        animate="animate"
        // CHANGED: opacity-80 class added
        className="absolute top-10 right-0 w-[200px] md:w-[400px] opacity-80 pointer-events-none z-0"
      />

      {/* Middle Left - Geometric/Effect */}
      <motion.img
        src={bgAssets.middleLeftEffect}
        alt="Decorative Effect"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }} // CHANGED: Opacity 0.8
        viewport={{ once: true }}
        className="absolute top-1/3 left-[-50px] w-[250px] md:w-[350px] pointer-events-none z-0"
      />

      {/* Bottom Center - Floating Effect */}
      <motion.img
        src={bgAssets.bottomCenterEffect}
        alt="Decorative Effect"
        variants={floatingVariant}
        animate="animate"
        // CHANGED: opacity-80 class added
        className="absolute bottom-1/4 left-1/4 w-[150px] md:w-[300px] opacity-80 pointer-events-none z-0"
      />

      {/* Bottom Right - Object Anchor */}
      <motion.img
        src={bgAssets.bottomRight}
        alt="Decorative Object"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.8, y: 0 }} // CHANGED: Opacity 0.8
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-[300px] md:w-[500px] pointer-events-none z-0 mix-blend-multiply"
      />

      {/* --- MAIN CONTENT (Z-Index 10 to stay above bg) --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2 text-[#B98A6A] font-bold uppercase tracking-widest hover:text-[#5A4032] transition-colors duration-300"
        >
            <ArrowLeft className="w-5 h-5" /> Back to Home
        </motion.button>

        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#5A4032] mb-4 font-serif"
          >
            Our Comprehensive Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#5A4032]/80"
          >
            From the first measurement to the final polish, we handle every detail with precision and care.
          </motion.p>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              // Added bg-white/95 to ensure text readability over high opacity bg
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-[#B98A6A]/20 flex flex-col group transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                
                {/* Icon positioned on top of image */}
                <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg backdrop-blur-sm shadow-md">
                  <service.icon className="w-6 h-6 text-[#B98A6A]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-1 flex flex-col bg-[#F9F9F9]">
                <h3 className="text-xl font-bold text-[#5A4032] mb-3 font-serif group-hover:text-[#B98A6A] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#5A4032]/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;