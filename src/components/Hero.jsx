import { waLink } from "../config.js";
import Img from "./Img.jsx";
import Reveal from "./Reveal.jsx";
import { WhatsappIcon, ArrowRightIcon, CheckIcon } from "./Icons.jsx";

const trust = ["Asesoría sin costo", "Instalación profesional", "Acompañamiento real"];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <div className="container-ventus grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        {/* Texto */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">Ventanas termoacústicas premium · Colombia</p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-4 font-script text-3xl leading-none text-terracota sm:text-4xl">
              El silencio también es un lujo
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-2 font-display text-5xl font-semibold leading-[1.05] text-cocoa sm:text-6xl lg:text-7xl">
              Eleva tu bienestar desde tu ventana
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa/75">
              Ventanas termoacústicas que transforman el ruido en calma y la luz
              en armonía. Diseño que permanece y confort que no se nota… hasta que
              lo sientes.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink("Hola Ventus, quiero hablar con un asesor sobre ventanas termoacústicas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsappIcon className="h-5 w-5" />
                Habla con un asesor
              </a>
              <a href="#productos" className="btn-ghost">
                Conoce las soluciones
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-semibold text-cocoa/70">
                  <CheckIcon className="h-4 w-4 text-olive" strokeWidth={2} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Imagen */}
        <div className="lg:col-span-6">
          <Reveal delay={200} className="relative">
            <Img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80"
              alt="Sala luminosa con grandes ventanales que dejan entrar luz natural suave"
              loading="eager"
              fetchPriority="high"
              className="aspect-[4/5] rounded-[2rem] shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]"
              imgClassName="hover:scale-[1.03]"
            />
            {/* Tarjeta flotante */}
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-cream/95 p-5 shadow-soft backdrop-blur sm:left-auto sm:right-6 sm:w-64">
              <p className="font-display text-3xl font-semibold text-olive">−42 dB</p>
              <p className="mt-1 text-sm leading-snug text-cocoa/70">
                de reducción de ruido exterior. Tu casa vuelve a sonar a hogar.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
