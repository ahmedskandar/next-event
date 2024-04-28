import EventsSection from "@/components/ui/EventsSection";
import { SAMPLE_EVENTS_DATA } from "@/lib/constants";
import React from "react";

const EventsPage = () => {
  return (
    <main>
      <div className=" h-[70svh] shadow-xl relative flex bg-fixed justify-center items-center bg-[url('/assets/images/meeting2.jpg')] bg-bottom bg-cover">
        <div className="absolute inset-0 bg-transparent/50" />
        <h2 className=" text-3xl md:text-5xl z-10 text-white text-center">
          Events
        </h2>
      </div>
      <EventsSection
        title="Trending events in Nairobi"
        buttonPath="/events/trending"
        events={SAMPLE_EVENTS_DATA}
      />
      <EventsSection
        title="Physical events in Nairobi"
        buttonPath="/events/physical"
        events={SAMPLE_EVENTS_DATA}
      />
      <EventsSection
        title="Virtual events in Nairobi"
        buttonPath="/events/virtual"
        events={SAMPLE_EVENTS_DATA}
      />
    </main>
  );
};

export default EventsPage;
