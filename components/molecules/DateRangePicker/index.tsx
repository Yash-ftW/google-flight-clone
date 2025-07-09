import { CalendarDays, X } from "lucide-react";
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState<DateValueType>(null);
  const [endDate, setEndDate] = useState<DateValueType>(null);
  return (
    <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus:outline-0 focus:ring-0 relative  ">
      <div className="absolute z-10 left-2 top-1/2 -translate-y-1/2">
        <CalendarDays className="size-5 text-gray-500" />
      </div>
      <div className="h-[50%] w-[0.5px] bg-gray-300 z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Datepicker
        inputClassName={
          "py-6 px-3 rounded-md  h-9 pl-10 relative  focus:outline-0 focus:ring-0 max-w-[150px] text-sm placeholder:text-sm placeholder:text-gray-600"
        }
        toggleIcon={(open) => {
          return !open && <X className="size-4" />;
        }}
        useRange={false}
        asSingle={true}
        placeholder="Departure"
        value={startDate}
        onChange={(newValue) => setStartDate(newValue)}
      />
      <Datepicker
        inputClassName={
          "py-6 px-3 rounded-md  h-9 pl-5 relative focus:outline-0 focus:ring-0 max-w-[150px] text-sm placeholder:text-sm placeholder:text-gray-600 "
        }
        toggleIcon={(open) => {
          return !open && <X className="size-4" />;
        }}
        placeholder="Return"
        useRange={false}
        asSingle={true}
        value={endDate}
        onChange={(newValue) => setEndDate(newValue)}
      />
    </div>
  );
};

export default DateRangePicker;
