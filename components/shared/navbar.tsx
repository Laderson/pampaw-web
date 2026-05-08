import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-6 group">
          <img 
            src="/images/logo-no-bg.png" 
            alt="Pampaw Logo" 
            className="h-20 w-auto transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <h1 className="text-4xl font-black tracking-tighter text-neutral-900 leading-[0.8]">
              PAMPAW
            </h1>
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-neutral-400 mt-2">
              Pet Store & Spa
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-12 lg:flex items-center">
          <Link
            href="/"
            className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-900 hover:text-neutral-500 transition-colors"
          >
            Inicio
          </Link>

          <Link
            href="/#servicios"
            className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-900 hover:text-neutral-500 transition-colors"
          >
            Servicios
          </Link>

          <Link
            href="/petshop"
            className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-900 hover:text-neutral-500 transition-colors"
          >
            Petshop
          </Link>


          <Link
            href="/#promos"
            className="text-[11px] font-black uppercase tracking-[0.2em] text-green-600 hover:text-green-700 transition-colors"
          >
            Promos
          </Link>
        </nav>


        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/agendar-cita"
            className="hidden sm:flex rounded-full bg-black px-10 py-4 text-[10px] font-black uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800 active:scale-95"
          >
            Reservar
          </Link>
        </div>
      </div>
    </header>
  );
}
