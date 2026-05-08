import { prisma } from "@/lib/prisma";

import ServicesList from "@/components/dashboard/services/services-list";

export default async function ServicesPage() {
  const services =
    await prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <main>
      <ServicesList services={services} />
    </main>
  );
}