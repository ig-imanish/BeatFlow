import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Premium from "./components/premium/Premium";
import Trending from "./components/trending/Trending";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
      <Premium />
      <Footer />
    </>
  );
}

export default App;
