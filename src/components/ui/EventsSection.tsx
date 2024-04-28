import React from "react";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import EventsSlider from "./EventsSlider";
import { Link } from "@nextui-org/link";

const EventsSection = ({
  title,
  buttonPath,
  events,
}: {
  title: string;
  buttonPath: string;
  events: TEvent[];
}) => {
  return (
    <section className="my-20">
      <div className="flex mx-10 mt-10 md:mt-16 justify-between items-center">
        <h2 className="text-xl md:text-3xl font-serif text-primary-500">
          {title}
        </h2>
        <Button as={Link} href={buttonPath} className="bg-primary-500 text-white">
          View more
        </Button>
      </div>
      <div className="mx-10">
        <Divider className="mt-5 mb-10" />
      </div>
      <div className="md:mx-2">
        <EventsSlider events={events} />
      </div>
    </section>
  );
};

export default EventsSection;
