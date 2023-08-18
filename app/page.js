import WhatWeDo from "@/components/WhatWeDo";
import Hero from "@/components/Hero";
import Image from "next/image";
import WhoWeAre from "@/components/WhoWeAre";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
      <AboutUs />
      <Footer />
    </main>
  );
}
