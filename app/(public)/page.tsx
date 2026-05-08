import Hero from "@/components/shared/hero";
import ServicesSection from "@/components/services/services-section";
import Benefits from "@/components/shared/benefits";
import ProductsSection from "@/components/shop/products-section";

import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Pampaw Pet Store | Spa Canino y Veterinaria en Barranquilla",
  description:
    "Spa canino, veterinaria y tienda para mascotas en Barranquilla.",
};

export default async function HomePage() {
  const services = await prisma.service.findMany();
  const products = await prisma.product.findMany({
    take: 3,
  });

  return (
    <main>
      <Hero />

      <ServicesSection services={services} />
      <Benefits />

      <ProductsSection products={products} />
    </main>
  );
}