import { useRef, useState } from "react";
import { ArrowUpRight, Check, Github, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formRef.current || status === "sending") return;
    setStatus("sending");
    emailjs.sendForm("service_6g3b5ii", "template_j2tnpzn", formRef.current, "0tPlUSrcOrO1DNC6k")
      .then(() => { setStatus("sent"); formRef.current?.reset(); })
      .catch(() => setStatus("error"));
  };
  return <section id="contact" className="section-band"><SectionReveal className="section-container"><div className="section-heading"><p className="section-label">05 / Contact</p><h2 className="section-title">Let's build something<br />thoughtful.</h2></div><div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
    <div><p className="text-muted-foreground leading-relaxed max-w-md">I'm open to graduate opportunities, collaborations, and conversations around machine learning, data, and applied AI.</p><div className="space-y-5 mt-9 text-sm"><a className="contact-link" href={`mailto:${profile.email}`}><Mail />{profile.email}</a><a className="contact-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone />{profile.phone}</a><p className="contact-link"><MapPin />{profile.location}</p><a className="contact-link" href={profile.github} target="_blank" rel="noopener noreferrer"><Github />github.com/nehakhadgi <ArrowUpRight className="ml-auto" /></a><a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin />linkedin.com/in/nehakhadgi <ArrowUpRight className="ml-auto" /></a></div></div>
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form"><div className="grid sm:grid-cols-2 gap-5"><label className="form-label">Your name<input name="from_name" required autoComplete="name" placeholder="Name" /></label><label className="form-label">Your email<input type="email" name="from_email" required autoComplete="email" placeholder="Email" /></label></div><label className="form-label">Your message<textarea name="message" required rows={6} placeholder="Tell me about the opportunity or idea" /></label><div className="flex flex-wrap items-center gap-4"><Button type="submit" size="lg" disabled={status === "sending"}>{status === "sending" ? <><Loader2 className="animate-spin" />Sending</> : status === "sent" ? <><Check />Message sent</> : <><Send />Send message</>}</Button><p className={`text-sm ${status === "error" ? "text-destructive" : "text-muted-foreground"}`} role="status">{status === "sent" ? "Thanks — I'll get back to you soon." : status === "error" ? "The message could not be sent. Please email me directly." : ""}</p></div></form>
  </div></SectionReveal></section>;
};
export default ContactSection;