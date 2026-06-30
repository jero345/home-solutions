import { waLink } from "../config.js";
import Reveal from "./Reveal.jsx";
import QuoteForm from "./QuoteForm.jsx";
import { WhatsappIcon, CheckIcon } from "./Icons.jsx";

const promises = [
  "Respuesta de un asesor humano, no un bot.",
  "Cotización clara, sin letra pequeña.",
  "Decides a tu ritmo, sin presión.",
];

export default function FinalCta() {
  return (
    <section id="cotizar" className="bg-sand/60">
      <div className="container-ventus grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Mensaje */}
        <div>
          <Reveal>
            <p className="eyebrow">Es el momento</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
              Este es el momento de hacerlo fácil, bello y sin estrés.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cocoa/75">
              Da el primer paso hoy. Una conversación basta para imaginar tu hogar
              más silencioso, más cálido y más tuyo.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 space-y-3">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-3 text-base font-medium text-cocoa/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-olive/15 text-olive">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <a
              href={waLink("Hola Ventus, quiero hablar con un asesor y empezar mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-9"
            >
              <WhatsappIcon className="h-5 w-5" />
              Habla con un asesor
            </a>
          </Reveal>
        </div>

        {/* Formulario */}
        <Reveal delay={120}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
