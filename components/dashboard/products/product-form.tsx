"use client";

import { useState } from "react";

import ImageUpload from "@/components/dashboard/shared/image-upload";

type Props = {
  categories: any[];

  action: (formData: FormData) => void;

  defaultValues?: any;
};

export default function ProductForm({
  categories,
  action,
  defaultValues,
}: Props) {

  const [imageUrl, setImageUrl] = useState(
    defaultValues?.imageUrl || ""
  );
  return (
    <form
      action={action}
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
          defaultValue={defaultValues?.name}
          className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Descripción
        </label>

        <textarea
          name="description"
          rows={4}
          defaultValue={defaultValues?.description}
          className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Precio
          </label>

          <input
            type="number"
            name="price"
            required
            defaultValue={defaultValues?.price}
            className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            required
            defaultValue={defaultValues?.stock}
            className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          URL imagen
        </label>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Imagen
          </label>

          <input
            type="hidden"
            name="imageUrl"
            value={imageUrl}
          />

          <ImageUpload
            value={imageUrl}
            onChange={setImageUrl}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Categoría
        </label>

        <select
          name="categoryId"
          required
          defaultValue={defaultValues?.categoryId}
          className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none"
        >
          <option value="">
            Selecciona una categoría
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="rounded-2xl bg-neutral-900 px-6 py-3 text-white"
      >
        Guardar producto
      </button>
    </form>
  );
}