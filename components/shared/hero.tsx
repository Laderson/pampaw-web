export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div>
          <img
            src="Airbrush-IMAGE-ENHANCER-1778183031890-1778183031890_fvomrz"
            alt="Pampaw Pet Store"
            className="mb-4 h-12 w-auto"
          />
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-medium text-neutral-700 shadow-sm">
            🐶 Spa Canino & Veterinaria en Barranquilla
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-neutral-900">
            Cuidamos a tu mascota como parte de la familia.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            Servicios de spa canino, veterinaria y tienda especializada para
            mascotas con atención profesional y mucho amor.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/spa-canino-barranquilla"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ver servicios
            </a>

            <a
              href="/agendar-cita"
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
            >
              Agendar cita
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl bg-neutral-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
              alt="Perro feliz"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}