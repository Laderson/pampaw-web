"use client";

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
    <section className="py-32" style={{ backgroundColor: '#F7F4EE' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: '#4E5B31' }}>
            ¿Por qué Pampaw?
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-tighter md:text-6xl" style={{ color: '#222222' }}>
            Un estándar <br />
            <span style={{ color: '#4E5B31' }}>Superior de cuidado.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed" style={{ color: '#222222', opacity: 0.55 }}>
            En Pampaw nos enfocamos en brindar bienestar, confianza y una
            experiencia excepcional para cada mascota.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[2rem] p-10"
              style={{
                backgroundColor: '#E9DFC9',
                border: '1px solid #E9DFC9',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(78,91,49,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <h3 className="text-xl font-black tracking-tight" style={{ color: '#222222' }}>
                {benefit.title}
              </h3>

              <p className="mt-6 text-base font-medium leading-relaxed" style={{ color: '#222222', opacity: 0.6 }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}