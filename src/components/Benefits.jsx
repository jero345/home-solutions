import Reveal from "./Reveal.jsx";
import { MuteIcon, SunIcon, ThermometerIcon, SparklesIcon } from "./Icons.jsx";

const benefits = [
  {
    icon: MuteIcon,
    title: "Silencio absoluto",
    text: "Aislamiento acústico que deja el ruido afuera. El tráfico, los vecinos y la ciudad se desvanecen.",
  },
  {
    icon: SunIcon,
    title: "Luz perfecta",
    text: "Aprovecha toda la luz natural sin encandilamiento ni calor excesivo. Tu espacio respira.",
  },
  {
    icon: ThermometerIcon,
    title: "Confort térmico",
    text: "Temperatura estable durante todo el año. Menos aire acondicionado, más bienestar y ahorro.",
  },
  {
    icon: SparklesIcon,
    title: "Sofisticación silenciosa",
    text: "Diseño atemporal que eleva tu hogar sin gritar. Lujo que se siente, no que se exhibe.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-cream">
      <div className="container-ventus py-20 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Lo que vas a sentir</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
              Bienestar que se percibe en cada detalle
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 90}>
                <article className="group h-full rounded-3xl border border-cocoa/10 bg-cream p-8 shadow-soft transition duration-300 ease-gentle hover:-translate-y-1.5 hover:border-terracota/30 hover:shadow-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-olive/10 text-olive transition duration-300 ease-gentle group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-terracota group-hover:text-cream">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-cocoa">{b.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-cocoa/70">{b.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
