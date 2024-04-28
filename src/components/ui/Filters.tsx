"use client";

import { DateRangePicker } from "@nextui-org/date-picker";
import React, { useState } from "react";
import SelectUI from "./SelectUI";

const Filters = () => {
  const [value1, setValue1] = useState<any>();
  const [value2, setValue2] = useState<any>();
  const [value3, setValue3] = useState<any>();
  const [value4, setValue4] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-wrap mx-5 md:mx-8  mb-10 gap-5">
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
      <SelectUI
        placeholder="Language"
        filterType={[
          {
            label: "English",
            value: "sports",
          },
          {
            label: "Spanish",
            value: "entertainment",
          },

          {
            label: "French",
            value: "entertainment",
          },
        ]}
        isLoading={isLoading}
        setValue={setValue3}
        value={value3}
      />
      <SelectUI
        placeholder="Currency"
        filterType={[
          {
            label: "Ksh.",
            value: "sports",
          },
          {
            label: "AED",
            value: "entertainment",
          },

          {
            label: "USD",
            value: "entertainment",
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
    </div>
  );
};

export default Filters;
