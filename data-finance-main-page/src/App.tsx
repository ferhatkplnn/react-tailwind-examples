import Analytics from "./components/analytics/Analytics";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
