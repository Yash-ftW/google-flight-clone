import Container from "@/components/organisms/Container";
import Hero from "@/components/organisms/Hero";
import Navbar from "@/components/organisms/Navbar";
import CheapFlights from "@/components/sections/CheapFlights";
import PopularDestinations from "@/components/sections/PopularDestinations";

const App = () => {
  return (
    <div className="mb-24">
      <Navbar />
      <Container className="space-y-6">
        <Hero />
        <CheapFlights />
        <PopularDestinations />
      </Container>
    </div>
  );
};

export default App;
