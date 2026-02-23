import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const NAVY = "#1B2A4A";
const GOLD = "#D4A017";

export function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "ca9c9fe3-7e54-4750-b5f3-dab5153f81ea",
        subject: "New Enquiry from Anniesland Builders Website",
        ...formData,
      }),
    });
    if (response.ok) setSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "0141 954 2265", href: "tel:01419542265" },
    { icon: Mail, label: "Email", value: "info@annieslandbuildersgroup.co.uk", href: "mailto:info@annieslandbuildersgroup.co.uk" },
    { icon: MapPin, label: "Address", value: "179 Duntocher Rd, Clydebank G81 3NE", href: null },
    { icon: Clock, label: "Hours", value: "Mon-Fri 8am-5pm", href: null },
  ];

  const inputStyle: React.CSSProperties = {
    fontSize: "14px",
    backgroundColor: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(212,160,23,0.15)", color: "#FDE68A", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Contact Us
            </span>
            <h1 className="m-0 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 700 }}>
              Let's Talk About Your Project
            </h1>
            <p className="m-0 mx-auto" style={{ fontSize: "16px", color: "#9CA3AF", maxWidth: "520px", lineHeight: 1.7 }}>
              Free quotation, free consultation — no obligation. Get in touch and we'll get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <h2 className="m-0 mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: NAVY }}>Get in touch</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(212,160,23,0.1)" }}>
                      <item.icon size={20} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <p className="m-0 mb-0.5" style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="no-underline hover:underline" style={{ fontSize: "15px", fontWeight: 600, color: NAVY }}>{item.value}</a>
                      ) : (
                        <p className="m-0" style={{ fontSize: "15px", fontWeight: 600, color: NAVY }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: NAVY }}>
                <h4 className="m-0 mb-2 text-white" style={{ fontSize: "16px", fontWeight: 700 }}>Prefer to call?</h4>
                <p className="m-0 mb-4" style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.6 }}>
                  Give us a call during business hours and we'll be happy to discuss your project straight away.
                </p>
                <a href="tel:01419542265" className="inline-flex items-center gap-2 px-5 py-3 text-white no-underline rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: GOLD, color: NAVY, fontSize: "14px", fontWeight: 700 }}>
                  <Phone size={16} />
                  0141 954 2265
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="p-8 sm:p-10 rounded-2xl" style={{ backgroundColor: "white", border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <CheckCircle size={56} className="mx-auto mb-5" style={{ color: "#16A34A" }} />
                    <h3 className="m-0 mb-3" style={{ fontSize: "24px", fontWeight: 700, color: NAVY }}>Message Sent!</h3>
                    <p className="m-0" style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
                      Thank you for reaching out. We'll be in touch as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="m-0 mb-1" style={{ fontSize: "20px", fontWeight: 700, color: NAVY }}>Request a Free Quote</h3>
                    <p className="m-0 mb-8" style={{ fontSize: "14px", color: "#9CA3AF" }}>Fill in the form and we'll be in touch within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block mb-2" style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>Full Name *</label>
                          <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Smith" style={inputStyle} onFocus={(e) => e.target.style.borderColor = GOLD} onBlur={(e) => e.target.style.borderColor = "#E5E7EB"} />
                        </div>
                        <div>
                          <label className="block mb-2" style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>Email *</label>
                          <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" style={inputStyle} onFocus={(e) => e.target.style.borderColor = GOLD} onBlur={(e) => e.target.style.borderColor = "#E5E7EB"} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block mb-2" style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>Phone</label>
                          <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="07XXX XXX XXX" style={inputStyle} onFocus={(e) => e.target.style.borderColor = GOLD} onBlur={(e) => e.target.style.borderColor = "#E5E7EB"} />
                        </div>
                        <div>
                          <label className="block mb-2" style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>Service Needed</label>
                          <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} style={{ ...inputStyle, appearance: "auto" as any }} onFocus={(e) => e.target.style.borderColor = GOLD} onBlur={(e) => e.target.style.borderColor = "#E5E7EB"}>
                            <option value="">Select a service...</option>
                            <option>Extension</option>
                            <option>Loft Conversion</option>
                            <option>Bathroom</option>
                            <option>Kitchen</option>
                            <option>Damp Proofing</option>
                            <option>Roofing</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2" style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>Project Details *</label>
                        <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." style={{ ...inputStyle, resize: "none" as any }} onFocus={(e) => e.target.style.borderColor = GOLD} onBlur={(e) => e.target.style.borderColor = "#E5E7EB"} />
                      </div>
                      <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border-none cursor-pointer rounded-xl transition-all duration-200 hover:scale-105" style={{ backgroundColor: GOLD, color: NAVY, fontSize: "15px", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
