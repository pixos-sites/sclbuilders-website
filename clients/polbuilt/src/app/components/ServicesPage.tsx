import { Link } from "react-router";
import { motion } from "motion/react";
import { Hammer, PaintBucket, Bath, Grid3X3, Wrench, Home, ArrowRight, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const heroImg = stockImage("construction tools renovation workspace", 201);

const services = [
  {
    icon: Hammer,
    title: "Builders",
    desc: "A team of experienced workers who will help make your dream house come true. Whether it's a house extension, a complicated structural change, or something else entirely — contact us for outstanding results.",
    image: stockImage("builders renovating house interior structural work", 202),
  },
  {
    icon: PaintBucket,
    title: "Painters & Decorators",
    desc: "A highly skilled team with the highest standards of interior finishing. Our experience includes painting, finishing, and wallpapering — always communicating with clients to exceed expectations.",
    image: stockImage("interior painting decorating wall roller professional", 203),
  },
  {
    icon: Bath,
    title: "Bathroom Fitters",
    desc: "Looking to renew or completely transform your bathroom? Our fitters handle everything from plumbing to tiling. Small toilet rooms, ensuites, or shower rooms — we'll deliver it to perfection.",
    image: stockImage("bathroom renovation fitting tiles shower room modern", 204),
  },
  {
    icon: Grid3X3,
    title: "Tilers",
    desc: "Professional tiling assistance for any required area, with any type of tiles of your choosing. We offer the finest, most affordable, and most trustworthy tiling service available.",
    image: stockImage("tiling floor wall ceramic installation close up", 205),
  },
  {
    icon: Wrench,
    title: "Joiners",
    desc: "Your dream of a perfect home fulfilled with expert joinery. Whether you need structural changes or smaller interior jobs, we provide the best carpentry service in town.",
    image: stockImage("joinery carpentry workshop wood cabinetry fitting", 206),
  },
  {
    icon: Home,
    title: "House Extensions & Conversions",
    desc: "From foundations to the last touch of paint. We coordinate builders, electricians, gas engineers — everything you need under one roof. Your one-stop building solution.",
    image: stockImage("house extension conversion renovation exterior rear extension", 207),
  },
];

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="House extension" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(17,24,39,0.88) 0%, rgba(185,28,28,0.5) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(185,28,28,0.2)", border: "1px solid rgba(185,28,28,0.3)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Our Services
            </span>
            <h1 className="m-0 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px" }}>
              Comprehensive Building<br />Solutions in Glasgow
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(185,28,28,0.08)" }}>
                    <service.icon size={26} style={{ color: "#B91C1C" }} />
                  </div>
                  <h2 className="m-0 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#111827" }}>
                    {service.title}
                  </h2>
                  <p className="mb-6" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                    {service.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 no-underline"
                    style={{ fontSize: "14px", fontWeight: 600, color: "#B91C1C" }}
                  >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center p-12 rounded-2xl"
            style={{ backgroundColor: "#111827" }}
          >
            <h3 className="m-0 mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700 }}>
              Need something else?
            </h3>
            <p className="m-0 mb-6 mx-auto" style={{ fontSize: "15px", color: "#9CA3AF", maxWidth: "450px", lineHeight: 1.7 }}>
              We offer free advice and quotation — no strings attached. Get in touch and let's discuss your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white no-underline rounded-xl transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#B91C1C", fontSize: "15px", fontWeight: 600 }}
            >
              <Phone size={18} />
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
