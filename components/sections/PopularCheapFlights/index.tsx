import Container from "@/components/organisms/Container";
import Link from "next/link";
import React from "react";

const PopularCheapFlights = () => {
  const flights = [
    { text: "Flights from New York to London", href: "#" },
    { text: "Flights from New York to Rome", href: "#" },
    { text: "Flights from Toronto to London", href: "#" },
    { text: "Flights from London to Tokyo", href: "#" },
    { text: "Flights from New York to Los Angeles", href: "#" },
    { text: "Flights from London to Istanbul", href: "#" },
    { text: "Flights from London to Berlin", href: "#" },

    { text: "Flights from New York to Paris", href: "#" },
    { text: "Flights from Montreal to Paris", href: "#" },
    { text: "Flights from New York to Milan", href: "#" },
    { text: "Flights from Madrid to Rome", href: "#" },
    { text: "Flights from Paris to Marrakech", href: "#" },
    { text: "Flights from Paris to Bangkok", href: "#" },
    { text: "Flights from Chicago to Paris", href: "#" },

    { text: "Flights from London to Paris", href: "#" },
    { text: "Flights from London to Milan", href: "#" },
    { text: "Flights from London to Dubai", href: "#" },
    { text: "Flights from London to Delhi", href: "#" },
    { text: "Flights from Sao Paulo to London", href: "#" },
    { text: "Flights from New York to Orlando", href: "#" },
    { text: "Flights from Melbourne to London", href: "#" },
  ];

  const col1 = flights.slice(0, 7);
  const col2 = flights.slice(7, 14);
  const col3 = flights.slice(14, 21);
  return (
    <Container>
      <h3 className="text-xl font-semibold mb-4 ">
        Find cheap flights on popular routes
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-blue-600">
        {[col1, col2, col3].map((col, index) => (
          <ul key={index} className="space-y-2">
            {col.map(({ text, href }, idx) => (
              <li key={idx}>
                <Link href={href} className="hover:underline">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default PopularCheapFlights;
