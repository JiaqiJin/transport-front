import CTA from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Services } from "@/components/services";
import { RouteCalculator } from "@/components/route-calculator";
import { TourGuides } from "@/components/tour-guides";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <RouteCalculator />
      <Services />
      <TourGuides />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
