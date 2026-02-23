import { Link } from "react-router";
import { motion } from "motion/react";
import { Briefcase, PoundSterling, MapPin, Users, ArrowRight, Mail } from "lucide-react";

const roles = [
  {
    title: "Experienced Builders",
    titlePL: "Doświadczeni Budowlańcy",
    type: "Full-time",
    desc: "Skilled builders for residential and commercial projects across Glasgow.",
    descPL: "Wykwalifikowani budowlańcy do projektów mieszkalnych i komercyjnych w Glasgow.",
  },
  {
    title: "Qualified Plasterers",
    titlePL: "Wykwalifikowani Tynkarze",
    type: "Full-time",
    desc: "Expert plasterers for smooth finishes on walls and ceilings.",
    descPL: "Doświadczeni tynkarze do wykończenia ścian i sufitów.",
  },
  {
    title: "Painters & Decorators",
    titlePL: "Malarze i Dekoratorzy",
    type: "Full-time / Contract",
    desc: "High-quality interior painting, finishing, and wallpapering.",
    descPL: "Wysokiej jakości malowanie, wykańczanie i tapetowanie wnętrz.",
  },
  {
    title: "Bathroom Fitters",
    titlePL: "Monterzy Łazienek",
    type: "Full-time",
    desc: "Experienced fitters for complete bathroom renovations including plumbing.",
    descPL: "Doświadczeni monterzy do kompleksowych remontów łazienek wraz z hydrauliką.",
  },
  {
    title: "Tilers",
    titlePL: "Glazurnicy",
    type: "Full-time / Contract",
    desc: "Professional floor and wall tiling to the highest standards.",
    descPL: "Profesjonalne układanie płytek podłogowych i ściennych według najwyższych standardów.",
  },
  {
    title: "Joiners & Carpenters",
    titlePL: "Stolarze i Cieśle",
    type: "Full-time",
    desc: "Skilled joiners for bespoke cabinetry, kitchen fitting, and structural work.",
    descPL: "Wykwalifikowani stolarze do mebli na wymiar, montażu kuchni i prac konstrukcyjnych.",
  },
];

const benefits = [
  { icon: PoundSterling, title: "Competitive Pay", titlePL: "Konkurencyjne Wynagrodzenie", desc: "Top rates reflecting your skills and experience.", descPL: "Najwyższe stawki odzwierciedlające Twoje umiejętności i doświadczenie." },
  { icon: Briefcase, title: "Consistent Work", titlePL: "Stała Praca", desc: "Steady projects across Glasgow and surrounding areas.", descPL: "Regularne projekty w Glasgow i okolicach." },
  { icon: Users, title: "Great Team", titlePL: "Świetny Zespół", desc: "Work alongside experienced, supportive professionals.", descPL: "Praca z doświadczonymi i pomocnymi specjalistami." },
  { icon: MapPin, title: "Diverse Projects", titlePL: "Różnorodne Projekty", desc: "Exciting variety — from small renovations to large builds.", descPL: "Ekscytująca różnorodność — od małych remontów po duże budowy." },
];

export function RecruitmentPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: "#111827" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Careers
            </span>
            <h1 className="m-0 mb-2 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15 }}>
              Join the PolBuilt Team
            </h1>
            <p className="m-0 mb-3" style={{ fontSize: "clamp(20px, 3vw, 32px)", color: "#9CA3AF", fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
              Dołącz do Zespołu PolBuilt
            </p>
            <div style={{ width: "48px", height: "2px", backgroundColor: "#B91C1C", marginBottom: "20px" }} />
            <p className="m-0 mb-1" style={{ fontSize: "16px", color: "#9CA3AF", maxWidth: "520px", lineHeight: 1.7 }}>
              We're always looking for skilled, reliable tradespeople who share our commitment to quality and client satisfaction.
            </p>
            <p className="m-0" style={{ fontSize: "14px", color: "#6B7280", maxWidth: "520px", lineHeight: 1.7 }}>
              Zawsze szukamy wykwalifikowanych, rzetelnych fachowców, którzy podzielają nasze zaangażowanie w jakość i zadowolenie klientów.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: "#B91C1C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <b.icon size={28} className="mx-auto mb-3" style={{ color: "rgba(255,255,255,0.9)" }} />
                <h4 className="m-0 mb-0.5 text-white" style={{ fontSize: "15px", fontWeight: 700 }}>{b.title}</h4>
                <p className="m-0 mb-1" style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>{b.titlePL}</p>
                <p className="m-0 mb-0.5" style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{b.desc}</p>
                <p className="m-0" style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>{b.descPL}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language badge */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
          <div className="flex items-center gap-3 mb-10">
            <span style={{ fontSize: "22px" }}>🇵🇱</span>
            <span style={{ fontSize: "13px", color: "#6B7280" }}>
              This page is available in Polish / Ta strona jest dostępna w języku polskim
            </span>
          </div>

          <h2 className="m-0 mb-1 text-center" style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700, color: "#111827" }}>
            Open Positions
          </h2>
          <p className="text-center mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#9CA3AF" }}>
            Wolne Stanowiska
          </p>
          <p className="text-center mb-10" style={{ fontSize: "14px", color: "#9CA3AF" }}>
            All roles are based in Glasgow and surrounding areas · Wszystkie stanowiska w Glasgow i okolicach
          </p>

          <div className="space-y-4">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-200"
                style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; e.currentTarget.style.borderColor = "rgba(185,28,28,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E5E7EB"; }}
              >
                <div>
                  <h3 className="m-0 mb-0.5" style={{ fontSize: "16px", fontWeight: 700, color: "#111827" }}>{role.title}</h3>
                  <p className="m-0 mb-2" style={{ fontSize: "13px", fontWeight: 500, color: "#B91C1C", fontStyle: "italic" }}>{role.titlePL}</p>
                  <p className="m-0 mb-0.5" style={{ fontSize: "13px", color: "#6B7280" }}>{role.desc}</p>
                  <p className="m-0" style={{ fontSize: "12px", color: "#9CA3AF", fontStyle: "italic" }}>{role.descPL}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="px-3 py-1 rounded-full" style={{ fontSize: "12px", fontWeight: 600, backgroundColor: "rgba(185,28,28,0.08)", color: "#B91C1C" }}>
                    {role.type}
                  </span>
                  <ArrowRight size={18} style={{ color: "#9CA3AF" }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Apply */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 mb-16 text-center p-10 rounded-2xl"
            style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}
          >
            <Mail size={36} className="mx-auto mb-4" style={{ color: "#B91C1C" }} />
            <h3 className="m-0 mb-1" style={{ fontSize: "20px", fontWeight: 700, color: "#111827" }}>
              Interested? Get in touch
            </h3>
            <p className="m-0 mb-4" style={{ fontSize: "15px", fontWeight: 600, color: "#9CA3AF", fontStyle: "italic" }}>
              Zainteresowany? Skontaktuj się z nami
            </p>
            <p className="m-0 mb-1 mx-auto" style={{ fontSize: "14px", color: "#6B7280", maxWidth: "400px", lineHeight: 1.7 }}>
              Send your CV and a brief description of your experience to our email, or contact us directly.
            </p>
            <p className="m-0 mb-6 mx-auto" style={{ fontSize: "13px", color: "#9CA3AF", maxWidth: "400px", lineHeight: 1.7, fontStyle: "italic" }}>
              Wyślij swoje CV i krótki opis doświadczenia na nasz adres e-mail lub skontaktuj się bezpośrednio.
            </p>
            <a
              href="mailto:info@polbuilt.co.uk"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white no-underline rounded-xl transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#B91C1C", fontSize: "15px", fontWeight: 600 }}
            >
              <Mail size={18} />
              info@polbuilt.co.uk
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
