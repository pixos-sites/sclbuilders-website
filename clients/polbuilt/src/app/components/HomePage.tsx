import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Phone,
  ArrowRight,
  Hammer,
  PaintBucket,
  Bath,
  Grid3X3,
  Wrench,
  Home,
  Star,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const heroImg = stockImage("house extension exterior construction uk", 101);
const kitchenImg = stockImage("kitchen renovation interior finished modern", 102);
const teamImg = stockImage("construction site workers building renovation no women", 103);

const services = [
  { icon: Hammer, title: "Builders", desc: "Full construction projects from foundations to finishing touches." },
  { icon: PaintBucket, title: "Painters & Decorators", desc: "Immaculate painting, wallpapering, and finishing interiors." },
  { icon: Bath, title: "Bathroom Fitters", desc: "Complete bathroom renovations, plumbing and tiling included." },
  { icon: Grid3X3, title: "Tilers", desc: "Professional floor and wall tiling with precision and care." },
  { icon: Wrench, title: "Joiners", desc: "Expert carpentry, bespoke cabinetry, and kitchen fitting." },
  { icon: Home, title: "House Extensions", desc: "Extensions, conversions, and structural work handled end to end." },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "100+", label: "Happy Clients" },
  { value: "5/5", label: "Average Rating" },
  { value: "500+", label: "Projects Completed" },
];

const features = [
  { icon: Award, title: "Outstanding Quality", desc: "100% positive feedback from 90+ verified clients. We cooperate with credible, proven workers across all building trades." },
  { icon: Clock, title: "Always On Time", desc: "We provide detailed schedules and stick to them. No delays, no excuses — just reliable, punctual delivery every time." },
  { icon: Shield, title: "Best Value", desc: "Free quotations, open negotiations, and fixed-price contracts. We're dedicated to giving you the best value for your money." },
  { icon: Users, title: "Deep Experience", desc: "Trading since 2005, we're one of Glasgow's most experienced crews. We don't just follow trends — we set them." },
];

const testimonials = [
  { name: "John M.", text: "Polbuilt did an amazing job on our kitchen renovation. Professional, punctual, and the quality exceeded our expectations.", rating: 5 },
  { name: "Sarah K.", text: "We had our bathroom completely refitted and couldn't be happier. Clean, tidy and very skilled. The end result is beautiful.", rating: 5 },
  { name: "David R.", text: "They built our house extension on time and on budget. We would use them again without hesitation.", rating: 5 },
];

export function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="Modern construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.6) 50%, rgba(185,28,28,0.3) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(185,28,28,0.2)", border: "1px solid rgba(185,28,28,0.3)" }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#EF4444" }} />
              <span style={{ fontSize: "13px", color: "#FCA5A5", fontWeight: 500 }}>Glasgow's Trusted Builders Since 2005</span>
            </div>
            <h1 className="m-0 mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 5vw, 62px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1px" }}>
              Quality work for <br />
              <span style={{ color: "#EF4444" }}>less than you expect</span>
            </h1>
            <p className="mb-8" style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.7, maxWidth: "520px" }}>
              Decades of experience in construction, renovation, and design. One company for every building need — from small repairs to full house extensions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white no-underline rounded-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#B91C1C", fontSize: "15px", fontWeight: 600 }}
              >
                <Phone size={18} />
                Get a Free Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "15px", fontWeight: 600 }}
              >
                Our Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#B91C1C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="m-0 text-white" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, lineHeight: 1 }}>{stat.value}</p>
                <p className="m-0 mt-1" style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(185,28,28,0.08)", color: "#B91C1C", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              What We Do
            </span>
            <h2 className="m-0 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: "#111827", letterSpacing: "-0.5px" }}>
              One Company, Every Trade
            </h2>
            <p className="m-0 mx-auto" style={{ fontSize: "16px", color: "#6B7280", maxWidth: "580px", lineHeight: 1.7 }}>
              From small decorative works to major house extensions — our comprehensive team of specialists covers every aspect of building and construction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to="/services"
                  className="block p-7 rounded-2xl no-underline transition-all duration-300 group"
                  style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "rgba(185,28,28,0.2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(185,28,28,0.08)" }}>
                    <service.icon size={22} style={{ color: "#B91C1C" }} />
                  </div>
                  <h3 className="m-0 mb-2" style={{ fontSize: "17px", fontWeight: 700, color: "#111827" }}>{service.title}</h3>
                  <p className="m-0" style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 no-underline transition-colors hover:gap-3"
              style={{ fontSize: "15px", fontWeight: 600, color: "#B91C1C" }}
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(185,28,28,0.08)", color: "#B91C1C", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                Why PolBuilt
              </span>
              <h2 className="m-0 mb-5" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
                Builders you can <span style={{ color: "#B91C1C" }}>trust your house with</span>
              </h2>
              <p className="mb-8" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                At PolBuilt, we take a holistic approach to every project. Our goal is simple:
                to ensure you'll never need another building company. We bring quality,
                punctuality, and value to every job — big or small.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(185,28,28,0.08)" }}>
                      <feature.icon size={18} style={{ color: "#B91C1C" }} />
                    </div>
                    <div>
                      <h4 className="m-0 mb-1" style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{feature.title}</h4>
                      <p className="m-0" style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
                <ImageWithFallback src={kitchenImg} alt="Modern kitchen" className="w-full h-[450px] object-cover" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-xl hidden lg:block"
                style={{ backgroundColor: "#111827", boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                    ))}
                  </div>
                  <span style={{ fontSize: "14px", color: "#D1D5DB", fontWeight: 500 }}>100+ verified reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#111827" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Testimonials
            </span>
            <h2 className="m-0 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 700 }}>
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                <p className="mb-5" style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.7, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <p className="m-0" style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>— {t.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/testimonials" className="inline-flex items-center gap-2 no-underline transition-colors" style={{ fontSize: "15px", fontWeight: 600, color: "#EF4444" }}>
              Read more reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Team */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
            >
              <ImageWithFallback src={teamImg} alt="Construction team" className="w-full h-[400px] object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(185,28,28,0.08)", color: "#B91C1C", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                About Us
              </span>
              <h2 className="m-0 mb-5" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
                Avoid cowboy builders.<br />
                <span style={{ color: "#B91C1C" }}>Choose PolBuilt.</span>
              </h2>
              <p className="mb-5" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                Always validate the professional integrity of builders you're considering. Check what
                their clients say — reliable tradespeople earn positive feedback. We're proud of our
                100+ reviews from verified customers on MyBuilder.com, Google, and more.
              </p>
              <div className="space-y-3 mb-8">
                {["Fully insured — Public Liability & Employers Liability", "Free quotation & consultation — no strings attached", "Fixed-price contracts available", "One company for every building need"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} style={{ color: "#B91C1C" }} className="flex-shrink-0" />
                    <span style={{ fontSize: "14px", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white no-underline rounded-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#B91C1C", fontSize: "15px", fontWeight: 600 }}
              >
                <Phone size={18} />
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#B91C1C" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700 }}>
              Ready to transform your home?
            </h2>
            <p className="m-0 mb-8 mx-auto" style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", maxWidth: "500px", lineHeight: 1.7 }}>
              Get in touch today for a free, no-obligation quote. Your journey to a better home starts with a simple conversation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "white", color: "#B91C1C", fontSize: "15px", fontWeight: 700 }}
              >
                <Phone size={18} />
                Get Your Free Quote
              </Link>
              <a
                href="tel:07825232541"
                className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white", fontSize: "15px", fontWeight: 600 }}
              >
                Call: 078 252 325 41
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
