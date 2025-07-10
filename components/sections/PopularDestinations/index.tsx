import Container from "@/components/organisms/Container";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  { city: "Pokhara", imgSrc: "https://picsum.photos/id/1011/400/400" },
  { city: "Chitwan", imgSrc: "https://picsum.photos/id/1012/400/400" },
  { city: "Lumbini", imgSrc: "https://picsum.photos/id/1013/400/400" },
  { city: "Bhaktapur", imgSrc: "https://picsum.photos/id/1014/400/400" },
  { city: "Nagarkot", imgSrc: "https://picsum.photos/id/1015/400/400" },
  { city: "Janakpur", imgSrc: "https://picsum.photos/id/1016/400/400" },
  { city: "Tansen", imgSrc: "https://picsum.photos/id/1018/400/400" },
  { city: "Biratnagar", imgSrc: "https://picsum.photos/id/1020/400/400" },
  { city: "Birgunj", imgSrc: "https://picsum.photos/id/1021/400/400" },
  { city: "New Delhi", imgSrc: "https://picsum.photos/id/1022/400/400" },
  { city: "Bangkok", imgSrc: "https://picsum.photos/id/1023/400/400" },
  { city: "Singapore", imgSrc: "https://picsum.photos/id/1024/400/400" },
  { city: "Kuala Lumpur", imgSrc: "https://picsum.photos/id/1025/400/400" },
  { city: "Dubai", imgSrc: "https://picsum.photos/id/1026/400/400" },
  { city: "Kathmandu", imgSrc: "https://picsum.photos/id/1027/400/400" },
  { city: "Vientiane", imgSrc: "https://picsum.photos/id/1028/400/400" },
  { city: "Colombo", imgSrc: "https://picsum.photos/id/1029/400/400" },
  { city: "Hong Kong", imgSrc: "https://picsum.photos/id/1031/400/400" },
  { city: "Kathmandu Valley", imgSrc: "https://picsum.photos/id/1032/400/400" },
];

const PopularDestinations = () => {
  return (
    <Container className="max-w-full px-0">
      <h3 className="text-xl font-semibold mb-4">
        Popular destinations from Kathmandu
      </h3>
      <div className="px-5">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {destinations.map((dest, index) => (
              <CarouselItem key={index} className=" md:basis-1/6">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                      <Image
                        src={dest.imgSrc}
                        alt={dest.city}
                        fill
                        className="rounded-md object-cover"
                      />
                      <div className="absolute bottom-2 left-2 font-bold text-white  ">
                        {dest.city}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
};

export default PopularDestinations;
