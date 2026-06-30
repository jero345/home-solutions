import { useEffect, useState } from "react";
import { waLink } from "../config.js";
import { WhatsappIcon } from "./Icons.jsx";

// Botón flotante de WhatsApp que aparece tras hacer scroll, con anillo de pulso.
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink("Hola Ventus, quiero hablar con un asesor.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-terracota text-cream shadow-lift transition-all duration-300 ease-gentle hover:scale-110 hover:bg-terracota-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span
        className="absolute inset-0 rounded-full bg-terracota/60 animate-pulse-ring"
        aria-hidden="true"
      />
      <WhatsappIcon className="relative h-7 w-7" />
    </a>
  );
}
