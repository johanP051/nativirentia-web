import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Heart, ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Plataforma dedicada a la educación botánica, la conservación de ecosistemas y el ecoturismo consciente en Colombia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                <ShieldCheck className="w-3.5 h-3.5" />
                Ecoturismo Responsable
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-pink-950/80 text-pink-400 border border-pink-800/50">
                <Heart className="w-3.5 h-3.5" />
                Flora Autóctona
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Exploración</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/plantas" className="hover:text-emerald-400 transition-colors">Plantas Nativas</Link></li>
              <li><Link to="/caminatas" className="hover:text-emerald-400 transition-colors">Caminatas Ecológicas</Link></li>
              <li><Link to="/explora" className="hover:text-emerald-400 transition-colors">Mapa de Ecosistemas</Link></li>
              <li><Link to="/aprende" className="hover:text-emerald-400 transition-colors">Sección Aprende</Link></li>
              <li><Link to="/comunidad" className="hover:text-emerald-400 transition-colors">Comunidad Naturalista</Link></li>
            </ul>
          </div>

          {/* Ecosistemas */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Ecosistemas</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Páramos de Alta Montaña</li>
              <li>Bosques Andinos y de Niebla</li>
              <li>Selva Húmeda Tropical</li>
              <li>Bosques Secos Tropicales</li>
              <li>Humedales y Riberas</li>
            </ul>
          </div>

          {/* Contacto & Redes */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cundinamarca & Región Andina, Colombia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contacto@nativirentia.co</span>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#EC407A] hover:text-white transition-colors" title="Instagram">
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0288D1] hover:text-white transition-colors" title="Facebook">
                  <span className="text-xs font-bold">FB</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NATIVIRENTIA. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            Conocimiento y protección biocultural de la flora colombiana.
          </p>
        </div>
      </div>
    </footer>
  );
};
