import "dotenv/config";

import { PrismaClient } from "../generated/prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL!;

const pool = new pg.Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.category.createMany({
    data: [
      { name: "Alimentos" },
      { name: "Accesorios" },
      { name: "Higiene" },
    ],
    skipDuplicates: true,
  });

  await prisma.service.createMany({
    data: [
      {
        name: "Baño Canino",
        description: "Baño completo para mascotas",
        price: 35000,
        duration: 60,
      },
      {
        name: "Consulta Veterinaria",
        description: "Consulta general",
        price: 50000,
        duration: 30,
      },
    ],
    skipDuplicates: true,
  });

  const category = await prisma.category.findFirst();

  if (category) {
    await prisma.product.createMany({
      data: [
        {
          name: "Shampoo Premium Canino",
          description: "Cuidado e hidratación para el pelaje.",
          price: 45000,
          stock: 10,
          imageUrl:
            "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200&auto=format&fit=crop",
          categoryId: category.id,
        },

        {
          name: "Collar para Mascotas",
          description: "Collar cómodo y resistente.",
          price: 35000,
          stock: 15,
          imageUrl:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
          categoryId: category.id,
        },

        {
          name: "Juguete Interactivo",
          description: "Diversión y estimulación para tu mascota.",
          price: 28000,
          stock: 20,
          imageUrl:
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
          categoryId: category.id,
        },
      ],
    });
  }

  console.log("✅ Seed ejecutado correctamente");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });