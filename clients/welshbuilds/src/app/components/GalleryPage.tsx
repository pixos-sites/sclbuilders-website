import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const galleryImages = [
  { src: stockImage("concrete sectional garage exterior completed", 301), caption: "Concrete Garage Installation", category: "Garages & Sheds" },
  { src: stockImage("brick garage build completed scotland", 302), caption: "Brick Garage Project", category: "Garages & Sheds" },
  { src: stockImage("garden room home office exterior completed", 303), caption: "Garden Room / Home Office", category: "Garages & Sheds" },
  { src: stockImage("garage door replacement installation", 304), caption: "Garage Door Installation", category: "Garage Doors" },
  { src: stockImage("landscaping patio driveway around garage", 305), caption: "Patio & Surrounding Landscaping", category: "Landscaping" },
  { src: stockImage("driveway paving installation exterior", 306), caption: "Driveway Works", category: "Landscaping" },
  { src: stockImage("asbestos garage roof replacement works", 307), caption: "Roof Replacement Works", category: "Asbestos Roof Replacement" },
  { src: stockImage("garage repair and refurbishment project", 308), caption: "Repairs & Maintenance", category: "Repairs & Maintenance" },
  { src: stockImage("commercial outbuilding or workshop project", 309), caption: "Commercial / Workshop Building", category: "Commercial Buildings" },
];

const categories = ["All", ...Array.from(new Set(galleryImages.map(i => i.category)))];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter(i => i.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section id="portfolio" className="py-20" style={{ backgroundColor: "#111827" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Our Work
            </span>
            <h1 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15 }}>
              Portfolio &amp; Recent Jobs
            </h1>
            <p className="m-0" style={{ fontSize: "16px", color: "#9CA3AF", maxWidth: "520px", lineHeight: 1.7 }}>
              A selection of recent Welsh Builds projects including garages, sheds, doors, roof replacements and landscaping works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-full border-none cursor-pointer transition-all duration-200"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  backgroundColor: activeCategory === cat ? "#B91C1C" : "white",
                  color: activeCategory === cat ? "white" : "#374151",
                  boxShadow: activeCategory === cat ? "none" : "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((image, i) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                onClick={() => setLightboxIndex(i)}
              >
                <ImageWithFallback src={image.src} alt={image.caption} className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-end p-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}>
                  <div>
                    <p className="m-0 text-white" style={{ fontSize: "15px", fontWeight: 600 }}>{image.caption}</p>
                    <p className="m-0" style={{ fontSize: "12px", color: "#D1D5DB" }}>{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border-none cursor-pointer"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}
            >
              <X size={20} />
            </button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
              <ImageWithFallback
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].caption}
                className="max-w-full max-h-[80vh] rounded-xl object-contain"
              />
              <p className="text-center mt-4 text-white" style={{ fontSize: "16px", fontWeight: 600 }}>
                {filtered[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
