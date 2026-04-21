import HeroVideo from "./components/HeroVideo";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-1 flex-col font-sans mb-(--footer-h)">
      <HeroVideo />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
