"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Páginas donde el navbar debe ser oscuro desde el inicio
  const forceDarkNavbar =
    pathname.startsWith("/agendar-cita") ||
    pathname.startsWith("/petshop");

  // Si estamos en una página clara O hicimos scroll
  const darkMode = forceDarkNavbar || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 py-6 ${
        isScrolled ? "border-b border-white/10" : ""
      } bg-transparent`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-5 group">

          <img
            src="/images/logo-no-bg.png"
            alt="Pampaw Logo"
            className={`h-14 w-auto transition-all duration-500 group-hover:scale-105 ${
              darkMode ? "" : "brightness-0 invert"
            }`}
          />

          <div className="flex flex-col">

            <h1
              className={`text-3xl font-black tracking-tighter transition-colors duration-500 leading-none ${
                darkMode ? "text-neutral-900" : "text-white"
              }`}
            >
              PAMPAW
            </h1>

            <span
              className={`text-[11px] font-bold uppercase tracking-[0.4em] transition-colors duration-500 mt-1.5 ${
                darkMode ? "text-neutral-400" : "text-neutral-300"
              }`}
            >
              Pet Store & Spa
            </span>

          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-10 lg:flex items-center">

          {["Inicio", "Servicios", "Petshop"].map((item) => (
            <Link
              key={item}
              href={
                item === "Inicio"
                  ? "/"
                  : item === "Servicios"
                  ? "/#servicios"
                  : "/petshop"
              }
              className={`text-[11px] font-black uppercase tracking-[0.25em] transition-colors duration-500 ${
                darkMode
                  ? "text-neutral-900 hover:text-neutral-500"
                  : "text-white hover:text-neutral-300"
              }`}
            >
              {item}
            </Link>
          ))}

          <Link
            href="/#promos"
            className={`text-[11px] font-black uppercase tracking-[0.25em] transition-colors duration-500 ${
              darkMode
                ? "text-green-600 hover:text-green-500"
                : "text-green-400 hover:text-green-300"
            }`}
          >
            Promos
          </Link>

        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">

          <Link
            href="/agendar-cita"
            className={`hidden sm:flex rounded-full px-12 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 active:scale-95 ${
              darkMode
                ? "bg-black text-white hover:bg-neutral-800"
                : "bg-white text-black hover:bg-neutral-100"
            }`}
          >
            Reservar
          </Link>

        </div>
      </div>
    </header>
  );
}