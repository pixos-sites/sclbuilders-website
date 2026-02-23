import { Link } from "react-router";
import { motion } from "motion/react";
import { Building2, Layers, TreePine, DoorOpen, Shovel, AlertTriangle, ArrowRight, Phone, Wrench, Warehouse } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stockImage } from "./figma/stockImage";

const NAVY = "#0F1535";
const RED = "#CC0000";

const heroImg = stockImage("garage construction concrete building scotland", 201);

const services = [
  {
    id: "garages-sheds",
    icon: Building2,
    title: "Concrete Garages & Sheds",
    desc: "Concrete sectional garages and sheds built for long-term durability. We design, manufacture and install using our own in-house teams, with a wide range of sizes, layouts and finishes available.",
    image: stockImage("concrete sectional garage modern exterior scotland", 202),
  },
  {
    id: "brick-garages",
    icon: Layers,
    title: "Brick Garages, Sheds & Garden Buildings",
    desc: "Brick garages, sheds and bespoke garden buildings built to suit your property and requirements. Ideal for storage, workshop space or a long-term outbuilding solution.",
    image: stockImage("brick garage traditional build exterior", 203),
  },
  {
    id: "home-offices",
    icon: TreePine,
    title: "Home Offices & Garden Rooms",
    desc: "Bespoke home offices and garden rooms to create extra usable space. We build practical, comfortable buildings for work, hobbies or family use.",
    image: stockImage("garden building home office summer room exterior", 204),
  },
  {
    id: "garage-doors",
    icon: DoorOpen,
    title: "Doors, Windows & Extra's",
    desc: "Garage doors, windows and extras supplied and fitted for new and existing garages. We can replace old doors or upgrade existing buildings with the right options.",
    image: stockImage("hormann garage door modern installation", 205),
  },
  {
    id: "repairs-maintenance",
    icon: Wrench,
    title: "Garage Roof Repairs & Replacements",
    desc: "Garage roof repairs and replacements for damaged, leaking or ageing roofs. We also handle general repair work to keep garages safe, weatherproof and in use.",
    image: stockImage("garage repair maintenance exterior work", 308),
  },
  {
    id: "landscaping",
    icon: Shovel,
    title: "Landscaping, Driveways & Patios",
    desc: "Landscaping, driveways and patios to finish the area around your garage or building. Ideal when you want the full project completed by one company.",
    image: stockImage("driveway patio block paving installation", 206),
  },
  {
    id: "commercial-buildings",
    icon: Warehouse,
    title: "Commercial Concrete Sectional Buildings",
    desc: "Commercial concrete sectional buildings for storage and business use, with practical layouts and robust construction for long-term performance.",
    image: stockImage("commercial building warehouse unit exterior", 309),
  },
  {
    id: "asbestos-roof-replacement",
    icon: AlertTriangle,
    title: "Asbestos Roof Replacement",
    desc: "Asbestos garage roof replacement carried out safely and compliantly. We remove old roofs and install durable replacements with responsible disposal included.",
    image: stockImage("asbestos roof removal replacement garage", 207),
  },
];

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="Welsh Builds services" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(15,21,53,0.90) 0%, rgba(204,0,0,0.4) 100%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(204,0,0,0.2)", border: "1px solid rgba(204,0,0,0.3)", color: "#FCA5A5", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Our Services
            </span>
            <h1 className="m-0 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px" }}>
              Garages, Roofs, Doors &amp;<br />Outdoor Building Services
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                id={service.id}
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(204,0,0,0.08)" }}>
                    <service.icon size={26} style={{ color: RED }} />
                  </div>
                  <h2 className="m-0 mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: NAVY }}>
                    {service.title}
                  </h2>
                  <p className="mb-6" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                    {service.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 no-underline"
                    style={{ fontSize: "14px", fontWeight: 600, color: RED }}
                  >
                    Get a quote for this service <ArrowRight size={15} />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`} style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
                  <ImageWithFallback src={service.image} alt={service.title} className="w-full h-[300px] object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center p-12 rounded-2xl"
            style={{ backgroundColor: NAVY }}
          >
            <h3 className="m-0 mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700 }}>
              Not sure what you need?
            </h3>
            <p className="m-0 mb-6 mx-auto" style={{ fontSize: "15px", color: "#9CA3AF", maxWidth: "450px", lineHeight: 1.7 }}>
              We offer a free site survey and a free no-obligation fixed price quotation. Tell us what you need and we'll recommend the right option.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white no-underline rounded-xl transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: RED, fontSize: "15px", fontWeight: 600 }}
            >
              <Phone size={18} />
              Book a Free Survey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
