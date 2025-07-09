import { Button } from "@/components/ui/button";
import {
  AlignJustify,
  Bed,
  Earth,
  House,
  LayoutGrid,
  Luggage,
  Moon,
  Plane,
  User,
} from "lucide-react";
import React from "react";

const navItems = [
  { label: "Travel", icon: <Luggage className="text-blue-500" /> },
  { label: "Explore", icon: <Earth className="text-blue-500" /> },
  { label: "Flights", icon: <Plane className="text-blue-500" /> },
  { label: "Hotels", icon: <Bed className="text-blue-500" /> },
  { label: "Vacation rentals", icon: <House className="text-blue-500" /> },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-4">
          <AlignJustify />
          <div className="text-2xl ">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#DB4437]">o</span>
            <span className="text-[#F4B400]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#0F9D58]">l</span>
            <span className="text-[#DB4437]">e</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {navItems.map(({ label, icon }) => (
            <Button
              key={label}
              variant="outline"
              icon={icon}
              iconPosition="start"
              className="rounded-full"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" icon={<Moon />} />
        <Button variant="ghost" icon={<LayoutGrid />} />
        <Button variant="ghost" icon={<User />} />
      </div>
    </nav>
  );
};

export default Navbar;
