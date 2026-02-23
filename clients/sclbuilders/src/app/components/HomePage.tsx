import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Phone, ArrowRight, Star, CheckCircle2, Clock, Award, Users, Shield,
  Home, Bath, ChefHat, Hammer, TreePine, Ruler,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const NAVY = "#1B2A4A";
const GOLD = "#D4A017";

const heroImg = stockImage("new build house construction scotland exterior", 101);
const midImg = stockImage("house extension modern interior quality finish", 102);
const teamImg = stockImage("construction team site managers builders professional", 103);

const services = [
  { icon: Home, title: "New Builds", desc: "Full new build projects from first dig to keys in hand — designed, managed and built by our own team." },
  { icon: Hammer, title: "Extensions", desc: "Single, double storey and wraparound extensions that add serious value to your home." },
  { icon: Home, title: "Loft Conversions", desc: "Transform unused loft space into beautiful, fully functional living space." },
  { icon: Bath, title: "Kitchens & Bathrooms", desc: "Complete kitchen and bathroom installations — fully fitted, plumbed, and tiled." },
  { icon: TreePine, title: "Landscaping", desc: "Driveways, patios, gardens and external works — finishing your project inside and out." },
  { icon: Ruler, title: "Design & Build", desc: "Full design service at no extra cost. We handle everything from drawings to handover." },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "1000+", label: "Projects Completed" },
  { value: "5/5", label: "Average Rating" },
  { value: "Gold", label: "Construction Line" },
];

const features = [
  { icon: Award, title: "Construction Line Gold", desc: "Nationally recognised accreditation. Proof that we meet the highest standards in the industry." },
  { icon: Clock, title: "On Time & On Budget", desc: "Every project managed with detailed timescales and fixed pricing. No surprises." },
  { icon: Shield, title: "Fully Qualified Team", desc: "All staff CSCS, SMSTS, NVQ and City & Guilds qualified. Disclosure Scotland verified." },
  { icon: Users, title: "30+ Years Experience", desc: "Over three decades serving residential and commercial clients across Scotland." },
];

const testimonials = [
  { name: "Michael T.", text: "SCL Builders delivered our new build on time and exactly to spec. Stephen and the team were professional from day one. Outstanding quality throughout.", rating: 5 },
  { name: "Anne W.", text: "We had a double storey extension built and the result is incredible. Well managed, clean site, and the finish is second to none. Highly recommend.", rating: 5 },
  { name: "David C.", text: "Used SCL for a full kitchen and bathroom renovation. Brilliant workmanship and great communication the whole way through. Will use again without hesitation.", rating: 5 },
];

export function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="SCL Builders" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(27,42,74,0.93) 0%, rgba(27,42,74,0.65) 50%, rgba(212,160,23,0.2) 100%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)" }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: GOLD }} />
              <span style={{ fontSize: "13px", color: "#FDE68A", fontWeight: 500 }}>Construction Line Gold · Hamilton · 30+ Years</span>
            </div>
            <h1 className="m-0 mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 5vw, 62px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1px" }}>
              If you can think it,<br />
              <span style={{ color: GOLD }}>we can build it.</span>
            </h1>
            <p className="mb-8" style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.7, maxWidth: "520px" }}>
              New builds, extensions, loft conversions, kitchens, bathrooms and landscaping — crafted to the highest standard by Scotland's trusted construction specialists.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white no-underline rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: GOLD, fontSize: "15px", fontWeight: 600 }}>
                <Phone size={18} />Get a Free Quote
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "15px", fontWeight: 600 }}>
                Our Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: GOLD }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="m-0" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, lineHeight: 1, color: NAVY }}>{stat.value}</p>
                <p className="m-0 mt-1" style={{ fontSize: "14px", color: "rgba(27,42,74,0.7)", fontWeight: 500 }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(212,160,23,0.1)", color: GOLD, fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>What We Do</span>
            <h2 className="m-0 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: NAVY }}>
              From First Dig to Final Finish
            </h2>
            <p className="m-0 mx-auto" style={{ fontSize: "16px", color: "#6B7280", maxWidth: "580px", lineHeight: 1.7 }}>
              We manage every aspect of your project in-house — architects, builders, project managers — so you have one point of contact from start to handover.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Link to="/services" className="block p-7 rounded-2xl no-underline transition-all duration-300" style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = "rgba(212,160,23,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(212,160,23,0.1)" }}>
                    <service.icon size={22} style={{ color: GOLD }} />
                  </div>
                  <h3 className="m-0 mb-2" style={{ fontSize: "17px", fontWeight: 700, color: NAVY }}>{service.title}</h3>
                  <p className="m-0" style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 no-underline" style={{ fontSize: "15px", fontWeight: 600, color: GOLD }}>
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(212,160,23,0.1)", color: GOLD, fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Why SCL</span>
              <h2 className="m-0 mb-5" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 700, color: NAVY, lineHeight: 1.2 }}>
                Solid craftsmanship.<br /><span style={{ color: GOLD }}>Social responsibility.</span>
              </h2>
              <p className="mb-8" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                At SCL Builders, we combine 30+ years of hands-on experience with a fully qualified, accredited team. Whether it's a new build or a bathroom renovation, every project gets the same level of attention, skill, and care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feature, i) => (
                  <motion.div key={feature.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(212,160,23,0.1)" }}>
                      <feature.icon size={18} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <h4 className="m-0 mb-1" style={{ fontSize: "14px", fontWeight: 700, color: NAVY }}>{feature.title}</h4>
                      <p className="m-0" style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
                <ImageWithFallback src={midImg} alt="SCL quality work" className="w-full h-[450px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 px-6 py-4 rounded-xl hidden lg:block" style={{ backgroundColor: NAVY, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}>
                <div className="flex items-center gap-3">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />)}</div>
                  <span style={{ fontSize: "14px", color: "#D1D5DB", fontWeight: 500 }}>1000+ completed projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(212,160,23,0.15)", color: "#FDE68A", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Testimonials</span>
            <h2 className="m-0 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 700 }}>What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="p-7 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="#FBBF24" color="#FBBF24" />)}</div>
                <p className="mb-5" style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.7, fontStyle: "italic" }}>"{t.text}"</p>
                <p className="m-0" style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>— {t.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="inline-flex items-center gap-2 no-underline" style={{ fontSize: "15px", fontWeight: 600, color: GOLD }}>
              Read more reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1 rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
              <ImageWithFallback src={teamImg} alt="SCL Builders team" className="w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(212,160,23,0.1)", color: GOLD, fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>About SCL</span>
              <h2 className="m-0 mb-5" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 700, color: NAVY, lineHeight: 1.2 }}>
                Your trusted partner<br /><span style={{ color: GOLD }}>for over 30 years.</span>
              </h2>
              <p className="mb-5" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                Based in Hamilton, SCL Builders has been delivering quality construction across Scotland for over three decades. Led by Stephen, our team includes skilled builders, architects and project managers — all working under one roof to deliver your project on time and on budget.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Construction Line Gold members",
                  "All staff CSCS / SMSTS / NVQ / City & Guilds qualified",
                  "Disclosure Scotland verified employees",
                  "Full employers and public liability insurance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} style={{ color: GOLD }} className="flex-shrink-0" />
                    <span style={{ fontSize: "14px", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white no-underline rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: NAVY, fontSize: "15px", fontWeight: 600 }}>
                <Phone size={18} />Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700 }}>
              Ready to start your project?
            </h2>
            <p className="m-0 mb-8 mx-auto" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "500px", lineHeight: 1.7 }}>
              Free quotation, no obligation. Get in touch and let's talk about what you want to build.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: GOLD, color: NAVY, fontSize: "15px", fontWeight: 700 }}>
                <Phone size={18} />Get Your Free Quote
              </Link>
              <a href="tel:07866939663" className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "15px", fontWeight: 600 }}>
                Call: 07866 939663
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
