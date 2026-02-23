import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const NAVY = "#0F1535";
const RED = "#CC0000";

const testimonials = [
  { name: "Wendy & Bert", location: "Scotland", text: "We are so pleased with our garage. It's perfect and exactly what we wanted. We have recommended your company to anyone that asks. Thanks to all your men." },
  { name: "Paul", location: "Scotland", text: "Thank you very much for everything. The garage and service has been fantastic. Great workmanship, super efficient and very customer friendly." },
  { name: "Karen & Neil", location: "Scotland", text: "Thank you so much for all your hard work with our garage and patio. We are delighted and your men did a terrific job." },
  { name: "Mr & Mrs Smith", location: "Scotland", text: "Thank you and your team for our lovely garage. We are really happy with it and couldn't ask for a better job." },
  { name: "George M", location: "Scotland", text: "Just a wee note to say thanks. Great service from start to finish and the garage looks brilliant." },
  { name: "Fiona", location: "Central Belt", text: "Welsh Builds made the process straightforward and kept us informed throughout. Delighted with the finished result." },
  { name: "Robert", location: "Central Belt", text: "Professional team, tidy workers and a very good finish. We would happily recommend Welsh Builds." },
  { name: "Sandra", location: "Central Belt", text: "The workmanship and service were excellent and the building was completed exactly as agreed." },
  { name: "James", location: "Central Belt", text: "We visited the display site first and then went ahead with the order. Very pleased with the quality and service." },
];

export function TestimonialsPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(204,0,0,0.2)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Customer Feedback
            </span>
            <h1 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700 }}>
              What Our Customers Say
            </h1>
            <p className="m-0 mx-auto" style={{ fontSize: "16px", color: "#9CA3AF", maxWidth: "520px", lineHeight: 1.7 }}>
              Welsh Builds has completed work for thousands of customers across Scotland. Here are examples of the kind of feedback shared by customers.
            </p>

            {/* Rating Summary */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FBBF24" color="#FBBF24" />)}
              </div>
              <span className="text-white" style={{ fontSize: "20px", fontWeight: 700 }}>5.0</span>
              <span style={{ fontSize: "14px", color: "#9CA3AF" }}>from customer feedback and testimonials</span>
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
                <Quote size={28} style={{ color: "rgba(204,0,0,0.15)" }} className="mb-3" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#FBBF24" color="#FBBF24" />)}
                </div>
                <p className="mb-5 flex-1" style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
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
