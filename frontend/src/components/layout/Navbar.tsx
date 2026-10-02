import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Menu, X, Compass, Sprout, Footprints, BookOpen, Users, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Inicio', icon: Compass },
    { to: '/plantas', label: 'Plantas Nativas', icon: Sprout },
    { to: '/caminatas', label: 'Caminatas', icon: Footprints },
    { to: '/explora', label: 'Explora Colombia', icon: Compass },
    { to: '/aprende', label: 'Aprende', icon: BookOpen },
    { to: '/comunidad', label: 'Comunidad', icon: Users },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-[#1B5E20] font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-[#1B5E20] hover:bg-slate-50'
                  }`
                }
              >
                <Icon className="w-4 h-4 text-emerald-600 opacity-80" />
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/573000000000?text=Hola%20Nativirentia,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20caminatas%20ecol%C3%B3gicas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-emerald-50 text-[#1B5E20] hover:bg-emerald-100 transition-colors border border-emerald-200"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#1B5E20]" />
            <span>Contacto Guías</span>
          </a>
          <Link
            to="/caminatas"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#2E7D32] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            Explorar Rutas
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${
                    isActive
                      ? 'bg-emerald-50 text-[#1B5E20] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <Icon className="w-5 h-5 text-emerald-600" />
                {link.label}
              </NavLink>
            );
          })}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/caminatas"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl font-semibold text-white bg-[#1B5E20] hover:bg-[#2E7D32]"
            >
              Explorar Rutas Ecoturísticas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
