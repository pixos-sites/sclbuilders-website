import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const NAVY = "#1B2A4A";
const GOLD = "#D4A017";

const testimonials = [
  { name: "Michael T.", location: "Hamilton", text: "SCL Builders delivered our new build on time and exactly to spec. Stephen and the team were professional from day one. Outstanding quality throughout — couldn't recommend them more highly." },
  { name: "Anne W.", location: "Blantyre", text: "We had a double storey extension built and the result is incredible. Well managed, clean site, and the finish is second to none. Will absolutely use SCL again." },
  { name: "David C.", location: "Motherwell", text: "Used SCL for a full kitchen and bathroom renovation. Brilliant workmanship and great communication the whole way through. Will use again without hesitation." },
  { name: "Karen S.", location: "Larkhall", text: "SCL handled our loft conversion from planning to handover. Everything went smoothly and the finished room is stunning. Very professional outfit." },
  { name: "Gordon M.", location: "East Kilbride", text: "From first meeting to handing over the keys — Stephen was honest, reliable and delivered exactly what he promised. The extension looks incredible." },
  { name: "Fiona B.", location: "Rutherglen", text: "We used SCL for a full house refurbishment. A complex project handled brilliantly — on budget, on time, and to a very high standard of finish." },
  { name: "Paul H.", location: "Cambuslang", text: "Had a new driveway and patio laid as part of an extension project. SCL managed everything and the outdoor space looks fantastic. Great value too." },
  { name: "Linda R.", location: "Uddingston", text: "The kitchen SCL fitted for us is beautiful. They managed the whole project including plumbing, electrical and tiling. Seamless from start to finish." },
  { name: "James D.", location: "Strathaven", text: "Used SCL for our self-build. Their design and project management was first class — they made a potentially stressful process feel completely manageable." },
];

export function TestimonialsPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(212,160,23,0.15)", color: "#FDE68A", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Client Reviews
            </span>
            <h1 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700 }}>
              What Our Clients Say
            </h1>
            <p className="m-0 mx-auto" style={{ fontSize: "16px", color: "#9CA3AF", maxWidth: "520px", lineHeight: 1.7 }}>
              Over 1,000 completed projects across Scotland. Here's what some of our clients have to say about working with us.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FBBF24" color="#FBBF24" />)}</div>
              <span className="text-white" style={{ fontSize: "20px", fontWeight: 700 }}>5.0</span>
              <span style={{ fontSize: "14px", color: "#9CA3AF" }}>from 1000+ completed projects</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="p-7 rounded-2xl flex flex-col" style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}>
                <Quote size={28} style={{ color: "rgba(212,160,23,0.2)" }} className="mb-3" />
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#FBBF24" color="#FBBF24" />)}</div>
                <p className="mb-5 flex-1" style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7, fontStyle: "italic" }}>"{t.text}"</p>
                <div className="pt-4" style={{ borderTop: "1px solid #F3F4F6" }}>
                  <p className="m-0" style={{ fontSize: "14px", fontWeight: 700, color: NAVY }}>{t.name}</p>
                  <p className="m-0" style={{ fontSize: "12px", color: "#9CA3AF" }}>{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
