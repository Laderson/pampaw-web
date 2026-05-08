const benefits = [
  {
    title: "Atención Profesional",
    description:
      "Contamos con personal capacitado y amante de los animales.",
  },

  {
    title: "Productos Premium",
    description:
      "Trabajamos con productos de alta calidad para el bienestar de tu mascota.",
  },

  {
    title: "Agenda Rápida",
    description:
      "Agenda fácilmente servicios y consultas por WhatsApp.",
  },

  {
    title: "Cuidado con Amor",
    description:
      "Tratamos cada mascota como parte de nuestra familia.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#f8f6f2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
            ¿Por qué elegirnos?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Mucho más que una veterinaria.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            En Pampaw nos enfocamos en brindar bienestar, confianza y una
            experiencia premium para cada mascota.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-relaxed text-neutral-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}