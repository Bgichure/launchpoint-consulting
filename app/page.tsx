import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Services from "@/components/home/services";
import Process from "@/components/home/process";
import Portfolio from "@/components/home/Portfolio";
import FAQ from "@/components/home/FAQ";
import JsonLd from "@/components/seo/JsonLd";
import { getHomeJsonLd } from "@/lib/seo/jsonLd";

export default function Home() {
  const homeJsonLd = getHomeJsonLd();

  return (
    <>
      <JsonLd data={homeJsonLd} />

      <main id="top">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Portfolio />
        <FAQ />
      </main>
    </>
  );
}