import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Check, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || sending) return;
    setSending(true);

    emailjs
      .sendForm("service_6g3b5ii", "template_j2tnpzn", formRef.current, "0tPlUSrcOrO1DNC6k")
      .then(() => {
        setSubmitted(true);
        formRef.current?.reset();
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" ref={ref}>
      <div className="divider-gradient" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-16 mt-12">
            {/* Info */}
            <div className="space-y-8">
              <p className="text-muted-foreground font-body text-[15px] leading-relaxed">
                I'd love to hear about opportunities, collaborations, or interesting projects. 
                Feel free to reach out.
              </p>
              <div className="space-y-5">
                <a href="mailto:nehakhadgi@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-accent)" }}>
                    <Mail size={16} className="text-white" />
                  </div>
                  <span className="font-body text-foreground group-hover:text-accent transition-colors">nehakhadgi@gmail.com</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-sage)" }}>
                    <MapPin size={16} className="text-white" />
                  </div>
                  <span className="font-body text-foreground">Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono-label text-muted-foreground block mb-2">Full Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground font-body focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono-label text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground font-body focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="font-mono-label text-muted-foreground block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground font-body focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full justify-center"
              >
                {submitted ? (
                  <>
                    <Check size={16} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
