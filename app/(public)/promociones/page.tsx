import PromotionsSection from "@/components/shared/promotions-section";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Promociones y Ofertas | Pampaw",
  description: "Descubre las mejores ofertas y descuentos en servicios y productos para tu mascota.",
};

export default async function PromotionsPage() {
  const promotions = await prisma.promotion.findMany({
    orderBy: { name: "desc" }
  });

  return (
    <main className="min-h-screen bg-[#fbfaf8] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter text-neutral-900 md:text-5xl">
            Promociones
          </h1>
          <p className="mt-4 text-lg font-medium text-neutral-500">
            Aprovecha nuestros beneficios exclusivos diseñados para el bienestar de tu mascota.
          </p>
        </div>
      </div>
      
      {/* Reutilizamos el componente pero le damos todas las promos */}
      <PromotionsSection promotions={promotions} />
    </main>
  );
}
