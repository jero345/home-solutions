import Reveal from "./Reveal.jsx";
import { QuoteIcon, StarIcon } from "./Icons.jsx";

const testimonials = [
  {
    quote:
      "Volví a escuchar el silencio en mi propia casa. La diferencia fue inmediata… y para siempre.",
    name: "María Fernanda",
    detail: "Apartamento · Bogotá",
  },
  {
    quote:
      "Nos guiaron con paciencia y honestidad. Cero presión y cero sorpresas en la factura.",
    name: "Andrés y Carolina",
    detail: "Casa · Medellín",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="container-ventus py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Historias que permanecen</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 font-script text-5xl leading-none text-terracota sm:text-6xl">
              Lo que permanece, se siente
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-sand/50 p-9 shadow-soft">
                <QuoteIcon className="h-9 w-9 text-terracota/80" />
                <blockquote className="mt-5 flex-1 font-display text-2xl font-medium leading-snug text-cocoa">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-cocoa">{t.name}</p>
                    <p className="text-sm text-cocoa/60">{t.detail}</p>
                  </div>
                  <div className="flex gap-0.5 text-terracota" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-4 w-4" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
