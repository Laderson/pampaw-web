type Props = {
  action: (formData: FormData) => void;

  defaultValues?: any;
};

export default function ServiceForm({
  action,
  defaultValues,
}: Props) {
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
            Duración (min)
          </label>

          <input
            type="number"
            name="duration"
            required
            defaultValue={defaultValues?.duration}
            className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="rounded-2xl bg-neutral-900 px-6 py-3 text-white"
      >
        Guardar servicio
      </button>
    </form>
  );
}