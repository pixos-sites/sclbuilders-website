import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const galleryImages = [
  { src: stockImage("modern kitchen renovation finished project", 301), caption: "Modern Kitchen Renovation", category: "Kitchen" },
  { src: stockImage("minimalist bathroom renovation finished design", 302), caption: "Minimalist Bathroom Design", category: "Bathroom" },
  { src: stockImage("house extension rear glass extension uk home", 303), caption: "House Extension", category: "Extension" },
  { src: stockImage("interior painting decorator room renovation", 304), caption: "Interior Painting", category: "Painting" },
  { src: stockImage("joinery carpentry installation interior woodwork", 305), caption: "Expert Joinery Work", category: "Joinery" },
  { src: stockImage("professional tiling bathroom floor wall tiles", 306), caption: "Professional Tiling", category: "Tiling" },
  { src: stockImage("plastering wall skim coat interior builder", 307), caption: "Smooth Plastering", category: "Plastering" },
  { src: stockImage("building renovation work in progress site", 308), caption: "Building Work in Progress", category: "Building" },
  { src: stockImage("new construction house build exterior project", 309), caption: "New Construction Project", category: "Building" },
];

const categories = ["All", ...Array.from(new Set(galleryImages.map(i => i.category)))];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter(i => i.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: "#111827" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Our Work
            </span>
            <h1 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15 }}>
              Project Gallery
            </h1>
            <p className="m-0" style={{ fontSize: "16px", color: "#9CA3AF", maxWidth: "520px", lineHeight: 1.7 }}>
              Browse our recent projects and see the quality and attention to detail we bring to every job.
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
