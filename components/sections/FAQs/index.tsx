import Container from "@/components/organisms/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQ = () => {
  const faqItems = [
    {
      title: "How can I find last-minute flight deals?",
      description: `Finding last-minute flights is easy on Google Flights.
                    Select your departure and destination cities in the form on the top of the page, and use the calendar to pick travel dates and find the lowest fares available.
                    You can even check for flights departing today.
                    To find the cheapest fares, it’s usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.`,
    },
    {
      title: "How can I find cheap flights for a weekend getaway?",
      description: `It’s easy to use Google Flights to find deals on weekend getaways or even weeklong trips.
                    Just enter your departure and destination cities near the top of the page. Then, open the date selector and choose a trip length to see how the round-trip fare changes on different days. Adjust the trip type to see one-way fares. The cheapest available flights are highlighted and easy to spot. Once you settle on dates, select Search to see flight options and book the deal.
                    
                    You can also turn on price tracking to get alerts if the price changes for a route or flight.`,
    },
    {
      title: "How can I find flight deals if my travel plans are flexible?",
      description: `It’s easy to search for flights, even if your plans are up in the air.
                    1. Tap Explore near the top of the page  
                    2. Then, tap the calendar icon  
                    3. Toggle to Flexible dates and select a time frame or trip length  
                    4. Tap done
                    Trip options will appear on the map, with the cheapest available flights highlighted and easy to spot. Tap the destination to see available flight options you can select and book.
                    
                    Price insights and other useful tools can help you find more options that work for your schedule and budget.`,
    },
    {
      title: "How can I find cheap flights to anywhere?",
      description: `You can find cheap flight deals to anywhere in the world on Google Flights. Just enter your departure city, choose Anywhere as the destination, and select Explore.
                    You can pick specific dates or leave departure and return dates blank if your plans are flexible. The cheapest fares to popular destinations will appear.
                    You can filter the results to see only nonstop flights or flights under a certain price to more easily plan your perfect budget trip.
                    
                    If you already have a destination in mind, you can turn on price tracking to get alerts if the fare changes for a route or flight.`,
    },
    {
      title: "How can I get flight alerts for my trip?",
      description: `You can track flight prices for specific dates or, if your plans are flexible, any dates. To get flight alerts for a specific round trip, choose your dates and flights and select Search. Then, you can turn on price tracking.`,
    },
  ];

  return (
    <Container>
      <h3 className="text-xl font-semibold mb-4 ">
        Frequently asked questions
      </h3>
      <Accordion type="multiple">
        {faqItems.map(({ title, description }, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="hover:no-underline font-semibold">
              {title}
            </AccordionTrigger>
            <AccordionContent>
              <p className="whitespace-pre-line">{description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQ;
