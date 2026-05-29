import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center" style={{ backgroundColor: '#4E5B31' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-40 transition-opacity duration-1000"
          style={{ filter: 'sepia(0.3) saturate(0.5)' }}
        >
          <source 
            src="https://res.cloudinary.com/dvlhicunu/video/upload/v1778468068/Luxury_Pet_Care_Scene_A_close-up_shot_reveals_a_man_with_short_brown_mJ6KUPdj_sn7iwe.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #4E5B31ee 40%, #4E5B3199 70%, transparent)' }} />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
        <div className="max-w-2xl">
          <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: '#E9DFC9' }}>
            Est. 2024 — Barranquilla
          </span>
          
          <h1 className="mt-8 text-5xl font-black tracking-tighter md:text-8xl leading-[0.85]" style={{ color: '#F7F4EE' }}>
            Cuidado <br />
            <span style={{ color: '#E9DFC9' }}>Excepcional.</span>
          </h1>

          <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed font-medium" style={{ color: '#F7F4EE', opacity: 0.8 }}>
            Experiencia premium en bienestar animal. Un santuario dedicado a la salud y felicidad de tu mejor amigo.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              href="/agendar-cita"
              className="rounded-full px-12 py-5 text-[10px] font-black uppercase tracking-[0.25em] transition active:scale-95 hero-btn"
            >
              Reservar Ahora
            </Link>

            <Link
              href="/petshop"
              className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]"
              style={{ color: '#F7F4EE' }}
            >
              Explorar Tienda
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors group-hover:bg-white/10"
                style={{ borderColor: '#E9DFC966' }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .hero-btn { background-color: #E9DFC9; color: #222222; }
        .hero-btn:hover { background-color: #F7F4EE; }
      `}</style>
    </section>
  );
}