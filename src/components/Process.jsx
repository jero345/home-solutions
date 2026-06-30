import Reveal from "./Reveal.jsx";
import { ClipboardIcon, PencilIcon, WrenchIcon, SupportIcon } from "./Icons.jsx";

const steps = [
  {
    n: "01",
    icon: ClipboardIcon,
    title: "Asesoría",
    text: "Escuchamos tu espacio y tus prioridades. Sin costo y sin compromiso.",
  },
  {
    n: "02",
    icon: PencilIcon,
    title: "Diseño",
    text: "Proponemos la solución exacta: materiales, medidas y estética para tu hogar.",
  },
  {
    n: "03",
    icon: WrenchIcon,
    title: "Instalación",
    text: "Equipo profesional, limpio y puntual. Cuidamos tu casa como si fuera nuestra.",
  },
  {
    n: "04",
    icon: SupportIcon,
    title: "Acompañamiento",
    text: "Seguimos contigo después de instalar. Soporte y garantía reales, sin sorpresas.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-olive text-cream">
      <div className="container-ventus py-20 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-body text-xs font-semibold uppercase tracking-wider2 text-cream/70">
              Cómo trabajamos
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Un aliado, no un vendedor. Un experto, no una intromisión.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-cream/85">
              En Ventus te acompañamos con criterio y calma. Tú decides; nosotros
              hacemos que el camino sea claro, en cuatro pasos sin sorpresas.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-cream/15 bg-cream/5 p-8 transition duration-300 ease-gentle hover:-translate-y-1.5 hover:bg-cream/10">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-cream/10 text-cream transition duration-300 ease-gentle group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-terracota">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-4xl font-semibold text-cream/30">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-cream/80">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
