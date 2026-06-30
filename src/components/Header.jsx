import { useState } from "react";
import { waLink } from "../config.js";
import { MenuIcon, CloseIcon, WhatsappIcon, WindowIcon } from "./Icons.jsx";

const links = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#productos", label: "Productos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#cotizar", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cocoa/10 bg-cream/85 backdrop-blur-md">
      <div className="container-ventus flex h-20 items-center justify-between">
        {/* Marca */}
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2"
          aria-label="Ventus — inicio"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-olive text-cream transition duration-300 ease-gentle group-hover:bg-olive-600">
            <WindowIcon className="h-5 w-5" strokeWidth={1.7} />
          </span>
          <span className="font-display text-2xl font-semibold tracking-wide text-cocoa">
            Ventus
          </span>
        </a>

        {/* Nav escritorio */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative cursor-pointer text-sm font-semibold text-cocoa/80 transition duration-200 ease-gentle hover:text-terracota focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA escritorio */}
        <a
          href={waLink("Hola Ventus, quiero hablar con un asesor.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden text-sm lg:inline-flex"
        >
          <WhatsappIcon className="h-4 w-4" />
          Habla con un asesor
        </a>

        {/* Toggle móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg text-cocoa transition duration-200 ease-gentle hover:bg-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div id="mobile-menu" className="border-t border-cocoa/10 bg-cream lg:hidden">
          <nav className="container-ventus flex flex-col py-4" aria-label="Móvil">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-lg px-2 py-3 text-base font-semibold text-cocoa/85 transition duration-200 ease-gentle hover:bg-sand hover:text-terracota"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink("Hola Ventus, quiero hablar con un asesor.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              <WhatsappIcon className="h-4 w-4" />
              Habla con un asesor
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
