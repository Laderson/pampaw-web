import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pampaw | Experiencia Premium para Mascotas en Barranquilla",
  description: "El mejor spa canino, veterinaria y petshop de Barranquilla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}