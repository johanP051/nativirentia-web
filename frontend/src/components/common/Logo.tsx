import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'compact' | 'white';
  showSlogan?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  showSlogan = true,
  className = '',
}) => {
  const isWhite = variant === 'white';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group transition-transform duration-300 hover:opacity-95 ${className}`}>
      {/* Imagotipo / Logo icon with colibrí animation */}
      <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm border border-emerald-100 flex-shrink-0 bg-[#E8F5E9] flex items-center justify-center group-hover:scale-105 transition-transform">
        <img 
          src="/assets/Nativirentia_Documento_Completo_Web_e_Identidad_image1.jpeg" 
          alt="Nativirentia Logo Colibrí y Montañas" 
          className="w-full h-full object-cover animate-colibri group-hover:rotate-3 transition-transform"
        />
      </div>

      {/* Brand Name & Slogan */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-bold tracking-tight text-xl ${isWhite ? 'text-white' : 'text-[#1B5E20]'}`}>
            NATI<span className="text-[#0288D1]">-</span>VIRENTIA
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#EC407A] animate-pulse" title="Biodiversidad Colombiana"></span>
        </div>
        {showSlogan && variant !== 'compact' && (
          <span className={`text-[11px] font-medium leading-tight ${isWhite ? 'text-emerald-100' : 'text-slate-500'}`}>
            Donde el alma conecta y la mente aprende
          </span>
        )}
      </div>
    </Link>
  );
};
