"use client";

import React, { useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faCoins, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SelectUI from "./SelectUI";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

const TrendingEventsSlider = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 4 slides at a time
    slidesToScroll: 3,
    lazyLoad: "progressive" as LazyLoadTypes,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2, // Show 3 slides at a time for smaller screens
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1, // Show 3 slides at a time for smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  const arr = [
    {
      title: "Kenya Tech Summit",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Global Startup Ecosystem",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg4.jpeg",
    },
    {
      title: "Cyber Security Expo",
      startDate: "Aug 19",
      endDate: "Aug 21",
      startTime: "8:00 AM",
      location: "Kilimanjaro cafe",
      price: "Ksh. 1050",
      organizer: "@iLabAfrica",
      endTime: "6:00 PM",
      image: "/assets/images/event-bg3.webp",
    },
    {
      title: "Data management and analysis",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Fifin",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg2.jpeg",
    },
    {
      title: "Data management and analysis",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Fifin",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg2.jpeg",
    },
    {
      title: "Data management and analysis",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Fifin",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg2.jpeg",
    },
    {
      title: "Data management and analysis",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Fifin",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg2.jpeg",
    },
  ];
  const [value1, setValue1] = useState<any>();
  const [value2, setValue2] = useState<any>();
  const [value3, setValue3] = useState<any>();
  const [value4, setValue4] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section>
      <div className="flex mx-10 mt-10 md:mt-16 justify-between items-center">
        <h2 className="text-xl md:text-3xl font-serif text-primary-500">
          Trending events in Nairobi
        </h2>
        <Button className="bg-primary-500 text-white">View more</Button>
      </div>
      <div className="mx-10">
        <Divider className="mt-5 mb-10" />
      </div>
      {/* <div className="flex mx-10 mb-10 gap-5">
        <SelectUI
          placeholder="City"
          filterType={[
            {
              label: "Nairobi",
              value: "sports",
            },
            {
              label: "Mombasa",
              value: "entertainment",
            },
            {
              label: "Naivasha",
              value: "Science and Technology",
            },
          ]}
          isLoading={isLoading}
          setValue={setValue1}
          value={value1}
        />
        <SelectUI
          placeholder="Category"
          filterType={[
            {
              label: "Sports",
              value: "sports",
            },
            {
              label: "Entertainment",
              value: "entertainment",
            },
            {
              label: "Science and Technology",
              value: "Science and Technology",
            },
          ]}
          isLoading={isLoading}
          setValue={setValue1}
          value={value1}
        />
        <SelectUI
          placeholder="Price"
          filterType={[
            {
              label: "0 - 999",
              value: "sports",
            },
            {
              label: "1000 - 1999",
              value: "entertainment",
            },
            {
              label: "2000 - 2999",
              value: "Science and Technology",
            },
            {
              label: "3000+",
              value: "Science and Technology",
            },
          ]}
          isLoading={isLoading}
          setValue={setValue2}
          value={value2}
        />
        <SelectUI
          placeholder="Format"
          filterType={[
            {
              label: "Class",
              value: "sports",
            },
            {
              label: "Expo",
              value: "entertainment",
            },
            {
              label: "Conference",
              value: "Science and Technology",
            },
            {
              label: "Party",
              value: "Science and Technology",
            },
          ]}
          isLoading={isLoading}
          setValue={setValue3}
          value={value3}
        />
        <DateRangePicker
          value={value4}
          onChange={setValue4}
          classNames={{
            label: "!text-primary-300",
            inputWrapper:
              "bg-[#FEF9E7] hover:!bg-primary-100 focus:!bg-primary-100",
            //   trigger:
            //     "!border-primary-100 hover:!border-primary-300 focus:!border-primary-300",
          }}
          label="Filter date"
          className="max-w-xs"
        />
      </div> */}
      <div className="md:mx-2">
        <Slider {...settings}>
          {arr.map((item, index) => (
            <div
              className="cursor-grab pt-1"
              key={index}
              onClick={() => console.log("clicked")}
            >
              <CardContainer className="cursor-pointer">
                <CardBody className=" relative group/card border-primary-100 w-[22rem] md:w-[23rem] xl:w-[25rem] 2xl:w-[28rem] h-auto rounded-xl p-6 border  ">
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
                        <time>{item.startTime}</time> -
                        <time>{item.endTime}</time>
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
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={80}
                      as="p"
                      href=""
                      target="__blank"
                      className=" text-primary-500 "
                    >
                      {item.organizer}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingEventsSlider;
