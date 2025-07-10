import React from "react";
import Container from "../Container";
import { Button } from "@/components/ui/button";
import { Banknote, Globe, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      label: "About",
      href: "#",
    },
    {
      label: "Privacy",
      href: "#",
    },
    {
      label: "Terms",
      href: "#",
    },
    {
      label: "Join user studies",
      href: "#",
    },
    {
      label: "Feedback",
      href: "#",
    },
    {
      label: "Help Center",
      href: "#",
    },
  ];
  return (
    <Container>
      <div className="line"></div>
      <div className="flex items-center justify-center mt-5 flex-col gap-6">
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-normal ">
          <Button
            variant="outline"
            className="text-blue-500 rounded-full hover:bg-gray-50 hover:text-blue-500"
            icon={<Globe />}
            iconPosition="start"
          >
            Language ⋅ English (United States)
          </Button>
          <Button
            variant="outline"
            className="text-blue-500 rounded-full hover:bg-gray-50 hover:text-blue-500"
            icon={<MapPin />}
            iconPosition="start"
          >
            Location ⋅ Nepal
          </Button>
          <Button
            variant="outline"
            className="text-blue-500 rounded-full hover:bg-gray-50 hover:text-blue-500"
            icon={<Banknote />}
            iconPosition="start"
          >
            Currency ⋅ NPR
          </Button>
        </div>
        <div className="text-center text-sm text-gray-600">
          Current language and currency options applied: English (United States)
          - Nepal - NPR.
          <br /> Displayed currencies may differ from the currencies used to
          purchase flights.{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            Learn more
          </Link>
        </div>
        <div className="flex items-center gap-5 flex-wrap justify-center md:justify-normal">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="text-sm text-blue-500 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="line"></div>
      </div>
    </Container>
  );
};

export default Footer;
