import React from "react";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

const WhyNextEventsSection = () => {
  return (
    <section className="mx-10 md:mx-20">
      <h2 className="my-10 md:my-16 text-3xl font-serif text-primary-500 text-center">
        Why Next Event
      </h2>
      <div className="flex gap-10 text-center justify-between flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <Image src="/assets/images/event.svg" alt="" width={75} height={75} />
          <h3 className="text-lg text-primary-500">500+ events hosted</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <Image
            src="/assets/images/audience.svg"
            alt=""
            width={75}
            height={75}
          />
          <h3 className="text-lg text-primary-500">6000+ audience</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <Image
            src="/assets/images/self-host.svg"
            alt=""
            width={75}
            height={75}
          />
          <h3 className="text-lg text-primary-500">Self-host events</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <Image src="/assets/images/gears.svg" alt="" width={75} height={75} />
          <h3 className="text-lg text-primary-500">Event management tools</h3>
        </div>
      </div>
    </section>
  );
};

export default WhyNextEventsSection;
