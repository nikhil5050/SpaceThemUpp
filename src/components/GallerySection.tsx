import React, { useState } from "react";
import { ArrowUpRight, Plus, Loader2, Sparkles } from "lucide-react";

// --- Types ---
type Category = "All" | "Residential" | "Commercial";

interface Project {
  id: number;
  title: string;
  category: "Residential" | "Commercial";
  image: string;
  size: string;
}

interface BgImage {
  src: string;
  style: string;
}

// --- DATA ---
const projects: Project[] = [
  // 1. Initial Batch
  {
    id: 1,
    title: "Golden Horizon",
    category: "Residential",
    size: "Penthouse",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Cafe",
    category: "Commercial",
    size: "1500 Sqft",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1447&q=80",
  },
  {
    id: 3,
    title: "Serene Living",
    category: "Residential",
    size: "Apartment",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Tech Lobby",
    category: "Commercial",
    size: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Vintage Villa",
    category: "Residential",
    size: "Luxury",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Azure Store",
    category: "Commercial",
    size: "Retail",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1935&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Minimalist",
    category: "Residential",
    size: "Studio",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Co-Work Hub",
    category: "Commercial",
    size: "Shared",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Heritage",
    category: "Residential",
    size: "Reno",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Sky Lounge",
    category: "Commercial",
    size: "Bar",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // --- BACKGROUND IMAGES (First one removed) ---
  const bgImages: BgImage[] = [
    // Removed the "top-0 right-0" image as requested
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/object-2-1.png",
      style: "top-[10%] left-0 w-[150px] md:w-[300px] opacity-80",
    },
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-2.png",
      style: "top-[25%] right-0 w-[150px] md:w-[300px] opacity-80",
    },
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-52.png",
      style: "top-[40%] left-0 w-[180px] md:w-[350px] opacity-80",
    },
    {
      src: "https://jncdesignstudio.com/wp-content/uploads/2023/12/effect-52.png",
      style: "top-[55%] right-0 w-[200px] md:w-[400px] opacity-80",
    },
   
  ];

  // Filter Logic
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleCategoryChange = (category: Category) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setVisibleCount(8);
      setIsAnimating(false);
    }, 400);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsLoadingMore(false);
    }, 800);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative z-20 overflow-hidden min-h-screen">
      
      {/* --- INJECTED STYLES --- */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-card-entry {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      {/* --- DECORATIVE BACKGROUNDS (User Provided) --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {bgImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt=""
            className={`absolute ${img.style} object-contain transition-transform duration-[2000ms] hover:scale-110`}
            style={{ animation: `float ${6 + index}s ease-in-out infinite` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="text-left relative">
            <h3 className="text-[#B98A6A] text-xs md:text-sm tracking-[0.2em] uppercase mb-2 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Our Portfolio
            </h3>
            <h2 className="text-3xl md:text-5xl font-serif text-[#5A4032] leading-tight">
              Selected <span className="italic text-[#B98A6A]">Masterpieces</span>
            </h2>
          </div>

          {/* --- FILTER BUTTONS --- */}
          <div className="flex flex-wrap gap-2 md:gap-3 bg-white/80 p-1 md:p-2 rounded-full backdrop-blur-sm border border-[#C9B29D]/30 shadow-sm z-20">
            {["All", "Residential", "Commercial"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat as Category)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 relative overflow-hidden group ${
                  activeCategory === cat
                    ? "text-white shadow-md"
                    : "text-[#5A4032] hover:text-[#B98A6A]"
                }`}
              >
                {/* Button Background Fill Animation */}
                <span className={`absolute inset-0 w-full h-full bg-[#B98A6A] transition-transform duration-300 ease-out ${
                    activeCategory === cat ? "translate-x-0" : "-translate-x-full group-hover:translate-x-0 opacity-10"
                }`} />
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- GALLERY GRID --- */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-500 ease-in-out ${
            isAnimating ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="group relative overflow-hidden rounded-lg md:rounded-xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[3/4] md:aspect-[4/5] hover:-translate-y-2 animate-card-entry z-20"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A4032] via-[#5A4032]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

              {/* White Border on Hover */}
              <div className="absolute inset-3 border border-white/30 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 rounded-lg" />

              {/* Floating Tag */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm z-10 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[10px] md:text-xs font-bold text-[#5A4032] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <p className="text-[#B98A6A] text-[10px] font-bold tracking-widest uppercase mb-1">
                  {project.size}
                </p>
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-white text-lg md:text-xl font-serif leading-none">
                    {project.title}
                  </h3>
                  <div className="bg-white/20 p-2 rounded-full text-white backdrop-blur-sm hover:bg-[#B98A6A] transition-colors duration-300">
                     <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LOAD MORE BUTTON --- */}
        {visibleProjects.length < filteredProjects.length && (
          <div className="mt-16 flex justify-center relative z-20">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="group relative px-8 py-3 bg-[#F5F5F5] overflow-hidden rounded-full border border-[#B98A6A] text-[#B98A6A] shadow-lg transition-all hover:shadow-[#B98A6A]/30 disabled:opacity-50"
            >
              <div className="absolute inset-0 w-full h-full bg-[#B98A6A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              
              <div className="relative flex items-center gap-3 font-bold tracking-widest uppercase text-xs md:text-sm group-hover:text-white transition-colors">
                {isLoadingMore ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" /> Loading...
                  </>
                ) : (
                  <>
                    View More Projects
                    <Plus className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  </>
                )}
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;