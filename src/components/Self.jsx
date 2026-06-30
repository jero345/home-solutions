import Img from "./Img.jsx";
import Reveal from "./Reveal.jsx";

const pains = [
  "Saturado de catálogos, materiales y términos técnicos.",
  "Miedo a una inversión que no rinda lo que prometía.",
  "Temor a romper la estética del lugar que tanto amas.",
];

export default function Self() {
  return (
    <section className="bg-sand/60">
      <div className="container-ventus grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Imagen */}
        <Reveal variant="left" className="order-2 lg:order-1">
          <Img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
            alt="Habitación serena con luz natural entrando por la ventana al amanecer"
            className="aspect-[5/4] rounded-[2rem] shadow-soft"
            imgClassName="hover:scale-[1.03]"
          />
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Te entendemos</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
              Quieres transformar tu hogar, pero cada decisión pesa.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-cocoa/75">
              Demasiadas opciones, presupuestos que se disparan y la sensación de
              que un error se queda contigo por años. El miedo a equivocarte
              termina por congelarlo todo.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 space-y-3">
              {pains.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" />
                  <span className="text-base leading-relaxed text-cocoa/80">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 border-l-2 border-terracota pl-5 text-xl font-medium leading-relaxed text-cocoa">
              Respira. Existe una forma serena de hacerlo bien —y de disfrutarla
              desde el primer día.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
