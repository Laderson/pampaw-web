type Props = {
  defaultValues?: {
    name?: string;
  };

  action: (formData: FormData) => void;
};

export default function CategoryForm({
  defaultValues,
  action,
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

      <button
        type="submit"
        className="rounded-2xl bg-neutral-900 px-6 py-3 text-white"
      >
        Guardar categoría
      </button>
    </form>
  );
}