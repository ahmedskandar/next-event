import HeroSection from "@/components/ui/HeroSection";
import EventsSection from "@/components/ui/EventsSection";
import WhyJoinSection from "@/components/ui/WhyJoinSection";
import WhyNextEventsSection from "@/components/ui/WhyNextEventsSection";
import FeaturedOrganizers from "@/components/ui/FeaturedOrganizers";
import { SAMPLE_EVENTS_DATA } from "@/lib/constants";
import EventCategoriesSection from "@/components/ui/EventCategoriesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyJoinSection />
      <WhyNextEventsSection />
      <EventCategoriesSection />
      <FeaturedOrganizers />
    </main>
  );
}
