import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, CheckCircle,  Phone, 
  HelpCircle, ChevronDown, Star, Layers, Settings, ShieldCheck 
} from "lucide-react";
import { servicesData } from "./servicesData";

// --- SUB-COMPONENT: FAQ ACCORDION (Memoized for performance) ---
const FAQItem = React.memo(({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-[#B98A6A]/20 rounded-xl overflow-hidden mb-4 bg-white transition-all duration-300 hover:shadow-md">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F9F9F9] transition-colors"
      >
        <span className="font-bold text-[#5A4032] text-lg flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#B98A6A] shrink-0" />
            {question}
        </span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }} // Faster animation
        >
          <ChevronDown className="text-[#B98A6A]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }} // Faster animation
          >
            <div className="p-5 pt-0 text-[#5A4032]/80 leading-relaxed border-t border-dashed border-[#B98A6A]/20">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// --- MAIN COMPONENT ---
const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // 1. MEMOIZE THE SERVICE LOOKUP
  // This prevents re-calculating on every single scroll pixel change
  const service = useMemo(() => servicesData.find((item) => item.id === id), [id]);

  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll();
  // reduced range for smoother performance on mobile
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]); 
  const opacityRange = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 2. IMMEDIATE SCROLL RESET
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // 3. HANDLE LOADING/MISSING STATE FAST
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#5A4032]">
        <p>Service not found...</p>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for the sticky header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Helper to render text paragraphs
  const renderParagraphs = (text?: string) => {
    if (!text) return null;
    return text.split('\n').map((paragraph, index) => 
      paragraph.trim() !== "" && (
        <p key={index} className="mb-4 text-lg text-[#5A4032]/80 leading-relaxed text-justify">
          {paragraph}
        </p>
      )
    );
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen font-sans">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#B98A6A] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* --- HERO SECTION --- */}
      {/* Removed 'items-end' and adjusted height for better layout stability */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-end">
        {/* Used 'will-change-transform' for hardware acceleration */}
        <motion.div style={{ y: yRange }} className="absolute inset-0 z-0 will-change-transform">
            <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="eager" // Force load immediately
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1c15] via-black/40 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-6 pb-12 text-white">
            <button // Changed from motion.button to standard button for instant response
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white/80 hover:text-[#B98A6A] mb-8 transition-colors uppercase tracking-widest text-xs font-bold"
            >
                <ArrowLeft size={16} /> Back to Services
            </button>
            
            <motion.div 
                style={{ opacity: opacityRange }}
                className="flex flex-col md:flex-row md:items-end gap-6 will-change-transform"
            >
                <div className="p-4 bg-[#B98A6A] rounded-2xl shadow-xl backdrop-blur-sm hidden md:block border border-white/20">
                    <service.icon className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
                    {service.heroHeading || service.title}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
                    {service.heroSubHeading || service.shortDesc}
                  </p>
                </div>
            </motion.div>
        </div>
      </div>

      {/* --- STICKY NAVIGATION BAR --- */}
      {/* Reduced backdrop-blur amount for performance */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#B98A6A]/10 shadow-sm">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-8 h-16 whitespace-nowrap text-sm font-bold text-[#5A4032] uppercase tracking-wider">
                <button onClick={() => scrollToSection('overview')} className="hover:text-[#B98A6A] transition-colors">Overview</button>
                {service.processTitle && <button onClick={() => scrollToSection('process')} className="hover:text-[#B98A6A] transition-colors">Process</button>}
                {service.benefitsTitle && <button onClick={() => scrollToSection('benefits')} className="hover:text-[#B98A6A] transition-colors">Benefits</button>}
                {service.faqs && <button onClick={() => scrollToSection('faq')} className="hover:text-[#B98A6A] transition-colors">FAQ</button>}
            </div>
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="container mx-auto px-4 md:px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* === LEFT COLUMN: CONTENT (Span 8) === */}
        <div className="lg:col-span-8 space-y-20">
            
            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-24">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} // Reduced margin triggers animation sooner
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-[#5A4032] mb-6 font-serif flex items-center gap-3">
                   <Layers className="text-[#B98A6A]" /> Overview
                </h2>
                {renderParagraphs(service.longDesc)}
              </motion.div>
            </section>
            
            {/* 2. Process (Visual Timeline) */}
            {service.processTitle && (
                <section id="process" className="scroll-mt-24">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#FDF8F5] p-8 rounded-2xl border border-[#B98A6A]/10"
                    >
                        <h2 className="text-3xl font-bold text-[#5A4032] mb-8 font-serif flex items-center gap-3">
                            <Settings className="text-[#B98A6A]" /> {service.processTitle}
                        </h2>
                        
                        <div className="space-y-6 relative border-l-2 border-[#B98A6A]/20 ml-3 pl-8">
                            {service.processDescription?.split('\n\n').map((step, idx) => (
                                <div key={idx} className="relative">
                                    <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[#B98A6A] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                                        {idx + 1}
                                    </span>
                                    <p className="text-[#5A4032]/80 leading-relaxed text-lg">{step}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            )}

            {/* 3. Coverage & Philosophy Cards */}
            {(service.coverageTitle || service.philosophyTitle) && (
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {service.coverageTitle && (
                        <div className="bg-white p-8 rounded-xl border border-[#B98A6A]/20 shadow-lg shadow-[#B98A6A]/5 hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-[#B98A6A] mb-4 font-serif">{service.coverageTitle}</h3>
                            <div className="text-[#5A4032]/80 leading-relaxed whitespace-pre-line">
                                {service.coverageDescription}
                            </div>
                        </div>
                     )}
                     {service.philosophyTitle && (
                        <div className="bg-gradient-to-br from-[#5A4032] to-[#432d22] p-8 rounded-xl text-white shadow-xl hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-[#B98A6A] mb-4 font-serif">{service.philosophyTitle}</h3>
                             <div className="text-white/80 leading-relaxed whitespace-pre-line italic">
                                "{service.philosophyDescription}"
                            </div>
                        </div>
                     )}
                </section>
            )}

            {/* 4. Benefits */}
            {service.benefitsTitle && (
                 <section id="benefits" className="scroll-mt-24">
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      whileInView={{ opacity: 1 }} 
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                        <div className="bg-[#5A4032]/5 p-8 rounded-2xl border-l-4 border-[#B98A6A]">
                            <h2 className="text-2xl font-bold text-[#5A4032] mb-4 font-serif flex items-center gap-2">
                                <Star className="text-[#B98A6A] fill-current" /> {service.benefitsTitle}
                            </h2>
                            <div className="text-[#5A4032]/80 text-lg leading-relaxed whitespace-pre-line pl-2">
                                {service.benefitsDescription}
                            </div>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* 5. Key Features Grid */}
            <section>
              <h3 className="text-2xl font-bold text-[#5A4032] mb-6 font-serif flex items-center gap-2">
                <ShieldCheck className="text-[#B98A6A]" /> Key Inclusions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                      <div // Replaced motion.div with standard div + CSS hover for better performance
                          key={idx}
                          className="flex items-center gap-4 p-5 bg-[#F9F9F9] rounded-xl border border-[#B98A6A]/10 shadow-sm cursor-default hover:scale-[1.02] hover:bg-white transition-all duration-300"
                      >
                          <div className="w-10 h-10 rounded-full bg-[#B98A6A]/10 flex items-center justify-center shrink-0">
                             <CheckCircle className="w-5 h-5 text-[#B98A6A]" />
                          </div>
                          <span className="text-[#5A4032] font-semibold text-lg">{feature}</span>
                      </div>
                  ))}
              </div>
            </section>

            {/* 6. Interactive FAQ */}
            {service.faqs && (
                <section id="faq" className="scroll-mt-24 pt-8 border-t border-[#5A4032]/10">
                    <h2 className="text-3xl font-bold text-[#5A4032] mb-8 font-serif text-center">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto">
                        {service.faqs.map((faq, idx) => (
                            <FAQItem 
                                key={idx}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openFaqIndex === idx}
                                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>

        {/* === RIGHT COLUMN: STICKY CTA (Span 4) === */}
        <div className="lg:col-span-4 relative">
            <div className="bg-[#2A1C15] text-white p-8 rounded-2xl sticky top-24 shadow-2xl overflow-hidden">
                {/* CSS Animation instead of JS Animation for shapes */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#B98A6A] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#B98A6A] rounded-full blur-3xl opacity-20"></div>

                <div className="relative z-10">
                    <h3 className="text-2xl font-serif mb-2 text-[#B98A6A]">
                        {service.ctaTitle || "Ready to start?"}
                    </h3>
                    <p className="text-white/60 mb-8 text-sm leading-relaxed">
                        {service.ctaText || `Book a consultation for ${service.title} today and let us transform your space.`}
                    </p>
                    
                    <button className="w-full group relative overflow-hidden bg-[#B98A6A] text-white font-bold rounded-xl p-4 mb-4 shadow-lg hover:shadow-[#B98A6A]/30 transition-all duration-300">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <span className="flex items-center justify-center gap-2">
                           <Phone size={20} /> Call Now
                        </span>
                    </button>
                    
                    {/* <button className="w-full border border-white/20 text-white font-bold rounded-xl p-4 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                        <Calendar size={20} /> Book Consultation
                    </button> */}

                    <div className="mt-8 flex items-center justify-center gap-4 opacity-50">
                        <div className="h-[1px] w-full bg-white/20"></div>
                        <span className="text-xs uppercase whitespace-nowrap">Trusted by 500+ Clients</span>
                        <div className="h-[1px] w-full bg-white/20"></div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailPage;