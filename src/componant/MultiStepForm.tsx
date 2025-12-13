import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Home, Building2, Paintbrush, IndianRupee, Clock, Check, 
  ChevronRight, ChevronLeft, MapPin, Ruler,  Send, 
  Loader2, Phone, Mail, User, CheckCircle2, AlertCircle, Sparkles
} from 'lucide-react';

// --- Types & Interfaces ---

export interface LeadFormData {
  city: string;
  propertyType: string;
  bhkType: string;
  propertyStatus: string;
  carpetArea: number;
  spaces: string[];
  additionalRequirements?: string;
  designStyle: string;
  budgetRange: string;
  timeline: string;
  fullName: string;
  mobile: string;
  email?: string;
  consent: boolean;
}

type FormStep = 1 | 2 | 3 | 4;

// --- Constants & Options ---

const CITIES = ["Pune", "Mumbai"];

const PROPERTY_TYPES = [
  { id: "apartment", label: "Apartment", icon: Building2 },
  { id: "house", label: "Independent House", icon: Home },
  { id: "villa", label: "Villa", icon: Home },
];

const BHK_TYPES = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

const PROPERTY_STATUS = ["New / Under Construction", "Resale", "Renovation"];

const SPACES = [
  "Living Room", "Kitchen", "Master Bedroom", "Other Bedrooms", 
  "Bathrooms", "Balcony", "Pooja Room", "Study Room"
];

const DESIGN_STYLES = [
  { id: "modern", label: "Modern", desc: "Clean lines, neutral colors" },
  { id: "contemporary", label: "Contemporary", desc: "Current trends, bold accents" },
  { id: "minimal", label: "Minimalist", desc: "Less is more, functional" },
  { id: "traditional", label: "Traditional", desc: "Classic details, rich woods" },
  { id: "luxury", label: "Luxury", desc: "Premium finishes, elegant" },
];

const BUDGET_RANGES = [
  "₹3–5 Lakhs", "₹5–8 Lakhs", "₹8–12 Lakhs", "₹12 Lakhs+"
];

const TIMELINES = [
  "Immediately", "1–3 Months", "3–6 Months", "Just Exploring"
];

// --- Helper Components ---

const StepIndicator = ({ currentStep }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="flex gap-2 mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex-1 h-1.5 rounded-full overflow-hidden bg-[#D3CECB]/50">
          <div 
            className={`h-full transition-all duration-500 ease-out rounded-full ${
              step <= currentStep ? 'bg-[#B98A6A]' : 'bg-transparent'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-[#5A4032] mb-2 font-serif">{title}</h2>
    <p className="text-[#5A4032]/70 text-sm">{subtitle}</p>
  </div>
);

const ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 font-medium animate-pulse">
      <AlertCircle size={12} /> {message}
    </p>
  );
};

// --- Main Component ---

const MultiStepForm = () => {
  // State
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState("");
  
  // Dynamic Side Image Logic
  const [sideImage, setSideImage] = useState("");

  useEffect(() => {
    const images: Record<number, string> = {
      1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", 
      2: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop", 
      3: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", 
      4: "https://i.pinimg.com/736x/20/cc/59/20cc5982df1cdc679779e40db2c04f90.jpg"  
    };
    setSideImage(images[currentStep]);
  }, [currentStep]);

  const [formData, setFormData] = useState<LeadFormData>({
    city: "Pune",
    propertyType: "",
    bhkType: "",
    propertyStatus: "",
    carpetArea: 800,
    spaces: [],
    additionalRequirements: "",
    designStyle: "",
    budgetRange: "",
    timeline: "",
    fullName: "",
    mobile: "",
    email: "",
    consent: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});

  // Helper to update fields
  const updateField = (field: keyof LeadFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const toggleSpace = (space: string) => {
    const currentSpaces = formData.spaces;
    const newSpaces = currentSpaces.includes(space)
      ? currentSpaces.filter(s => s !== space)
      : [...currentSpaces, space];
    updateField('spaces', newSpaces);
  };

  // Validation Logic
  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.city) newErrors.city = "Please select a city";
      if (!formData.propertyType) newErrors.propertyType = "Select property type";
      if (!formData.bhkType) newErrors.bhkType = "Select BHK type";
      if (!formData.propertyStatus) newErrors.propertyStatus = "Select property status";
    }

    if (step === 2) {
      if (!formData.carpetArea || formData.carpetArea < 200 || formData.carpetArea > 4000) {
        newErrors.carpetArea = "Area must be between 200 and 4000 sq.ft.";
      }
      if (formData.spaces.length === 0) {
        newErrors.spaces = "Select at least one space to design";
      }
    }

    if (step === 3) {
      if (!formData.designStyle) newErrors.designStyle = "Select a design preference";
      if (!formData.budgetRange) newErrors.budgetRange = "Select a budget range";
      if (!formData.timeline) newErrors.timeline = "Select a timeline";
    }

    if (step === 4) {
      if (!formData.fullName || formData.fullName.length < 3) {
        newErrors.fullName = "Name must be at least 3 characters";
      }
      const mobileRegex = /^[6-9]\d{9}$/;
      if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
        newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
      }
      if (!formData.consent) {
        newErrors.consent = "You must agree to the terms";
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) isValid = false;
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      window.scrollTo(0, 0);
      setCurrentStep(prev => (prev + 1) as FormStep);
    }
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    setCurrentStep(prev => (prev - 1) as FormStep);
  };

  // --- EMAILJS SUBMISSION LOGIC ---
  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    setIsSubmitting(true);
    setServerError("");

    // Prepare data mapping for EmailJS Template
    // We send CLEAN DATA, not HTML tags. The HTML styling happens in the EmailJS dashboard.
    const templateParams = {
        to_name: "Admin", 
        user_name: formData.fullName,
        user_mobile: formData.mobile,
        user_email: formData.email || "Not Provided",
        user_city: formData.city,
        property_type: formData.propertyType,
        bhk_type: formData.bhkType,
        property_status: formData.propertyStatus,
        carpet_area: `${formData.carpetArea} sq.ft`,
        spaces_selected: formData.spaces.join(", "), // Convert array to string
        design_style: formData.designStyle,
        budget_range: formData.budgetRange,
        timeline: formData.timeline
    };

    try {
        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        const SERVICE_ID = "service_5fvvdso"; 
        const TEMPLATE_ID = "template_s8b5dco";
        const PUBLIC_KEY = "kNoV7lG1GFR7qjBHZ";

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        
        setSubmitStatus('success');
    } catch (error) {
        console.error("EMAIL JS ERROR:", error);
        setServerError("Something went wrong while sending your request. Please check your connection or try again.");
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  // --- SUCCESS SCREEN ---

  // --- SUCCESS SCREEN ---

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-[#D3CECB] flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-t-8 border-[#B98A6A]">
          <div className="w-20 h-20 bg-[#F5F0EB] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#5A4032]" />
          </div>
          <h2 className="text-3xl font-bold text-[#5A4032] mb-2 font-serif">Thank You!</h2>
          <p className="text-[#5A4032]/70 mb-8">
            We have received your request, {formData.fullName.split(' ')[0]}. Our design consultant will reach out shortly.
          </p>
          
          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Go to Home Button */}
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-[#5A4032] hover:bg-[#4a3429] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all"
            >
              Go to Home
            </button>

            {/* Start New Inquiry Button */}
            <button 
              onClick={() => window.location.reload()}
              className="text-[#B98A6A] font-semibold hover:text-[#5A4032] transition-colors uppercase text-xs tracking-widest px-4 py-3"
            >
              Start New Inquiry
            </button>
          </div>

        </div>
      </div>
    );
  }

  // --- MAIN FORM RENDER ---

  return (
    <div className="min-h-screen bg-[#D3CECB] p-4 md:p-8 font-sans flex items-center justify-center">
      
      {/* Main Container Card */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* LEFT: Image Sidebar (Hidden on Mobile) */}
        <div className="hidden md:block w-5/12 relative bg-[#5A4032]">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img 
            src={sideImage} 
            alt="Interior Design" 
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
            <div className="flex items-center gap-2 mb-2 text-[#C9B29D]">
              <Sparkles size={18} />
              <span className="uppercase tracking-widest text-xs font-semibold">Premium Interiors</span>
            </div>
            <h3 className="text-3xl font-serif font-light leading-tight">
              {currentStep === 1 && "Design your dream sanctuary."}
              {currentStep === 2 && "Every inch tailored to you."}
              {currentStep === 3 && "Curating your unique style."}
              {currentStep === 4 && "Let's bring it to life."}
            </h3>
          </div>
        </div>

        {/* RIGHT: Form Area */}
        <div className="w-full md:w-7/12 p-6 md:p-12 flex flex-col relative">
          
          {/* Progress & Navigation Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-xs font-bold text-[#B98A6A] uppercase tracking-widest">Step {currentStep}/4</div>
            {currentStep > 1 && (
              <button onClick={handleBack} className="text-[#5A4032]/50 hover:text-[#5A4032] transition-colors">
                <ChevronLeft size={24} />
              </button>
            )}
          </div>
          
          <StepIndicator currentStep={currentStep} totalSteps={4} />

          <div className="flex-grow">
            {/* STEP 1: HOME DETAILS */}
            {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <SectionTitle title="The Canvas" subtitle="Tell us about the property you wish to transform." />
                
                <div className="space-y-6">
                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-2">City</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-3.5 text-[#B98A6A] w-5 h-5 group-hover:scale-110 transition-transform" />
                      <select 
                        value={formData.city}
                        onChange={(e) => updateField('city', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl focus:ring-2 focus:ring-[#B98A6A] focus:border-transparent outline-none appearance-none text-[#5A4032] font-medium transition-all"
                      >
                        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-3">Property Type</label>
                    <div className="grid grid-cols-3 gap-4">
                      {PROPERTY_TYPES.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => updateField('propertyType', type.id)}
                          className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 group ${
                            formData.propertyType === type.id 
                              ? 'border-[#B98A6A] bg-[#C9B29D]/20' 
                              : 'border-transparent bg-[#F5F5F5] hover:bg-[#EAEAEA]'
                          }`}
                        >
                          <type.icon className={`w-6 h-6 mb-2 transition-colors ${formData.propertyType === type.id ? 'text-[#B98A6A]' : 'text-[#5A4032]/40 group-hover:text-[#5A4032]'}`} />
                          <span className={`text-xs font-semibold ${formData.propertyType === type.id ? 'text-[#5A4032]' : 'text-[#5A4032]/60'}`}>{type.label}</span>
                        </button>
                      ))}
                    </div>
                    <ErrorMessage message={errors.propertyType} />
                  </div>

                  {/* BHK & Status Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-3">BHK Config</label>
                      <div className="grid grid-cols-2 gap-2">
                        {BHK_TYPES.map((bhk) => (
                          <button
                            key={bhk}
                            onClick={() => updateField('bhkType', bhk)}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                              formData.bhkType === bhk 
                                ? 'bg-[#5A4032] text-white shadow-lg' 
                                : 'bg-[#F5F5F5] text-[#5A4032]/70 hover:bg-[#EAEAEA]'
                            }`}
                          >
                            {bhk}
                          </button>
                        ))}
                      </div>
                      <ErrorMessage message={errors.bhkType} />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-3">Status</label>
                        <div className="space-y-2">
                         {PROPERTY_STATUS.map((status) => (
                          <div 
                            key={status}
                            onClick={() => updateField('propertyStatus', status)}
                            className={`flex items-center p-2 px-3 rounded-lg cursor-pointer transition-all border ${
                              formData.propertyStatus === status
                                ? 'border-[#B98A6A] bg-[#FFF]'
                                : 'border-transparent bg-[#F5F5F5] hover:bg-[#EAEAEA]'
                            }`}
                          >
                            <div className={`w-3 h-3 rounded-full mr-3 border ${formData.propertyStatus === status ? 'bg-[#B98A6A] border-[#B98A6A]' : 'border-[#5A4032]/30'}`} />
                            <span className="text-sm text-[#5A4032]">{status}</span>
                          </div>
                         ))}
                        </div>
                        <ErrorMessage message={errors.propertyStatus} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: SPACE DETAILS */}
            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <SectionTitle title="The Scope" subtitle="How much of your space needs our touch?" />
                
                <div className="space-y-8">
                  {/* Carpet Area */}
                  <div className="bg-[#C9B29D]/20 p-6 rounded-2xl border border-[#C9B29D]/30">
                    <label className="flex items-center justify-between text-[#5A4032] font-semibold mb-6">
                      <span className="flex items-center gap-2 text-lg font-serif"><Ruler className="text-[#B98A6A]"/> Carpet Area</span>
                      <div className="bg-white px-3 py-1 rounded-md border border-[#C9B29D] shadow-sm text-[#5A4032] font-mono">
                        {formData.carpetArea} sq.ft
                      </div>
                    </label>
                    <input 
                      type="range" 
                      min="200" max="4000" step="50"
                      value={formData.carpetArea}
                      onChange={(e) => updateField('carpetArea', Number(e.target.value))}
                      className="w-full h-2 bg-[#D3CECB] rounded-lg appearance-none cursor-pointer accent-[#B98A6A]"
                    />
                  </div>

                  {/* Spaces Grid */}
                  <div>
                    <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-4">Areas to Design</label>
                    <div className="grid grid-cols-2 gap-3">
                      {SPACES.map((space) => (
                        <div 
                          key={space}
                          onClick={() => toggleSpace(space)}
                          className={`relative p-4 rounded-xl border transition-all cursor-pointer select-none overflow-hidden ${
                            formData.spaces.includes(space)
                              ? 'bg-[#5A4032] border-[#5A4032] text-white shadow-md'
                              : 'bg-white border-[#E5E5E5] text-[#5A4032] hover:border-[#B98A6A]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between z-10 relative">
                            <span className="text-sm font-medium">{space}</span>
                            {formData.spaces.includes(space) && <Check size={16} className="text-[#B98A6A]" />}
                          </div>
                          {formData.spaces.includes(space) && (
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#B98A6A]/10 rounded-bl-full -mr-8 -mt-8" />
                          )}
                        </div>
                      ))}
                    </div>
                    <ErrorMessage message={errors.spaces} />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PREFERENCES */}
            {currentStep === 3 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <SectionTitle title="The Aesthetics" subtitle="Define the personality of your future home." />
                
                <div className="space-y-8">
                  {/* Design Style */}
                  <div>
                    <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-4 flex items-center gap-2">
                      <Paintbrush size={16} className="text-[#B98A6A]" /> Preferred Style
                    </label>
                    <div className="space-y-3">
                      {DESIGN_STYLES.map((style) => (
                        <div
                          key={style.id}
                          onClick={() => updateField('designStyle', style.id)}
                          className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer group ${
                            formData.designStyle === style.id 
                              ? 'border-[#B98A6A] bg-[#C9B29D]/20' 
                              : 'border-[#E5E5E5] hover:border-[#B98A6A]/30'
                          }`}
                        >
                          <div>
                            <div className={`font-serif font-medium text-lg ${formData.designStyle === style.id ? 'text-[#5A4032]' : 'text-[#5A4032]/80'}`}>
                              {style.label}
                            </div>
                            <div className="text-xs text-[#5A4032]/50 mt-0.5 uppercase tracking-wide">{style.desc}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            formData.designStyle === style.id ? 'border-[#B98A6A]' : 'border-[#D3CECB]'
                          }`}>
                            {formData.designStyle === style.id && <div className="w-3 h-3 rounded-full bg-[#B98A6A]" />}
                          </div>
                        </div>
                      ))}
                    </div>
                    <ErrorMessage message={errors.designStyle} />
                  </div>

                  {/* Budget & Timeline */}
                  <div className="bg-[#F9F9F9] p-5 rounded-xl border border-[#E5E5E5]">
                    <div className="mb-6">
                      <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-3 flex items-center gap-2">
                        <IndianRupee size={14}/> Budget Range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_RANGES.map((range) => (
                          <button
                            key={range}
                            onClick={() => updateField('budgetRange', range)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                              formData.budgetRange === range
                                ? 'bg-[#B98A6A] text-white shadow-md'
                                : 'bg-white border border-[#E5E5E5] text-[#5A4032]/70 hover:border-[#B98A6A]'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                      <ErrorMessage message={errors.budgetRange} />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-3 flex items-center gap-2">
                        <Clock size={14}/> Timeline
                      </label>
                      <select 
                        value={formData.timeline}
                        onChange={(e) => updateField('timeline', e.target.value)}
                        className="w-full p-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#5A4032] outline-none focus:border-[#B98A6A]"
                      >
                        <option value="">Select a timeline...</option>
                        {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ErrorMessage message={errors.timeline} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT */}
            {currentStep === 4 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <SectionTitle title="Final Step" subtitle="Where should we send your personalized estimate?" />
                
                <div className="space-y-6">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 text-[#B98A6A] w-5 h-5" />
                      <input 
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-[#F9F9F9] border-b-2 border-[#E5E5E5] focus:border-[#B98A6A] outline-none transition-colors text-[#5A4032] placeholder-[#5A4032]/30"
                        placeholder="e.g. Aditi Sharma"
                      />
                    </div>
                    <ErrorMessage message={errors.fullName} />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-2">Mobile Number</label>
                    <div className="relative">
                      <div className="absolute left-4 top-3.5 flex items-center gap-2 border-r border-[#D3CECB] pr-3">
                        <span className="text-sm font-bold text-[#5A4032]">🇮🇳 +91</span>
                      </div>
                      <input 
                        type="tel"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={(e) => updateField('mobile', e.target.value.replace(/\D/g, ''))}
                        className="w-full pl-24 pr-12 py-3 bg-[#F9F9F9] border-b-2 border-[#E5E5E5] focus:border-[#B98A6A] outline-none transition-colors text-[#5A4032]"
                        placeholder="98765 43210"
                      />
                      <Phone className="absolute right-4 top-3.5 text-[#B98A6A] w-5 h-5" />
                    </div>
                    <ErrorMessage message={errors.mobile} />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#5A4032] uppercase tracking-wide mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-[#B98A6A] w-5 h-5" />
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-[#F9F9F9] border-b-2 border-[#E5E5E5] focus:border-[#B98A6A] outline-none transition-colors text-[#5A4032] placeholder-[#5A4032]/30"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="pt-4">
                    <label className="flex items-start cursor-pointer group">
                      <div className="relative flex items-center mt-0.5">
                        <input 
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => updateField('consent', e.target.checked)}
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-[#B98A6A] transition-all checked:bg-[#B98A6A]"
                        />
                        <Check size={12} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                      </div>
                      <span className="ml-3 text-xs text-[#5A4032]/70 leading-relaxed group-hover:text-[#5A4032] transition-colors">
                        I authorize the design team to contact me via WhatsApp/Phone to discuss my project requirements.
                      </span>
                    </label>
                    <ErrorMessage message={errors.consent} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Server Error Message */}
          {serverError && (
              <div className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 text-sm rounded-lg flex items-center gap-2">
                <AlertCircle size={16} />
                {serverError}
              </div>
          )}

          {/* Action Button */}
          <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
            <button
              onClick={currentStep === 4 ? handleSubmit : handleNext}
              disabled={isSubmitting}
              className="w-full bg-[#5A4032] hover:bg-[#4a3429] text-white py-4 rounded-xl font-bold tracking-wide shadow-xl shadow-[#5A4032]/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : currentStep === 4 ? (
                <>Get My Estimate <Send size={18} className="group-hover:translate-x-1 transition-transform"/></>
              ) : (
                <>Continue <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/></>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;