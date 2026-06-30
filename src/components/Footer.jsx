import { CONTACT, waLink } from "../config.js";
import {
  WindowIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsappIcon,
} from "./Icons.jsx";

const navLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#productos", label: "Productos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#cotizar", label: "Cotizar" },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream">
      <div className="container-ventus py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2.5" aria-label="Ventus — inicio">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-olive text-cream">
                <WindowIcon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <span className="font-display text-2xl font-semibold tracking-wide">Ventus</span>
            </a>
            <p className="mt-4 font-script text-3xl text-terracota">Bienestar que permanece</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Ventanas termoacústicas, cortinas y persianas premium. Silencio, luz
              perfecta y confort térmico para tu hogar en Colombia.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light mt-6 text-sm"
            >
              <WhatsappIcon className="h-4 w-4" />
              Habla con un asesor
            </a>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream">Explora</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="cursor-pointer text-sm text-cream/70 transition duration-200 ease-gentle hover:text-terracota focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2 focus-visible:ring-offset-cocoa"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={`tel:${CONTACT.phoneLabel.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 transition duration-200 ease-gentle hover:text-terracota"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-olive" />
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 transition duration-200 ease-gentle hover:text-terracota"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-olive" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPinIcon className="h-4 w-4 shrink-0 text-olive" />
                {CONTACT.location}
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Ventus"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-cream/20 text-cream/80 transition duration-200 ease-gentle hover:border-terracota hover:bg-terracota hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2 focus-visible:ring-offset-cocoa"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Ventus"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-cream/20 text-cream/80 transition duration-200 ease-gentle hover:border-terracota hover:bg-terracota hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2 focus-visible:ring-offset-cocoa"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-7 text-sm text-cream/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Ventus. Todos los derechos reservados.</p>
          <p>Hecho con calma en Colombia.</p>
        </div>
      </div>
    </footer>
  );
}
