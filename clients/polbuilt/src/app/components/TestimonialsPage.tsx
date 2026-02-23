import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "John M.", location: "Glasgow", text: "Polbuilt did an amazing job on our kitchen renovation. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommended!" },
  { name: "Sarah K.", location: "Glasgow South", text: "We had our bathroom completely refitted by Polbuilt and couldn't be happier. They were clean, tidy and very skilled. The end result is beautiful." },
  { name: "David R.", location: "Paisley", text: "From start to finish, the team at Polbuilt were fantastic. They built our house extension on time and on budget. We would use them again without hesitation." },
  { name: "Margaret W.", location: "East Kilbride", text: "The plastering and painting team did an excellent job in our hallway and living room. Very professional, great attention to detail, and very reasonably priced." },
  { name: "Tom H.", location: "Glasgow West", text: "I've used Polbuilt for several projects now - joinery work, tiling, and general building. Every time they deliver exceptional quality. Can't recommend them enough!" },
  { name: "Anna P.", location: "Glasgow North", text: "Polbuilt transformed our old shop into a modern retail space. The commercial renovation was handled brilliantly. Very reliable and trustworthy company." },
  { name: "James L.", location: "Clydebank", text: "Brilliant tiling work in our kitchen and bathroom. The finish is immaculate and the price was very fair. We've recommended them to several friends already." },
  { name: "Christine B.", location: "Hamilton", text: "Our house extension was a massive project but PolBuilt handled everything from planning to completion. Couldn't be more pleased with the professionalism." },
  { name: "Mark D.", location: "Bearsden", text: "Had our entire downstairs replastered and painted. The team was friendly, efficient, and the results are stunning. Best builders we've ever used." },
];

export function TestimonialsPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: "#111827" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Client Reviews
            </span>
            <h1 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700 }}>
              What Our Clients Say
            </h1>
            <p className="m-0 mx-auto" style={{ fontSize: "16px", color: "#9CA3AF", maxWidth: "520px", lineHeight: 1.7 }}>
              100% positive feedback from over 90 verified clients. Here's what some of them have to say about working with us.
            </p>

            {/* Rating Summary */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FBBF24" color="#FBBF24" />)}
              </div>
              <span className="text-white" style={{ fontSize: "20px", fontWeight: 700 }}>5.0</span>
              <span style={{ fontSize: "14px", color: "#9CA3AF" }}>average from 100+ reviews</span>
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
                <Quote size={28} style={{ color: "rgba(185,28,28,0.15)" }} className="mb-3" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#FBBF24" color="#FBBF24" />)}
                </div>
                <p className="mb-5 flex-1" style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div className="pt-4" style={{ borderTop: "1px solid #F3F4F6" }}>
                  <p className="m-0" style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{t.name}</p>
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
