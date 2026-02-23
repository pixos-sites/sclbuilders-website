import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const NAVY = "#1B2A4A";
const GOLD = "#D4A017";

const testimonials = [
  { name: "Alan M.", location: "Clydebank", text: "Anniesland Builders did a fantastic job on our rear extension. Professional throughout, great quality, and finished on time. Would highly recommend to anyone." },
  { name: "Claire D.", location: "Anniesland", text: "Our bathroom renovation is stunning. The team were clean, tidy, and really easy to deal with. Couldn't be happier with the result — well worth every penny." },
  { name: "Steven R.", location: "Bearsden", text: "Had our loft converted into a bedroom and it's transformed the house. Great communication, fair price, brilliant finish. Will definitely use again." },
  { name: "Fiona T.", location: "Drumchapel", text: "The kitchen they fitted is beautiful. From pulling out the old one to the final clean up, they were professional every step of the way." },
  { name: "Gary W.", location: "Old Kilpatrick", text: "Had serious damp issues in our living room. Anniesland Builders diagnosed the problem properly and fixed it. No sign of it returning 18 months later." },
  { name: "Linda S.", location: "Yoker", text: "New roof looks great and hasn't leaked since. Quick, tidy, and very reasonably priced. Really happy with the whole job." },
  { name: "Paul H.", location: "Scotstoun", text: "They built a single storey extension on the back of our house. Planning to finish, the whole thing was handled brilliantly. Delighted with it." },
  { name: "Karen B.", location: "Partick", text: "Used Anniesland Builders for a full bathroom refit including wet room. Excellent quality, no mess left behind, and a fair price. Highly recommend." },
  { name: "James O.", location: "Whiteinch", text: "Really impressed from start to finish. They turned up when they said, kept us informed throughout, and the kitchen looks incredible." },
];

export function TestimonialsPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
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
              Hundreds of happy homeowners across Greater Glasgow. Here's what some of them have to say.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FBBF24" color="#FBBF24" />)}</div>
              <span className="text-white" style={{ fontSize: "20px", fontWeight: 700 }}>5.0</span>
              <span style={{ fontSize: "14px", color: "#9CA3AF" }}>from 500+ verified reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-7 rounded-2xl flex flex-col"
                style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}
              >
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
