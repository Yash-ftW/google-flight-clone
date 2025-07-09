import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftRight, Users } from "lucide-react";
import React from "react";

const FlightSearchPanel = () => {
  const tripTypes = [
    { label: "Round Trip", value: "round-trip" },
    { label: "One Way", value: "one-way" },
    { label: "Multi-City", value: "multi-city" },
  ];

  const passengerOptions = [
    { label: "1 Adult", value: "1" },
    { label: "2 Adults", value: "2" },
    { label: "3 Adults", value: "3" },
    { label: "4 Adults", value: "4" },
  ];

  const cabinClasses = [
    { label: "Economy", value: "economy" },
    { label: "Premium Economy", value: "premium-economy" },
    { label: "Business", value: "business" },
    { label: "First Class", value: "first" },
  ];

  return (
    <div className="flex flex-wrap gap-4 items-center justify-start">
      {/* Trip Type */}
      <div className="flex items-center gap-2">
        <ArrowLeftRight className="size-5 text-gray-600" />
        <Select>
          <SelectTrigger className="w-[160px] border-0 rounded-none shadow-none focus:outline-0 focus:ring-0  border-b border-b-gray-200">
            <SelectValue placeholder="Round Trip" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {tripTypes.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Passengers */}
      <div className="flex items-center gap-2">
        <Users className="size-5 text-gray-600" />
        <Select>
          <SelectTrigger className="w-[100px] border-0 rounded-none shadow-none focus:outline-0 focus:ring-0  border-b border-b-gray-200">
            <SelectValue placeholder="1 Adult" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {passengerOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Cabin Class */}
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="w-[140px] border-0 rounded-none shadow-none focus:outline-0 focus:ring-0  border-b border-b-gray-200">
            <SelectValue placeholder="Economy" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {cabinClasses.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FlightSearchPanel;
