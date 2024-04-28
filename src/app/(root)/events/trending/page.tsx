import EventsGrid from '@/components/ui/EventsGrid';
import { SAMPLE_EVENTS_DATA } from '@/lib/constants';
import React from 'react'

const TrendingEventsPage = () => {
  return (
    <main>
      <div className=" h-[70svh] mb-14 shadow-xl relative flex bg-fixed justify-center items-center bg-[url('/assets/images/event-bg5.jpg')] bg-bottom bg-cover">
        <div className='absolute inset-0 bg-transparent/50'/>
        <h2 className=" text-3xl md:text-5xl z-10 text-white text-center">
          Trending Events
        </h2>
      </div>
      <EventsGrid events={SAMPLE_EVENTS_DATA}/>     
    </main>
  );
}

export default TrendingEventsPage