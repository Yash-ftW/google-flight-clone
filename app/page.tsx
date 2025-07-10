import Container from "@/components/organisms/Container";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import Navbar from "@/components/organisms/Navbar";
import CheapFlights from "@/components/sections/CheapFlights";
import FAQ from "@/components/sections/FAQs";
import PopularCheapFlights from "@/components/sections/PopularCheapFlights";
import PopularDestinations from "@/components/sections/PopularDestinations";

const App = () => {
  return (
    <div className="mb-4">
      <Navbar />
      <Container className="space-y-9">
        <Hero />
        <CheapFlights />
        <PopularDestinations />
        <FAQ />
        <PopularCheapFlights />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
