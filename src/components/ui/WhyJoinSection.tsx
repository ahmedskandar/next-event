import React from "react";
import FeatureCard from "./FeatureCard";

const WhyJoinSection = () => {
  return (
    <section className="mx-10 md:mx-20 mb-10">
      <h2 className=" my-10 md:my-16 text-3xl font-serif text-primary-500 text-center">
        Why you should join events
      </h2>
      <div className="flex gap-10 flex-col md:flex-row">
        <FeatureCard
          imageSrc="/assets/images/network.svg"
          title="Network"
          description="Connections with peers and industry professionals
        fosters valuable relationships and collaborations."
        />
        <FeatureCard
          imageSrc="/assets/images/book.svg"
          title="Learn and grow"
          description="Workshops and seminars provides insights and skills relevant to personal and professional growth."
        />
        <FeatureCard
          imageSrc="/assets/images/bulb.svg"
          title="Get inspiration"
          description="Success stories and motivational speakers at events ignite passion and boost morale, rejuvenating your zeal."
        />
      </div>
    </section>
  );
};

export default WhyJoinSection;
