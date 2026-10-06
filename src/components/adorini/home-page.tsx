import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Check, CheckCheck, ChevronLeft, ChevronRight, Clock3, Facebook, Hammer, HeartHandshake, House, Instagram, Mail, MapPin, Menu, MessageSquare, Phone, Plus, ShieldCheck, Star } from "lucide-react";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { business, images, navigation, processSteps, projects, reviews, services } from "@/lib/adorini-content";
import { ContactForm } from "./contact-form";

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? {} : { opacity: [0.65, 1], y: [14, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay, ease: "easeOut" }}>{children}</motion.div>;
}
function Wordmark() {
  return <a className="wordmark w-fit" href="#home" aria-label="Adorini Homes home">ADORINI<span>HOMES</span></a>;
}
function QuoteButton({ children = "Get a Quote", variant = "timber" }: { children?: ReactNode; variant?: "timber" | "heroOutline" | "editorial" }) {
  return <Button variant={variant} size="editorial" asChild><a href="#contact">{children}<ArrowUpRight /></a></Button>;
}
function SocialLinks() {
  return <div className="flex items-center gap-4"><a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Adorini Homes on Facebook"><Facebook className="size-3.5" /></a><a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Adorini Homes on Instagram"><Instagram className="size-3.5" /></a></div>;
}
function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", escape); };
  }, [menuOpen]);
  return <>
    <div className="utility-bar hidden md:block"><div className="container-editorial flex h-full items-center justify-between"><span>Thoughtfully built. Personally delivered.</span><div className="flex items-center gap-6"><a className="flex items-center gap-2" href={business.phoneLink}><Phone className="size-3" />{business.phone}</a><a className="flex items-center gap-2" href={`mailto:${business.email}`}><Mail className="size-3" />{business.email}</a><SocialLinks /></div></div></div>
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}><div className="container-editorial header-inner"><Wordmark /><nav className="desktop-nav hidden md:flex" aria-label="Main navigation">{navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav><div className="hidden md:block"><QuoteButton /></div><Button variant="ghost" size="icon" aria-label="Open menu" aria-expanded={menuOpen} className="md:hidden" onClick={() => setMenuOpen(true)}><Menu /></Button></div></header>
    <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
      <DialogContent className="mobile-menu max-w-none translate-x-0 translate-y-0 border-0 rounded-none" aria-describedby="mobile-nav-description">
        <DialogTitle className="sr-only">Navigation menu</DialogTitle><DialogDescription id="mobile-nav-description" className="sr-only">Explore Adorini Homes and contact us about your project.</DialogDescription>
        <div className="flex items-center justify-between"><div onClick={() => setMenuOpen(false)}><Wordmark /></div></div>
        <nav aria-label="Mobile navigation">{navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>
        <Button asChild variant="timber" size="editorial"><a href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote <ArrowUpRight /></a></Button><Button asChild variant="editorial" size="editorial" className="mt-3"><a href={business.phoneLink}><Phone />Call {business.phone}</a></Button>
        <div className="mt-auto pb-6"><SocialLinks /></div>
      </DialogContent>
    </Dialog>
  </>;
}
function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <img className="hero-image" src={images.home.src} alt={images.home.alt} width={1024} height={768} fetchPriority="high" />
    <div className="container-editorial hero-inner"><Reveal>
      <div className="eyebrow text-hero-muted">Built with care. Made for you.</div>
      <h1 id="hero-title">Your Vision.<br /><em>Our Foundation.</em></h1>
      <p className="hero-description">Custom homes, renovations and quality carpentry.<br className="hidden sm:block" /> Built with care from concept to completion.</p>
      <div className="mt-8 flex flex-wrap gap-3"><QuoteButton>Get a Free Quote</QuoteButton><Button asChild variant="heroOutline" size="editorial"><a href="#services">View Our Services <ArrowRight /></a></Button></div>
    </Reveal>
    <div className="hero-bottom"><div className="hero-trust"><span><ShieldCheck />10+ Years Experience</span><span><HeartHandshake />Personalised Approach</span><span><CheckCheck />Satisfaction Guaranteed</span></div><a className="flex shrink-0 items-center gap-3 text-[9px] uppercase tracking-[1.5px]" href="#about" aria-label="Scroll to About Adorini Homes"><span className="hidden sm:inline">Discover Adorini</span><ArrowDown className="size-4" /></a></div>
    </div>
  </section>;
}
function About() {
  return <section id="about" className="section-space"><div className="container-editorial">
    <Reveal className="grid gap-8 md:grid-cols-2 md:gap-20"><div><div className="eyebrow text-muted-foreground">A personal approach to building</div><h2 className="mt-5">Built on Experience.<br /><em>Focused on Your Home.</em></h2></div><div className="md:pt-9"><p className="text-sm text-muted-foreground">Adorini Homes delivers custom residential building, renovations and carpentry with a hands-on, personalised approach. With over a decade of experience, the focus is simple: quality workmanship, clear communication and a finished result you’re proud to call home.</p><a className="mt-5 inline-flex items-center gap-3 text-xs font-medium" href="#contact">Let’s talk about your home <ArrowUpRight className="size-4 text-primary" /></a></div></Reveal>
    <Reveal className="intro-stats"><div className="intro-stat"><strong>10<span className="text-primary">+</span></strong><div className="text-xs leading-relaxed">Years of experience<br /><span className="text-muted-foreground">A foundation you can trust</span></div></div><div className="intro-stat"><House /><div className="text-xs leading-relaxed">Your home, your way<br /><span className="text-muted-foreground">Builds, renovations & carpentry</span></div></div><div className="intro-stat"><MessageSquare /><div className="text-xs leading-relaxed">Clear communication<br /><span className="text-muted-foreground">From start to finish</span></div></div></Reveal>
  </div></section>;
}
function Services() {
  return <section id="services" className="section-space bg-surface"><div className="container-editorial">
    <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="eyebrow text-muted-foreground">Our expertise</div><h2 className="mt-4">What are you planning?</h2></div><p className="max-w-xs text-xs text-muted-foreground">A new beginning or a thoughtful transformation.<br />We’re here to build it with you.</p></Reveal>
    <div className="mt-10 grid gap-6 md:grid-cols-3">{services.map((service, index) => <Reveal key={service.title} delay={index * 0.08} className="flex"><article className="service-card w-full"><div className="photo"><img src={service.image.src} alt={service.image.alt} width={768} height={640} loading="lazy" /></div><div className="service-card-content"><div className="flex justify-between"><span className="category-tag">{service.tag}</span><span className="text-[10px] text-muted-foreground">/ {service.number}</span></div><h3 className="mt-3">{service.title}</h3><p className="mt-3 text-xs text-muted-foreground">{service.description}</p><ul>{service.points.map((point) => <li key={point}><Check />{point}</li>)}</ul><a className="service-link" href="#contact">Get in touch <ArrowUpRight className="size-4 text-primary" /></a></div></article></Reveal>)}</div>
  </div></section>;
}
const features = [
  { icon: Hammer, title: "Expert Craftsmanship", text: "Attention to every detail. Beautiful workmanship made to stand the test of time." },
  { icon: ShieldCheck, title: "Proven Experience", text: "Over a decade of building experience, brought to every home and every project." },
  { icon: HeartHandshake, title: "Personalised Approach", text: "Your ideas matter. A hands-on approach with honest, clear communication." },
  { icon: CheckCheck, title: "Satisfaction Guaranteed", text: "A deep commitment to getting it right and creating a result you’re proud of." },
];
function WhyUs() {
  return <section className="section-space"><div className="container-editorial grid items-center gap-10 md:grid-cols-2 md:gap-16">
    <Reveal><div className="photo why-photo"><img src={images.showcase.src} alt={images.showcase.alt} width={1024} height={576} loading="lazy" /><div className="photo-note"><strong>10<span className="text-primary">+</span></strong><div><div className="text-xs font-medium">Years of building with care.</div><div className="mt-1 text-[10px] text-muted-foreground">Experience in every detail.</div></div></div></div></Reveal>
    <Reveal><div className="eyebrow text-muted-foreground">The Adorini difference</div><h2 className="mt-5">Building Homes.<br /><em>Creating Trust.</em></h2><p className="mt-5 text-xs text-muted-foreground">For over 10 years, we’ve been dedicated to delivering high-quality homes with craftsmanship you can trust. From custom builds to renovations, we bring your vision to life with precision, professionalism and a deep commitment to excellence.</p><div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <div key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}</div><div className="mt-8 grid gap-3 border-t border-border pt-6 text-[11px]">{["Custom home design and build", "10+ years of hands-on experience", "Innovative techniques and modern solutions"].map((point) => <span key={point} className="flex items-center gap-2"><Check className="size-3.5 text-primary" />{point}</span>)}</div><div className="mt-7"><QuoteButton>Build with Adorini</QuoteButton></div></Reveal>
  </div></section>;
}
function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);
  const visible = projects.filter((project) => filter === "All" || project.category === filter);
  const selectedProject = selected === null ? undefined : projects[selected];
  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setSelected((value) => value === null ? null : (value + 1) % projects.length);
      if (event.key === "ArrowLeft") setSelected((value) => value === null ? null : (value + projects.length - 1) % projects.length);
    };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [selected]);
  return <section id="projects" className="section-space bg-surface"><div className="container-editorial">
    <Reveal><div className="eyebrow text-muted-foreground">Made for living</div><h2 className="mt-4">Creating Your Ideal Living Space.</h2><div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-center"><p className="text-xs text-muted-foreground">Thoughtful spaces. Quality details. A little inspiration for your next chapter.</p><div className="flex flex-wrap gap-1" aria-label="Filter projects">{["All", "New Homes", "Renovations", "Carpentry"].map((category) => <Button key={category} variant={category === filter ? "filterActive" : "filter"} aria-pressed={category === filter} onClick={() => setFilter(category)} className="px-3">{category}</Button>)}</div></div></Reveal>
    <div className="gallery-grid mt-8">{visible.map((project) => <Button variant="ghost" key={project.title} className="gallery-item photo" onClick={() => setSelected(projects.indexOf(project))} aria-label={`View ${project.title}`}><img src={project.image.src} alt={project.image.alt} loading="lazy" width={768} height={768} /><div className="gallery-caption"><div><small>{project.category}</small><strong>{project.title}</strong></div><Plus /></div></Button>)}</div>
    <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row"><p className="text-[10px] text-muted-foreground">A selection of imagery from Adorini Homes.</p><a className="inline-flex items-center gap-2 text-xs font-medium" href="#contact">Imagine what we could create for you <ArrowUpRight className="size-4 text-primary" /></a></div>
    <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent className="max-w-4xl w-[calc(100%-32px)] p-5 sm:p-7"><DialogTitle className="pr-6 font-display text-3xl">{selectedProject?.title}</DialogTitle><DialogDescription>{selectedProject?.category} · Adorini Homes</DialogDescription>{selectedProject && <img src={selectedProject.image.src} alt={selectedProject.image.alt} className="max-h-[65svh] w-full object-contain" />}<div className="flex items-center justify-between"><Button variant="editorial" size="icon" aria-label="Previous project" onClick={() => setSelected((value) => value === null ? null : (value + projects.length - 1) % projects.length)}><ChevronLeft /></Button><span className="text-xs text-muted-foreground">{selected === null ? 0 : selected + 1} / {projects.length}</span><Button variant="editorial" size="icon" aria-label="Next project" onClick={() => setSelected((value) => value === null ? null : (value + 1) % projects.length)}><ChevronRight /></Button></div></DialogContent></Dialog>
  </div></section>;
}
function Process() {
  return <section className="section-space"><div className="container-editorial"><Reveal className="text-center"><div className="eyebrow justify-center text-muted-foreground">From first idea to final detail</div><h2 className="mt-4">Your home. A clear path forward.</h2><p className="mt-5 text-xs text-muted-foreground">Simple steps, thoughtful planning and a team beside you all the way.</p></Reveal><div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{processSteps.map((step, index) => <Reveal className="process-step" key={step.title} delay={index * 0.08}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}</div><div className="mt-10 text-center"><QuoteButton>Start Your Project</QuoteButton></div></div></section>;
}
function Testimonials() {
  return <section className="section-space bg-surface"><div className="container-editorial"><Reveal className="text-center"><div className="eyebrow justify-center text-muted-foreground">The people behind every home</div><h2 className="mt-4">What Our Clients Say.</h2><p className="mt-4 text-[10px] text-muted-foreground">Sample testimonials — genuine client reviews to be added.</p></Reveal><div className="mt-10 grid gap-8 md:grid-cols-3">{reviews.map((review, index) => <Reveal className="testimonial" key={review} delay={index * 0.08}><div className="flex gap-1 text-primary" aria-label="Sample five-star rating">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="size-3 fill-current" />)}</div><blockquote>“{review}”</blockquote><p className="text-[11px] font-medium">[Client name], [Suburb]</p><span className="text-[9px] text-muted-foreground">Sample review · {services[index]?.tag}</span></Reveal>)}</div></div></section>;
}
function CTABanner() {
  return <section className="cta-banner py-20"><img src={images.workshop.src} alt="" width={2560} height={1709} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-foreground/80" /><Reveal className="container-editorial relative grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]"><div><div className="eyebrow text-hero-muted">Let’s create something lasting</div><h2 className="mt-4">Ready to talk about your project?</h2><a className="mt-6 inline-flex items-center gap-3 font-display text-4xl" href={business.phoneLink}><Phone className="size-5 text-timber" />{business.phone}</a><p className="mt-3 text-[11px] text-hero-muted">{business.hours}</p></div><QuoteButton>Request a Quote</QuoteButton></Reveal></section>;
}
function Contact() {
  return <section id="contact" className="section-space"><div className="container-editorial grid gap-12 md:grid-cols-2 md:gap-20"><Reveal><div className="eyebrow text-muted-foreground">Your next chapter starts here</div><h2 className="mt-5">Start Your<br /><em>Project Today.</em></h2><p className="mt-6 max-w-md text-sm text-muted-foreground">Whether you’re ready to build your dream home or need expert carpentry for a renovation, we’re here to help.</p><div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[10px]">{["Reasonable Prices", "Experienced", "Professional"].map((badge) => <span key={badge} className="flex items-center gap-1.5"><Check className="size-3.5 text-primary" />{badge}</span>)}</div><div className="mt-10 grid gap-6 border-t border-border pt-8">{[
    { icon: Phone, label: "Give us a call", text: business.phone, href: business.phoneLink },
    { icon: Mail, label: "Send us an email", text: business.email, href: `mailto:${business.email}` },
    { icon: Clock3, label: "Office hours", text: business.hours },
    { icon: MapPin, label: "Building in your community", text: "Port Macquarie & surrounding areas" },
  ].map(({ icon: Icon, label, text, href }) => <div key={label} className="flex min-w-0 items-start gap-4"><Icon className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.4} /><div className="min-w-0"><p className="text-[10px] text-muted-foreground">{label}</p>{href ? <a className="mt-1 block break-words text-sm" href={href}>{text}</a> : <p className="mt-1 text-xs">{text}</p>}</div></div>)}</div><div className="mt-8"><SocialLinks /></div></Reveal><Reveal delay={0.1}><ContactForm /></Reveal></div></section>;
}
function Footer() {
  return <footer className="site-footer"><div className="container-editorial"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.3fr_1fr]"><div><Wordmark /><p className="mt-5 font-display text-lg">{business.tagline}</p><p className="mt-3 max-w-xs">Custom homes, thoughtful renovations<br />and quality carpentry. Built with care.</p></div><div><h3>Explore</h3><nav className="grid gap-3" aria-label="Footer navigation">{navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav></div><div><h3>Let’s talk</h3><div className="grid gap-3"><a href={business.phoneLink}>{business.phone}</a><a className="break-words" href={`mailto:${business.email}`}>{business.email}</a><p>Port Macquarie & surrounding areas</p><p>Mon–Fri · 8:00am–6:00pm</p></div></div><div><h3>Stay connected</h3><SocialLinks /><p className="mt-5">Licence number: to be confirmed</p></div></div><div className="footer-bottom flex flex-col justify-between gap-3 sm:flex-row"><p>© 2026 Adorini Homes. All rights reserved.</p><p>Thoughtfully built. Personally delivered.</p></div></div></footer>;
}
export function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 35); const hero = document.getElementById("home"); setPastHero(Boolean(hero && hero.getBoundingClientRect().bottom < 0)); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-background focus:p-4">Skip to content</a><Header scrolled={scrolled} /><main id="main-content"><Hero /><About /><Services /><WhyUs /><Gallery /><Process /><Testimonials /><CTABanner /><Contact /></main><Footer />{pastHero && <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3"><Button asChild variant="editorial" size="icon" aria-label="Back to top" title="Back to top" className="bg-background shadow-sm"><a href="#home"><ArrowUp /></a></Button><Button asChild variant="timber" className="h-11 shadow-md md:hidden"><a href={business.phoneLink}><Phone />Call Now</a></Button></div>}<Toaster position="bottom-center" richColors /></>;
}