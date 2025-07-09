import Container from "@/components/organisms/Container";
import Hero from "@/components/organisms/Hero";
import Navbar from "@/components/organisms/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
      </Container>
    </div>
  );
};

export default App;
