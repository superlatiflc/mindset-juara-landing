
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ProgramFeatures from "@/components/ProgramFeatures";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhySection />
        <ProgramFeatures />
        <PricingSection />
        <TestimonialSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
