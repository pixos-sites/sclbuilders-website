import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const blogPosts = [
  {
    title: "Top 5 Kitchen Renovation Trends in Glasgow for 2026",
    date: "February 15, 2026",
    excerpt: "Looking to update your kitchen? Here are the top 5 trends that Glasgow homeowners are loving this year, from handleless cabinets to bold colour schemes.",
    image: stockImage("kitchen renovation trends interior design modern kitchen", 401),
    tag: "Kitchen",
  },
  {
    title: "How to Choose the Right Builder in Glasgow",
    date: "January 28, 2026",
    excerpt: "Choosing the right builder is crucial for your project's success. We share our top tips on what to look for, questions to ask, and red flags to avoid.",
    image: stockImage("builder consultation plans home renovation contractor", 402),
    tag: "Advice",
  },
  {
    title: "Bathroom Renovation: A Complete Guide",
    date: "January 10, 2026",
    excerpt: "Planning a bathroom renovation? From tiling to plumbing, our comprehensive guide covers everything you need to know before starting your project.",
    image: stockImage("bathroom renovation planning tiles fixtures design", 403),
    tag: "Bathroom",
  },
  {
    title: "House Extensions: Planning Permission in Scotland",
    date: "December 20, 2025",
    excerpt: "Understanding planning permission requirements for house extensions in Scotland. What you need to know before breaking ground on your project.",
    image: stockImage("house extension planning drawings architecture home", 404),
    tag: "Extensions",
  },
  {
    title: "The Benefits of Hiring a Local Glasgow Builder",
    date: "December 5, 2025",
    excerpt: "Why choosing a local Glasgow builder like PolBuilt can save you time, money, and hassle. Local knowledge makes all the difference.",
    image: stockImage("glasgow street buildings scotland city architecture", 405),
    tag: "Glasgow",
  },
  {
    title: "Plastering vs Dry Lining: Which is Right for You?",
    date: "November 18, 2025",
    excerpt: "Both methods have their advantages. Here's what we recommend for different situations, and how to get the best finish for your walls.",
    image: stockImage("plastering interior walls renovation finishing", 406),
    tag: "Plastering",
  },
];

export function BlogPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: "#111827" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Blog
            </span>
            <h1 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700 }}>
              Tips, News &amp; Insights
            </h1>
            <p className="m-0 mx-auto" style={{ fontSize: "16px", color: "#9CA3AF", maxWidth: "520px", lineHeight: 1.7 }}>
              Stay up to date with the latest advice and tips from our experienced team of builders in Glasgow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden group cursor-pointer"
            style={{ backgroundColor: "white", border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
          >
            <div className="h-[280px] lg:h-auto overflow-hidden">
              <ImageWithFallback src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block self-start px-3 py-1 rounded-full mb-4" style={{ fontSize: "12px", fontWeight: 600, backgroundColor: "rgba(185,28,28,0.08)", color: "#B91C1C" }}>
                {blogPosts[0].tag}
              </span>
              <h2 className="m-0 mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>
                {blogPosts[0].title}
              </h2>
              <p className="mb-4" style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7 }}>{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-2" style={{ fontSize: "13px", color: "#9CA3AF" }}>
                <Calendar size={14} />
                {blogPosts[0].date}
              </div>
            </div>
          </motion.article>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-200"
                style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="h-[200px] overflow-hidden">
                  <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full" style={{ fontSize: "11px", fontWeight: 600, backgroundColor: "rgba(185,28,28,0.08)", color: "#B91C1C" }}>
                      {post.tag}
                    </span>
                    <span className="flex items-center gap-1" style={{ fontSize: "12px", color: "#9CA3AF" }}>
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="m-0 mb-2" style={{ fontSize: "16px", fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>
                    {post.title}
                  </h3>
                  <p className="m-0 mb-4" style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1" style={{ fontSize: "13px", fontWeight: 600, color: "#B91C1C" }}>
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
