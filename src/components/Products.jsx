import { waLink } from "../config.js";
import Img from "./Img.jsx";
import Reveal from "./Reveal.jsx";
import { WindowIcon, CurtainsIcon, BlindsIcon, ArrowUpRightIcon } from "./Icons.jsx";

const products = [
  {
    icon: WindowIcon,
    name: "Ventanas termoacústicas",
    desc: "Doble sello y vidrio de alto desempeño para un aislamiento acústico y térmico superior. El corazón del sistema Ventus.",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1100&q=80",
    alt: "Ventana amplia con marco fino y luz natural rodeada de plantas",
    wa: "Hola Ventus, quiero información sobre ventanas termoacústicas.",
  },
  {
    icon: CurtainsIcon,
    name: "Cortinas",
    desc: "Textiles que filtran la luz y abrazan el espacio. Caída impecable y control total de la intimidad, a tu medida.",
    img: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1100&q=80",
    alt: "Cortinas de lino claro cayendo junto a una ventana con luz suave",
    wa: "Hola Ventus, quiero información sobre cortinas.",
  },
  {
    icon: BlindsIcon,
    name: "Persianas",
    desc: "Líneas limpias y graduación precisa de la luz. Funcionalidad discreta que se integra a tu arquitectura.",
    img: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&w=1100&q=80",
    alt: "Persianas modernas regulando la luz natural en un interior cálido",
    wa: "Hola Ventus, quiero información sobre persianas.",
  },
];

export default function Products() {
  return (
    <section id="productos" className="bg-sand/60">
      <div className="container-ventus py-20 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Soluciones Ventus</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
              Tres formas de cuidar tu hogar
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-cocoa/75">
              Cada solución se diseña para tu espacio. Juntas, crean un ambiente
              silencioso, luminoso y perfectamente templado.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-cream shadow-soft transition duration-300 ease-gentle hover:-translate-y-1.5 hover:shadow-lift">
                  <Img
                    src={p.img}
                    alt={p.alt}
                    className="aspect-[4/3]"
                    imgClassName="group-hover:scale-[1.05]"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-olive/10 text-olive transition duration-300 ease-gentle group-hover:scale-110 group-hover:bg-terracota group-hover:text-cream">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-2xl font-semibold text-cocoa">{p.name}</h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-cocoa/70">
                      {p.desc}
                    </p>
                    <a
                      href={waLink(p.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-terracota transition duration-200 ease-gentle hover:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2"
                    >
                      Solicitar información
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
