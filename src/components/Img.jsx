// Imagen con contenedor que aplica un fondo cálido de respaldo.
// Si la imagen falla en cargar, se oculta con gracia y queda el fondo tintado
// (degradación elegante, nunca un ícono de imagen rota).
export default function Img({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
  fetchPriority,
}) {
  return (
    <div className={`relative overflow-hidden bg-olive/15 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchpriority={fetchPriority}
        onError={(e) => {
          e.currentTarget.style.opacity = "0";
        }}
        className={`h-full w-full object-cover transition duration-500 ease-gentle ${imgClassName}`}
      />
    </div>
  );
}
