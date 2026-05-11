import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover grayscale opacity-60 transition-opacity duration-1000"
        >
          <source 
            src="https://res.cloudinary.com/dvlhicunu/video/upload/v1778468068/Luxury_Pet_Care_Scene_A_close-up_shot_reveals_a_man_with_short_brown_mJ6KUPdj_sn7iwe.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay for premium feel and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
        <div className="max-w-2xl">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
            Est. 2024 — Barranquilla
          </span>
          
          <h1 className="mt-8 text-5xl font-black tracking-tighter text-white md:text-8xl leading-[0.85]">
            Cuidado <br />
            <span className="text-neutral-400">Excepcional.</span>
          </h1>

          <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-neutral-300 font-medium">
            Experiencia premium en bienestar animal. Un santuario dedicado a la salud y felicidad de tu mejor amigo.
          </p>


          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              href="/agendar-cita"
              className="rounded-full bg-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.25em] text-black transition hover:bg-neutral-200 active:scale-95"
            >
              Reservar Ahora
            </Link>

            <Link
              href="/petshop"
              className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white"
            >
              Explorar Tienda
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:bg-white/10">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
