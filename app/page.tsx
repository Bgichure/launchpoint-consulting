import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Services from "@/components/home/services";
import Process from "@/components/home/process";
import Portfolio from "@/components/home/Portfolio";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Portfolio />
      <FAQ />
      <Footer />
    </div>
  );
}