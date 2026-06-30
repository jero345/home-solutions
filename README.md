# Ventus — Landing de conversión

Landing page premium para **Ventus**, marca colombiana de ventanas termoacústicas,
cortinas y persianas. Construida con **Vite + React + Tailwind CSS**, un componente
por sección y arco narrativo **Self · Us · Now**.

## Stack

- Vite + React 18
- Tailwind CSS 3 (tokens de marca como única fuente de verdad en `tailwind.config.js`)
- Fuentes: Cormorant Garamond (display), Quicksand (cuerpo), Sacramento (decorativa)
- Íconos SVG inline (estilo Lucide), sin emojis ni dependencias de íconos

## Requisitos

- Node.js 18+ y npm

## Puesta en marcha

```bash
npm install
npm run dev      # entorno de desarrollo (http://localhost:5173)
npm run build    # build de producción → /dist
npm run preview  # sirve el build de producción
```

## Configuración (antes de publicar)

Edita `src/config.js`:

| Constante               | Para qué sirve                                                      |
| ----------------------- | ------------------------------------------------------------------ |
| `WHATSAPP_NUMBER`       | Número del asesor (formato `57XXXXXXXXXX`, sin `+`). **Placeholder.** |
| `WEBHOOK_URL`           | Endpoint para recibir cotizaciones. Si queda vacío → fallback a WhatsApp. |
| `CONTACT`               | Teléfono, email, ubicación y redes mostrados en el sitio.          |

> El formulario de cotización (`QuoteForm.jsx`) envía un `POST` JSON a `WEBHOOK_URL`
> con `{ nombre, telefono, tipo, origen, enviadoEn }`. Si no hay webhook, abre
> WhatsApp con el mensaje prellenado.

## Imágenes

Las fotos son **placeholders de Unsplash**. Reemplázalas por fotografía propia de
interiores con luz natural en cada componente (`src/`) para producción. El componente
`Img` degrada con gracia (fondo cálido) si una imagen no carga.

## Estructura

```
src/
├─ App.jsx              # Composición del arco narrativo
├─ config.js           # WhatsApp, webhook y contacto
├─ index.css           # Tailwind + tokens base + reduced-motion
└─ components/
   ├─ Header.jsx       # Nav sticky + menú móvil
   ├─ Hero.jsx         # "Eleva tu bienestar desde tu ventana"
   ├─ Self.jsx         # El dolor del habitante
   ├─ Benefits.jsx     # 4 beneficios sensoriales
   ├─ Products.jsx     # Ventanas · Cortinas · Persianas
   ├─ Process.jsx      # Us — proceso en 4 pasos
   ├─ Testimonials.jsx # Prueba social
   ├─ FinalCta.jsx     # Now — cierre + formulario
   ├─ Footer.jsx       # Contacto y redes
   ├─ QuoteForm.jsx    # Formulario de cotización
   ├─ Reveal.jsx       # Fade-in (respeta prefers-reduced-motion)
   ├─ Img.jsx          # Imagen con fallback
   └─ Icons.jsx        # Íconos SVG inline
```

## Tokens de marca

| Rol       | Token       | HEX       |
| --------- | ----------- | --------- |
| Principal | `olive`     | `#5e6a4a` |
| Acento    | `terracota` | `#985f32` |
| Contraste | `cocoa`     | `#3c2a1e` |
| Superficie| `cream`     | `#ffffff` |
| Neutro    | `sand`      | `#e8e8e8` |

## Accesibilidad y calidad

- `cursor-pointer` y `focus-visible` en todo lo clickeable
- `prefers-reduced-motion` respetado (CSS + lógica de `Reveal`)
- Responsive validado en 375 / 768 / 1024 / 1440
- SEO: `<title>`, meta description, Open Graph, `lang="es"`, `alt` en imágenes
- Enlace "Saltar al contenido" para navegación por teclado
