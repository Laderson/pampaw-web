"use client";

import { CldUploadWidget } from "next-cloudinary";

type Props = {
  value?: string;

  onChange: (url: string) => void;
};

export default function ImageUpload({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-4">
      {value && (
        <div className="h-40 w-40 overflow-hidden rounded-2xl border border-neutral-200">
          <img
            src={value}
            alt="Uploaded"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <CldUploadWidget
        uploadPreset="pampaw_unsigned"
        onSuccess={(result: any) => {
          onChange(result.info.secure_url);
        }}
      >
        {({ open }) => {
          return (
            <button
              type="button"
              onClick={() => open()}
              className="rounded-2xl bg-neutral-900 px-5 py-3 text-white"
            >
              Subir imagen
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}