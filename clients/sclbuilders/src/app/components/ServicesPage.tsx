import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Bath, ChefHat, Hammer, TreePine, Ruler, ArrowRight, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const NAVY = "#1B2A4A";
const GOLD = "#D4A017";

const heroImg = stockImage("new build house construction scotland exterior", 201);

const services = [
  {
    icon: Home,
    title: "New Builds",
    desc: "From self-builds to full contractor packages — we manage your new build project from the first dig to the day you get your keys. Our team includes architects, project managers and skilled builders all working under one roof, ensuring your build is delivered on time, on budget, and to specification.",
    image: stockImage("new build house construction exterior scotland", 202),
  },
  {
    icon: Hammer,
    title: "Extensions",
    desc: "A well-planned extension is one of the best investments you can make in your home. SCL Builders handles all types — single storey, double storey, side returns, and wraparounds. We take care of planning, structural work, insulation, plastering, and finishing — one team, start to finish.",
    image: stockImage("house extension rear double storey modern", 203),
  },
  {
    icon: Home,
    title: "Loft Conversions",
    desc: "Your loft is valuable space going to waste. We'll convert it into a stunning bedroom, home office, or playroom — fully insulated, floored, plastered, and decorated. All required structural work, Velux windows, and access stairs included as standard.",
    image: stockImage("loft conversion bedroom interior modern velux", 204),
  },
  {
    icon: Bath,
    title: "Kitchens & Bathrooms",
    desc: "Complete kitchen and bathroom installations from design through to handover. We supply, fit, plumb and tile — managing every trade so you don't have to. Wet rooms, ensuites, family bathrooms and full kitchen renovations all handled with the same high standard of finish.",
    image: stockImage("kitchen bathroom renovation modern fitted quality", 205),
  },
  {
    icon: TreePine,
    title: "Landscaping",
    desc: "We complete your project inside and out. Driveways, patios, decking, boundary walls and full garden landscaping — all carried out to the same high standard as our building work. The perfect finishing touch to any new build or extension project.",
    image: stockImage("landscaping driveway patio garden scotland", 206),
  },
  {
    icon: Ruler,
    title: "Design & Build",
    desc: "Full design and build packages with architectural drawings included at no extra cost. From concept to completion — we handle planning applications, structural calculations, material selection and full project management. One contract, one team, one point of contact.",
    image: stockImage("architect plans design build project management", 207),
  },
];

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="SCL Builders services" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(27,42,74,0.90) 0%, rgba(212,160,23,0.3) 100%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(212,160,23,0.2)", border: "1px solid rgba(212,160,23,0.3)", color: "#FDE68A", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Our Services
            </span>
            <h1 className="m-0 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15 }}>
              If You Can Think It,<br />We Can Build It.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(212,160,23,0.1)" }}>
                    <service.icon size={26} style={{ color: GOLD }} />
                  </div>
                  <h2 className="m-0 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: NAVY }}>{service.title}</h2>
                  <p className="mb-6" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>{service.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 no-underline" style={{ fontSize: "14px", fontWeight: 600, color: GOLD }}>
                    Get a quote for this service <ArrowRight size={15} />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`} style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
                  <ImageWithFallback src={service.image} alt={service.title} className="w-full h-[300px] object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center p-12 rounded-2xl" style={{ backgroundColor: NAVY }}>
            <h3 className="m-0 mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700 }}>Have a project in mind?</h3>
            <p className="m-0 mb-6 mx-auto" style={{ fontSize: "15px", color: "#9CA3AF", maxWidth: "450px", lineHeight: 1.7 }}>
              We offer free quotations and full design services at no extra cost. Get in touch and let's talk through your project.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: GOLD, color: NAVY, fontSize: "15px", fontWeight: 700 }}>
              <Phone size={18} />Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
