import Header from "@/src/components/sample2/Header";
import Hero from "@/src/components/sample2/Hero";
import Concept from "@/src/components/sample2/Concept";
import Features from "@/src/components/sample2/Features";
import Contact from "@/src/components/Contact"; // Reusing generic contact for now
import Footer from "@/src/components/Footer";   // Reusing generic footer for now

export default function Sample2() {
  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-[#5C4D4D] selection:bg-[#D98A6C] selection:text-white">
      <Header />
      <Hero />
      <Concept />
      <Features />
      <div className="bg-[#FAF8F5] pt-12">
          {/* Using main Contact and Footer, overridden with container style somewhat */}
          <Contact />
          <Footer />
      </div>
    </main>
  );
}