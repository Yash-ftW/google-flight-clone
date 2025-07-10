"use client";

import FlightSchedule from "@/components/sections/FlightSchedule";
import FlightSearchPanel from "@/components/sections/FlightSearchPanel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg"
          alt="Flight background"
          width={1280}
          height={300}
          className="w-full h-[300px] object-cover"
        />
        <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-5xl font-googleSans  ">
          Flights
        </h1>
      </div>

      <Card className="shadow-custom pb-8 pt-4 px-6 mt-4 max-w-5xl mx-auto relative border-0">
        <FlightSearchPanel />
        <FlightSchedule />
        <div className="absolute -bottom-5  left-1/2 -translate-x-1/2">
          <Button
            variant={"outline"}
            icon={<Search className="text-white" />}
            iconPosition="start"
            className="rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:text-white border-0"
          >
            Explore
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
