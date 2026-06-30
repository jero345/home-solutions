// ──────────────────────────────────────────────────────────────────────────
//  Configuración de integraciones — reemplazá los placeholders.
// ──────────────────────────────────────────────────────────────────────────

// Número de WhatsApp del asesor (formato internacional sin "+", con indicativo país 57 = Colombia).
// PLACEHOLDER VISIBLE — reemplazar por el número real.
export const WHATSAPP_NUMBER = "57XXXXXXXXXX";

// Webhook para recibir las cotizaciones del formulario (Zapier, Make, n8n, endpoint propio…).
// Si queda vacío, el formulario hace fallback a WhatsApp automáticamente.
export const WEBHOOK_URL = "";

// Mensaje por defecto de los CTA "Habla con un asesor".
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola Ventus, quiero hablar con un asesor sobre soluciones para mi hogar.";

// Datos de contacto mostrados en el sitio (placeholders).
export const CONTACT = {
  phoneLabel: "+57 300 000 0000",
  email: "hola@ventus.com.co",
  location: "Bogotá · Medellín · Cali, Colombia",
  instagram: "https://instagram.com/ventus",
  facebook: "https://facebook.com/ventus",
};

// Construye un enlace de WhatsApp con texto prellenado.
export function waLink(text = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
