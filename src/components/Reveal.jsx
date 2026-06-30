import { useEffect, useRef, useState } from "react";

// Mapeo de variantes → clases de estado inicial (oculto).
const HIDDEN = {
  up: "translate-y-8 opacity-0",
  down: "-translate-y-8 opacity-0",
  left: "-translate-x-10 opacity-0",
  right: "translate-x-10 opacity-0",
  scale: "scale-95 opacity-0",
  fade: "opacity-0",
};

const SHOWN = "translate-x-0 translate-y-0 scale-100 opacity-100";

// Anima entrada (fade + desplazamiento/escala) al entrar en viewport.
// Respeta prefers-reduced-motion: si el usuario lo prefiere, se muestra
// de inmediato sin animación.
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 700,
  className = "",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || !("IntersectionObserver" in window) || !el) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      className={`transition-all ease-gentle will-change-transform ${
        shown ? SHOWN : HIDDEN[variant] || HIDDEN.up
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
