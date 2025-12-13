// src/components/servicesData.ts
import {
  Ruler, PencilRuler, Monitor, Scale, MessageCircle, Users, ClipboardList,
  Armchair, HardHat, Utensils, Wrench, Grid, Lightbulb, PaintBucket,
  Trees, Sparkles, ShieldCheck, Headset
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// --- 1. UPDATED INTERFACE ---
export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  features: string[];
  imageUrl: string;
  // New Optional Fields for Rich Content
  metaTitle?: string;
  metaDescription?: string;
  heroHeading?: string;
  heroSubHeading?: string;
  processTitle?: string;
  processDescription?: string;
  coverageTitle?: string;
  coverageDescription?: string;
  philosophyTitle?: string;
  philosophyDescription?: string;
  benefitsTitle?: string;
  benefitsDescription?: string;
  faqTitle?: string;
  faqs?: { question: string; answer: string }[];
  ctaTitle?: string;
  ctaText?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "site-measurement",
    title: "Site Measurement",
    icon: Ruler,
    shortDesc: "Precise laser measurements ensuring 100% accuracy.",
    metaTitle: "Site Measurement Service in Pune & Mumbai | Space Them Upp",
    metaDescription: "Professional site measurement services for interiors in Pune and Mumbai. We use laser tools to create accurate as-built drawings, ensuring zero errors in your design execution.",
    heroHeading: "Site Measurement Service in Pune & Mumbai",
    heroSubHeading: "Accurate measurements are the foundation of a stress-free interior project. We map every inch of your property to ensure your design is based on reality, not guesswork.",
    
    longDesc: `At Space Them Upp, every interior project begins with one essential step: a precise site measurement. For homes and commercial spaces across Pune, PCMC and Mumbai, accurate measurements are the foundation that keeps the entire design and execution process safe, efficient and stress‑free.

Many problems people face during interiors—wardrobes not opening fully, sofas blocking pathways, doors hitting furniture, false ceilings clashing with beams—come from incorrect or incomplete measurements. A professional site survey avoids these surprises. Our team uses reliable tools and a detailed checklist to capture every wall, opening, level change and service point so your design is based on reality, not guesswork.



In interior design, even a few millimetres can make a difference. A wardrobe that is 2 cm larger than the available niche may require civil breaking. A kitchen counter that ignores beam heights can disrupt your lighting or chimney placement. Precise measurements protect you from such costly changes later.

Accurate site data also supports better space planning, furniture selection and civil work. When the designer knows the true room sizes, door swings, column positions and window heights, they can propose layouts that work perfectly the first time. For compact city homes in areas like Wakad, Baner, Hinjawadi, Thane or Andheri, this level of clarity is critical to using every inch efficiently.`,

    processTitle: "Our Site Measurement Process",
    processDescription: `Pre‑visit preparation
Before visiting your property, our team studies the builder floor plans, project brochure or any existing drawings. This helps us plan what needs to be checked and which areas might need special attention, such as shafts or oddly shaped balconies.

On‑site survey and tools
During the visit, we carry professional tools such as laser distance meters, measuring tapes, levels and angle finders. We also use mobiles or cameras to record photos and videos. The site is sketched on graph sheets with reference points marked clearly.

Capturing room dimensions
We measure the length, width and clear height of every room, cross‑checked wherever needed. Structural elements such as beams, columns, drop panels and step levels are carefully noted. This information is crucial for false ceilings and tall wardrobes.

Doors, windows and openings
All door and window sizes are recorded, including frame thickness, sill height and head height. We also note door swings to prevent situations where a door hits a cabinet or a window cannot be opened because of furniture.

Services and site conditions
Electrical points, switchboards, AC locations, plumbing lines and drainage slopes are mapped. We also observe sunlight direction, dampness, cracks or uneven flooring. These notes are valuable when planning wardrobes against external walls.

Digital documentation and “as‑built” drawings
Back at the studio, all sketches and notes are converted into accurate CAD drawings, called “as‑built” plans. These drawings reflect the site exactly as it exists and become the master reference for space planning and execution.`,

    coverageTitle: "Where We Offer Site Measurement",
    coverageDescription: `Space Them Upp provides professional site measurement services for:

• New apartments and penthouses in Pune, PCMC, Mumbai and Navi Mumbai
• Under‑construction flats where dimensions must be checked before final payment
• Existing homes undergoing renovation
• Offices, clinics, showrooms and cafés being redesigned
• Independent bungalows and row houses that need detailed multi‑floor surveys

In rapidly developing zones like Tathawade, Balewadi, Kharadi, Baner, Hinjawadi, Wakad, Andheri, Powai and Thane, site variations between brochure and final possession are common. A dedicated survey ensures there are no unpleasant surprises when interiors begin.`,

    philosophyTitle: "What Makes Our Measurement Different",
    philosophyDescription: `Space Them Upp treats site measurement as a specialised service rather than a quick formality. Being a turnkey interior design studio, we understand exactly how inaccurate data can hurt you later.

Our checklists include:
• Structural grid and wall thickness
• Beams, columns and offsets
• Clear heights after slab drops
• Floor level differences between rooms and bathrooms
• Existing tile skirting and window ledges
• Niches, recesses and awkward corners
• Service shafts and access panels

This thoroughness protects your budget and gives our designers the confidence to propose bolder, more creative solutions because they trust the base drawings.`,

    benefitsTitle: "Benefits You Experience",
    benefitsDescription: `When you choose Space Them Upp for site measurement and interiors, you enjoy:

• Fewer last‑minute design changes and emergencies on site
• Smoother installation of kitchens, wardrobes and custom furniture
• More accurate cost estimates and BOQs (measured from actual drawings)
• Faster approvals from societies when plans look professional
• Clear communication with all vendors, reducing blame and confusion

Ultimately, you get peace of mind knowing that the design team is working with the real dimensions of your property, not assumptions.`,

    faqTitle: "FAQ – Site Measurement in Pune & Mumbai",
    faqs: [
      {
        question: "Do I need site measurement if the builder has already given floor plans?",
        answer: "Builder plans are a good starting point, but they rarely capture changes made during construction or small deviations on site. A fresh survey confirms what actually exists, which is critical before spending on interiors."
      },
      {
        question: "How long does a site survey take?",
        answer: "For a typical 2 or 3 BHK in Pune or Mumbai, site measurement usually takes two to four hours, depending on complexity and access. Larger villas and commercial spaces may require a full day or multiple visits."
      },
      {
        question: "Can I book only site measurement as a standalone service?",
        answer: "Yes. You can hire Space Them Upp just for professional measurement and “as‑built” drawings. These can be shared with other designers, contractors or modular suppliers if you choose."
      },
      {
        question: "When is the best time to schedule site measurement?",
        answer: "Ideally, as soon as civil possession is given and before you finalise interior layouts, furniture or major purchases. Early measurement helps you take correct decisions on wall changes and electrical planning."
      },
      {
        question: "Do you provide measurements for furniture delivery as well?",
        answer: "Our survey includes key door widths, corridor sizes, stair dimensions and lift details so you can check whether large furniture or appliances will easily reach your flat or office. This prevents awkward “it doesn’t fit” situations on delivery day."
      }
    ],

    ctaTitle: "Avoid Costly Mistakes",
    ctaText: "If you have just received keys to a new property or are planning a renovation in Pune or Mumbai, start with a professional site measurement. One careful visit today can save you weeks of rework and thousands of rupees later.",

    features: [
      "Laser precision accuracy up to 1mm",
      "Digital 'As-Built' CAD drawings",
      "Structural element mapping (Beams/Columns)",
      "Electrical & Plumbing point documentation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
  },
   {
    id: "space-planning",
    title: "Space Planning",
    icon: PencilRuler,
    shortDesc: "Optimizing layout for functionality and flow.",
    metaTitle: "Space Planning in Pune and Mumbai | Space Them Upp Interior Design Studio",
    metaDescription:
      "Space Them Upp offers professional space planning for homes and offices in Pune and Mumbai, maximising every square foot with smart layouts and clutter-free flow.",
    heroHeading: "Space Planning in Pune and Mumbai",
    heroSubHeading:
      "Every beautiful home or office starts with one thing: a smart layout. We help you make the most of every square foot without sacrificing comfort or style.",
    longDesc: `Space Them Upp is a 10-year-old interior design studio that believes every beautiful home or office starts with one thing: a smart layout. Our space planning service helps families and businesses across Pune and Mumbai make the most of every square foot, without sacrificing comfort or style.

Many city apartments in areas like Wakad, Tathawade, Baner, Kharadi or Andheri come with odd columns, narrow passages or wasted corners. A well-planned layout turns these problems into possibilities. Instead of squeezing furniture randomly, we study how you actually live and work, then design a flow that feels natural from the moment you enter.

We focus on balancing three things: movement, storage and aesthetics. You should be able to walk freely, find what you need easily and still enjoy a space that looks clean, open and luxurious. Whether it is a compact 2 BHK, a large villa, a startup office or a boutique store, our planning process adapts to your lifestyle and your city.`,
    processTitle: "Our Space Planning Process",
    processDescription: `Everything starts with the site. Our team visits your home or commercial property and measures every wall, opening and level with professional tools. We then understand your family size, work style, hosting habits and storage issues.

Based on this, we create zoning diagrams for public, semi-private and private areas. After that, multiple layout options are prepared using CAD tools, exploring furniture positions and circulation. You review these options with us, and we refine the chosen layout until everyone is confident. Only then do we move into 3D design, materials and execution.`,
    coverageTitle: "Homes and Spaces We Plan",
    coverageDescription: `Our space planning service covers:

• Newly purchased apartments and penthouses  
• Existing flats undergoing renovation  
• Independent bungalows and villas across multiple floors  
• Corporate offices, co-working spaces and startup studios  
• Retail showrooms, boutiques and experience centres  
• Cafés, restaurants and lounges

We blend function with your preferred style—minimalist, luxurious, contemporary, classic or nature-inspired—and also consider practical issues like visitor entry, service access and parking.`,
    philosophyTitle: "Design Philosophy Behind Our Layouts",
    philosophyDescription: `Space Them Upp is known for elegant, minimalist and luxury-oriented interiors. Our layouts avoid visual clutter and unnecessary partitions.

We use furniture placement, ceiling treatment and subtle level changes to define zones, keeping spaces open yet clearly separated. Nature plays a key role—we align seating, desks and beds to capture daylight, breeze and pleasant views, and we plan balcony/outdoor connections even in compact city homes.`,
    benefitsTitle: "Benefits of Professional Space Planning",
    benefitsDescription: `Investing in professional planning gives you:

• Better utilisation of carpet area  
• Smooth, obstacle-free movement  
• Clear separation between entertaining and private zones  
• Logical storage that reduces visual clutter  
• Strong base for lighting, electrical and furniture decisions  
• Higher perceived property value

For commercial clients, good planning improves workflows, reduces customer waiting time and strengthens brand image by highlighting key products or services.`,
    faqTitle: "FAQ – Space Planning in Pune & Mumbai",
    faqs: [
      {
        question: "Do I really need space planning if the builder has already given a layout?",
        answer:
          "Builder layouts are generic and rarely match how your family or business actually functions. A dedicated space plan customises room sizes, circulation and storage to your real needs and corrects inefficiencies before you spend on interiors.",
      },
      {
        question: "Can you do space planning as a separate service?",
        answer:
          "Yes. We can provide detailed planning drawings with furniture sizes and circulation clearances as a standalone service. You can execute them with your own contractor or continue with our turnkey service.",
      },
      {
        question: "How long does the process take?",
        answer:
          "For a typical 2 or 3 BHK in Pune or Mumbai, space planning takes about one to two weeks depending on revisions. Larger villas, offices and shops may take longer due to more rooms and specialised zones.",
      },
      {
        question: "Are vastu or cultural preferences considered?",
        answer:
          "Yes, where requested we incorporate vastu guidelines at the planning stage while balancing structural limits and practicality, so the layout feels both positive and workable.",
      },
      {
        question: "Do you offer on-site supervision after planning?",
        answer:
          "Yes. Space planning is the first step in our turnkey service. Once layouts are locked, we can handle design, 3D visuals, drawings and complete project management till handover.",
      },
    ],
    ctaTitle: "Start With a Smart Layout",
    ctaText:
      "If you are planning a new home or rethinking an existing space in Pune or Mumbai, start with a focused space planning session with Space Them Upp. A clear, well-considered layout will save you time, money and stress during construction.",
    features: [
      "Traffic flow analysis",
      "Furniture layout optimization",
      "Zoning for different activities",
      "Ergonomic assessment",
    ],
    imageUrl:
      "https://i.pinimg.com/736x/01/ad/49/01ad49cbce425c3ea01cd9e58eefc0a0.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3d-render",
    title: "3D Interior Renders",
    icon: Monitor,
    shortDesc: "Photorealistic 3D visualizations showing your space before execution.",
    metaTitle: "3D Interior Renders in Pune & Mumbai | Space Them Upp",
    metaDescription: "High-quality photorealistic 3D interior renders in Pune and Mumbai. Visualize your home or office design before work starts to avoid mistakes and save money.",
    heroHeading: "3D Interior Renders in Pune & Mumbai",
    heroSubHeading: "See your future home before a single brick is laid. Our photorealistic visuals remove the guesswork and let you walk through your design virtually.",
    
    longDesc: `Interior drawings and moodboards are helpful, but most people still struggle to imagine how their finished home or office will actually look. That is where high‑quality 3D renders from Space Them Upp make a huge difference. Our photorealistic visuals show your complete space before any work starts, so you know exactly what you are approving.

For clients across Pune, PCMC and Mumbai, 3D interior rendering has become an essential step in the design journey. Instead of guessing from flat plans, you can walk through your living room, kitchen, bedroom or office on screen and see colours, furniture, lighting and finishes just as they will appear in real life.

Why 3D renders matter for interiors:
Without 3D visualisation, many decisions are based on imagination and verbal explanation. Different people picture different things, which leads to misunderstandings and disappointment on site. A photorealistic 3D render removes this confusion. It becomes a common reference that designer, client and contractor can all trust.

3D visuals also save money. Changes made after tiling, carpentry or painting are much more expensive than adjustments made on a digital model. When you see how a wardrobe, false ceiling or colour combination looks in the render, you can fine‑tune it immediately, long before anyone lifts a tool on site.`,

    philosophyTitle: "What Our Service Includes",
    philosophyDescription: `1. Detailed 3D modelling
Using accurate site measurements and approved layouts, our team builds a full 3D model. Walls, doors, windows, beams and niches are recreated so that proportions feel natural and technically reliable.

2. Furniture, finishes and décor
We add furniture, wardrobes, kitchen modules and décor that match your style. Whether minimalist, luxurious or contemporary, the 3D model reflects your personality.

3. Materials, colours and lighting
We assign specific materials—marble, veneer, paint, fabric—and simulate realistic lighting (ceiling fixtures, lamps, daylight) to show how the palette looks morning, evening and night.

4. Multiple views and angles
You receive images from several viewpoints: sitting on the sofa, standing at the kitchen counter, or walking down a corridor. 360‑degree views are available on request.

5. Easy revisions
If you want to explore alternatives—darker floors, lighter walls—we update the model. Digital changes are quick and cost‑effective compared to site changes.`,

    processTitle: "Our Design & Rendering Workflow",
    processDescription: `Brief and references
We discuss requirements, budget, inspiration images and brand guidelines. We also consider local context like light direction, views and climate.

Layout and site data
The approved space plan and site measurements form the technical base. This ensures that the 3D render is grounded in reality and can be executed without surprises.

Concept look and feel
Our designers propose an overall mood (luxury minimal, warm contemporary, etc.) using material boards. Once the mood is approved, detailed modelling begins.

Draft renders
We share first‑round draft images focusing on structure and basic furniture. This is the stage to confirm proportions, circulation and general arrangement.

Final photorealistic renders
After feedback, we refine materials, lighting and accessories to produce high‑quality images suitable for approvals and even marketing/presentations.

Handover to execution team
The final renders become a strong visual guide for our turnkey project management team and contractors on site, reducing ambiguity during construction.`,

    coverageTitle: "Where We Use 3D Renders",
    coverageDescription: `Space Them Upp creates 3D visuals for a wide range of spaces:

• Living rooms, dining spaces and open‑plan family areas
• Bedrooms, kids’ rooms, guest rooms and master suites
• Modular kitchens, utility rooms and breakfast counters
• Home theatres, study rooms, pooja spaces and home offices
• Corporate offices, cabins, conference rooms and reception areas
• Retail stores, clinics, restaurants and hospitality spaces

In each category, the render is tailored to the target user—highlighting playful colours for a kids' room or sophistication for an executive office.`,

    benefitsTitle: "Benefits for Clients",
    benefitsDescription: `Investing in professional 3D renders gives you:

• Clear visualisation: See your exact home before execution.
• Faster decision‑making: Compare designs or colour palettes visually.
• Reduced mistakes: Spot issues with proportions or colors early.
• Better communication: Family and partners understand the proposal instantly.
• Budget control: Finalise materials on screen to avoid buying finishes you regret.

For NRI clients or busy professionals not in Pune/Mumbai, 3D renders combined with online calls make collaboration simple and transparent.`,

    faqTitle: "FAQ – 3D Interior Renders",
    faqs: [
      {
        question: "Do I really need 3D renders if I already have 2D drawings?",
        answer: "Floor plans show size, but not mood or depth. Renders help you see the space from a human eye level, making it much easier to understand than flat drawings."
      },
      {
        question: "How many revisions are included?",
        answer: "We usually include a reasonable number of changes related to colours, materials and minor furniture tweaks. Major layout changes after modelling may require extra time, but we ensure you are comfortable with the design."
      },
      {
        question: "Can you create 3D renders for only one room?",
        answer: "Yes. Many clients start with a key space like a living room or modular kitchen. Once they see the value and clarity a 3D render brings, they often extend the service to other rooms."
      },
      {
        question: "Will the finished site look the same as the render?",
        answer: "Yes, because we use accurate measurements and real materials available in the Indian market. Minor variations due to lighting may occur, but the overall feel remains true to the visual."
      },
      {
        question: "Is this service available for outstation or NRI projects?",
        answer: "Yes. As long as we have reliable site measurements, we can design for properties anywhere. Reviews happen via video calls, making it perfect for NRI clients."
      }
    ],

    ctaTitle: "Visualize Before You Build",
    ctaText: "If you are planning interiors for a new flat, villa, or office in Pune or Mumbai, do not leave the final look to imagination. A set of professional 3D renders will show you exactly how your space will feel before you commit to execution.",

    features: [
      "4K Photorealistic Visuals",
      "Day & Night Lighting Simulation",
      "Texture & Material Mapping",
      "Virtual Walkthroughs",
      "Furniture & Decor Placement"
    ],
    imageUrl: "https://i.pinimg.com/736x/9f/5d/84/9f5d845b5bb3f11faab810c318e00f88.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "honest-advice",
    title: "Honest Advice",
    icon: Scale,
    shortDesc: "Unbiased, professional consultation to help you make informed decisions.",
    metaTitle: "Honest Interior Design Advice in Pune & Mumbai | Space Them Upp",
    metaDescription: "We provide honest, transparent interior design advice in Pune and Mumbai. We help you prioritize budgets, choose durable materials, and avoid costly mistakes.",
    heroHeading: "Honest Advice That Truly Helps",
    heroSubHeading: "Space Them Upp believes the most valuable thing a designer can offer is not a product catalogue, but advice that protects your money, time, and peace of mind.",
    
    longDesc: `Beautiful interiors start with beautiful conversations. For clients across Pune, PCMC and Mumbai, “Honest Advice” is not a slogan—it is a dedicated service built into every consultation and project.

In a world full of trends and online inspiration, it is easy to feel confused. Every reel suggests a new style, every store claims a “must‑have” product. Our role is to cut through this noise and tell you what will actually work for your space, your lifestyle and your budget, even if that sometimes means saying “no” to certain ideas or purchases.

What Honest Advice means to us:
It is about transparency and responsibility. It means being upfront about what is structurally possible, explaining the pros and cons of options instead of pushing the costliest one, and respecting your budget.

For a 10‑year‑old studio that relies on repeat work and referrals in Pune and Mumbai, long‑term trust is more important to us than short‑term profit.`,

    philosophyTitle: "Where Our Advice Helps Most",
    philosophyDescription: `1. Budget planning and priorities
Instead of designing blindly, we help you prioritise. It often makes sense to invest in good flooring and kitchens first, while décor can wait. We guide you on realistic costs so you don't feel pressured at showrooms.

2. Layout and structural decisions
Many clients want to move walls or bathrooms. We clearly explain which ideas are feasible and which pose risks to waterproofing or society rules. Your home’s safety comes first.

3. Product and material choices
Not every trending product suits Indian conditions. We give straightforward feedback: will that glossy finish show fingerprints? Will that fabric survive pets? We help you make informed decisions.

4. Dealing with multiple quotes
We help decode conflicting advice from contractors. We compare quotes line by line, pointing out what is missing or duplicated, helping you see the full picture before committing.`,

    processTitle: "Our Consultation Process",
    processDescription: `Listening, not selling
Every project begins with a detailed consultation. We focus on understanding your routine, pain points, and constraints instead of pushing pre‑set packages.

Reality check with possibilities
We combine your wishlist with site realities (carpet area, light, ventilation). We openly share what is achievable within your budget. This “reality check” saves you from future disappointment.

Option mapping
Rather than one “take‑it‑or‑leave‑it” solution, we show options at different investment levels (e.g., Essential vs. Premium Kitchens) so you see exactly what you gain for every extra rupee.

Transparent communication
If a preferred tile is out of stock or a custom piece is delayed, we inform you early and propose alternatives, explaining all trade‑offs openly.

Post‑project guidance
Even after handover, we remain available to answer questions on maintenance. If a new trend appears online, you can ask us if it suits your home before experimenting blindly.`,

    coverageTitle: "Real Examples in Practice",
    coverageDescription: `• Baner: Advised a client to keep the builder’s good‑quality bathroom tiles and upgrade fittings instead, saving budget for a better kitchen.

• Tathawade: Suggested easy‑clean laminates over delicate veneer in children’s rooms, using richer finishes only in the master bedroom.

• Mumbai Office: Guided a client away from complex glass partitions that would increase noise, recommending acoustic solutions within the same budget.

In each case, the easier option was to increase the bill. Instead, we recommended what genuinely served the client best.`,

    benefitsTitle: "Why Clients Trust Us",
    benefitsDescription: `• Stronger trust: You know suggestions are based on your needs, not hidden commissions.
• Better value: Money is spent where it creates maximum long‑term impact.
• Fewer regrets: Conversations about maintenance reduce “I wish someone told me earlier” moments.
• Smoother relationships: Clear expectations about scope and pricing avoid conflicts later.

This approach is especially reassuring for first‑time homeowners, NRIs and busy professionals.`,

    faqTitle: "FAQ – Honest Advice",
    faqs: [
      {
        question: "Will you tell me if my design ideas are bad?",
        answer: "Yes. If an idea compromises safety, flow, or budget without adding value, we will gently explain why it might not work and offer better alternatives."
      },
      {
        question: "Do you only recommend expensive brands?",
        answer: "No. We recommend materials based on your budget and usage. We often suggest cost-effective alternatives (like high-quality laminates) where they make sense."
      },
      {
        question: "Can you help me compare quotes from other contractors?",
        answer: "Yes. Part of our honest advice service is helping you decode quotes to ensure you aren't being overcharged or promised unrealistic deliverables."
      },
      {
        question: "Do you force full renovations?",
        answer: "Never. If your builder has provided good flooring or washrooms, we will advise you to keep them and focus your budget on areas that actually need upgrading."
      }
    ],

    ctaTitle: "Get The Truth About Your Space",
    ctaText: "Confused by trends, quotes, and conflicting advice? Book a consultation with Space Them Upp. We promise to tell you what you need to hear, not just what you want to hear.",

    features: [
      "Budget Optimization & Prioritization",
      "Material Durability Checks",
      "Vendor Quote Analysis",
      "Feasibility Assessment",
      "Long-term Maintenance Guide"
    ],
    imageUrl: "https://img.freepik.com/premium-photo/group-indian-business-people-standing-line-with-their-arms-crossed_979520-66261.jpg",
  },
  {
    id: "transparent-communication",
    title: "Transparent Communication",
    icon: MessageCircle,
    shortDesc: "Clear updates on design, costs, and site progress.",
    metaTitle: "Transparent Communication for Interiors in Pune & Mumbai | Space Them Upp",
    metaDescription: "Space Them Upp ensures transparent communication for interior projects in Pune and Mumbai. Get clear updates on design, costs, and timelines from start to finish.",
    heroHeading: "Transparent Communication",
    heroSubHeading: "Interior work involves many moving parts. We keep you informed with clear updates on design, costs, and progress, so you never feel left out.",
    
    longDesc: `Transparent communication is at the heart of how Space Them Upp works. From the first discussion to final handover, you receive clear updates on design decisions, costs, timelines and site progress so you always know what is happening and why at each stage of your project in Pune or Mumbai.

Interior work involves many moving parts—vendors, materials, drawings and on‑site teams. When information is unclear, it leads to stress, misunderstandings and delays. Consistent, honest communication keeps everyone aligned, prevents surprises and builds the trust needed for a smooth design and execution journey.

What Transparent Communication means to us:
For Space Them Upp, transparent communication is more than sending occasional photos. It means:
• Explaining the design process and timelines in simple language.
• Sharing realistic budgets and what is included or excluded.
• Discussing pros, cons and reasons behind key design choices.
• Being upfront about challenges, delays or changes instead of hiding them.

This approach ensures you stay in control, make informed decisions and never feel “left out” of your own project.`,

    philosophyTitle: "How Communication Flows",
    philosophyDescription: `1. At the start – Clarity on scope
During initial meetings, we listen to your needs and discuss budget. You get a clear outline of project phases, estimated duration, and what decisions you need to make by when.

2. During design – Decisions explained
As layouts and 3D views are developed, recommendations are explained with reasoning—functionality, cost, and maintenance. We encourage questions to create a two‑way conversation.

3. During execution – Regular updates
Once work starts on site, you receive progress updates through site meetings, video calls, and photo/video updates on key milestones.`,

    processTitle: "Cost & Timeline Transparency",
    processDescription: `Clear estimates and change tracking
Before execution, a detailed estimate is shared. Any changes you request later—extra storage, upgraded finishes—are documented with updated cost and timeline impact before work proceeds.

Realistic timelines, not empty promises
Timelines are presented as phased schedules with buffers. If an unavoidable delay occurs—such as a vendor backlog—it is communicated early with revised dates and mitigation plans.`,

    coverageTitle: "Tools We Use",
    coverageDescription: `To keep communication smooth, we use:

• WhatsApp or email for day‑to‑day updates and photos.
• Scheduled calls or meetings at key milestones (post‑layout, pre‑start, snag stage).
• Shared documents for decisions, changes and pending approvals.

These tools create a clear record of what was discussed and agreed, which is essential for complex interior projects.`,

    benefitsTitle: "How It Helps You",
    benefitsDescription: `• Stronger trust: You know where your money and time are going.
• Faster decisions: Clear pros and cons allow you to choose quickly.
• Fewer surprises: Early notice of risks or extra costs means no shocks.
• Better collaboration: You feel like part of the team, not an outsider.

For clients in busy hubs like Baner, Wakad, and Thane, this proactive communication makes renovation far less stressful.`,

    faqTitle: "FAQ – Communication",
    faqs: [
      {
        question: "How often will I get updates?",
        answer: "Frequency depends on the phase—more often during active civil/carpentry stages. A basic communication rhythm is agreed at the start."
      },
      {
        question: "What if I change my mind during the project?",
        answer: "Changes are common. Each request is discussed with its impact on cost and timelines, and captured formally before implementation."
      },
      {
        question: "Will you tell me honestly if something is not possible?",
        answer: "Yes. If a request conflicts with safety, rules, or budget, we explain the reasons clearly along with workable alternatives."
      },
      {
        question: "How do you handle disagreements?",
        answer: "Concerns are best addressed early. We discuss them directly, referencing drawings and contracts to find fair, practical solutions."
      }
    ],

    ctaTitle: "Stay in Control",
    ctaText: "Want interiors handled with clear, proactive, and honest communication? Space Them Upp ensures you feel informed, involved, and confident from day one to handover.",

    features: [
      "Weekly Photo/Video Updates",
      "Transparent Cost Tracking",
      "Scheduled Site Meetings",
      "Clear Timeline Buffers",
      "Proactive Change Management"
    ],
    imageUrl: "https://i.pinimg.com/736x/b6/e6/62/b6e6627b23ad8aa1c4e17f0841f40519.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "experienced-team",
    title: "Experienced Team",
    icon: Users,
    shortDesc: "Seasoned designers and skilled craftsmen ensuring smooth execution.",
    metaTitle: "Experienced Interior Design Team in Pune & Mumbai | Space Them Upp",
    metaDescription: "Meet the experienced interior design team at Space Them Upp. Our designers, project managers, and craftsmen in Pune & Mumbai ensure smooth project execution.",
    heroHeading: "Experienced Interior Team",
    heroSubHeading: "Every great project is powered by a strong team. We combine creative design with practical on-site experience to deliver smooth, high-quality interiors.",
    
    longDesc: `Every great interior project is powered by a strong team. Space Them Upp is backed by a seasoned group of designers, project managers, site supervisors and skilled craftsmen who have spent years working on residential and commercial interiors across Pune, PCMC and Mumbai. Their combined experience means your project benefits from creative ideas, technical know‑how and practical on‑site problem‑solving, not just good drawings.

Apartments in Baner, Wakad, Tathawade, Hinjawadi, Kharadi and busy Mumbai hubs like Andheri, Powai and Thane each come with their own builder standards, society rules and practical challenges. An experienced team recognises patterns, anticipates issues and plans around them, which directly translates into smoother execution, reliable quality and timely completion for you.

Why experience on site really matters:
Real apartments and offices rarely match brochure images exactly. Beams appear where you don’t expect them, walls are not perfectly straight, and site constraints change how work can happen. A seasoned team spots such issues early during measurement, suggests practical alternatives, and knows how materials behave over time.`,

    philosophyTitle: "Who Makes Up Our Team",
    philosophyDescription: `1. Lead and Senior Designers
They handle concept, layouts, and material selection, ensuring spaces are beautiful and functional. They coordinate closely with site teams so design intent is preserved.

2. Project Managers and Supervisors
They plan work sequences, coordinate contractors, and handle day‑to‑day decisions. Their presence ensures drawings are understood correctly and quality standards are followed.

3. Skilled Craftsmen and Vendors
Experienced carpenters, electricians, plumbers, and painters convert ideas into reality. Working together builds a shared understanding of finish, safety and detailing.`,

    processTitle: "How We Work Together",
    processDescription: `Integrated design‑plus‑execution
Designers, PMs, and craftsmen work as one unit. Layout decisions consider feasibility, services, and hardware from the start, avoiding surprises later.

Regular coordination meetings
Internal check‑ins are scheduled around key milestones—post‑layout, before civil work, before carpentry. These syncs ensure everyone works from the latest drawings.

Quality and timeline focus
Experienced supervisors know how long activities take and how to sequence tasks to avoid clashes. This approach supports both reliable workmanship and timely handover.`,

    coverageTitle: "Why Experience Matters",
    coverageDescription: `Real sites differ from drawings. A seasoned team:

• Spots structural issues (beams, uneven walls) early.
• Suggests practical alternatives without compromising aesthetics.
• Knows how materials behave in the local climate.
• Anticipates society rules and constraints in Pune/Mumbai.

This blend of design and on‑site experience reduces rework and prevents avoidable damage.`,

    benefitsTitle: "Benefits for You",
    benefitsDescription: `• Reliable quality: Years of repeated detailing mean a polished final finish.
• Timely completion: Structured planning significantly reduces delays.
• Better solutions: We propose sensible alternatives when site conditions change.
• Less stress: You don't have to micro‑manage; we handle the coordination.

This is especially valuable for NRIs and busy professionals who cannot visit the site frequently.`,

    faqTitle: "FAQ – Our Team",
    faqs: [
      {
        question: "How many years of experience does the team bring?",
        answer: "Space Them Upp has been active for over a decade. Our core designers and supervisors carry multiple years of hands‑on residential and commercial experience."
      },
      {
        question: "Will I have a single point of contact?",
        answer: "Yes. A dedicated designer or project manager remains your primary contact, simplifying communication while tapping into the expertise of our specialists."
      },
      {
        question: "Do you handle both design and on‑site work?",
        answer: "Yes. We specialise in end‑to‑end execution, allowing the same experienced team to manage your project from concept and 3D till final installation."
      },
      {
        question: "Can you manage complex or phased projects?",
        answer: "Yes. We are equipped to handle phased execution and tight possession timelines commonly seen in Pune and Mumbai developments."
      }
    ],

    ctaTitle: "Work With Experts",
    ctaText: "Looking for interiors handled by a team that understands design, on‑site realities and deadlines? Share your requirements with Space Them Upp’s experienced team.",

    features: [
      "Senior Interior Designers",
      "Dedicated Project Managers",
      "Skilled Site Supervisors",
      "Vetted Craftsmen",
      "10+ Years Experience"
    ],
    imageUrl: "https://i.pinimg.com/1200x/6b/e0/bf/6be0bf4f1a4a5c8ad3685b00e2bc4c24.jpg",
  },
  {
    id: "project-management",
    title: "Project Management",
    icon: ClipboardList,
    shortDesc: "End-to-end supervision of timelines, vendors, and budget.",
    metaTitle: "Interior Project Management in Pune & Mumbai | Space Them Upp",
    metaDescription: "Professional interior project management in Pune and Mumbai. We coordinate contractors, track budgets, and ensure on-time delivery for homes and offices.",
    heroHeading: "Interior Project Management",
    heroSubHeading: "Interior design involves hundreds of decisions. We coordinate vendors, timelines, and quality checks so you can enjoy the result without the stress.",
    
    longDesc: `Interior work looks exciting on Instagram, but in real life it involves dozens of people, hundreds of decisions and strict timelines. Without strong project management, even a beautiful design can turn into a stressful experience. Space Them Upp offers dedicated interior project management in Pune and Mumbai so your home or commercial space is delivered smoothly, on time and within the agreed budget.

For more than a decade, our team has handled turnkey interiors for apartments, bungalows, offices and retail spaces. Clients choose us not only for design, but because they want one reliable team to coordinate contractors, vendors, deliveries and quality checks from start to finish.

Why interior project management matters:
An interior project is like a small construction site. Carpentry, electrical, plumbing, civil work, painting, ceilings, flooring, glass, metal and soft furnishings all have to happen in the right order. If one task slips, everything else is delayed. A dedicated project management team keeps all these moving pieces aligned.

Good project management saves you:
• Time – by planning schedules and avoiding unnecessary back‑and‑forth.
• Money – by tracking costs, preventing rework and catching mistakes early.
• Stress – by giving you one point of contact instead of chasing multiple vendors.

In fast‑growing areas like Baner, Wakad, Tathawade, Hinjawadi, Kharadi, Andheri, Powai or Thane, many clients are busy professionals or NRIs who cannot be on site every day. Our job is to represent you on site and protect your interests.`,

    philosophyTitle: "What Our Service Includes",
    philosophyDescription: `1. Clear scope and detailed planning
We define the full scope in writing: design deliverables, materials, civil changes, and furniture. A master schedule becomes the roadmap everyone follows.

2. Budgeting and cost control
We prepare itemised BOQs. As work progresses, we track purchases and labour bills, flagging any potential overruns early so decisions can be made calmly.

3. Vendor and contractor coordination
From carpenters to false ceiling and glass vendors, we coordinate all trades. We ensure each team knows when to start preventing clashes and idle time.

4. Material procurement and logistics
We source materials aligned with the design and budget. Orders are sequenced so items arrive when needed—critical in city projects where storage is limited.

5. Site supervision and quality checks
Regular site visits check workmanship against drawings. Any deviation is flagged immediately. This continuous monitoring reduces the risk of discovering major issues at the end.

6. Final inspection and handover
Towards completion, we prepare a snag list (punch list) noting all minor issues—touch‑ups, alignment checks—and close them before official handover.`,

    processTitle: "Our Step‑by‑Step Workflow",
    processDescription: `Kick‑off and documentation
After design approval, the project manager consolidates all drawings—floor plans, ceilings, electrical, plumbing—into a single, organised package. This becomes the official reference for everyone on site.

Timeline and sequencing
Tasks are arranged in logical order: demolition, civil work, electrical, false ceiling, flooring, carpentry, painting, and styling. Dependencies (e.g., ceiling before painting) are clearly mapped.

Kick‑off meeting with contractors
A start‑of‑project meeting is held with all key contractors to walk through scope, timelines, safety guidelines and payment terms. This alignment greatly reduces confusion later.

Ongoing supervision and resolution
During execution, we visit the site at key milestones. Issues such as site constraints, product delays or unforeseen structural conditions are analysed and solved while keeping design intent in mind.

Testing, cleaning and styling
Once main work is complete, we test lights, switches, hardware and plumbing. After corrections, the space is deep cleaned and styled with loose furniture and décor, ready for handover.`,

    coverageTitle: "Projects We Manage",
    coverageDescription: `Whether it is a 2 BHK in Tathawade or a premium office in BKC, we follow the same structured process for:

• New apartments and penthouses in Pune, PCMC, Mumbai and Navi Mumbai
• Renovation of older flats and bungalows requiring civil modifications
• Corporate offices, co‑working spaces and studios
• Clinics, consulting rooms and boutique retail spaces
• Cafés, restaurants and hospitality projects`,

    benefitsTitle: "Benefits for You",
    benefitsDescription: `• Single point of contact: You don't coordinate with ten vendors; we do it.
• Predictable timelines: A structured schedule reduces unwanted delays.
• Controlled budget: Transparent estimates and variation tracking keep spending in check.
• Better quality: Regular checks and clear standards improve workmanship.
• Less stress: You focus on your work/family while we handle site decisions.

For NRIs and out‑of‑station owners, this is especially valuable—your Pune or Mumbai property gets finished to high standards even when you are not physically present.`,

    faqTitle: "FAQ – Project Management",
    faqs: [
      {
        question: "Do I have to use your contractors?",
        answer: "In most turnkey projects we work with our trusted execution partners, but we can also coordinate with your preferred contractors as long as responsibilities and timelines are clearly agreed upon."
      },
      {
        question: "How is project management different from design?",
        answer: "Design decides how the space looks (the recipe). Project management ensures it is executed correctly on site (the cooking)—coordinating people, time, materials and quality."
      },
      {
        question: "Will having a project manager increase my costs?",
        answer: "The fee usually pays for itself by reducing mistakes, negotiating better with vendors, avoiding rework and keeping the project on schedule. The hidden cost of 'no management' is often higher."
      },
      {
        question: "Can I hire you only for project management?",
        answer: "Our core strength is end‑to‑end design plus execution, but for select projects, we can offer project management on top of external designs after reviewing the scope."
      },
      {
        question: "How long do typical projects take?",
        answer: "A standard 2–3 BHK turnkey interior may take 8–14 weeks after design approval. Larger homes and commercial spaces take longer. We share a detailed schedule before starting."
      }
    ],

    ctaTitle: "Stress-Free Execution",
    ctaText: "If you are planning interiors for a new flat, bungalow, or office in Pune or Mumbai and want the work handled professionally from concept to handover, talk to Space Them Upp about our interior project management service.",

    features: [
      "Timeline & Schedule Tracking",
      "Vendor & Contractor Coordination",
      "Budget Monitoring & Control",
      "Quality Assurance Checks",
      "Hassle-free Handover"
    ],
    imageUrl: "https://i.pinimg.com/1200x/6c/01/89/6c0189669ebc0d4f2bf31d410383e1cf.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "furniture",
    title: "Furniture",
    icon: Armchair,
    shortDesc: "Custom-made furniture designed around your lifestyle and layout.",
    metaTitle: "Furniture Design & Custom Built‑ins in Pune & Mumbai | Space Them Upp",
    metaDescription: "Custom furniture design for homes and offices in Pune and Mumbai. We create wardrobes, beds, sofas, and workstations that maximize storage and comfort.",
    heroHeading: "Furniture Design & Custom Built‑ins",
    heroSubHeading: "Furniture is what you touch every day. We create pieces that fit your layout, reflect your style, and stay comfortable for years.",
    
    longDesc: `Furniture is what you touch and use every single day. At Space Them Upp, custom and curated furniture is designed around your lifestyle, not the other way round. For homes and offices across Pune, PCMC and Mumbai, we create wardrobes, beds, sofas, storage units and workstations that fit your layout, reflect your style and stay comfortable for years.

Ready‑made pieces rarely match real apartment dimensions. They leave awkward gaps, block doors or waste valuable corners, especially in compact flats around Baner, Wakad, Tathawade, Hinjawadi, Kharadi, Andheri or Thane. Custom furniture uses every inch wisely while keeping the room open and airy.

Why custom furniture matters:
Good furniture is more than a box with shelves. It must support daily routines, hide clutter and add to the overall design language of the home. Built‑in and well‑planned loose furniture:
• Maximises storage without making rooms feel cramped.
• Follows ergonomic principles so sitting, sleeping and working feel natural.
• Aligns with electrical points, windows and circulation paths.
• Ages better because materials and hardware are chosen for your specific use.

In modern city apartments, this level of planning is the difference between a home that always feels messy and one that stays organised with minimal effort.`,

    philosophyTitle: "What Our Service Includes",
    philosophyDescription: `1. Furniture audit and lifestyle study
We study how you use your current furniture—what works, what overflows, and what is never used. This ensures new pieces solve real problems.

2. Detailed measurement & integration
We design furniture that fits your actual walls, beams and niches. Built‑ins are wrapped around columns or into dead corners so no space is wasted.

3. Custom design and 3D visuals
Each wardrobe, TV unit, or study table is designed in CAD and shown in 3D so you can understand proportions and internal layouts before fabrication.

4. Material and hardware selection
We guide you through plywood, laminates, veneer, acrylic, and glass options. We recommend branded hardware (Hettich/Hafele/Blum) for smooth operation.

5. Ergonomics and comfort
Seat heights, back angles, and table depths follow ergonomic standards. This is especially important for study tables and home offices to prevent long‑term discomfort.

6. Fabric and styling
We help select upholstery fabrics that match your theme—easy‑clean options for homes with kids/pets, or richer textures for formal rooms.`,

    processTitle: "Our Design Workflow",
    processDescription: `Brief and inventory
We list items to keep or replace and define functional goals: clothes storage needs, guest hosting frequency, and work‑from‑home schedules.

Concept and zoning
Furniture is placed on the space plan to respect circulation. Wardrobes don't block windows, beds sit in comfortable orientations, and study tables face calm corners.

Design and review
We prepare detailed drawings showing depths, heights and internal layouts. We explain how each element works and offer alternatives if needed.

Finalisation and production
Once approved, detailed drawings go to our trusted carpentry teams or modular manufacturers. Materials are cross‑checked before production begins.

Installation and quality checks
We supervise installation to ensure alignment and smooth hardware operation. Gaps are sealed, shutters adjusted, and soft‑close features tested.`,

    coverageTitle: "Types of Furniture We Create",
    coverageDescription: `We combine the strengths of built-in and loose furniture:

• Built‑in wardrobes and walk‑in closets (floor to ceiling)
• Beds with hydraulic storage or drawers
• TV units with concealed wiring
• Crockery units and bar counters
• Study tables and ergonomic home office desks
• Entry consoles and shoe units
• Loose sofas, accent chairs, and coffee tables

Our Balanced Approach:
We use **Built‑in furniture** for maximum storage (wardrobes, kitchens) to optimise tight spaces. We use **Loose furniture** (sofas, chairs) where flexibility matters, keeping the room light and easy to update.`,

    benefitsTitle: "Benefits You Feel Every Day",
    benefitsDescription: `• Clutter‑free rooms: Dedicated storage reduces visible mess and makes cleaning easier.
• Better use of space: Corners and awkward walls are turned into useful storage.
• Comfort and health: Ergonomic design reduces strain during long work hours.
• Cohesive look: Furniture is designed with lights and colours, so the room feels intentional.
• Long‑term value: Quality materials mean fewer repairs over the years.`,

    faqTitle: "FAQ – Furniture Design",
    faqs: [
      {
        question: "Can you design only furniture without full interiors?",
        answer: "Yes. Many clients approach us specifically for custom wardrobes, TV units or kitchens. We can work within existing rooms as long as accurate measurements are available."
      },
      {
        question: "Is custom furniture more expensive than ready‑made?",
        answer: "It can cost more upfront, but it gives better storage, lasts longer and fits perfectly. Over time, it is more economical than replacing ill‑fitting or low‑quality pieces."
      },
      {
        question: "Do you use modular systems or on‑site carpentry?",
        answer: "We use both. Modular systems are great for speed and finish consistency; on‑site carpentry is ideal for complex shapes. We often mix the two for best results."
      },
      {
        question: "What materials do you recommend?",
        answer: "We prefer good‑quality plywood with laminates or veneer, moisture‑resistant boards in wet areas, and dependable branded hardware."
      }
    ],

    ctaTitle: "Fit Your Life Perfectly",
    ctaText: "If you are setting up a new home or office in Pune or Mumbai, or want to replace mismatched pieces with smart, space‑saving solutions, talk to Space Them Upp about custom furniture design.",

    features: [
      "Custom Wardrobes & Walk-ins",
      "Ergonomic Home Office Setup",
      "Bespoke TV & Entertainment Units",
      "Modular & Carpentry Hybrid",
      "Premium Material Selection"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "civil-work",
    title: "Civil Work",
    icon: HardHat,
    shortDesc: "Structural changes, tiling, and masonry handled with safety and precision.",
    metaTitle: "Civil Work for Interiors in Pune & Mumbai | Space Them Upp",
    metaDescription: "Professional civil work services for interiors in Pune and Mumbai. We handle wall changes, flooring, tiling, and waterproofing safely while adhering to society norms.",
    heroHeading: "Civil Work for Interiors",
    heroSubHeading: "Civil work is the backbone of renovation. We handle safe wall changes, flooring, and plastering to prepare your home for beautiful, long-lasting interiors.",
    
    longDesc: `Civil work is the backbone of any renovation. At Space Them Upp, interior civil work covers safe wall changes, new flooring, tiling, plastering and small structural adjustments that prepare your flat, bungalow or office for beautiful, long‑lasting interiors. This service is available across Pune, PCMC and Mumbai, coordinated with society and municipal norms so your project stays both legal and safe.

Many problems that show up later—cracked tiles, damp corners, uneven floors, or notices from societies for illegal alterations—begin in the civil stage. Working with an experienced design‑plus‑civil team reduces these risks. Civil work is not just breaking and making; it is controlled surgery on your building that must respect structure, waterproofing and approved plans.

What “interior civil work” includes:
For residential and commercial projects, our civil scope typically covers:
• Removing or building non‑load‑bearing walls and partitions.
• Creating door openings, niches and windows where permissible.
• Floor levelling, new tile or stone flooring and skirting.
• Bathroom and kitchen wall tiling and waterproofing touch‑ups.
• Basic plaster repair and surface preparation before painting.

Larger structural changes—such as touching beams, columns or load‑bearing walls—are taken up only after structural engineer and authority approval, especially in Mumbai under BMC rules.`,

    philosophyTitle: "Safety & Society Approvals",
    philosophyDescription: `In Maharashtra, housing societies and municipal bodies closely watch internal renovations. Many societies now require written intimation, NOCs, and even structural audit reports.

How we work within these frameworks:
• Consulting licensed structural engineers when any wall change is proposed.
• Advising which changes fall under “tenantable repairs” (like tile change) vs structural alterations.
• Helping with basic drawings your architect can submit for approvals.
• Respecting society timings, noise rules and lift usage norms during execution.

This responsible approach keeps you safe from penalties, stop‑work notices or future resale issues linked to unauthorised modifications.`,

    processTitle: "Our Civil Work Process",
    processDescription: `Site study and feasibility
We review builder drawings and check existing columns, beams, and shafts. We evaluate if your layout goals (like opening a kitchen) are structurally and legally feasible.

Detailed scope and sequencing
We prepare a written scope: which walls go, where floor levels change, and how plumbing chases will run. This is sequenced so civil, electrical, and plumbing happen in the right order.

Demolition with protection
We protect existing lifts and corridors. Rubble is bagged and moved as per society rules. We take special care not to damage waterproofing layers when removing old tiles.

New construction and levelling
New partitions are built plumb. Floors are levelled to correct slopes, keeping bathroom and balcony slopes directed towards drains.

Tiling and flooring
We follow professional tiling practices—clean substrate, correct adhesive, and spacers—to achieve durable, even floors. Special care is taken in wet areas so waterproofing remains intact.

Checks before handover
Before carpentry and painting start, we run quality checks on levels, slopes, and door frames. Any hollowness or defects are corrected immediately.`,

    coverageTitle: "Common Civil Changes We Handle",
    coverageDescription: `• Converting closed kitchens into open or semi‑open layouts.
• Merging or splitting bedrooms with non‑structural partitions.
• Creating walk‑in wardrobes or storage recesses in thick walls.
• Upgrading bathroom layouts with new tile and plumbing lines.
• Re‑tiling balconies and terraces with proper slope.
• Replacing uneven flooring with new vitrified tiles or stone.

Every proposal is checked against building age and structural stability so that aesthetics never come at the cost of safety.`,

    benefitsTitle: "Why Integrate Design & Civil?",
    benefitsDescription: `When civil work and design are handled separately, issues arise: walls broken in the wrong place, electrical chases cut after flooring is done, or false ceiling levels clashing with beams.

Space Them Upp integrates civil work with space planning:
• Precise alignment: Every chisel stroke supports the final furniture layout.
• Reduced rework: No breaking finished surfaces for missed points.
• Better workmanship: Our teams follow method statements for levelling and curing.
• Cleaner sites: We use protection sheets and manage debris responsibly.`,

    faqTitle: "FAQ – Civil Work",
    faqs: [
      {
        question: "Can you break any wall inside my flat?",
        answer: "No. We only remove partitions confirmed as non‑load‑bearing. Major structural changes require a structural engineer’s recommendation and society approvals."
      },
      {
        question: "Is it necessary to change old flooring?",
        answer: "Not always. If existing flooring is good, we can retain it. However, if floors are uneven or damaged, we recommend full replacement with proper levelling."
      },
      {
        question: "How long does civil work take?",
        answer: "For a 2–3 BHK, civil work usually takes 2 to 6 weeks depending on the scope (number of bathrooms, flooring area) before carpentry starts."
      },
      {
        question: "Will civil work create dust and noise?",
        answer: "Yes, but we minimise it through controlled breaking, debris management, and strictly adhering to society time windows to keep neighbours comfortable."
      },
      {
        question: "Can you handle only civil work?",
        answer: "Our primary focus is design‑plus‑execution. For select projects, we can take on civil work linked to a clear design brief if approvals are resolved."
      }
    ],

    ctaTitle: "Build a Strong Foundation",
    ctaText: "Planning a renovation in Pune or Mumbai? Get your civil work handled by a team that understands both design and safety. We create a compliant base so every tile and wall supports your dream interior.",

    features: [
      "Wall Demolition & Erection",
      "Flooring & Tiling Experts",
      "Bathroom Waterproofing",
      "Plastering & Levelling",
      "Structural Feasibility Checks"
    ],
    imageUrl: "https://i.pinimg.com/736x/cc/ae/bc/ccaebc7760c1bd641849fdd337405e8e.jpg",
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    icon: Utensils,
    shortDesc: "Sleek, ergonomic kitchens designed for Indian cooking.",
    metaTitle: "Modular Kitchen Design in Pune & Mumbai | Space Them Upp",
    metaDescription: "Ergonomic modular kitchen designs in Pune and Mumbai. We create storage-rich, durable kitchens tailored to Indian cooking styles and compact apartment layouts.",
    heroHeading: "Modular Kitchen Design",
    heroSubHeading: "The kitchen is where your day begins. We design ergonomic kitchens that respect how you cook, store, and eat—combining beauty with heavy-duty utility.",
    
    longDesc: `The kitchen is where your day quietly begins and often where it happily ends. Space Them Upp designs ergonomic modular kitchens for homes across Pune, PCMC and Mumbai that respect how you actually cook, store and eat—not just how a catalogue looks. Thoughtful storage, durable finishes and premium hardware come together to create practical, beautiful and easy‑to‑maintain kitchens that work hard every single day.

Apartment layouts in areas like Baner, Wakad, Tathawade, Hinjawadi, Kharadi, Andheri and Thane are often compact, with awkward corners, beams and windows. A well‑planned modular kitchen turns these constraints into strengths by using every inch of space intelligently and keeping the workflow smooth.

Why choose a modular kitchen?
A modular kitchen is built from pre‑designed units that fit together like a well‑planned system. Compared to basic carpenter‑made setups, modular kitchens offer:
• Better space management with corner solutions, pull‑outs and tall storage.
• Cleaner finishes with factory‑cut panels and edge banding.
• Easier maintenance and future upgrades.
• Ergonomic layouts that reduce unnecessary bending, reaching and walking.`,

    philosophyTitle: "Our Design Approach",
    philosophyDescription: `1. Understanding your cooking style
Before drawing, we understand who cooks, how often, and what cuisines you prefer. A family that cooks three meals a day needs different planning from one that orders in.

2. Storage planning from inside out
We plan the inside first: where grains, spices, heavy utensils, and cleaning supplies will go. Tall units, pantry pull‑outs, and corner carousels are selected based on your actual inventory.

3. Material and finish selection
We guide you through BWP/BWR plywood paired with laminates, acrylic, or veneer. We explain which options handle heat, moisture and Indian masala stains better.

4. Ergonomics for Indian kitchens
• Counter height matched to your height to reduce back strain.
• Drawer placement so heavy kadais are stored at waist level.
• Proper toe‑kick space so your feet fit comfortably while working.`,

    processTitle: "Design‑to‑Installation Workflow",
    processDescription: `Consultation and brief
We meet with your floor plan and budget. You share inspiration images and must‑have elements (large pantry, breakfast counter, etc.).

Layout and 3D views
Using site data, we create a layout (L-shape, U-shape, Parallel) and 3D visuals showing cabinet sizes, colours and lighting. This helps you visualise the final look.

Final specification and costing
We freeze materials, accessories and hardware. A transparent BOQ is prepared so you know exactly what is included—brands, channels, and warranty terms.

Factory production
Modules are precision‑cut, edge‑banded and pre‑drilled in partner factories, reducing on‑site noise and dust. Quality checks ensure dimensions match drawings.

On‑site installation
Installation teams assemble cabinets, fix shutters, align gaps and install countertops. We finish with final adjustments so all drawers run smooth and soft‑close.`,

    coverageTitle: "Kitchen Types We Design",
    coverageDescription: `Each project is customised to the space and usage:

• Compact L‑shape kitchens for smaller Pune and Mumbai apartments.
• U‑shape kitchens with generous counters for larger homes.
• Parallel (galley) kitchens optimised for heavy daily use.
• Open kitchens with breakfast counters or islands facing the living area.
• Semi‑modular upgrades where existing civil platforms are reused wisely.`,

    benefitsTitle: "Everyday Benefits",
    benefitsDescription: `• Clutter‑free counters: Dedicated spaces for jars and appliances keep the worktop free.
• Faster cooking: Smart layout (Work Triangle) reduces walking and searching time.
• Easy cleaning: Straight lines and sealed edges make daily wiping quick; finishes are stain resistant.
• Future flexibility: Individual modules can be repaired or upgraded without redoing the whole kitchen.
• Higher home value: A major selling point for flats in Pune and Mumbai.`,

    faqTitle: "FAQ – Modular Kitchens",
    faqs: [
      {
        question: "Is a modular kitchen possible if I already have a granite platform?",
        answer: "Yes. We design “semi‑modular” kitchens that reuse the existing platform while adding modular cabinets and drawers below and above, improving storage without full demolition."
      },
      {
        question: "How long does a modular kitchen project take?",
        answer: "Timelines vary, but a typical kitchen takes 4–8 weeks from design finalisation to installation, including factory production and on‑site fitting."
      },
      {
        question: "Is it difficult to maintain with Indian cooking?",
        answer: "No. We recommend moisture‑resistant boards and high‑quality laminates or acrylics that handle oil and masala well. Regular wiping keeps them fresh for years."
      },
      {
        question: "Is it expensive compared to carpenter‑made kitchens?",
        answer: "Upfront costs can be higher, but you gain better functionality, machine finish, warranty and durability. It is a worthwhile investment for a high-use space."
      }
    ],

    ctaTitle: "Cook in Style",
    ctaText: "Planning a new home or renovating in Pune or Mumbai? Share your floor plan with Space Them Upp. We will propose an ergonomic, storage‑rich layout tailored to your cooking style and budget.",

    features: [
      "Marine Ply (BWP) Carcasses",
      "Soft-Close Hettich/Hafele Fittings",
      "Quartz/Granite Countertops",
      "Space-saving Corner Units",
      "Semi-Modular Options Available"
    ],
    imageUrl: "https://i.pinimg.com/1200x/3d/e4/27/3de4273aed0bf0923f70eaddfc7fae54.jpg",
  },
  {
    id: "plumbing",
    title: "Plumbing",
    icon: Wrench,
    shortDesc: "End-to-end plumbing planning and execution for leak-free interiors.",
    metaTitle: "Plumbing Services for Interiors in Pune & Mumbai | Space Them Upp",
    metaDescription: "Professional plumbing services for interiors in Pune and Mumbai. We ensure leak-proof bathrooms and kitchens with CPVC/UPVC piping and premium fixture installation.",
    heroHeading: "Plumbing Services for Interiors",
    heroSubHeading: "Water is vital, but leaks are disasters. We provide end-to-end plumbing planning and execution so your interiors stay dry, safe, and easy to maintain.",
    
    longDesc: `Water can be your best friend or your biggest enemy inside a home. A beautiful bathroom or modular kitchen means little if there are leaks, low pressure or constant damp patches. Space Them Upp provides end‑to‑end plumbing planning and execution for kitchens, bathrooms and utility areas in Pune, PCMC and Mumbai, so your interiors stay dry, safe and easy to maintain.

Plumbing is hidden behind tiles and cabinets, which is why mistakes made during renovation are expensive and messy to fix later. Thoughtful design, correct pipe routing and skilled workmanship at the start prevent future headaches like seepage to the flat below, swollen cabinets, mould or foul odours.

Why proper plumbing design matters:
Good plumbing supports both functionality and aesthetics. The position of sinks, WCs, and washing machines directly affects your layout and tile design. A poorly planned system leads to awkward pipes and uneven slopes.

Thoughtful plumbing design:
• Ensures steady water pressure and smooth drainage.
• Reduces risk of leaks by using correct materials.
• Keeps pipes concealed, preserving a clean interior look.
• Allows easy access for future maintenance.

In dense apartment clusters, preventing leakage into neighbouring flats is not just about convenience—it protects relationships with neighbours and avoids disputes.`,

    philosophyTitle: "Scope of Service",
    philosophyDescription: `Space Them Upp’s plumbing scope typically includes:

• New water supply and drainage lines within kitchens and bathrooms.
• Relocating sinks, WCs, showers, and washing machines where feasible.
• Installing and aligning CPVC/UPVC pipelines and floor drains.
• Fitting mixers, diverters, rain showers, and health faucets.
• Geyser, water purifier and filter connections.
• Coordinating waterproofing, tiling and civil works around pipes.

Note: Major vertical stack changes are recommended only after structural and society approval.`,

    processTitle: "Our Plumbing Process",
    processDescription: `Assessment and planning
We study your existing layout and builder drawings (inlet lines, stacks, traps). We map your needs—like converting an Indian WC to wall‑hung—against what is technically feasible.

Designing the plumbing layout
We design a clear layout for each wet area. Pipe routes, slopes and fixture locations are marked on drawings that align with space planning to prevent clashes with cabinets or tiles.

Material selection
We recommend reliable, branded pipes (CPVC/UPVC) suitable for Indian water pressure. Fixtures are chosen to match design, budget and water‑saving preferences.

On‑site execution with checks
Old lines are capped and rerouted. Joints are solvent‑welded properly, not just “packed” with mortar. Before closing floors, pipes are tested for leaks through pressure checks.

Coordination with waterproofing
Waterproofing layers around traps are applied and cured before tiles are laid. We ensure traps are set with protective “vata” or collars—a critical detail often skipped.

Fixture installation and testing
After tiling, mixers and WCs are installed. We test flow, pressure, flush performance and drainage speed. Any drips are fixed before handover.`,

    coverageTitle: "Plumbing for Different Spaces",
    coverageDescription: `Bathrooms:
We design layouts that keep wet and dry zones separate. Concealed diverters, wall‑hung WCs and niche shelves are coordinated with plumbing points for a sleek finish.

Kitchens:
Kitchens need robust plumbing behind sinks and RO units. We plan drain height and trap access to avoid cabinet swelling or foul smells.

Utility Areas:
Washing machine points and drain lines are planned to manage grey water efficiently without backflow. Proper tap heights reduce hose tangling.`,

    benefitsTitle: "Benefits of Integrated Plumbing",
    benefitsDescription: `• Leak‑free finishes: Correct routing and testing mean lower chances of seepage.
• Better layouts: Early plumbing design supports cleaner layouts instead of awkward adjustments.
• Easier maintenance: Thoughtfully placed access panels allow repairs without breaking tiles.
• Water efficiency: Option to include low‑flow fixtures and dual‑flush WCs.
• Peace of mind: Professional planning reduces fear of complaints from downstairs neighbours.`,

    faqTitle: "FAQ – Plumbing",
    faqs: [
      {
        question: "Can you move my bathroom or kitchen completely?",
        answer: "Minor shifts are possible, but moving wet areas far from existing stacks is risky and may violate rules. We explain options clearly after reviewing your structure."
      },
      {
        question: "Do you only design plumbing or also execute it?",
        answer: "For turnkey projects, we handle both design and on‑site execution. We can also provide plumbing drawings for your own plumbers to follow while we supervise."
      },
      {
        question: "How can I avoid bathroom leakage to the flat below?",
        answer: "Use quality pipes, ensure proper waterproofing, change old traps when re‑tiling, and insist on leak tests before closing the floor. We follow these steps as standard."
      },
      {
        question: "Can you add new points for washing machine or dishwasher?",
        answer: "Yes, subject to drainage feasibility. We check nearby waste lines to ensure the connection handles the extra load without backflow."
      },
      {
        question: "Do you work all over Pune and Mumbai?",
        answer: "We primarily serve Pune, PCMC and major parts of Mumbai and Navi Mumbai. Larger projects in nearby cities can be discussed."
      }
    ],

    ctaTitle: "Stay Dry & Leak-Free",
    ctaText: "Renovating your kitchen or bathroom? Don't treat plumbing as an afterthought. Let Space Them Upp plan and execute your plumbing so your new spaces look stunning and stay problem‑free.",

    features: [
      "Pressure Testing & Leak Checks",
      "CPVC/UPVC Piping",
      "Sanitary Ware Installation",
      "Drainage & Slope Planning",
      "Waterproofing Coordination"
    ],
    imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ceiling-design",
    title: "Ceiling Design",
    icon: Grid,
    shortDesc: "Creative false ceilings (POP/Gypsum) with integrated lighting.",
    metaTitle: "Ceiling Design & False Ceilings in Pune & Mumbai | Space Them Upp",
    metaDescription: "Transform your home with elegant false ceiling designs. We specialize in Gypsum and POP ceilings with integrated lighting for homes and offices in Pune and Mumbai.",
    heroHeading: "Ceiling Design & False Ceilings",
    heroSubHeading: "The ceiling is the fifth wall of your room. We design it to hide clutter, define zones, and create a rich, finished look with layered lighting.",
    
    longDesc: `Ceiling design is one of the fastest ways to change how a room feels. At Space Them Upp, we use false ceilings, bulkheads and elegant lighting details to hide wiring, define spaces and add a rich, finished look to homes and commercial interiors across Pune and Mumbai.

In many city apartments, the basic slab looks plain, busy with beams, pipes and hanging wires. Offices and shops often have exposed services that make the space look unfinished. A well‑designed false ceiling cleans all of this visually and allows layered lighting that makes every room feel warm, premium and comfortable.

Why ceiling design matters:
People forget that the ceiling acts like a fifth wall in the room. When it is ignored, even expensive furniture and finishes can look ordinary. When it is thoughtfully designed, the same space suddenly feels taller, more luxurious and better lit.

False ceilings also improve day‑to‑day comfort. They reduce glare from tube lights, help control echo in living rooms and offices, and can even improve thermal insulation by reducing the volume of air to cool. In a climate like Pune or Mumbai, this can contribute to a more stable indoor temperature and lower energy bills.`,

    philosophyTitle: "What Our Service Includes",
    philosophyDescription: `1. Study of structure & services
We identify slab levels, beam depths, AC ducts and wiring routes so the ceiling works with them, avoiding clashes between lights and fans.

2. Concept and zoning
We use ceiling levels to subtly separate areas without building walls—like defining a dining area distinct from the living room using a drop ceiling.

3. Material selection
We work with Gypsum (for smooth finish & speed), POP (for curves), and wooden accents. We recommend moisture-resistant boards for bathrooms and kitchens.

4. Integrated lighting design
We plan for recessed downlights, cove lights, and profile lights. This layered approach lets you switch between bright task lighting and soft mood lighting.

5. Maintenance planning
We provide inspection panels or concealed access points for ACs and junction boxes, keeping the design practical and long-lasting.`,

    processTitle: "Our Design Workflow",
    processDescription: `Discussion and moodboard
We start by understanding your mood: subtle and clean, or rich and decorative. We coordinate with floor plans so the ceiling supports the interior language.

Technical coordination
Our designers coordinate with electricians and AC contractors to lock light points and duct routes. This avoids making and breaking the ceiling multiple times.

Drawings and 3D views
You receive Reflected Ceiling Plans (RCPs) showing levels and light fixtures, along with 3D views to see how the lighting affects the space from eye level.

Material and light selection
We guide you on choosing suitable boards, channels, paints and light fixtures available in Pune and Mumbai markets, balancing performance with budget.

Execution and quality checks
Our project team supervises levels, joint treatment and light cut‑outs to ensure a smooth finish. We double-check wiring before closing the ceiling.`,

    coverageTitle: "Types of Ceilings We Create",
    coverageDescription: `We adapt designs to ceiling height, room size and natural light:

• Minimalist single‑level gypsum ceilings for modern apartments
• Two‑level ceilings with cove lighting for living/dining
• Bulkheads with spotlights over kitchen counters
• Geometric or panelled ceilings for offices
• POP designs for master bedrooms
• Wooden rafters/slats for warmth

We also tailor designs for specific spaces:
• Living Rooms: Welcoming atmosphere with soft coves.
• Bedrooms: Calmer ceilings with warm, indirect lighting.
• Kitchens: Practical designs with high task lighting.
• Offices: Acoustic boards and defined work zones.`,

    benefitsTitle: "Functional Benefits",
    benefitsDescription: `A good ceiling design does more than look pretty:

• Conceals Clutter: Hides wiring, CCTV cables, AC ducts and structural imperfections.
• Improves Lighting: Allows even distribution of light and reduces harsh shadows.
• Enhances Acoustics: The air gap and materials help reduce echo in TV rooms and offices.
• Energy Efficiency: The reduced height can help keep rooms cooler, easing the load on ACs.

These benefits are especially useful in high‑rise apartments and glass‑heavy offices common in Pune and Mumbai.`,

    faqTitle: "FAQ – Ceiling Design",
    faqs: [
      {
        question: "Will a false ceiling make my room look smaller?",
        answer: "When designed correctly, it makes the room feel visually taller by hiding clutter and using light smartly. We adjust levels carefully so even standard‑height flats feel comfortable."
      },
      {
        question: "Which is better, POP or gypsum?",
        answer: "For most modern homes, gypsum board is preferred because it is faster to install and gives a smoother finish. POP is useful for detailed curves. We often use a combination."
      },
      {
        question: "Is a false ceiling difficult to maintain?",
        answer: "Good‑quality gypsum ceilings are durable and need minimal care—just occasional dusting. If damaged, a specific portion can be repaired without touching the entire ceiling."
      },
      {
        question: "Can you design ceilings only, without full interiors?",
        answer: "Yes. Space Them Upp can provide standalone ceiling design and drawings, along with lighting layouts, to refresh an older flat or office."
      },
      {
        question: "Do you work across Pune and Mumbai?",
        answer: "We serve projects in Pune, PCMC and major parts of Mumbai and Navi Mumbai. For large or premium projects, outstation work is also possible."
      }
    ],

    ctaTitle: "Finish with Elegance",
    ctaText: "If you want your home or commercial space to look truly finished and luxurious, start by rethinking the ceiling. A well‑designed false ceiling from Space Them Upp will hide clutter and add character while staying easy to maintain.",

    features: [
      "Gypsum & POP False Ceiling",
      "Cove & Profile Lighting Integration",
      "Beam & Wiring Concealment",
      "Acoustic & Thermal Benefits",
      "Maintenance Access Planning"
    ],
    imageUrl: "https://i.pinimg.com/736x/47/cf/16/47cf16bb79e9cfab5d617ee091f302b8.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "light-decor",
    title: "Light & Décor",
    icon: Lightbulb,
    shortDesc: "Layered lighting and curated décor to shape mood and ambiance.",
    metaTitle: "Light & Décor Design in Pune & Mumbai | Space Them Upp",
    metaDescription: "Transform your home with layered lighting and curated décor. Space Them Upp offers professional lighting design and styling services in Pune and Mumbai.",
    heroHeading: "Light & Décor Design",
    heroSubHeading: "Light is what makes design come alive. We combine layered lighting with curated décor to make every room feel warm, welcoming, and complete.",
    
    longDesc: `Light is what makes every design come alive. At Space Them Upp, “Light & Décor” is a dedicated service that combines layered lighting plans with carefully chosen décor accents to shape mood, highlight key features and make every room feel warm, welcoming and complete. This service is available for homes and commercial spaces across Pune, PCMC and Mumbai.

Instead of relying on a single tube light or ceiling panel, we design a mix of ambient, task and accent lighting—pendants, spotlights, coves, profile lights and lamps—paired with art, mirrors, plants and accessories that suit your style. Done right, this layering transforms the same room from bright and energetic in the morning to calm and intimate in the evening with just a few switches.

Why light & décor matter:
Lighting is not just about visibility; it directly affects how colours, textures and even room sizes appear to the eye. Warm dimmed light can make a compact Pune living room feel cosy and luxurious, while harsh cold light can make the same space look flat and uncomfortable.

Thoughtful décor placement works with lighting to guide the eye. A well‑lit artwork, textured wall or styled console becomes a natural focal point, while dark, cluttered corners quietly disappear. This subtle visual hierarchy makes your interiors feel intentional and professionally finished.`,

    philosophyTitle: "Our Layered Approach",
    philosophyDescription: `Designers talk about “layered lighting”—using three main layers that work together:

1. Ambient lighting: The general, overall light in a room (recessed lights, coves).
2. Task lighting: Focused light for specific activities like reading, cooking or working.
3. Accent lighting: Highlighting special features such as artwork, niches or textured walls.

Space Them Upp designs all three layers for each room so you are never forced to choose between too dark and too bright. You get the flexibility to create different scenes—work mode, family time, or party mode—using the same system.`,

    processTitle: "Our Design Workflow",
    processDescription: `Concept and coordination
We align the light & décor concept with space planning, ceiling design and furniture layout so all elements support each other. Light points are frozen early.

Drawings and fixture schedule
You receive lighting plans and basic 3D views showing how fixtures sit in the space. A schedule lists types, wattage and colour temperature so you know exactly what is being installed.

Procurement and installation
We help source lights and décor through trusted vendors. Electricians install fixtures as per plan, and décor pieces are placed during the final stages.

Focusing and scene setting
After installation, we aim and adjust spotlights, test dimmers and tweak lamp positions. This fine‑tuning stage turns a theoretical plan into a real, lived‑in mood.`,

    coverageTitle: "Lighting for Different Spaces",
    coverageDescription: `• Living & Dining: Flexibility is key. Ambient light sets the base, task lights support dining, and accent lights highlight art. A statement chandelier often becomes the anchor.

• Bedrooms: Softer, warmer layers. A calm general glow, reading lights near the bed, and subtle strip lights behind a headboard support a restful mood.

• Kitchens: Functionality leads. Bright, shadow‑free task lighting over counters works alongside modest ambient light.

• Home Offices: Balanced task lighting on the work surface prevents eye strain.`,

    benefitsTitle: "Benefits You Feel Every Day",
    benefitsDescription: `• Better mood: Balanced, warm lighting makes rooms inviting and reduces eye strain.
• Stronger aesthetics: Light highlights design features and disguises less attractive elements.
• Flexible use: The same room supports work or relaxation simply by changing lighting layers.
• Improved property appeal: Well‑lit, styled homes photograph better and feel premium in the competitive Pune/Mumbai market.`,

    faqTitle: "FAQ – Light & Décor",
    faqs: [
      {
        question: "Can you work with my existing lights and décor?",
        answer: "Yes. We often start by auditing what you already have, then suggest re‑positioning, adding a few key fixtures and layering décor to upgrade the overall feel."
      },
      {
        question: "Is layered lighting very expensive?",
        answer: "Not necessarily. It's about smart layering, not maximum fixtures. With a mix of ceiling lights and well‑chosen lamps, even modest budgets can enjoy a big upgrade."
      },
      {
        question: "Do you offer light‑only or décor‑only services?",
        answer: "Yes, especially for clients in Pune and Mumbai who already have basic interiors and want to improve ambiance without a full renovation."
      },
      {
        question: "Will this increase my electricity usage?",
        answer: "Most plans use efficient LED fixtures and dimmers. Because light is directed only where needed, many clients actually use less power than before."
      }
    ],

    ctaTitle: "Set the Mood",
    ctaText: "If your home or office in Pune or Mumbai feels flat or 'almost there', a focused Light & Décor plan can transform it without rebuilding. Let us design the perfect ambiance for you.",

    features: [
      "Layered Lighting Plans",
      "Fixture Selection & Procurement",
      "Décor Styling & Placement",
      "Smart Control Integration",
      "Scene Setting & Focusing"
    ],
    imageUrl: "https://i.pinimg.com/736x/c0/2c/62/c02c62f6716ae229b153a7a1d52bcd1b.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "paint-decor",
    title: "Paint & Décor",
    icon: PaintBucket,
    shortDesc: "Professional painting, curated colour palettes, and styling.",
    metaTitle: "Paint & Décor in Pune & Mumbai | Space Them Upp",
    metaDescription: "Transform your home with professional painting and curated décor. Space Them Upp offers color consultation, wall treatments, and styling services in Pune & Mumbai.",
    heroHeading: "Paint & Décor Services",
    heroSubHeading: "Fresh paint and thoughtful décor can completely change how a home feels. We combine professional painting with curated styling to give your space a cohesive, finished look.",
    
    longDesc: `Fresh paint and thoughtful décor can completely change how a home or office feels, even without major renovation. Space Them Upp offers a “Paint & Décor” service that combines professional painting, curated colour palettes, wall treatments and styling to give your space a cohesive, finished look across Pune, PCMC and Mumbai.

Instead of random colours and impulse buys, every wall shade, texture, artwork and accessory is chosen to support a clear design story. The result is a space that feels harmonious from room to room—where ceilings, walls, furniture, lighting and décor all work together rather than competing for attention.

Why paint & décor matter:
Walls are the backdrop to everything else in your interior. The right colours and finishes can make rooms feel larger, brighter, calmer or more energetic, depending on your needs. Poorly chosen or patchy paint, on the other hand, can make even expensive furniture look tired.

Décor styling completes the picture. Textures, artworks, mirrors, plants and accessories add layers of personality and warmth. When these are planned with colour and lighting in mind, they create a “designed” look that most people struggle to achieve on their own.`,

    philosophyTitle: "What Our Service Includes",
    philosophyDescription: `1. Colour consultation and palette creation
We understand your taste—soft neutrals or bold statements—and how natural light behaves in each room. A full‑home palette is developed so colours flow smoothly from one space to another.

2. Surface preparation and professional painting
Good paintwork is 60% preparation. Walls are checked for cracks and dampness. Repairs and primer coats are applied before the final paint using branded, low‑VOC paints suited to Indian conditions.

3. Wall textures and special finishes
Where a simple flat wall is not enough, we introduce texture thoughtfully:
• Subtle texture paints for TV walls.
• Concrete‑effect or fabric‑like finishes.
• Geometric or panel‑style treatments.

4. Artwork, mirrors and accessories
We plan where art and mirrors should go based on scale and light. Shelves, vases, plants, and cushions are layered in to bring softness, colour and texture.`,

    processTitle: "Our Step‑by‑Step Workflow",
    processDescription: `Site visit and brief
We walk through your space to understand light, existing finishes, and what you wish to keep or change. You share references and desired mood.

Palette and décor concept
A room‑wise colour and décor concept is created, showing base colours, accent walls, texture ideas and key décor placements.

Protection and preparation
Floors and furniture are protected. Surfaces are cleaned, cracks filled, loose paint removed and primer applied. This is crucial for a smooth finish.

Painting and textures
Multiple coats of paint are applied as per product guidelines, followed by texture work. Edges and corners are handled carefully for a crisp result.

Décor styling and finishing touches
After paint cures, décor elements are installed—art, mirrors, shelves, and plants. We adjust arrangements until the room feels balanced.`,

    coverageTitle: "Styling for Different Spaces",
    coverageDescription: `Living & Dining:
Focus on a welcoming yet polished palette. Walls facing the main seating become subtle feature walls, while décor highlights include gallery walls or styled consoles.

Bedrooms:
Restful tones—muted neutrals or deep, cocooning shades. We coordinate wall colour with headboards and curtains to avoid visual noise.

Kitchens:
We suggest washable, stain‑resistant finishes for walls not tiled. Colours are chosen to work harmoniously with modular cabinets.

Home Offices:
Calm, focused palettes support concentration. Décor includes organised shelves and pin boards instead of random clutter.`,

    benefitsTitle: "Benefits for Your Space",
    benefitsDescription: `• Cohesive look: A single palette creates continuity, making even compact city apartments feel upscale.
• Better first impressions: Fresh paint and curated décor instantly uplift how visitors perceive your space.
• Long‑lasting finish: Proper prep and quality products mean fewer touch‑ups.
• Less decision fatigue: Guided choices on colour and texture save you from mismatched purchases.`,

    faqTitle: "FAQ – Paint & Décor",
    faqs: [
      {
        question: "Can you work with my existing furniture?",
        answer: "Yes. We often build the colour and décor concept around what you already own, upgrading only what is necessary for a cohesive look."
      },
      {
        question: "Is textured paint hard to maintain?",
        answer: "Modern texture systems are durable if used in the right locations. We suggest textures mainly on feature walls away from heavy wear."
      },
      {
        question: "Do you offer colour consultation only?",
        answer: "Yes. We can provide a standalone colour and styling guide which your own painter can follow. This works well if you have reliable local contractors."
      },
      {
        question: "How long does painting usually take?",
        answer: "A typical occupied 2–3 BHK in Pune or Mumbai may take 4–7 days for full interior repainting with basic styling, depending on scope and drying times."
      }
    ],

    ctaTitle: "Refresh Your Space",
    ctaText: "If your home or office looks structurally fine but visually 'unfinished', a focused Paint & Décor upgrade can make it feel new again without major construction. Let's craft a plan for you.",

    features: [
      "Colour Consultation & Palette Creation",
      "Professional Surface Preparation",
      "Texture Paints & Special Finishes",
      "Artwork & Accessory Styling",
      "Low-VOC & Eco-Friendly Options"
    ],
    imageUrl: "https://i.pinimg.com/736x/9b/41/3b/9b413b5c24e9e030b1746763ab2cd0f6.jpg",
  },
  {
    id: "landscape-balcony",
    title: "Landscape & Balcony",
    icon: Trees,
    shortDesc: "Transforming balconies and outdoor areas into lush, green retreats.",
    metaTitle: "Landscape & Balcony Design in Pune & Mumbai | Space Them Upp",
    metaDescription: "Transform your balcony into a green retreat. We design low-maintenance landscape and balcony spaces in Pune & Mumbai with plants, seating, and lighting.",
    heroHeading: "Landscape & Balcony Design",
    heroSubHeading: "Balconies are often the most undervalued spaces in a home. We turn them into green retreats perfect for morning tea, reading, or quiet evenings.",
    
    longDesc: `Balconies and small outdoor corners can become the most loved part of a home when they are designed thoughtfully. Space Them Upp transforms balconies, sit‑outs and pocket terraces across Pune, PCMC and Mumbai into low‑maintenance outdoor zones with plants, cosy seating and mood lighting that gently connect your interiors with nature.

Most city balconies end up as storage or drying areas, even though they receive the best light and air. With the right planning, they can turn into green retreats—perfect for morning tea, reading, work‑from‑home breaks or quiet evenings—without demanding complicated gardening skills.

Why balcony & small landscape design matter:
In dense urban environments, even a small balcony or terrace gives valuable access to fresh air, sky and greenery. Studies show that being around plants helps reduce stress and improve mood. A designed balcony garden also acts as a natural filter, softening city noise.

From a design perspective, balconies extend your interiors visually. When the look of the balcony continues your indoor style, living rooms and bedrooms appear larger, and the entire home feels more premium.`,

    philosophyTitle: "What Our Service Includes",
    philosophyDescription: `1. Site assessment and lifestyle brief
We check sun/wind direction and building rules. We ask how you want to use the space: reading corner, tea spot, yoga zone, or kitchen garden.

2. Layout planning
We plan where seating goes for the best views, how many planters fit without blocking movement, and where to keep dry space for utility needs.

3. Plant selection for low maintenance
We choose plants based on your light conditions and time availability. We recommend hardy plants (Snake plant, Areca palms), vertical planters, and easy herbs.

4. Flooring, decking and finishes
We shift the look from "utility" to "lounge" using outdoor tiles, artificial grass, wooden deck tiles, or gravel. Materials are chosen to handle rain and sun.

5. Mood lighting and accessories
Warm, indirect lighting turns a balcony magical at night. We plan fairy lights, solar lanterns, or LED strips paired with outdoor rugs and cushions.`,

    processTitle: "Design‑to‑Execution Workflow",
    processDescription: `Consultation and concept
You share photos and orientation (East/West). We discuss how hands-on you want to be with plants. We create a mood and usage concept based on this.

Detailed layout and plant list
We prepare a simple layout suggesting seating position, planter sizes, and storage. A plant palette is proposed with care levels (very easy / moderate).

Material and product selection
We guide you on balcony tiles, planter types (FRP, metal, terracotta), soil mix, and outdoor-safe furniture.

Installation and styling
On installation day, flooring changes, planters, soil, plants, lights and décor are set up. Heights and groupings are adjusted for balance.

Handover and care guide
You receive simple care instructions—watering frequency and pruning basics—so maintenance stays manageable.`,

    coverageTitle: "Types of Setups We Create",
    coverageDescription: `• Green Lounge: Comfortable chairs, side table, potted plants, and fairy lights.
• Kitchen Garden: Planters with herbs, chillies, greens and compact seating.
• Zen Corner: Mats or low seating, sculptural plants, pebbles and minimal décor.
• Family Hangout: Built‑in bench with storage, soft lighting and a small bar trolley.
• Work Nook: Slim desk, ergonomic chair, shade and plants to frame your outdoor “office”.`,

    benefitsTitle: "Benefits for Your Home",
    benefitsDescription: `• Extra living space: A designed balcony becomes a true extension of your living area.
• Health and well‑being: Green views and fresh air support relaxation and reduce stress.
• Better micro‑climate: Plants help filter air and cool the immediate surroundings.
• Higher property appeal: A well‑finished balcony makes your home stand out in the Pune/Mumbai market.`,

    faqTitle: "FAQ – Landscape & Balcony",
    faqs: [
      {
        question: "Can balconies be designed if they are very small?",
        answer: "Yes. Even compact standing balconies can host vertical planters, railing pots and a slim ledge. The key is smart use of walls and railings instead of only the floor."
      },
      {
        question: "What if my balcony gets very little sunlight?",
        answer: "We select shade‑tolerant plants and focus more on texture, foliage and décor. Soft lighting and comfortable seating can still deliver a calm outdoor feel."
      },
      {
        question: "Is maintenance going to be difficult?",
        answer: "Not if planned correctly. We design low‑maintenance setups with hardy plants and, where desired, self‑watering planters."
      },
      {
        question: "Can you work on terraces or small front yards too?",
        answer: "Yes. The same principles apply to terraces, podium sit‑outs and small ground‑floor patches, with more scope for layout variation."
      }
    ],

    ctaTitle: "Your Private Oasis",
    ctaText: "If your balcony or small outdoor area in Pune or Mumbai is lying unused, let us turn it into a green, relaxing extension of your home. Enjoy nature without leaving your apartment.",

    features: [
      "Vertical Gardens & Green Walls",
      "Artificial Turf & Deck Flooring",
      "Outdoor Lighting & Seating",
      "Low-Maintenance Plant Selection",
      "Railing & Privacy Solutions"
    ],
    imageUrl: "https://i.pinimg.com/1200x/04/bd/4e/04bd4e7061a8c31c09df18cd3c144738.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "site-cleaning",
    title: "Site Cleaning",
    icon: Sparkles,
    shortDesc: "Deep cleaning post-construction for a fresh move-in.",
    metaTitle: "Site Cleaning After Interiors in Pune & Mumbai | Space Them Upp",
    metaDescription: "Professional post-interior site cleaning in Pune and Mumbai. We remove construction dust, paint spots, and debris to make your home move-in ready.",
    heroHeading: "Site Cleaning After Interiors",
    heroSubHeading: "When interiors are complete, you want a home, not a construction site. We turn your dusty project into a spotless, healthy, and move-in ready space.",
    
    longDesc: `When interiors are finally complete, you want to walk into a fresh, ready‑to‑live space—not a dusty site full of debris, paint spots and packaging. Site cleaning is the last but very important stage of every project at Space Them Upp. For homes and commercial spaces across Pune and Mumbai, we provide thorough post‑interior cleaning so you can simply move in and enjoy.

Interior work creates fine dust from cutting boards, tiles and gypsum, along with paint drips, grout stains, adhesive marks and piles of cardboard and plastic. Regular housekeeping is not designed to handle this level of mess. Professional post‑construction cleaning uses specific tools, chemicals and a step‑by‑step approach to remove all residue safely without damaging your new finishes.

Why post‑interior site cleaning matters:
Deep cleaning after renovation is not just about looks; it is also about health, safety and protecting your investment. Fine construction dust easily settles inside cupboards, on fans, in window channels and even inside electrical fittings. If not removed properly, it can affect indoor air quality and cause allergies.

Thorough site cleaning:
• Makes the space hygienic for children, elders and pets.
• Prevents scratches, stains and permanent marks on flooring.
• Removes nails, splinters and broken tiles that can cause injuries.
• Gives that true “wow” moment when you see your completed interiors for the first time.`,

    philosophyTitle: "What Our Service Includes",
    philosophyDescription: `1. Dry dust removal and debris clearance
We remove all leftover debris (cardboard, plastic, wood off‑cuts). This is followed by dusting ceilings, walls, ledges, and channels using professional vacuums. Getting rid of loose dust first stops it from spreading during wet cleaning.

2. Deep floor cleaning
Vitrified tiles, wooden floors, and marble are cleaned with non‑acidic solutions to remove dried paint drops, grout haze and adhesive marks without losing shine.

3. Bathroom and kitchen sanitisation
We detail clean tiles, grout lines, sanitaryware, and cabinets. Oily stains and cement residue are removed, and surfaces are disinfected so they are safe to use from day one.

4. Cabinet and wardrobe cleaning
Dust often hides inside new wardrobes. We vacuum and wipe internal shelves, channels and corners so you can place clothes and utensils immediately.

5. Glass, windows and fixtures
Glass doors, mirrors, and railings are cleaned with streak‑free solutions. We also wipe fans, switch plates, skirting, and light fixtures so every detail looks fresh.

6. Final touch‑ups
Towards the end, we recheck for missed spots or smudges. A light, neutral room freshener is used if you prefer, leaving the home smelling as good as it looks.`,

    processTitle: "Our Cleaning Workflow",
    processDescription: `Assessment and planning
We inspect the completed site to understand the level of dust and type of finishes. We estimate cleaning time and equipment required, coordinating with your move‑in plans.

Rough cleaning
Large debris and heavy dust are removed first. Floors are broomed and vacuumed, elevated surfaces are dusted and waste is segregated for disposal.

Detailed cleaning zone by zone
We tackle one room at a time—ceiling to floor. Fans, lights, walls, windows, grills, furniture, and flooring are cleaned systematically. Bathrooms and kitchens receive additional scrubbing.

Inspection and touch‑ups
The supervisor checks each area under proper lighting, noting any smudges, spots or missed corners. We also look for leftover labels or stickers on fixtures and remove them.

Final walk‑through
Before calling the job complete, we walk you through the space (or share a video tour). Any small points you notice are resolved immediately.`,

    coverageTitle: "Where We Provide Cleaning",
    coverageDescription: `Space Them Upp’s site cleaning service is designed specifically for:

• New apartments and penthouses after interior fit‑out
• Renovated flats and bungalows in Pune, PCMC, Mumbai and Navi Mumbai
• Commercial offices, clinics, showrooms and cafés
• Pre‑occupancy “move‑in ready” cleaning before key handover

We coordinate timings with society guidelines, which is important in complexes around Baner, Wakad, Tathawade, Hinjawadi, and Thane where work hours are regulated.`,

    benefitsTitle: "Benefits for You",
    benefitsDescription: `• True move‑in readiness: Shift bags and furniture immediately after handover.
• Healthier environment: Construction dust and allergens are removed using industrial vacuums.
• Protection for new interiors: Correct products prevent scratches on sensitive finishes.
• Time saved: Instead of scrubbing floors after a tiring project, you can focus on enjoying your new space.`,

    faqTitle: "FAQ – Site Cleaning",
    faqs: [
      {
        question: "Is this different from normal house cleaning?",
        answer: "Yes. Post‑interior cleaning is technical. It focuses on removing fine construction dust, paint stains, and grout haze without damaging fresh finishes. Regular housekeeping usually cannot handle this."
      },
      {
        question: "When is the right time to schedule cleaning?",
        answer: "Cleaning should be booked after all major interior work and snag rectification is finished, but before you move in furniture. This ensures maximum effectiveness."
      },
      {
        question: "Can I book this if another contractor did the interiors?",
        answer: "Yes. Even if your interiors were executed by another vendor, Space Them Upp can offer a dedicated post‑interior site cleaning service after reviewing the site."
      },
      {
        question: "How long does the process take?",
        answer: "A standard 2 or 3 BHK in Pune or Mumbai usually takes one full day of focused work by a small team; larger homes or commercial spaces may take more."
      },
      {
        question: "Do you use safe cleaning products?",
        answer: "We use branded, non‑acidic, surface‑appropriate cleaners, and avoid harsh chemicals on sensitive finishes like natural stone or wooden floors."
      }
    ],

    ctaTitle: "Move In Stress-Free",
    ctaText: "If your home or office interiors are nearing completion in Pune or Mumbai, book Space Them Upp’s site cleaning service to turn a dusty work site into a spotless, move‑in ready space.",

    features: [
      "Industrial Floor Scrubbing",
      "Window & Glass Descaling",
      "Cabinet Vacuuming",
      "Debris Removal",
      "Sanitisation"
    ],
    imageUrl: "https://i.pinimg.com/736x/e6/19/59/e619597b998ba0b556660bb9cab81e66.jpg?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    icon: ShieldCheck,
    shortDesc: "Rigorous quality checks ensuring your interiors last.",
    metaTitle: "Quality Assurance for Interiors in Pune & Mumbai | Space Them Upp",
    metaDescription: "Interior quality assurance in Pune & Mumbai. We perform stage-wise checks on materials, workmanship, and finishes to ensure your home lasts for years.",
    heroHeading: "Quality Assurance for Interiors",
    heroSubHeading: "Interiors are a big investment. We treat quality as a core service, not an afterthought, ensuring your home looks good and performs well for years.",
    
    longDesc: `Interiors are a big investment, and they should look good and perform well for years. Space Them Upp treats quality assurance as a core service, not an afterthought. At every stage—from materials and drawings to installation and finishing—defined quality checks ensure your home or office in Pune or Mumbai matches the agreed design, feels solid in daily use and lives up to your expectations.

Quality is not just about a final inspection. It is a systematic way of working that starts with design, continues through civil, electrical, plumbing, carpentry and painting, and ends only after all snags are resolved and you are satisfied with the result.

What Quality Assurance means to us:
For Space Them Upp, “Quality Assurance” covers three main aspects:
• Right materials: Verified products that suit Indian conditions, usage patterns and your budget.
• Right workmanship: Skilled teams following agreed drawings, methods and safety practices.
• Right checks: Regular inspections and clear acceptance standards before moving to the next stage.

This structured approach reduces rework, prevents hidden issues and ensures that your modular kitchen, wardrobes, ceilings, tiles and paint all age well, not just look good on handover day.`,

    philosophyTitle: "Stage‑Wise Quality Checks",
    philosophyDescription: `1. Design and documentation checks
Before work starts, we review layouts and service drawings. We ensure dimensions are practical and services (plumbing/electrical) do not clash with furniture. Clear drawings reduce ambiguity on site.

2. Material verification
As materials arrive, we check brand, grade, and thickness. We look for defects, warping, or colour variation. Only approved materials are allowed into production, protecting you from hidden substitutions.

3. Execution and workmanship checks
Each trade—civil, tiling, electrical, carpentry—has its own checklist. Regular site walk‑throughs identify issues early so they can be corrected before getting buried under the next layer of work.`,

    processTitle: "Specific Checks We Perform",
    processDescription: `Civil and tiling
Floor and wall levels are checked before tile laying. We verify bathroom slopes towards drains to avoid water stagnation.

Ceilings and lighting
Gypsum framework is checked for manufacturer spacing. Light cut‑outs are aligned with the design and checked for glare or shadows.

Carpentry and modular work
Carcass dimensions are cross‑checked. Hinges, channels and hardware are tested for smooth, soft‑close operation. Edge banding is inspected for peeling.

Painting and finishes
Surface preparation (putty, primer) is inspected before final coats. Colour consistency is checked under proper lighting to ensure no brush marks or drips.`,

    coverageTitle: "Handover & Documentation",
    coverageDescription: `Snagging and Handover:
Space Them Upp treats snag removal as a formal step. A detailed snag list is prepared covering alignment issues, loose handles, or paint touch‑ups. Only after all items are closed is the project considered ready.

Documentation and warranties:
We organise final "as-built" drawings, material information, and warranty details for hardware/appliances to help you maintain your interiors correctly.`,

    benefitsTitle: "Benefits for You",
    benefitsDescription: `• Fewer surprises: Regular checks catch issues early, avoiding big shocks at the end.
• Long‑term durability: Verified materials and correct installation reduce failures.
• Predictable finish: Standardised checklists mean all rooms meet the same high standard.
• Peace of mind: Clear processes and snags‑before‑handover give confidence that your investment is protected.`,

    faqTitle: "FAQ – Quality Assurance",
    faqs: [
      {
        question: "Do you have fixed checklists for every project?",
        answer: "Yes. Internal quality checklists cover design, materials, civil work, ceilings, carpentry, electrical, plumbing and finishing, with room‑wise points verified at key milestones."
      },
      {
        question: "How do you handle defects found after handover?",
        answer: "Reasonable post‑handover issues within agreed timelines are assessed and, where linked to our scope, addressed through rectification or coordination with vendors as per warranty terms."
      },
      {
        question: "Will quality checks delay my project?",
        answer: "Done correctly, they actually reduce total time by avoiding major rework. Inspections are built into the schedule so work and checks run in parallel."
      },
      {
        question: "Can I see your quality standards before starting?",
        answer: "Yes. During the proposal stage, we can walk you through the key QA steps relevant to your project type so expectations are clear from the beginning."
      }
    ],

    ctaTitle: "Built to Last",
    ctaText: "Planning turnkey interiors in Pune or Mumbai? Don't settle for just good visuals. Talk to Space Them Upp about our Quality Assurance process that ensures your home performs reliably for years.",

    features: [
      "Material Brand Verification",
      "50-Point Quality Checklist",
      "Snag List Resolution",
      "As-Built Documentation",
      "Workmanship Warranty"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "after-sales-service",
    title: "After Sales Service",
    icon: Headset,
    shortDesc: "Dedicated support for maintenance and warranties post-handover.",
    metaTitle: "After Sales Service for Interiors in Pune & Mumbai | Space Them Upp",
    metaDescription: "Professional after-sales support for interiors in Pune & Mumbai. We handle repairs, warranty coordination, and maintenance to keep your home looking new.",
    heroHeading: "After Sales Support",
    heroSubHeading: "The journey doesn't end at handover. We act as your trusted partner to ensure your interiors remain beautiful, functional, and stress-free for years.",
    
    longDesc: `The journey of a home or office interior does not end at handover. Space Them Upp’s dedicated After Sales Service support continues well beyond project completion to ensure your interiors remain beautiful, functional and stress‑free for years to come. Whether it is minor fixes, small adjustments or helpful guidance on maintenance, we are just a call or message away for our clients across Pune, PCMC and Mumbai.

Good interiors are an investment and keeping them in good shape requires timely attention. A missed loose handle, a stuck drawer or a fading paint patch can quickly grow into bigger troubles if ignored. Our After Sales Service acts as your trusted partner to spot and resolve these issues quickly before they escalate.

Why proper support matters:
• Peace of mind: Your interiors won’t be forgotten once the project ends.
• Cost savings: Early maintenance reduces long‑term repair bills.
• Extended life: Proper upkeep keeps colours and finishes looking their best.
• Simplified contact: One trusted point of contact reduces confusion and delays.`,

    philosophyTitle: "What Our Service Includes",
    philosophyDescription: `1. Minor repairs and adjustments
No matter how carefully handover is done, small things like hinge tightening, door alignment, and minor plumbing fixes arise in the early days. We provide trained technicians to fix these promptly.

2. Warranty follow‑up
Most materials and hardware come with manufacturer warranties. If defects arise—faulty locks, paint fades, or tile cracks—we coordinate warranty claims to protect your interests.

3. Maintenance advice
We give practical guidance on cleaning, polishing, and appliance upkeep tailored to your finishes. For example, how to reseal stone surfaces in Pune’s monsoons.

4. Periodic check‑ups
For clients who prefer a hands‑off approach, we offer scheduled maintenance visits to inspect doors, plumbing, and paint. Early detection prevents costly repairs later.`,

    processTitle: "Our Support Approach",
    processDescription: `Client registration
At handover, your project specifications are recorded securely. Warranty details and service scopes are shared digitally so you have all information at your fingertips.

Dedicated coordinators
Space Them Upp assigns a dedicated After Sales coordinator who schedules visits, manages technician dispatch, and communicates progress regularly through WhatsApp.

Qualified service personnel
Our technicians are trained in carpentry, plumbing, and electrical disciplines. They carry common spare parts and tools to address issues swiftly on site.

Transparent feedback
Every service activity is documented. We invite feedback post‑service to continuously improve support quality and responsiveness.`,

    coverageTitle: "Typical Queries Handled",
    coverageDescription: `• Adjusting creaky doors or soft-closing hinges in wardrobes.
• Fixing minor leakages at taps, mixers or plumbing joints.
• Repairing small paint scratches or refreshing faded walls.
• Calibrating modular kitchen shutters or appliance fittings.
• Replacing loose tiles, clogged drains or faulty switches.
• Suggesting best cleaning practices for fabrics and stone.`,

    benefitsTitle: "Benefits for You",
    benefitsDescription: `• Peace of mind: A reliable team continues to care for your investment.
• Timely resolution: Prompt fixes mean less disruption.
• Cost savings: Early maintenance reduces long‑term repair bills.
• Extended life: Proper upkeep keeps materials looking their best.

This service is especially valuable for busy professionals and NRIs who cannot be physically present to monitor maintenance.`,

    faqTitle: "FAQ – After Sales Service",
    faqs: [
      {
        question: "Is after sales support included in the contract?",
        answer: "Basic support for snag rectifications and warranty repairs is included in our turnkey package, generally for 6 to 12 months post-handover. Extended plans are optional."
      },
      {
        question: "How quickly can I expect a visit?",
        answer: "We strive to attend urgent issues (leaks, electrical faults) within 24–48 hours. Non-urgent fixes are scheduled at a mutually convenient time."
      },
      {
        question: "Are there costs for fixes?",
        answer: "Minor adjustments and warranty-covered repairs are typically free within the agreed period. Repairs outside scope/warranty are quoted transparently."
      },
      {
        question: "Can I get advice on caring for my interiors?",
        answer: "Yes, we provide customised care guides at handover and ongoing advice on demand to help your finishes last longer."
      }
    ],

    ctaTitle: "We Are Just a Call Away",
    ctaText: "If you want interiors in Pune or Mumbai backed by professional service that cares for your space long after the work is done, contact Space Them Upp today.",

    features: [
      "Warranty Claim Coordination",
      "Quick Response Team",
      "Periodic Maintenance Checks",
      "Hardware Adjustment & Tuning",
      "Digital Care Guides"
    ],
    imageUrl: "https://i.pinimg.com/736x/c1/43/c1/c143c1eab7d560c905e8dfcdbdde351a.jpg",
  },
];