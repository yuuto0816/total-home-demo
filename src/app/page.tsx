"use client";

import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Concept from "@/src/components/Concept";
import Features from "@/src/components/Features";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#1D1D1F] selection:text-[#F5F5F7]">
      <Header />
      <Hero />
      <Concept />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
