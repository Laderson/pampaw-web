import "dotenv/config";

import { PrismaClient } from "../generated/prisma";

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

import { categories } from "./data/categories";
import { services } from "./data/services";
import { products } from "./data/products";
import { promotions } from "./data/promotions";

async function main() {
  console.log("🌱 Iniciando proceso de seed modular...");

  try {
    await prisma.$connect();
    console.log("🔌 Conectado a la base de datos");
  } catch (err: any) {
    console.error("❌ Error de conexión:", err);
    process.exit(1);
  }

  // 1. Limpiar base de datos (usando nombres de modelo verificados)
  console.log("🧹 Limpiando base de datos...");
  try {
    if (prisma.promotion) await prisma.promotion.deleteMany();
    if (prisma.product) await prisma.product.deleteMany();
    if (prisma.service) await prisma.service.deleteMany();
    if (prisma.category) await prisma.category.deleteMany();
  } catch (err: any) {
    console.warn("⚠️ Advertencia al limpiar tablas:", err.message);
  }

  // 2. Sembrar Categorías
  console.log("📦 Sembrando categorías...");
  for (const cat of categories) {
    await prisma.category.create({ data: cat });
  }
  const categoryList = await prisma.category.findMany();

  // 3. Sembrar Servicios
  console.log("🛁 Sembrando servicios...");
  for (const service of services) {
    await prisma.service.create({ data: service });
  }

  // 4. Sembrar Productos
  console.log("🛍️ Sembrando productos...");
  for (const productData of products) {
    const { categoryName, ...rest } = productData;
    const category = categoryList.find((c) => c.name === categoryName);
    if (category) {
      await prisma.product.create({
        data: {
          ...rest,
          categoryId: category.id,
        },
      });
    }
  }

  // 5. Sembrar Promociones
  console.log("🏷️ Sembrando promociones...");
  for (const promo of promotions) {
    await prisma.promotion.create({ data: promo });
  }

  console.log("✅ Seed premium modular completado con éxito");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });