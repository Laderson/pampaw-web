import Link from "next/link";

interface PromotionsSectionProps {
  promotions: any[];
}

export default function PromotionsSection({ promotions }: PromotionsSectionProps) {
  const displayPromos = promotions.length > 0 ? promotions : [
    {
      name: "Spa & Bienestar",
      description: "Descubre nuestras tarifas especiales para consentir a tu mascota con los mejores servicios de grooming.",
    },
    {
      name: "Plan Salud Pampaw",
      description: "Conoce los beneficios de nuestros planes veterinarios diseñados para cada etapa de vida.",
    },
    {
      name: "Petshop Premium",
      description: "Explora las promociones exclusivas en alimentos de alta gama y accesorios seleccionados.",
    },
  ];

  return (
    <section id="promos" className="bg-[#fbfaf8] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
              Ofertas Exclusivas
            </h2>
            <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
              Descubre nuestras <br />
              <span className="text-green-600">Promociones Especiales</span>
            </h3>
          </div>
          <p className="max-w-md text-lg text-neutral-500 font-medium">
            Aprovecha nuestros beneficios exclusivos diseñados para el bienestar de tu mascota y tu tranquilidad.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {displayPromos.map((promo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-[2.5rem] border border-neutral-100 bg-white p-12 transition-all duration-300 hover:border-neutral-900/10 hover:bg-neutral-50/50"
            >
              {"discount" in promo && promo.discount > 0 && (
                <div className="absolute top-8 right-8 rounded-full bg-black px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white">
                  -{promo.discount}%
                </div>
              )}
              <h4 className="text-2xl font-black tracking-tight text-neutral-900">
                {promo.name}
              </h4>
              <p className="mt-6 text-base text-neutral-500 leading-relaxed">
                {promo.description}
              </p>
              
              <Link 
                href="/agendar-cita"
                className="mt-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900"
              >
                <span>Aprovechar ahora</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-100 transition-colors group-hover:bg-black group-hover:text-white">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

