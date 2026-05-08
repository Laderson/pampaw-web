export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">PAMPAW</h2>

          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            Spa canino, veterinaria y tienda para mascotas en Barranquilla.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Navegación
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li>
              <a href="/">Inicio</a>
            </li>

            <li>
              <a href="/spa-canino-barranquilla">Servicios</a>
            </li>

            <li>
              <a href="/tienda-mascotas-barranquilla">Tienda</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Contacto
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li>📍 Barranquilla, Colombia</li>
            <li>📞 +57 300 000 0000</li>
            <li>✉ contacto@pampaw.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Pampaw Pet Store. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}