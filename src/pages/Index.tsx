import { useRef } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import InstitutoSection from "@/components/InstitutoSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Hero onCtaClick={scrollToForm} />
      <AboutSection />
      <InstitutoSection />
      <ServicesSection />
      <ImpactSection />
      <div ref={formRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
