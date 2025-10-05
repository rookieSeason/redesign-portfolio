import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen bg-muted">
      <div className="w-full max-w-4xl border-x bg-background px-6 pt-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
