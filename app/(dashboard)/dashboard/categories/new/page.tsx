import { createCategory } from "@/actions/categories/create-category";

export default function NewCategoryPage() {
  return (
    <main className="max-w-2xl">
      <div>
        <h1 className="text-4xl font-bold text-neutral-900">
          Nueva categoría
        </h1>

        <p className="mt-2 text-neutral-600">
          Crea una nueva categoría para tus productos.
        </p>
      </div>

      <form
        action={createCategory}
        className="mt-10 space-y-6"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Nombre
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="Ej: Alimentos"
            className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-2xl bg-neutral-900 px-6 py-3 text-white transition hover:opacity-90"
        >
          Crear categoría
        </button>
      </form>
    </main>
  );
}