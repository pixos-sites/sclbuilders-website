import { Outlet, Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const NAVY = "#1B2A4A";
const GOLD = "#D4A017";

export function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Top Bar */}
      <div className="w-full py-2 px-4 hidden md:block" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:07866939663" className="flex items-center gap-2 no-underline text-gray-300 hover:text-white transition-colors" style={{ fontSize: "13px" }}>
              <Phone size={13} />
              07866 939663
            </a>
            <a href="mailto:stephen@sclbuilders.com" className="flex items-center gap-2 no-underline text-gray-300 hover:text-white transition-colors" style={{ fontSize: "13px" }}>
              <Mail size={13} />
              stephen@sclbuilders.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-400" style={{ fontSize: "13px" }}>
            <MapPin size={13} />
            Hamilton &amp; Across Scotland
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className="w-full sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 no-underline group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: NAVY }}>
                  <span style={{ color: GOLD, fontWeight: 900, fontSize: "15px", letterSpacing: "1px" }}>SCL</span>
                </div>
                <div>
                  <span style={{ fontSize: "16px", fontWeight: 800, color: NAVY, fontFamily: "'Playfair Display', serif", display: "block", lineHeight: 1.1 }}>
                    SCL Builders
                  </span>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: GOLD, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                    Hamilton · Est. 30+ Years
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="no-underline px-3 py-2 rounded-lg transition-all duration-200"
                    style={{
                      fontSize: "14px",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? GOLD : "#374151",
                      backgroundColor: isActive ? "rgba(212,160,23,0.08)" : "transparent",
                    }}
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.04)"; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = "transparent"; }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-white no-underline rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: NAVY, fontSize: "14px", fontWeight: 600 }}
              >
                <Phone size={15} />
                Free Quote
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border-none cursor-pointer transition-colors"
                style={{ backgroundColor: mobileMenuOpen ? "#f3f4f6" : "transparent", color: "#374151" }}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pb-4" style={{ borderTop: "1px solid #f3f4f6" }}>
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="no-underline px-4 py-3 rounded-lg transition-colors"
                    style={{
                      fontSize: "15px",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? GOLD : "#374151",
                      backgroundColor: isActive ? "rgba(212,160,23,0.08)" : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link to="/contact" className="mt-2 flex items-center justify-center gap-2 px-5 py-3 text-white no-underline rounded-lg" style={{ backgroundColor: NAVY, fontSize: "15px", fontWeight: 600 }}>
                <Phone size={16} />
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1"><Outlet /></main>

      {/* Footer */}
      <footer style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <span style={{ color: GOLD, fontWeight: 900, fontSize: "15px", letterSpacing: "1px" }}>SCL</span>
                </div>
                <div>
                  <span style={{ fontSize: "15px", fontWeight: 800, color: "white", fontFamily: "'Playfair Display', serif", display: "block", lineHeight: 1.1 }}>SCL Builders</span>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: GOLD, letterSpacing: "1.5px", textTransform: "uppercase" }}>Hamilton · Est. 30+ Years</span>
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.7 }}>
                Hamilton's trusted construction specialists. New builds, extensions, renovations and more — 30+ years of solid craftsmanship across Scotland.
              </p>
            </div>

            <div>
              <h4 className="mb-4" style={{ color: "#ffffff", fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Services</h4>
              <div className="flex flex-col gap-2.5">
                {["New Builds", "Extensions", "Loft Conversions", "Kitchens & Bathrooms", "Landscaping", "Design & Build"].map((s) => (
                  <Link key={s} to="/services" className="no-underline transition-colors hover:text-white" style={{ fontSize: "14px", color: "#9CA3AF" }}>{s}</Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4" style={{ color: "#ffffff", fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Company</h4>
              <div className="flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path} className="no-underline transition-colors hover:text-white" style={{ fontSize: "14px", color: "#9CA3AF" }}>{item.label}</Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4" style={{ color: "#ffffff", fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Get in Touch</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:07866939663" className="flex items-center gap-3 no-underline text-gray-400 hover:text-white transition-colors" style={{ fontSize: "14px" }}>
                  <Phone size={16} className="flex-shrink-0" style={{ color: GOLD }} />07866 939663
                </a>
                <a href="tel:01698711162" className="flex items-center gap-3 no-underline text-gray-400 hover:text-white transition-colors" style={{ fontSize: "14px" }}>
                  <Phone size={16} className="flex-shrink-0" style={{ color: GOLD }} />01698 711162
                </a>
                <a href="mailto:stephen@sclbuilders.com" className="flex items-center gap-3 no-underline text-gray-400 hover:text-white transition-colors" style={{ fontSize: "14px" }}>
                  <Mail size={16} className="flex-shrink-0" style={{ color: GOLD }} />stephen@sclbuilders.com
                </a>
                <div className="flex items-center gap-3 text-gray-400" style={{ fontSize: "14px" }}>
                  <MapPin size={16} className="flex-shrink-0" style={{ color: GOLD }} />116 High Blantyre Rd, Hamilton ML3 9HW
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="m-0" style={{ fontSize: "13px", color: "#6B7280" }}>
              &copy; 2026 SCL Builders. All rights reserved. Construction Line Gold Members.
            </p>
            <p className="m-0" style={{ fontSize: "12px", color: "#4B5563" }}>Hamilton · Serving Scotland</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center border-none cursor-pointer shadow-lg transition-all duration-300 hover:scale-110 z-50" style={{ backgroundColor: GOLD, color: "white" }}>
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
