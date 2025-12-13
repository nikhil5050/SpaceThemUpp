import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
  Ruler,
  PencilRuler,
  Monitor,
  MessageCircle,
  Users,
} from "lucide-react";

import AnimatedSection from "../components/AnimatedSection";
import Preloader from "../components/Preloader";
import WhatsAppButton from "../components/WhatsAppButton";
import EstimateSection from "../components/EstimateSection";
import ProcessWaveSection from "../components/ProcessWaveSection";
import VisionMissionSection from "../components/VisionMissionSection";
import StatsPart from "../components/StatsPart";
import DecorativeBackgrounds from "../components/DecorativeBackgrounds";
// At the top of Home.tsx
import GallerySection from "../components/GallerySection";
import Seo from "../components/Seo";
import ContactSection from "../components/ContactSection";
import MultiStepForm from "../componant/MultiStepForm";

interface NavLink {
  name: string;
  href: string;
}

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
}

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // --- Animation Logic State ---
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Modern", "Traditional", "Contemporary"];

  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const logoUrl = "https://adswisemarketing.com//logo%20(3).png";

  // --- Preloader Effect ---
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  // --- Scroll Effect ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Text Animation Effect ---
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleHeroMouseMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (!heroImageRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xMove = (clientX / innerWidth - 0.5) * -20;
    const yMove = (clientY / innerHeight - 0.5) * -20;
    heroImageRef.current.style.transform = `scale(1.1) translate(${xMove}px, ${yMove}px)`;
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services: ServiceItem[] = [
    { title: "Site Measurement", icon: <Ruler className="w-8 h-8" /> },
    { title: "Space Planning", icon: <PencilRuler className="w-8 h-8" /> },
    { title: "3D Render", icon: <Monitor className="w-8 h-8" /> },
    { title: "Honest Advice", icon: <MessageCircle className="w-8 h-8" /> },
    {
      title: "Transparent Communication",
      icon: <MessageCircle className="w-8 h-8" />,
    },
    { title: "Experienced Team", icon: <Users className="w-8 h-8" /> },
  ];

  return (
    <>
      <Seo
        title="Space Them Upp | Best Interior Designers for Home & Office"
        description="Transform your space with Space Them Upp. Expert interior designers for homes, offices, modular kitchens, bedrooms and luxury interiors across India."
        url="https://spacethemupp.com"
        image="https://spacethemupp.com/home-og-image.jpg"
      />
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      {loading && <Preloader logoUrl={logoUrl} />}

      <div
        className={`min-h-screen relative bg-[#FFFFFF] text-[#5A4032] font-sans overflow-x-hidden selection:bg-[#B98A6A] selection:text-white transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <DecorativeBackgrounds />

        {/* NAVBAR */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-lg py-4"
              : "bg-transparent py-6"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Space Them Upp Logo"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold tracking-widest text-[#B98A6A]">
                Space Them Upp
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#5A4032] hover:text-[#B98A6A] transition-colors duration-300 text-sm tracking-widest uppercase font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => navigate("/multi-step-form")} // 3. Add navigation event
                className="px-6 py-2 border border-[#B98A6A] text-[#B98A6A] ..."
              >
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-[#5A4032]"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-[#FFFFFF] absolute top-full left-0 w-full border-t border-[#D3CECB] py-4 px-6 flex flex-col space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#5A4032] hover:text-[#B98A6A] text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* HERO */}
        <section
          id="home"
          className="relative z-20 h-screen w-full bg-transparent flex items-center justify-center p-6 md:p-12 overflow-hidden"
          onMouseMove={handleHeroMouseMove}
        >
          <div className="relative w-full h-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none overflow-hidden mt-22 group">
            <div
              ref={heroImageRef}
              className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform scale-110"
            >
              <img
                src="https://i.pinimg.com/1200x/b6/de/3f/b6de3fe7f54a02a8eebf3e2bcb1b8412.jpg"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
              <AnimatedSection>
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-5xl">
                  <h1 className="font-serif text-[#FFFFFF] leading-none mb-6 drop-shadow-2xl">
                    <span className="block text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
                      Space Them Upp
                    </span>
                    <span className="block text-3xl md:text-5xl lg:text-6xl font-medium tracking-wide">
                      Interior Design Studio
                    </span>
                  </h1>

                  {/* --- NEW ANIMATED TEXT HEADER --- */}
                  <p className="tracking-[0.2em] uppercase text-xl md:text-xl mb-10 drop-shadow-md px-6 py-3 inline-block text-white  rounded-md backdrop-blur-md border border-white/20">
                    Trans<span className="font-bold">forming</span> Sp
                    <span className="font-bold">aces</span>
                    <span className="mx-3 opacity-50">|</span>
                    <span
                      key={textIndex}
                      className="font-bold text-orange-400 animate-pulse"
                    >
                      {words[textIndex]}
                    </span>
                  </p>
                  {/* -------------------------------- */}

                  <button
                    onClick={() => navigate("/multi-step-form")} // 3. Add navigation event
                    className="bg-[#B98A6A] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#a17558] transition-all duration-300 flex items-center gap-3 group shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    Get Instant Estimate
                    <ArrowRight className="..." />
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ABOUT + VISION */}
        <section
          id="about"
          className="py-10 md:py-12 bg-transparent relative pb-0 z-20"
        >
          <div className="absolute top-10 left-20 w-[200px] opacity-80 animate-spin-slow pointer-events-none z-0">
            <img
              src="https://jncdesignstudio.com/wp-content/uploads/2023/12/object-2-1.png"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <AnimatedSection className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-[#C9B29D]">
                  <img
                    src="https://i.pinimg.com/736x/67/7a/29/677a29fe0f8389a46ec2652b56b94e69.jpg"
                    alt="About Us Interior"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#B98A6A] rounded-lg -z-0 hidden md:block" />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1px] w-12 bg-[#B98A6A]"></span>
                  <h3 className="text-[#B98A6A] text-sm tracking-widest uppercase mb-2 font-bold">
                    About Us
                  </h3>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif text-[#5A4032] mb-6">
                  Creating Timeless{" "}
                  <span className="text-[#B98A6A]">Interiors</span>
                </h2>
                <div className="space-y-6 text-[#5A4032]/80 leading-relaxed">
                  <p>
                    Space Them Upp Specializes in providing turnkey design
                    solutions for high end residential luxury homes and
                    commercial projects. Our ability to create luxurious,
                    sophisticated interiors of timeless quality, extraordinary
                    design, and functionality, infused with client's personal
                    style and desires. Most importantly we respect our client’s
                    budget and established timeline…
                  </p>
                  <p>
                    At Space Them Upp, we believe that interior design is not
                    just about aesthetics; it's about creating spaces that
                    enhance the way you live and work. Our team of experienced
                    designers is dedicated to bringing your vision to life,
                    ensuring every detail is meticulously crafted to reflect
                    your unique style and personality.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <VisionMissionSection />
        </section>

        {/* ESTIMATE */}
        <AnimatedSection>
          <EstimateSection />
        </AnimatedSection>

        {/* SERVICES */}
        <section id="services" className="py-20 relative z-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <AnimatedSection>
                
                <h3 className="text-[#B98A6A] text-sm tracking-widest uppercase mb-2 font-bold">
                  
                  What We Do
                </h3>
                <h2 className="text-4xl md:text-5xl font-serif text-[#5A4032] mb-6">
                  Our Expertise
                </h2>

          

                
               
              </AnimatedSection>
            </div>

            

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 50}>
                  <div className="group bg-[#C9B29D] p-6 rounded-lg hover:bg-[#B98A6A] transition-all duration-300 h-full flex flex-col items-center text-center cursor-pointer border border-[#C9B29D] hover:border-[#B98A6A] shadow-lg hover:shadow-2xl hover:-translate-y-2">
                    <div className="text-[#B98A6A] group-hover:text-[#5A4032] mb-4 transition-colors duration-300 bg-[#FFFFFF] p-4 rounded-full">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[#5A4032] group-hover:text-white transition-colors duration-300 leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <AnimatedSection delay={300}>
                <button
                  onClick={() => navigate("/services")}
                  className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-[#B98A6A] text-[#B98A6A] hover:text-white transition-colors duration-300 ease-out shadow-md"
                >
                  <span className="absolute inset-0 w-full h-full bg-[#B98A6A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center gap-2 font-bold tracking-wider uppercase text-sm">
                    View All Services <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* PROCESS & STATS */}
        <section
          id="process"
          className="bg-transparent relative overflow-hidden py-10 z-20"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#B98A6A]/5 blur-[100px] pointer-events-none" />

          <div className="absolute top-0 left-0 z-0 pointer-events-none">
            <AnimatedSection>
              <img
                src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner02.png"
                alt="Process Decoration"
                className="w-[200px] md:w-[350px] lg:w-[500px] opacity-100"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
            </AnimatedSection>
          </div>

          <ProcessWaveSection />
        </section>

        <section>
          <StatsPart />
        </section>

        {/* GALLERY */}
        <GallerySection />

        {/* CONTACT */}

        <ContactSection />
        {/* <section id="contact" className="py-20 bg-transparent relative z-20">
          
          <div className="container mx-auto px-6">
            <div className="bg-[#C9B29D] rounded-2xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B98A6A]/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <AnimatedSection>
                  <h3 className="text-[#B98A6A] text-sm tracking-widest uppercase mb-4 font-bold">
                    Let's Talk
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#5A4032] mb-6">
                    Ready to Transform Your Space?
                  </h2>
                  <p className="text-[#5A4032]/80 mb-8">
                    Contact us to discuss your vision and goals. Receive a
                    tailored plan that fits your needs perfectly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#5A4032]">
                      <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#B98A6A]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-[#5A4032]/70 uppercase">
                          Call Us
                        </p>
                        <p className="font-bold text-lg">+91-9623233175</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-[#5A4032]">
                      <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#B98A6A]">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-[#5A4032]/70 uppercase">
                          Website
                        </p>
                        <p className="font-bold text-lg">
                          www.spacethemupp.com
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <form
                    className="bg-[#FFFFFF] p-8 rounded-lg shadow-lg border border-[#B98A6A]/20"
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                      e.preventDefault()
                    }
                  >
                    <div className="mb-6">
                      <label className="block text-[#5A4032] text-sm mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#F5F5F5] border border-[#D3CECB] rounded p-3 text-[#5A4032] focus:border-[#B98A6A] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-[#5A4032] text-sm mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-[#F5F5F5] border border-[#D3CECB] rounded p-3 text-[#5A4032] focus:border-[#B98A6A] focus:outline-none transition-colors"
                        placeholder="+91..."
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-[#5A4032] text-sm mb-2 font-medium">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-[#F5F5F5] border border-[#D3CECB] rounded p-3 text-[#5A4032] focus:border-[#B98A6A] focus:outline-none transition-colors"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button className="w-full bg-[#B98A6A] text-white font-bold py-4 rounded hover:bg-[#a17558] transition-all duration-300">
                      Get Free Consultation
                    </button>
                  </form>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section> */}

        {/* FOOTER */}
        <footer className="bg-[#D3CECB] pt-16 pb-8 border-t border-[#C9B29D] relative z-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Company Info (2 columns on md) */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={logoUrl}
                    alt="Space Them Upp Logo"
                    className="h-14 w-auto"
                  />
                  <h2 className="text-2xl font-serif font-bold text-[#5A4032] tracking-wider">
                    SPACE THEM UPP
                  </h2>
                </div>
                <p className="text-[#5A4032]/80 max-w-sm">
                  Turning your dream space into reality with extraordinary
                  design and functionality. Specializing in luxury residential
                  and commercial fit-outs.
                </p>
              </div>

              {/* Quick Links (1 column on md) */}
              <div>
                <h4 className="text-[#5A4032] font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3 text-[#5A4032]/80">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-[#B98A6A] transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[#B98A6A] transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-[#B98A6A] transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#process"
                      className="hover:text-[#B98A6A] transition-colors"
                    >
                      Process
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info (New Section - 1 column on md) */}
              <div>
                <h4 className="text-[#5A4032] font-bold mb-6">Contact</h4>
                <div className="space-y-4 text-[#5A4032]/80">
                  <div>
                    <p className="font-semibold mb-1">Studio Address</p>
                    <p className="text-sm leading-relaxed">
                      Office 301 ,3rd Floor, The Centrum, Bhumkar Chowk Rd,
                      Ashok Nagar, Tathawade, Pune, Pimpri-Chinchwad,
                      Maharashtra-411033
                    </p>
                  </div>
                  {/* <div>
            <p className="font-semibold mb-1">Email</p>
            <a
              href="mailto:spacethemup.design@gmail.com"
              className="text-sm hover:text-[#B98A6A] transition-colors"
            >
              spacethemup.design@gmail.com
            </a>
          </div> */}
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    {/* <a
              href="tel:+919067591818"
              className="text-sm hover:text-[#B98A6A] transition-colors"
            >
              +91 90675 91818
            </a> */}
                    {/* <span className="text-sm"> / </span> */}
                    <a
                      href="tel:+919623233175"
                      className="text-sm hover:text-[#B98A6A] transition-colors"
                    >
                      +91 96232 33175
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links and Copyright */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center border-t border-[#C9B29D] pt-8">
              {/* Social Links - moved here for better separation from contact details */}
              <div className="flex space-x-4 mb-6 md:mb-0 justify-center md:justify-start">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#B98A6A] flex items-center justify-center text-[#B98A6A] hover:bg-[#B98A6A] hover:text-white transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#B98A6A] flex items-center justify-center text-[#B98A6A] hover:bg-[#B98A6A] hover:text-white transition-all"
                >
                  <Facebook size={20} />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-center text-[#5A4032]/60 text-sm">
                &copy; {new Date().getFullYear()} Space Them Upp. All rights
                reserved.
              </div>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Home;
