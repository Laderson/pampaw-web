const benefits = [
  {
    title: "Atención Elite",
    description:
      "Personal altamente capacitado y apasionado por el bienestar animal.",
  },
  {
    title: "Catálogo Curado",
    description:
      "Selección exclusiva de productos premium para la salud de tu mascota.",
  },
  {
    title: "Smart Booking",
    description:
      "Flujo de reserva inteligente e integrado con Google para tu comodidad.",
  },
  {
    title: "Filosofía Familiar",
    description:
      "Cada mascota es tratada con la misma dedicación que un miembro de casa.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
            ¿Por qué Pampaw?
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-tighter text-neutral-900 md:text-6xl">
            Un estándar <br />
            <span className="text-neutral-200">Superior de cuidado.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-neutral-500">
            En Pampaw nos enfocamos en brindar bienestar, confianza y una
            experiencia excepcional para cada mascota.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-[2rem] border border-neutral-100 bg-white p-10 transition-all duration-300 hover:bg-neutral-50/50"
            >
              <h3 className="text-xl font-black tracking-tight text-neutral-900">
                {benefit.title}
              </h3>

              <p className="mt-6 text-base font-medium leading-relaxed text-neutral-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}