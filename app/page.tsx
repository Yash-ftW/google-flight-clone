import Container from "@/components/organisms/Container";
import Hero from "@/components/organisms/Hero";
import Navbar from "@/components/organisms/Navbar";
import CheapFlights from "@/components/sections/CheapFlights";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
        <CheapFlights />
      </Container>
    </div>
  );
};

export default App;
