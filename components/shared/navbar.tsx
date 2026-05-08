export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            PAMPAW
          </h1>

          <p className="text-xs text-neutral-500">
            Spa Canino & Veterinaria
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-neutral-700 transition hover:text-black"
          >
            Inicio
          </a>

          <a
            href="/spa-canino-barranquilla"
            className="text-sm font-medium text-neutral-700 transition hover:text-black"
          >
            Servicios
          </a>

          <a
            href="/tienda-mascotas-barranquilla"
            className="text-sm font-medium text-neutral-700 transition hover:text-black"
          >
            Tienda
          </a>

          <a
            href="/veterinaria-barranquilla"
            className="text-sm font-medium text-neutral-700 transition hover:text-black"
          >
            Veterinaria
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/573000000000"
          target="_blank"
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}