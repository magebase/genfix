import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import AnnouncementBar from "../components/landing/AnnouncementBar";
import Hero from "../components/landing/Hero";
import QuoteForm from "../components/landing/QuoteForm";
import ElectricalTradesPeople from "../components/landing/ElectricalTradesPeople";
import HowItWorks from "../components/landing/HowItWorks";
import Generators from "../components/landing/Generators";
import Features from "../components/landing/Features";
import TeamEquipment from "../components/landing/TeamEquipment";
import Testimonials from "../components/landing/Testimonials";
import Equipment from "../components/landing/Equipment";
import FAQ from "../components/landing/FAQ";
import FinalCTA from "../components/landing/FinalCTA";
import { Toaster } from "@/components/ui/sonner";

export default function Landing() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Header />

      <AnnouncementBar />

      <main className="w-full">
        <Hero />
        <QuoteForm />
        <ElectricalTradesPeople />
        <HowItWorks />
        <Generators />
        <Features />
        <TeamEquipment />
        <Testimonials />
        <Equipment />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
