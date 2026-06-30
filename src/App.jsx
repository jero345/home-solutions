import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Self from "./components/Self.jsx";
import Benefits from "./components/Benefits.jsx";
import Products from "./components/Products.jsx";
import Process from "./components/Process.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Salto de accesibilidad al contenido */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cocoa focus:px-4 focus:py-2 focus:text-cream"
      >
        Saltar al contenido
      </a>

      <Header />

      <main>
        {/* Arco narrativo Self · Us · Now */}
        <Hero />
        <Self />
        <Benefits />
        <Products />
        <Process />
        <Testimonials />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
