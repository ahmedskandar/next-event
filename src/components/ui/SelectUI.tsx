import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

const SelectUI = ({
  isLoading,
  value,
  setValue,
  filterType,
  placeholder,
}: {
  isLoading: boolean;
  value: Set<string>;
  setValue: any;
  filterType: { value: string; label: string }[];
  placeholder: string;
}) => {
  return (
    <Select
      isLoading={isLoading}
      aria-label="Select frequency"
      className=" w-40"
      onSelectionChange={setValue}
      placeholder={"Select " + placeholder}
      label={placeholder}
      selectedKeys={value}
      classNames={{
        value: value ? "!text-black" : "!text-gray-500",
        label: "!text-primary-300",
        trigger:
          "!bg-[#FEF9E7] hover:!bg-primary-100 focus:!bg-primary-100",
      }}
    >
      {filterType.map((filter) => (
        <SelectItem key={filter.value} value={filter.value}>
          {filter.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectUI;

//   label: "!text-primary-300",
//               base: "!text-red-500 !border-green-500",
//               bottomContent: "!text-red-500 !border-green-500",
//               calendar: "!text-red-500 !border-green-500",
//               calendarContent: "!text-red-500 !border-green-500",
//               description: "!text-red-500 !border-green-500",
//               errorMessage: "!text-red-500 !border-green-500",
//               helperWrapper: "!text-red-500 !border-green-500",
//               innerWrapper: "!text-red-500 !border-green-500",
//               input: "!text-red-500 !border-green-500",
//               inputWrapper: "!text-red-500 !border-green-500",
//               popoverContent: "!text-red-500 !border-green-500",
//               segment: "!text-red-500 !border-green-500",
//               separator: "!text-red-500 !border-green-500",
//               timeInput: "!text-red-500 !border-green-500",
//               timeInputWrapper: "!text-red-500 !border-green-500",
//               timeInputLabel: "!text-red-500 !border-green-500",