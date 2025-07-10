import Container from "@/components/organisms/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const locations = [
  { label: "Kathmandu" },
  { label: "Pokhara" },
  { label: "Pipara Simara" },
  { label: "Bharatpur" },
];

const flights = [
  {
    city: "New Delhi",
    price: "NPR 20,821",
    dateRange: "Jul 26 - Aug 1",
    duration: "Nonstop ⋅ 1 hr 55 min",
    imgSrc:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Beijing",
    price: "NPR 12,500",
    dateRange: "Aug 10 - Aug 15",
    duration: "Nonstop ⋅ 45 min",
    imgSrc:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=225&q=80",
  },
  {
    city: "Bangkok",
    price: "NPR 15,300",
    dateRange: "Sep 5 - Sep 12",
    duration: "1 stop ⋅ 4 hr 30 min",
    imgSrc:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=225&q=80",
  },
  {
    city: "Singapore",
    price: "NPR 18,700",
    dateRange: "Oct 1 - Oct 8",
    duration: "Nonstop ⋅ 4 hr 10 min",
    imgSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=225&q=80",
  },
];

const FlightCard = ({
  city,
  price,
  dateRange,
  duration,
  imgSrc,
}: {
  city: string;
  price: string;
  dateRange: string;
  duration: string;
  imgSrc: string;
}) => (
  <div className="relative">
    <Image
      alt={city}
      height={50}
      width={220}
      className="rounded-md object-cover w-full"
      src={imgSrc}
      priority
    />
    <p className="flex justify-between items-center my-2 font-semibold">
      <span>{city}</span>
      <span>{price}</span>
    </p>
    <div className="text-gray-500 text-sm">
      <p>{dateRange}</p>
      <p>{duration}</p>
    </div>
  </div>
);

const CheapFlights = () => {
  return (
    <Container className="mt-12">
      <h3 className="text-2xl font-semibold">
        Find cheap flights from Kathmandu to anywhere
      </h3>

      <div className="flex items-center gap-4 mt-4 flex-wrap">
        {locations.map(({ label }) => (
          <Button
            variant="ghost"
            key={label}
            className="px-4 py-2 border border-gray-300 rounded-full font-normal"
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="mt-4 relative h-[300px] group rounded-2xl overflow-hidden">
        <Image
          className="rounded-2xl"
          alt="Google Map"
          fill
          src="https://maps.googleapis.com/maps/api/staticmap?size=1058x312&key=AIzaSyCMXZJgNbwR_PUfsUlyKfRldqfOyQOEd_g&language=en-US&theme=light&markers=scale:2|anchor:center|icon:https://www.gstatic.com/flights/app/dot_pink_21.png|27.7103145%2C85.3221634&scale=2&markers=scale:2|anchor:center|icon:https://www.gstatic.com/flights/app/dot_blue_21.png|28.6139298%2C77.2088282|35.6764225%2C139.650027|22.3193039%2C114.1693611|-33.8690742%2C151.2096944&style=feature:all|element:labels|visibility:off&style=feature:poi|element:all|visibility:off&style=feature:road|element:all|visibility:off&style=feature:transit|element:all|visibility:off"
        />
        <div className="absolute inset-0 w-full h-full cursor-pointer transition-all group-hover:bg-black/20 rounded-2xl flex items-center justify-center">
          <Button className="bg-white rounded-full text-blue-500 hover:bg-blue-50">
            Explore Destinations
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-5 gap-8">
        {flights.map(({ city, price, dateRange, duration, imgSrc }) => (
          <FlightCard
            key={city}
            city={city}
            price={price}
            dateRange={dateRange}
            duration={duration}
            imgSrc={imgSrc}
          />
        ))}
      </div>
    </Container>
  );
};

export default CheapFlights;
