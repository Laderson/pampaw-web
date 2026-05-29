"use client";

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
    <section id="promos" className="py-32" style={{ backgroundColor: '#F7F4EE' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#4E5B31' }}>
              Ofertas Exclusivas
            </h2>
            <h3 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: '#222222' }}>
              Descubre nuestras <br />
              <span style={{ color: '#4E5B31' }}>Promociones Especiales</span>
            </h3>
          </div>
          <p className="max-w-md text-lg font-medium" style={{ color: '#222222', opacity: 0.55 }}>
            Aprovecha nuestros beneficios exclusivos diseñados para el bienestar de tu mascota y tu tranquilidad.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {displayPromos.map((promo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[2.5rem] p-12"
              style={{
                backgroundColor: '#E9DFC9',
                border: '1px solid #E9DFC9',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(78,91,49,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {"discount" in promo && promo.discount > 0 && (
                <div className="absolute top-8 right-8 rounded-full px-4 py-1.5 text-[9px] font-black uppercase tracking-widest" style={{ backgroundColor: '#4E5B31', color: '#F7F4EE' }}>
                  -{promo.discount}%
                </div>
              )}
              <h4 className="text-2xl font-black tracking-tight" style={{ color: '#222222' }}>
                {promo.name}
              </h4>
              <p className="mt-6 text-base leading-relaxed" style={{ color: '#222222', opacity: 0.6 }}>
                {promo.description}
              </p>

              <Link
                href="/agendar-cita"
                className="mt-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em]"
                style={{ color: '#222222' }}
              >
                <span>Aprovechar ahora</span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                  style={{ borderColor: '#4E5B3166' }}
                >
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