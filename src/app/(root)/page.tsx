import HeroSection from "@/components/ui/HeroSection";
import EventsSection from "@/components/ui/EventsSection";
import WhyJoinSection from "@/components/ui/WhyJoinSection";
import WhyNextEventsSection from "@/components/ui/WhyNextEventsSection";
import FeaturedOrganizers from "@/components/ui/FeaturedOrganizers";
import { SAMPLE_EVENTS_DATA } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyJoinSection />
      <WhyNextEventsSection />
      <EventsSection title="Trending events in Nairobi" buttonPath="/events/trending" events={SAMPLE_EVENTS_DATA} />
      <EventsSection title="Physical events in Nairobi" buttonPath="/events/physical" events={SAMPLE_EVENTS_DATA} />
      <EventsSection title="Virtual events in Nairobi" buttonPath="/events/virtual" events={SAMPLE_EVENTS_DATA} />
      <FeaturedOrganizers />
    </main>
  );
}
