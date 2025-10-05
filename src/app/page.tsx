"use client";

import { useState, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner"; // ShadCN Spinner
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s preloader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <Spinner className="w-12 h-12 text-muted-foreground" />
      </div>
    );
  }

  return (
    <main className="flex justify-center min-h-screen bg-muted">
      <div className="w-full max-w-4xl border-x bg-background px-6 pt-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
