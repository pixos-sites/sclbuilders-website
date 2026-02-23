import { Link } from "react-router";
import { motion } from "motion/react";
import { Building2, Shield, Users, Phone, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const glasgowImg = stockImage("commercial building fit out office renovation", 501);

const clients = [
  "Shops & Retail Spaces",
  "Restaurants & Cafes",
  "Offices & Workspaces",
  "Dental Clinics & Laboratories",
  "Recording Studios",
  "Hair Salons & Beauty",
  "Letting Agencies",
  "Bakeries & Food Production",
  "Garages & Workshops",
  "Council Institutions",
];

export function CommercialPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={glasgowImg} alt="Glasgow skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(17,24,39,0.9) 0%, rgba(185,28,28,0.4) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(185,28,28,0.2)", border: "1px solid rgba(185,28,28,0.3)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Commercial
            </span>
            <h1 className="m-0 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15 }}>
              Commercial Building<br />Solutions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="m-0 mb-5" style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700, color: "#111827" }}>
                Trusted by businesses <span style={{ color: "#B91C1C" }}>across Glasgow</span>
              </h2>
              <p className="mb-5" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                Since PolBuilt was established, we've always been involved in commercial work. Our client
                list is substantial — from shops and restaurants to offices, garages, clinics, and more. We've
                also gained experience working for GHA, hospitals, and council institutions.
              </p>
              <p className="mb-5" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                Property developers appreciate dealing with just one contractor for all their building needs.
                We handle complete renovations and ongoing maintenance with equal professionalism.
              </p>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                Every commercial establishment is kept busy with their own business — that's why we're
                here to help, delivering our service efficiently and professionally, always adding value to each project.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}>
                <h3 className="m-0 mb-6" style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>
                  Sectors We've Worked With
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {clients.map((client) => (
                    <div key={client} className="flex items-center gap-3">
                      <CheckCircle2 size={16} style={{ color: "#B91C1C" }} className="flex-shrink-0" />
                      <span style={{ fontSize: "14px", color: "#374151" }}>{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Building2, title: "Registered Ltd Company", desc: "PolBuilt is registered as a limited company with full professional accountability." },
              { icon: Shield, title: "Fully Insured", desc: "Comprehensive insurance covering all work we undertake — public liability and employers liability." },
              { icon: Users, title: "H&S Compliant", desc: "Our staff is kept up to date with health & safety and risk assessment requirements." },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl text-center"
                style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "rgba(185,28,28,0.08)" }}>
                  <feat.icon size={26} style={{ color: "#B91C1C" }} />
                </div>
                <h4 className="m-0 mb-2" style={{ fontSize: "16px", fontWeight: 700, color: "#111827" }}>{feat.title}</h4>
                <p className="m-0" style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-12 rounded-2xl"
            style={{ backgroundColor: "#B91C1C" }}
          >
            <h3 className="m-0 mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700 }}>
              Need commercial building work?
            </h3>
            <p className="m-0 mb-6 mx-auto" style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", maxWidth: "450px" }}>
              Let us handle the building so you can focus on running your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "white", color: "#B91C1C", fontSize: "15px", fontWeight: 700 }}
            >
              <Phone size={18} />
              Get a Commercial Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
