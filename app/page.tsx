import dynamic from "next/dynamic";

import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Services from "@/components/home/services";
import Portfolio from "@/components/home/Portfolio";
import JsonLd from "@/components/seo/JsonLd";
import { getHomeJsonLd } from "@/lib/seo/jsonLd";

const Process = dynamic(() => import("@/components/home/process"));
const FAQ = dynamic(() => import("@/components/home/FAQ"));

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