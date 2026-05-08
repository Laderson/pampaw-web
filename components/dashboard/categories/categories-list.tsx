"use client";

import Link from "next/link";
import { updateCategory } from "@/actions/categories/update-category";

import { deleteCategory } from "@/actions/categories/delete-category";

export default function CategoriesList({
  categories,
}: any) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">
            Categorías
          </h1>

          <p className="mt-2 text-neutral-600">
            Administra las categorías de productos.
          </p>
        </div>

        <Link
          href="/dashboard/categories/new"
          className="rounded-2xl bg-neutral-900 px-5 py-3 text-white"
        >
          Nueva categoría
        </Link>
      </div>

      <div className="mt-10 grid gap-4">
        {categories.map((category: any) => (
            <div
                key={category.id}
                className="flex items-center justify-between rounded-3xl border border-neutral-200 bg-white p-6"
            >
                <div>
                <h2 className="text-xl font-semibold text-neutral-900">
                    {category.name}
                </h2>
                </div>

                <div className="flex items-center gap-3">
                {/* Edit */}
                <form
                    action={updateCategory.bind(null, category.id)}
                    className="flex items-center gap-3"
                >
                    <input
                    type="text"
                    name="name"
                    defaultValue={category.name}
                    className="rounded-xl border border-neutral-200 px-4 py-2 outline-none"
                    />

                    <button
                    type="submit"
                    className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                    >
                    Guardar
                    </button>
                </form>

                {/* Delete */}
                <form
                    action={deleteCategory.bind(null, category.id)}
                >
                    <button
                    type="submit"
                    className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white"
                    >
                    Eliminar
                    </button>
                </form>
                </div>
            </div>
            ))}
      </div>
    </div>
  );
}