import React, { useState } from 'react';
import { Phone, Mail, X, ArrowRight, Sparkles } from 'lucide-react';
import MultiStepForm from '../componant/MultiStepForm';

// Mock AnimatedSection for demonstration (replace with your actual import)
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <div className={`animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${delay}`}>
    {children}
  </div>
);

const ContactSection = () => {
  // State to toggle the Multi-Step Form
  const [showForm, setShowForm] = useState(false);

  // --- RENDER FORM OVERLAY IF OPEN ---
  if (showForm) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#D3CECB]">
        {/* Close Button to return to website */}
        <button 
          onClick={() => setShowForm(false)}
          className="fixed top-4 right-4 z-[60] bg-white p-2 rounded-full text-[#5A4032] shadow-lg hover:bg-[#B98A6A] hover:text-white transition-all"
        >
          <X size={24} />
        </button>
        
        {/* Your MultiStepForm Component */}
        <MultiStepForm />
      </div>
    );
  }

  // --- MAIN CONTACT SECTION ---
  return (
    <section id="contact" className="py-20 bg-transparent relative z-20">
      <div className="container mx-auto px-6">
        <div className="bg-[#C9B29D] rounded-2xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Decorative Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B98A6A]/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

          <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
            
            {/* LEFT COLUMN: Contact Info */}
            <AnimatedSection>
              <h3 className="text-[#B98A6A] text-sm tracking-widest uppercase mb-4 font-bold bg-white/20 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
                Let's Talk
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-[#5A4032] mb-6 leading-tight">
                Ready to Transform <br/> Your Space?
              </h2>
              <p className="text-[#5A4032]/80 mb-8 max-w-md text-lg">
                Your dream home is just a conversation away. Connect with us directly or start our guided design wizard to get a custom estimate.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5 text-[#5A4032] group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#B98A6A] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-[#5A4032]/70 uppercase tracking-wide">Call Us Directly</p>
                    <p className="font-bold text-xl font-serif">+91-9623233175</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 text-[#5A4032] group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#B98A6A] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-[#5A4032]/70 uppercase tracking-wide">Visit Website</p>
                    <p className="font-bold text-xl font-serif">www.spacethemupp.com</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT COLUMN: The "CTA Card" (Instead of small form) */}
            <AnimatedSection delay={200}>
              <div className="bg-[#FFFFFF] p-8 md:p-10 rounded-2xl shadow-2xl border border-[#B98A6A]/20 text-center relative overflow-hidden group">
                
                {/* Decorative element on card */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#5A4032] to-[#B98A6A]" />
                <h3 className="text-2xl font-serif text-[#5A4032] mb-3">
                  Get Your Custom Estimate
                </h3>
                <p className="text-[#5A4032]/70 mb-8 text-sm leading-relaxed">
                  Answer a few quick questions about your floor plan and style preferences. We'll generate a tailored proposal for you instantly.
                </p>

                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full bg-[#5A4032] hover:bg-[#4a3429] text-white font-bold py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Start Design Journey 
                  <ArrowRight size={20} />
                </button>

                <p className="mt-4 text-[10px] text-[#5A4032]/40 uppercase tracking-widest">
                  Takes less than 2 minutes
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;