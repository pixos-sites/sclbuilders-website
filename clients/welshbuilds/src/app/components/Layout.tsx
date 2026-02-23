import { Outlet, Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Services", path: "/#services" },
  { label: "Our Work", path: "/#portfolio" },
  { label: "Why Us", path: "/#why-us" },
  { label: "Testimonials", path: "/#testimonials" },
  { label: "Contact", path: "/#contact" },
];

const footerLinks = [
  { label: "Services", path: "/#services" },
  { label: "Our Work", path: "/#portfolio" },
  { label: "Why Us", path: "/#why-us" },
  { label: "Testimonials", path: "/#testimonials" },
  { label: "Contact", path: "/#contact" },
];

const NAVY = "#0F1535";
const RED = "#CC0000";

export function Layout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-[60px] lg:pb-0" style={{ fontFamily: "'Inter', sans-serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3 no-underline shrink-0">
              <div>
                <img src="/images/welsh-builds-logo.png" alt="Welsh Builds" className="h-8 lg:h-9 w-auto block" />
                <span className="hidden lg:block" style={{ color: "#6B7280", fontSize: "0.7rem" }}>
                  D Harvie Builders Ltd
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="no-underline text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
                  style={{ fontSize: "0.875rem", fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:01505850501" className="flex items-center gap-2 no-underline text-[#1A1A1A]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                <Phone className="w-4 h-4" style={{ color: RED }} />
                01505 850501
              </a>
              <Link
                to="/#contact"
                className="no-underline text-white px-5 py-2.5 rounded-lg transition-colors"
                style={{ backgroundColor: RED, fontSize: "0.875rem", fontWeight: 600 }}
              >
                Get a Free Quote
              </Link>
            </div>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden p-2 text-[#1A1A1A] border-none bg-transparent"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-black/5">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block no-underline px-4 py-3 text-[#1A1A1A] hover:bg-[#F0EDEA] rounded-lg transition-colors"
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-black/5 mt-2 space-y-3">
                <a href="tel:01505850501" className="flex items-center gap-2 px-4 py-3 no-underline text-[#1A1A1A]" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  <Phone className="w-5 h-5" style={{ color: RED }} />
                  Call Welsh Builds
                </a>
                <Link
                  to="/#contact"
                  className="block text-center no-underline text-white px-5 py-3 rounded-lg mx-4"
                  style={{ backgroundColor: RED, fontSize: "1rem", fontWeight: 600 }}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#080235] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <img src="/images/welsh-builds-logo.png" alt="Welsh Builds" className="h-9 w-auto block" />
              </div>
              <p className="text-white/50 mb-6" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
                Concrete and brick garages, garden buildings, garage doors, asbestos roof replacement and landscaping services across Scotland.
              </p>
              <div className="space-y-3">
                <a href="tel:01505850501" className="flex items-center gap-2 no-underline text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" style={{ color: RED }} />
                  <span style={{ fontSize: "0.875rem" }}>01505 850501</span>
                </a>
                <a href="tel:07733388538" className="flex items-center gap-2 no-underline text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" style={{ color: RED }} />
                  <span style={{ fontSize: "0.875rem" }}>0773 338 8538</span>
                </a>
                <a href="mailto:info@welshbuilds.co.uk" className="flex items-center gap-2 no-underline text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" style={{ color: RED }} />
                  <span style={{ fontSize: "0.875rem" }}>info@welshbuilds.co.uk</span>
                </a>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4" style={{ color: RED }} />
                  <span style={{ fontSize: "0.875rem" }}>1 Neilston Road, Uplawmoor, Glasgow G78 4AB</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                SERVICES
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Concrete Garages",
                  "Brick Garages & Garden Buildings",
                  "Garage Doors & Openers",
                  "Asbestos Roof Replacement",
                  "Repairs & Maintenance",
                  "Landscaping, Driveways & Patios",
                ].map((service) => (
                  <li key={service}>
                    <Link to="/#services" className="no-underline text-white/50 hover:text-white transition-colors" style={{ fontSize: "0.875rem" }}>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                QUICK LINKS
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="no-underline text-white/50 hover:text-white transition-colors" style={{ fontSize: "0.875rem" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                START YOUR PROJECT
              </h4>
              <p className="text-white/50 mb-5" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
                Get in touch for a free site survey and no-obligation fixed price quote.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center w-full no-underline text-white px-5 py-3 rounded-lg transition-colors"
                style={{ backgroundColor: RED, fontSize: "0.9375rem", fontWeight: 600 }}
              >
                Get a Free Quote
              </Link>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/50" style={{ fontSize: "0.8125rem" }}>
                  Trusted customer reviews
                </span>
              </div>
            </div>
          </div>

          <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40" style={{ fontSize: "0.8125rem" }}>
              &copy; {new Date().getFullYear()} D Harvie Builders Ltd (Welsh Builds). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.welshbuilds.co.uk/" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontSize: "0.8125rem" }}>
                Current Website
              </a>
              <Link to="/#contact" className="no-underline text-white/40 hover:text-white/70 transition-colors" style={{ fontSize: "0.8125rem" }}>
                Contact Welsh Builds
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-black/5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-stretch">
          <a
            href="tel:01505850501"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[#1A1A1A] border-r border-black/5 active:bg-[#F0EDEA] transition-colors no-underline"
            style={{ fontSize: "0.875rem", fontWeight: 600 }}
          >
            <Phone className="w-4 h-4" style={{ color: RED }} />
            Call Now
          </a>
          <Link
            to="/#contact"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white active:opacity-90 transition-colors no-underline"
            style={{ backgroundColor: RED, fontSize: "0.875rem", fontWeight: 600 }}
          >
            <MessageSquare className="w-4 h-4" />
            Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
