import { useState, type CSSProperties, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardList,
  Clock,
  DoorOpen,
  HardHat,
  Hammer,
  HeartHandshake,
  KeyRound,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  PoundSterling,
  Quote,
  Send,
  Shield,
  Star,
  TreePine,
  Users,
  Wrench,
  Building2,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const RED = "#CC0000";
const DARK = "#1A1A1A";

const sectionAnchor: CSSProperties = { scrollMarginTop: "92px" };

const services = [
  {
    title: "Concrete Garages",
    description:
      "Concrete sectional garages designed, manufactured and erected by Welsh Builds, with a wide range of sizes, door positions and finish options.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2017/06/027.jpg",
    features: ["Manufacture, supply & erection", "Wide range of sizes", "Finish and layout options"],
  },
  {
    title: "Brick Garages & Garden Buildings",
    description:
      "Brick garages, sheds, summer houses and garden rooms built to suit your property and how you want to use the space.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2022/12/1000002372-1024x745.jpg",
    features: ["Brick garages", "Garden rooms & sheds", "Bespoke layouts"],
  },
  {
    title: "Garage Doors & Openers",
    description:
      "Main suppliers and installers of Hormann garage doors, including up-and-over, sectional and side-hung options plus electric door openers.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2021/03/gg-1000x600.jpg",
    features: ["Hormann doors", "Sectional / side-hung", "Electric operators"],
  },
  {
    title: "Asbestos Roof Replacement",
    description:
      "Asbestos cement garage roof removal and replacement carried out by an experienced team, including disposal and new roofing systems.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2022/10/IMG-20221020-WA0003.jpg",
    features: ["Asbestos roof removal", "Replacement roof systems", "Responsible disposal"],
  },
  {
    title: "Repairs & Maintenance",
    description:
      "Garage repairs, refurbishment and renovation work including roof, panel, door and window replacement for older buildings.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2020/03/cb4d96bb-af50-4c05-9441-3dd13f06828a.jpg",
    features: ["Roof and panel repairs", "Door/window replacement", "Garage renovations"],
  },
  {
    title: "Landscaping, Driveways & Patios",
    description:
      "Driveways, patios, base slabs and landscaping works to complete the area around your garage or outdoor building project.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2021/06/g-1000x600.jpg",
    features: ["Driveways & patios", "Base slabs/siteworks", "Marshalls product ranges"],
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Get in Touch",
    description: "Call or email Welsh Builds to discuss what you need and arrange a suitable time for a site visit.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Free Site Survey & Quote",
    description: "A free site survey is arranged and a no-obligation fixed price quotation is provided for the work discussed.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Build & Installation",
    description: "Welsh Builds' own teams carry out the work, whether that's a garage build, roof replacement, door installation or landscaping.",
  },
  {
    icon: KeyRound,
    step: "04",
    title: "Completion & Handover",
    description: "The finished work is checked with the customer and the team remains available for follow-up support and future work.",
  },
];

const projects = [
  {
    id: 1,
    title: "Recent Garage Project",
    location: "Welsh Builds Portfolio",
    description: "Portfolio-style garage example from the current Welsh Builds website gallery and recent jobs content.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2024/04/Screenshot_20240130_090149_WhatsApp-002-300x228.jpg",
    category: "Garages",
  },
  {
    id: 2,
    title: "Garage & Building Work",
    location: "Welsh Builds Portfolio",
    description: "A recent Welsh Builds project image reflecting the portfolio-first style used on the live site.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2024/04/Screenshot_20240130_090203_WhatsApp-002-300x231.jpg",
    category: "Garages",
  },
  {
    id: 3,
    title: "Garden Room With Storage",
    location: "Recent Job",
    description: "Garden room with a rear storage section and insulated doors, windows, walls and roof.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2022/12/1000002372-1024x745.jpg",
    category: "Garden Buildings",
  },
  {
    id: 4,
    title: "New Garage in Arran",
    location: "Arran",
    description: "New garage with a covered log store area to the rear, as featured in the Welsh Builds updates.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2022/11/IMG-20221106-WA0003.jpg",
    category: "Garages",
  },
  {
    id: 5,
    title: "Broomhill Garage Renewal",
    location: "Glasgow South Side",
    description: "Older garage upgraded with asbestos roof removal, a new roof and a replacement garage door.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2022/10/IMG-20221020-WA0003.jpg",
    category: "Roof Replacements",
  },
  {
    id: 6,
    title: "Portfolio Example",
    location: "Welsh Builds Portfolio",
    description: "Another recent image from the live site portfolio to better match the current Welsh Builds visual style.",
    image: "https://www.welshbuilds.co.uk/wp-content/uploads/2024/04/Screenshot_20240130_090228_WhatsApp-002-300x230.jpg",
    category: "Garages",
  },
];

const reasons = [
  {
    icon: Hammer,
    title: "Manufacture, Supply & Erect",
    description: "Welsh Builds manage manufacture, supply and erection as one service, keeping quality and timing consistent.",
  },
  {
    icon: Users,
    title: "Family Business, 50+ Years",
    description: "A long-established family business with more than 50 years of experience building garages and outdoor buildings in Scotland.",
  },
  {
    icon: CheckCircle2,
    title: "No Sub Contractors",
    description: "Most work is carried out by Welsh Builds' own full-time teams, helping maintain quality from survey to handover.",
  },
  {
    icon: DoorOpen,
    title: "Display Site & Door Specialists",
    description: "Visit the Uplawmoor display site by appointment and view garage door options supplied and installed by Welsh Builds.",
  },
  {
    icon: PoundSterling,
    title: "Free Survey & Fixed Quote",
    description: "Free site survey and free no-obligation fixed price quotation before work begins.",
  },
  {
    icon: TreePine,
    title: "Driveways, Patios & Landscaping",
    description: "Driveways, patios and landscaping can be completed alongside garage works to finish the full outdoor area.",
  },
];

const testimonials = [
  {
    name: "J McCurley",
    location: "Scotland",
    project: "Garage floor, roof and doors",
    text: "I now have a beautifully dry and secure garage which also looks brand new. The team were cheerful, polite and professional throughout.",
    rating: 5,
  },
  {
    name: "L Ritchie",
    location: "Scotland",
    project: "Garage door replacement",
    text: "My experience of this company from start to finish has been exemplary. They were honest, knowledgeable and took pride in the job.",
    rating: 5,
  },
  {
    name: "Alexander Martin",
    location: "Scotland",
    project: "Garage and driveway project",
    text: "From first meeting to completion we received nothing less than a professional service. Communication and workmanship were excellent.",
    rating: 5,
  },
  {
    name: "Barbara U",
    location: "Scotland",
    project: "Asbestos roof replacement",
    text: "Asbestos roof on garage removed and new roof fitted. Very professional and courteous team, and the finished result is excellent.",
    rating: 5,
  },
];

const serviceOptions = [
  "Concrete Garage",
  "Brick Garage",
  "Shed / Garden Building",
  "Garage Doors & Extras",
  "Asbestos Roof Replacement",
  "Repairs & Maintenance",
  "Landscaping / Driveway / Patio",
  "Home Office / Garden Room",
  "Other / Not sure",
];

export function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "ca9c9fe3-7e54-4750-b5f3-dab5153f81ea",
        subject: "New Enquiry from Welsh Builds Website",
        ...formData,
      }),
    });
    if (response.ok) setSubmitted(true);
  };

  const portfolioFilters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const filteredProjects =
    activePortfolioFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activePortfolioFilter);
  const filteredProjectCount = filteredProjects.length;

  return (
    <div>
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0">
          <ImageWithFallback src="/images/hero.jpg" alt="Welsh Builds garage project" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1535]/82 via-[#0F1535]/62 to-[#0F1535]/28" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5 lg:mb-6">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: RED }} />
              <span className="text-white/90" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                A Scottish name in concrete garages for over 50 years
              </span>
            </div>

            <h1
              className="text-white mb-3 lg:mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.12 }}
            >
              Scotland's specialists in
              <br />
              garages, doors and outdoor buildings
            </h1>

            <p className="text-white/80 mb-6 lg:mb-8 max-w-2xl" style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", lineHeight: 1.7 }}>
              Welsh Builds (D Harvie Builders Ltd) design, manufacture, supply and erect garages, sheds and garden buildings across Scotland, with asbestos roof replacement, repairs, garage doors and landscaping services available too.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-lg transition-all group no-underline"
                style={{ backgroundColor: RED, fontSize: "1rem", fontWeight: 600 }}
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/25 px-7 py-4 rounded-lg no-underline"
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                View Our Work
              </a>
            </div>

            <div className="mt-8 lg:mt-10 flex items-center gap-6 flex-wrap">
              <a href="tel:01505850501" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors no-underline">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" style={{ color: RED }} />
                </div>
                <div>
                  <span className="block text-white/60" style={{ fontSize: "0.75rem" }}>Call Welsh Builds</span>
                  <span className="block text-white" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>01505 850501</span>
                </div>
              </a>
              <div className="h-8 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-white/70 ml-2" style={{ fontSize: "0.8125rem" }}>
                  Trusted customer reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-12 lg:-mt-14 mb-[-3rem] lg:mb-[-3.5rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg shadow-black/8 border border-black/5">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-black/5">
              {[
                { icon: Clock, value: "50+", label: "Years Experience" },
                { icon: MapPin, value: "Scotland", label: "Central Belt Coverage" },
                { icon: Shield, value: "No Subs", label: "In-House Teams" },
                { icon: Award, value: "Free", label: "Survey & Fixed Quote" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 p-5 lg:p-8">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${RED}14` }}>
                      <Icon className="w-5 h-5" style={{ color: RED }} />
                    </div>
                    <div>
                      <span className="block text-[#1A1A1A]" style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.2 }}>
                        {item.value}
                      </span>
                      <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem", lineHeight: 1.3 }}>
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-[#FAFAF8]" style={sectionAnchor}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="uppercase tracking-wider mb-3 block" style={{ fontSize: "0.8125rem", fontWeight: 600, color: RED }}>
              What We Do
            </span>
            <h2 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, lineHeight: 1.2 }}>
              Garages, roofs, doors and outdoor building services
            </h2>
            <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              From concrete and brick garages to doors, roof replacements and landscaping, Welsh Builds delivers complete outdoor building services across Scotland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div key={service.title} className="group bg-white rounded-xl border border-black/5 overflow-hidden hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#1A1A1A] mb-2" style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}>
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: RED }} />
                        <span className="text-[#1A1A1A]" style={{ fontSize: "0.875rem" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center gap-1.5 no-underline group-hover:gap-2.5 transition-all" style={{ color: RED, fontSize: "0.875rem", fontWeight: 600 }}>
                    Enquire now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="uppercase tracking-wider mb-3 block" style={{ fontSize: "0.8125rem", fontWeight: 600, color: RED }}>
              How It Works
            </span>
            <h2 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, lineHeight: 1.2 }}>
              From first call to completed job
            </h2>
            <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              Get in touch for a free site survey, receive a fixed quote, and Welsh Builds will handle the work from installation to final handover.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-[#E0DDD9]" />
                  )}
                  <div className="text-center">
                    <div className="relative inline-flex">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${RED}14` }}>
                        <Icon className="w-6 h-6" style={{ color: RED }} />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-white flex items-center justify-center" style={{ backgroundColor: RED, fontSize: "0.6875rem", fontWeight: 700 }}>
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2" style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.3 }}>{step.title}</h3>
                    <p className="text-[#6B7280]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 lg:py-28 bg-[#FAFAF8]" style={sectionAnchor}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 lg:mb-14">
            <span className="uppercase tracking-wider mb-3 block" style={{ fontSize: "0.8125rem", fontWeight: 600, color: RED }}>
              Our Work
            </span>
            <h2 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, lineHeight: 1.2 }}>
              Portfolio & recent jobs
            </h2>
            <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              Browse recent Welsh Builds projects, including garages, garden buildings, roof replacements and outdoor improvement works.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 lg:mb-10">
            <div className="flex flex-wrap gap-3">
              {portfolioFilters.map((filter) => {
                const isActive = activePortfolioFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActivePortfolioFilter(filter)}
                    className="px-4 py-2 rounded-full border transition-colors cursor-pointer"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      backgroundColor: isActive ? RED : "white",
                      color: isActive ? "white" : "#1A1A1A",
                      borderColor: isActive ? RED : "rgba(0,0,0,0.08)",
                    }}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
            <div className="text-[#6B7280]" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
              {filteredProjectCount} {filteredProjectCount === 1 ? "project" : "projects"}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block text-white px-3 py-1 rounded-full mb-2" style={{ backgroundColor: RED, fontSize: "0.75rem", fontWeight: 500 }}>
                      {project.category}
                    </span>
                    <h3 className="text-white" style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}>{project.title}</h3>
                    <p className="text-white/80" style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}>{project.location}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-[#1A1A1A] mb-1" style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.3 }}>{project.title}</h3>
                  <p className="text-[#6B7280] mb-1" style={{ fontSize: "0.8125rem" }}>{project.location}</p>
                  <p className="text-[#6B7280]" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 lg:py-28 bg-[#080235]" style={sectionAnchor}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="uppercase tracking-wider mb-3 block" style={{ fontSize: "0.8125rem", fontWeight: 600, color: RED }}>
              Why Choose Welsh Builds
            </span>
            <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, lineHeight: 1.2 }}>
              The kind of company clients trust for garages and outdoor buildings
            </h2>
            <p className="text-white/60" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              Core reasons customers choose Welsh Builds for garage projects, roof replacements, doors and related outdoor works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: `${RED}22` }}>
                    <Icon className="w-6 h-6" style={{ color: RED }} />
                  </div>
                  <h3 className="text-white mb-2" style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}>{reason.title}</h3>
                  <p className="text-white/60" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 lg:py-28 bg-[#F5F3EF]" style={sectionAnchor}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="uppercase tracking-wider mb-3 block" style={{ fontSize: "0.8125rem", fontWeight: 600, color: RED }}>
              Testimonials
            </span>
            <h2 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, lineHeight: 1.2 }}>
              Customer feedback from recent Welsh Builds reviews
            </h2>
            <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              Read recent customer feedback on the quality of work, communication and service from the Welsh Builds team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div key={`${t.name}-${t.project}`} className="bg-white rounded-xl p-6 lg:p-8 border border-black/5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${RED}14` }}>
                    <Quote className="w-4 h-4" style={{ color: RED }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[#1A1A1A]" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>{t.name}</span>
                    <span className="text-[#6B7280] ml-2" style={{ fontSize: "0.8125rem" }}>{t.location}</span>
                  </div>
                </div>
                <p className="text-[#4A4F56] mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  "{t.text}"
                </p>
                <div className="pt-3 border-t border-black/5">
                  <span className="text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                    Project: {t.project}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-black/5">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#1A1A1A]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>Welsh Builds</span>
              <span className="text-[#6B7280]" style={{ fontSize: "0.875rem" }}>customer feedback and testimonials</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF8]" style={sectionAnchor}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <span className="uppercase tracking-wider mb-3 block" style={{ fontSize: "0.8125rem", fontWeight: 600, color: RED }}>
                Get in Touch
              </span>
              <h2 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, lineHeight: 1.2 }}>
                Ready to discuss your garage or outdoor building project?
              </h2>
              <p className="text-[#6B7280] mb-8" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Contact Welsh Builds for a free site survey and no-obligation fixed price quote. Display site visits are available by appointment in Uplawmoor.
              </p>

              <div className="space-y-5">
                <a href="tel:01505850501" className="flex items-start gap-4 group no-underline">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${RED}14` }}>
                    <Phone className="w-5 h-5" style={{ color: RED }} />
                  </div>
                  <div>
                    <span className="block text-[#1A1A1A] group-hover:text-[#CC0000] transition-colors" style={{ fontSize: "1rem", fontWeight: 600 }}>01505 850501</span>
                    <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>Office number</span>
                  </div>
                </a>

                <a href="tel:07733388538" className="flex items-start gap-4 group no-underline">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${RED}14` }}>
                    <Phone className="w-5 h-5" style={{ color: RED }} />
                  </div>
                  <div>
                    <span className="block text-[#1A1A1A] group-hover:text-[#CC0000] transition-colors" style={{ fontSize: "1rem", fontWeight: 600 }}>0773 338 8538</span>
                    <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>Mobile</span>
                  </div>
                </a>

                <a href="mailto:info@welshbuilds.co.uk" className="flex items-start gap-4 group no-underline">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${RED}14` }}>
                    <Mail className="w-5 h-5" style={{ color: RED }} />
                  </div>
                  <div>
                    <span className="block text-[#1A1A1A] group-hover:text-[#CC0000] transition-colors" style={{ fontSize: "1rem", fontWeight: 600 }}>info@welshbuilds.co.uk</span>
                    <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>Enquiries email</span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${RED}14` }}>
                    <MapPin className="w-5 h-5" style={{ color: RED }} />
                  </div>
                  <div>
                    <span className="block text-[#1A1A1A]" style={{ fontSize: "1rem", fontWeight: 600 }}>Uplawmoor, Glasgow G78 4AB</span>
                    <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>1 Neilston Road, Uplawmoor (display site by appointment)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-black/5">
                <div className="flex flex-wrap gap-4">
                  {["Free site survey", "Fixed price quote", "No sub contractors"].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-black/5">
                      <CheckCircle2 className="w-4 h-4" style={{ color: RED }} />
                      <span className="text-[#1A1A1A]" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-black/5 p-6 lg:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${RED}14` }}>
                      <CheckCircle2 className="w-8 h-8" style={{ color: RED }} />
                    </div>
                    <h3 className="text-[#1A1A1A] mb-2" style={{ fontSize: "1.375rem", fontWeight: 600, lineHeight: 1.3 }}>
                      Thank you for your enquiry
                    </h3>
                    <p className="text-[#6B7280] max-w-md mx-auto" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                      We've received your message and Welsh Builds will be in touch. If it's urgent, please call <a href="tel:01505850501" style={{ color: RED, fontWeight: 600 }}>01505 850501</a>.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-[#1A1A1A] mb-1" style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.3 }}>
                        Request a free quote
                      </h3>
                      <p className="text-[#6B7280]" style={{ fontSize: "0.875rem" }}>
                        Fill in the form below and Welsh Builds will get back to you.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>Your name *</label>
                          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Smith" className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all" style={{ fontSize: "0.9375rem" }} />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>Phone number *</label>
                          <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="07xxx xxx xxx" className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all" style={{ fontSize: "0.9375rem" }} />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>Email address</label>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all" style={{ fontSize: "0.9375rem" }} />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>What do you need? *</label>
                        <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all appearance-none" style={{ fontSize: "0.9375rem" }}>
                          <option value="">Select a service...</option>
                          {serviceOptions.map((option) => <option key={option}>{option}</option>)}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>Tell us about your project</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Briefly describe what you'd like to do, your rough timeline, and any details about the garage/building/site..." className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all resize-none" style={{ fontSize: "0.9375rem" }} />
                      </div>

                      <button type="submit" className="w-full flex items-center justify-center gap-2 text-white px-6 py-4 rounded-lg transition-colors border-none cursor-pointer" style={{ backgroundColor: RED, fontSize: "1rem", fontWeight: 600 }}>
                        <Send className="w-4 h-4" />
                        Send Enquiry
                      </button>

                      <p className="text-center text-[#9CA3AF]" style={{ fontSize: "0.8125rem" }}>
                        Free site survey and no-obligation fixed price quote.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
