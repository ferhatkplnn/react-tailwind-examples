import Analytics from "./components/analytics/Analytics";
import Cards from "./components/cards/Cards";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
