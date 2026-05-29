"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const forceDarkNavbar =
    pathname.startsWith("/agendar-cita") ||
    pathname.startsWith("/petshop");

  const darkMode = forceDarkNavbar || isScrolled;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 py-6 ${
        isScrolled ? "border-b" : ""
      } bg-transparent`}
      style={isScrolled ? { borderColor: '#E9DFC9', backgroundColor: '#F7F4EEee' } : {}}
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
              className="text-3xl font-black tracking-tighter transition-colors duration-500 leading-none"
              style={{ color: darkMode ? '#222222' : '#F7F4EE' }}
            >
              PAMPAW
            </h1>

            <span
              className="text-[11px] font-bold uppercase tracking-[0.4em] transition-colors duration-500 mt-1.5"
              style={{ color: darkMode ? '#4E5B31' : '#E9DFC9' }}
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
              className="text-[11px] font-black uppercase tracking-[0.25em] transition-colors duration-500"
              style={{ color: darkMode ? '#222222' : '#F7F4EE' }}
            >
              {item}
            </Link>
          ))}

          {/* Promos - claro sobre hero, verde sobre fondo claro */}
          <Link
            href="/#promos"
            className="text-[11px] font-black uppercase tracking-[0.25em] transition-colors duration-500"
            style={{ color: darkMode ? '#4E5B31' : '#E9DFC9' }}
          >
            Promos
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/agendar-cita"
            className="hidden sm:flex rounded-full px-12 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 active:scale-95"
            style={
              darkMode
                ? { backgroundColor: '#4E5B31', color: '#F7F4EE' }
                : { backgroundColor: '#F7F4EE', color: '#4E5B31' }
            }
          >
            Reservar
          </Link>
        </div>
      </div>
    </header>
  );
}