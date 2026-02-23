import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Bath, ChefHat, Droplets, ArrowRight, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const NAVY = "#1B2A4A";
const GOLD = "#D4A017";

const heroImg = stockImage("house extension construction exterior glasgow", 201);

const services = [
  {
    icon: Home,
    title: "Extensions",
    desc: "A well-designed extension adds space, value, and transforms how you live. We handle single and double storey extensions from planning through to the last coat of paint — including all structural work, insulation, plastering, and decoration. One team, start to finish.",
    image: stockImage("house extension rear single storey modern", 202),
  },
  {
    icon: Home,
    title: "Loft Conversions",
    desc: "Your loft is valuable space just waiting to be used. Whether you want an extra bedroom, a home office, or a playroom, we'll design and build a loft conversion that works perfectly for your home — fully insulated, plastered, and decorated to a high standard.",
    image: stockImage("loft conversion bedroom interior modern velux", 203),
  },
  {
    icon: Bath,
    title: "Bathrooms",
    desc: "From a fresh refresh to a full gut and refit — our bathroom team handles everything. Tiling, plumbing, wet rooms, ensuites, and shower rooms. We work with your chosen suite or can source everything for you, and we leave the space spotless when we're done.",
    image: stockImage("bathroom renovation modern tiles shower fitting", 204),
  },
  {
    icon: ChefHat,
    title: "Kitchens",
    desc: "We supply, fit, and fully install kitchens of all sizes. From base and wall units through to worktops, splashbacks, appliances, and plumbing — our team manages the whole project so you don't have to coordinate multiple trades.",
    image: stockImage("kitchen renovation modern fitted units worktop", 205),
  },
  {
    icon: Droplets,
    title: "Damp Proofing",
    desc: "Damp is a serious problem that only gets worse without treatment. Our damp proofing specialists identify the source, treat it properly, and restore the affected area — giving you a dry, healthy home and lasting peace of mind.",
    image: stockImage("damp proofing wall treatment interior renovation", 206),
  },
  {
    icon: Home,
    title: "Roofing",
    desc: "Leaking roofs, missing tiles, flat roof repairs and full replacements — our roofing team covers it all. We work on all roof types and use quality materials that last. We also offer free roof inspections to identify issues before they become costly problems.",
    image: stockImage("roofing tiles repair replacement exterior uk", 207),
  },
];

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="Anniesland Builders services" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(27,42,74,0.90) 0%, rgba(212,160,23,0.3) 100%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(212,160,23,0.2)", border: "1px solid rgba(212,160,23,0.3)", color: "#FDE68A", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Our Services
            </span>
            <h1 className="m-0 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15 }}>
              Everything Your Home Needs,<br />One Trusted Team
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(212,160,23,0.1)" }}>
                    <service.icon size={26} style={{ color: GOLD }} />
                  </div>
                  <h2 className="m-0 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: NAVY }}>
                    {service.title}
                  </h2>
                  <p className="mb-6" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                    {service.desc}
                  </p>
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

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center p-12 rounded-2xl" style={{ backgroundColor: NAVY }}>
            <h3 className="m-0 mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700 }}>
              Not sure where to start?
            </h3>
            <p className="m-0 mb-6 mx-auto" style={{ fontSize: "15px", color: "#9CA3AF", maxWidth: "450px", lineHeight: 1.7 }}>
              Give us a call or send a message. We'll talk you through your options and provide a free, no-obligation quote.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: GOLD, color: NAVY, fontSize: "15px", fontWeight: 700 }}>
              <Phone size={18} />
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
