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
  // const [value1, setValue1] = useState<any>();
  // const [value2, setValue2] = useState<any>();
  // const [value3, setValue3] = useState<any>();
  // const [value4, setValue4] = useState<any>();
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <section>
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
        <EventsSlider events={events} />
      </div>
    </section>
  );
};

export default EventsSection;
