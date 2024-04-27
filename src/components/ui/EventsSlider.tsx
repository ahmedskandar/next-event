"use client";

import Slider from "react-slick";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faCoins, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { EVENTS_SLIDER_SETTINGS } from "@/lib/constants";
import { useRouter } from "next/navigation";

const EventsSlider = ({ events }: { events: TEvent[] }) => {
  const router = useRouter();
  return (
    <Slider {...EVENTS_SLIDER_SETTINGS}>
      {events.map((item) => (
        <div key={item.id} className="pt-1.5 cursor-grab">
          <CardContainer>
            <CardBody className=" relative group/card border-primary-100 w-[22rem] md:w-[23rem] xl:w-[26rem] h-auto rounded-xl p-6 border  ">
              <div
                className="cursor-pointer"
                onClick={() => router.push(`/event/${item.id}`)}
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-primary-500"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="60"
                  className="text-primary-300 w-full  flex items-center justify-between text-sm mt-2"
                >
                  <div className="flex gap-2 items-center basis-1/2">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      icon={faCalendar}
                    />
                    <div>
                      <time>{item.startDate}</time> -
                      <time> {item.endDate}</time>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center basis-1/2">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      icon={faLocationDot}
                    />
                    <span>{item.location}</span>
                  </div>
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="60"
                  className="text-primary-300 w-full gap-2  flex items-center justify-between text-sm mt-2"
                >
                  <div className="flex gap-2 items-center basis-1/2">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      icon={faClock}
                    />
                    <div>
                      <time>{item.startTime}</time> -<time>{item.endTime}</time>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center basis-1/2">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      icon={faCoins}
                    />
                    <span>{item.price}</span>
                  </div>
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                  <CardItem
                    translateZ={80}
                    as="p"
                    href=""
                    target="__blank"
                    className=" text-primary-500 mt-3"
                  >
                    {item.organizer}
                  </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      ))}
    </Slider>
  );
};

export default EventsSlider;
