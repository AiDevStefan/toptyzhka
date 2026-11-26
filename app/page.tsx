import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Classes } from "@/components/sections/Classes";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Classes />
      <Pricing />
      <Testimonials />
    </>
  );
}