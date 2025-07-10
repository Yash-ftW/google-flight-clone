import FlightDatePicker from "@/components/molecules/DateRangePicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectIcon } from "@radix-ui/react-select";
import { CircleDot, LucideArrowRightLeft, MapPin } from "lucide-react";

const FlightSchedule = () => {
  return (
    <div className="mt-5 grid grid-cols-5 gap-5">
      <div className="flex items-center gap-2 col-span-5 md:col-span-3 relative ">
        <div className="absolute size-8 z-10 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full">
          <LucideArrowRightLeft className="size-4 -translate-x-[30%] -translate-y-[30%] text-gray-500" />
        </div>
        <Select>
          <SelectTrigger className="py-6 focus:outline-0 relative group focus:ring-0 hover:border-gray-400 overflow-hidden">
            <div className="size-8 rounded-full absolute border group-hover:border-gray-400 -right-5"></div>
            <SelectIcon asChild>
              <CircleDot />
            </SelectIcon>
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Kathmandu" defaultChecked>
                Kathmandu
              </SelectItem>
              <SelectItem value="Lalitpur">Lalitpur</SelectItem>
              <SelectItem value="Bhaktapur">Bhaktapur</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className=" py-6 focus:outline-0 focus:ring-0 group hover:border-gray-400 overflow-hidden relative">
            <div className="size-8 rounded-full absolute border group-hover:border-gray-400 -left-5"></div>
            <SelectIcon asChild>
              <MapPin />
            </SelectIcon>
            <SelectValue placeholder="Where to?" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Kathmandu" defaultChecked>
                Kathmandu
              </SelectItem>
              <SelectItem value="Lalitpur">Lalitpur</SelectItem>
              <SelectItem value="Bhaktapur">Bhaktapur</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-5 md:col-span-2">
        <FlightDatePicker />
      </div>
    </div>
  );
};

export default FlightSchedule;
