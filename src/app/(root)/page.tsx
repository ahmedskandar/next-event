import VirtualEventsSlider from "@/components/ui/VirtualEventsSlider";
import HeroSection from "@/components/ui/HeroSection";
import TrendingEventsSlider from "@/components/ui/TrendingEventsSlider";
import WhyJoinSection from "@/components/ui/WhyJoinSection";
import WhyNextEventsSection from "@/components/ui/WhyNextEventsSection";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import PhysicalEventsSlider from "@/components/ui/PhysicalEventsSlider";
import FeaturedOrganizers from "@/components/ui/FeaturedOrganizers";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyJoinSection />
      <WhyNextEventsSection />
      <TrendingEventsSlider />
      {/* <PhysicalEventsSlider />
      <VirtualEventsSlider /> */}
      <FeaturedOrganizers />
    </main>
  );
}
