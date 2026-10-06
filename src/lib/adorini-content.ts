import home from "@/assets/home.asset.json";
import deck from "@/assets/deck.asset.json";
import carpentry from "@/assets/carpentry.asset.json";
import workshop from "@/assets/workshop.asset.json";
import showcase from "@/assets/showcase.asset.json";

export const business = {
  name: "Adorini Homes", phone: "0403 256 710", phoneLink: "tel:0403256710",
  email: "adorinihomes@gmail.com", hours: "Monday–Friday, 8:00am–6:00pm",
  instagram: "https://www.instagram.com/adorinihomes/",
  facebook: "https://www.facebook.com/adorinihomes",
  tagline: "Your vision. Our foundation.",
};
export const images = {
  home: { src: home.url, alt: "Adorini Homes single-storey home with brick and light cladding, landscaped front garden" },
  deck: { src: deck.url, alt: "Covered outdoor entertaining space with timber decking and stone paving" },
  carpentry: { src: carpentry.url, alt: "Custom timber stairs carefully fitted alongside natural sandstone" },
  workshop: { src: workshop.url, alt: "Residential floor plans laid out on a timber workbench" },
  showcase: { src: showcase.url, alt: "Two-storey residential home with landscaped garden and covered entry" },
};
export const navigation = [{ label: "Home", href: "#home" }, { label: "Services", href: "#services" }, { label: "About", href: "#about" }, { label: "Contact", href: "#contact" }];
export const services = [
  { number: "01", tag: "New build", title: "New Homes", description: "Custom homes built around the way you live. Your lifestyle, your block, your future.", image: images.home, points: ["Custom design and construction", "Quality craftsmanship and finishes", "Personalised, hands-on experience", "Clear communication at every stage"] },
  { number: "02", tag: "Renovate", title: "Renovations & Extensions", description: "Rediscover the possibilities of your home. More space, better flow, a fresh beginning.", image: images.deck, points: ["Renovations and home extensions", "Thoughtful layout improvements", "Quality upgrades and finishes", "Practical, tailored building solutions"] },
  { number: "03", tag: "Carpentry", title: "Carpentry & Residential", description: "It’s the details that make the difference. Thoughtful timber work, built to last.", image: images.carpentry, points: ["Residential and custom carpentry", "Timber work and improvements", "Repairs, alterations and upgrades", "Care for projects big and small"] },
];
export const projects = [
  { title: "A place to call home", category: "New Homes", image: images.home },
  { title: "Room to enjoy the outdoors", category: "Renovations", image: images.deck },
  { title: "Crafted in every detail", category: "Carpentry", image: images.carpentry },
];
export const processSteps = [
  { title: "Enquire", text: "Tell us about your home and what you have in mind." },
  { title: "Consultation", text: "We listen, explore your ideas and discuss your priorities." },
  { title: "Planning & quote", text: "A considered plan, clear scope and a detailed quotation." },
  { title: "Build", text: "We bring your vision to life, keeping you involved along the way." },
];
// Sample reviews only. Replace with approved, genuine client reviews before publishing.
export const reviews = [
  "From our first conversation to the final details, we felt listened to. The care and communication made all the difference.",
  "Our renovation has changed the way we use our home. Thoughtful workmanship and an approach that felt genuinely personal.",
  "The attention to detail in the timber work is beautiful. A professional experience from the initial discussion to completion.",
];