import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { CertificatesSection } from "@/sections/Certificates";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <CertificatesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}