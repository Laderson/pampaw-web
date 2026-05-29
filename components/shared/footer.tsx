export default function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: '#F7F4EE', borderColor: '#E9DFC9' }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-6">
            <img 
              src="/images/logo-no-bg.png" 
              alt="Pampaw Logo" 
              className="h-24 w-auto"
            />
            <div className="flex flex-col">
              <h2 className="text-3xl font-black tracking-tighter leading-none" style={{ color: '#222222' }}>PAMPAW</h2>
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] mt-2" style={{ color: '#4E5B31' }}>Pet Store & Spa</span>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed max-w-xs" style={{ color: '#222222', opacity: 0.6 }}>
            Experiencia premium en bienestar animal. Spa canino, veterinaria y tienda especializada en el corazón de Barranquilla.
          </p>
          
          <div className="mt-6 flex gap-4">
            <a href="https://instagram.com/pampaw_co" target="_blank" className="transition-colors" style={{ color: '#4E5B31' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: '#222222' }}>
            Navegación
          </h3>
          <ul className="mt-6 space-y-4 text-[13px] font-medium" style={{ color: '#222222', opacity: 0.55 }}>
            <li><a href="/" className="hover:opacity-100 transition-opacity" style={{ color: 'inherit' }}>Inicio</a></li>
            <li><a href="#servicios" className="hover:opacity-100 transition-opacity" style={{ color: 'inherit' }}>Servicios</a></li>
            <li><a href="/tienda-mascotas-barranquilla" className="hover:opacity-100 transition-opacity" style={{ color: 'inherit' }}>Petshop</a></li>
            <li><a href="#promos" className="hover:opacity-100 transition-opacity" style={{ color: 'inherit' }}>Promociones</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: '#222222' }}>
            Horarios
          </h3>
          <ul className="mt-6 space-y-4 text-[13px] font-medium" style={{ color: '#222222', opacity: 0.55 }}>
            <li>
              <span className="block font-bold uppercase text-[9px] tracking-wider" style={{ color: '#4E5B31', opacity: 1 }}>Lunes a Sábado</span>
              8:00 AM — 7:00 PM
            </li>
            <li>
              <span className="block font-bold uppercase text-[9px] tracking-wider" style={{ color: '#4E5B31', opacity: 1 }}>Domingos y Festivos</span>
              Cerrado
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: '#222222' }}>
            Contacto
          </h3>
          <ul className="mt-6 space-y-4 text-[13px] font-medium" style={{ color: '#222222', opacity: 0.55 }}>
            <li className="flex items-start gap-2">
              <span>📍</span>
              Barranquilla, Colombia
            </li>
            <li className="flex items-start gap-2">
              <span>📞</span>
              +57 300 000 0000
            </li>
            <li className="flex items-start gap-2">
              <span>✉</span>
              contacto@pampaw.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-8" style={{ borderColor: '#E9DFC9' }}>
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium" style={{ color: '#222222', opacity: 0.4 }}>
            © {new Date().getFullYear()} Pampaw Pet Store. Todos los derechos reservados.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#4E5B31', opacity: 0.6 }}>
            Premium Pet Care
          </p>
        </div>
      </div>
    </footer>
  );
}