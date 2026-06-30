// Íconos SVG inline (estilo Lucide / Heroicons). Sin emojis, sin dependencias.
// Trazo fino y elegante, heredan el color con currentColor.

const Stroke = ({ className = "h-6 w-6", strokeWidth = 1.6, children, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {children}
  </svg>
);

const Filled = ({ className = "h-6 w-6", children, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {children}
  </svg>
);

/* ── Beneficios ─────────────────────────────────────────────── */
export const MuteIcon = (p) => (
  <Stroke {...p}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="22" y1="9" x2="16" y2="15" />
    <line x1="16" y1="9" x2="22" y2="15" />
  </Stroke>
);

export const SunIcon = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </Stroke>
);

export const ThermometerIcon = (p) => (
  <Stroke {...p}>
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
  </Stroke>
);

export const SparklesIcon = (p) => (
  <Stroke {...p}>
    <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0Z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </Stroke>
);

/* ── Productos ──────────────────────────────────────────────── */
export const WindowIcon = (p) => (
  <Stroke {...p}>
    <rect x="3" y="3" width="18" height="18" rx="1.5" />
    <path d="M12 3v18" />
    <path d="M3 12h18" />
  </Stroke>
);

export const CurtainsIcon = (p) => (
  <Stroke {...p}>
    <path d="M3 3h18" />
    <path d="M5 3c.3 6 .3 12-1 18" />
    <path d="M9 3c.2 7-.6 13-2 18" />
    <path d="M19 3c-.3 6-.3 12 1 18" />
    <path d="M15 3c-.2 7 .6 13 2 18" />
  </Stroke>
);

export const BlindsIcon = (p) => (
  <Stroke {...p}>
    <path d="M3 4h18" />
    <path d="M20 8H8" />
    <path d="M20 12H8" />
    <path d="M20 16H8" />
    <path d="M4 4v15" />
    <circle cx="4" cy="20" r="1.6" />
  </Stroke>
);

/* ── Proceso ────────────────────────────────────────────────── */
export const ClipboardIcon = (p) => (
  <Stroke {...p}>
    <rect width="8" height="4" x="8" y="2" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </Stroke>
);

export const PencilIcon = (p) => (
  <Stroke {...p}>
    <path d="M21.17 6.81a1 1 0 0 0-3.98-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z" />
    <path d="m15 5 4 4" />
  </Stroke>
);

export const WrenchIcon = (p) => (
  <Stroke {...p}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </Stroke>
);

export const SupportIcon = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m4.93 4.93 4.24 4.24" />
    <path d="m14.83 9.17 4.24-4.24" />
    <path d="m14.83 14.83 4.24 4.24" />
    <path d="m9.17 14.83-4.24 4.24" />
    <circle cx="12" cy="12" r="4" />
  </Stroke>
);

/* ── UI / utilidades ────────────────────────────────────────── */
export const CheckIcon = (p) => (
  <Stroke {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Stroke>
);

export const ArrowRightIcon = (p) => (
  <Stroke {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Stroke>
);

export const ArrowUpRightIcon = (p) => (
  <Stroke {...p}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </Stroke>
);

export const MenuIcon = (p) => (
  <Stroke {...p}>
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </Stroke>
);

export const CloseIcon = (p) => (
  <Stroke {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Stroke>
);

export const PhoneIcon = (p) => (
  <Stroke {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Stroke>
);

export const MailIcon = (p) => (
  <Stroke {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Stroke>
);

export const MapPinIcon = (p) => (
  <Stroke {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Stroke>
);

export const StarIcon = (p) => (
  <Filled {...p}>
    <path d="M12 2.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L12 16.77 6.8 18.5l.99-5.78-4.21-4.1 5.82-.85L12 2.5z" />
  </Filled>
);

export const QuoteIcon = (p) => (
  <Filled {...p}>
    <path d="M9.5 5C6.46 5 4 7.46 4 10.5V19h7v-7H7.5c0-1.66 1.34-3 3-3V5H9.5zm9 0C15.46 5 13 7.46 13 10.5V19h7v-7h-3.5c0-1.66 1.34-3 3-3V5h-1z" />
  </Filled>
);

/* ── Marca / redes ──────────────────────────────────────────── */
export const WhatsappIcon = (p) => (
  <Filled {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
    <path d="M12.05 2C6.5 2 1.99 6.51 1.99 12.06c0 1.78.46 3.51 1.34 5.04L2 22l5.02-1.31a10.02 10.02 0 0 0 5.03 1.29h.01c5.55 0 10.06-4.51 10.06-10.06a9.99 9.99 0 0 0-2.94-7.11A9.99 9.99 0 0 0 12.05 2zm0 18.1h-.01a8.36 8.36 0 0 1-4.27-1.17l-.31-.18-3.18.83.85-3.1-.2-.32a8.34 8.34 0 0 1-1.28-4.43c0-4.6 3.75-8.35 8.35-8.35 2.23 0 4.32.87 5.9 2.45a8.3 8.3 0 0 1 2.44 5.9c0 4.6-3.75 8.36-8.34 8.36z" />
  </Filled>
);

export const InstagramIcon = (p) => (
  <Stroke {...p}>
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </Stroke>
);

export const FacebookIcon = (p) => (
  <Stroke {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Stroke>
);
