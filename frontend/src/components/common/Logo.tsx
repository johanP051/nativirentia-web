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
      <div className="nativirentia-mark group-hover:scale-105 transition-transform" aria-hidden="true">
        {/* Clean base emblem in navbar - static and crisp, no overlay bird */}
        <img
          src="/assets/logo/nativirentia_emblem.svg"
          alt="Nativirentia"
          className="nativirentia-mark__original"
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

export const AnimatedNativirentiaLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative max-w-sm sm:max-w-md mx-auto ${className}`} aria-label="Nativirentia: Donde el alma conecta y la mente aprende">
    {/* Base crisp SVG emblem card */}
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#F3EFE3]">
      <img
        src="/assets/logo/nativirentia_emblem.svg"
        alt="Nati-Virentia. Donde el alma conecta y la mente aprende"
        className="w-full h-auto block"
      />
    </div>

    {/* Autonomous animated hummingbird flying on the right side without covering the emblem */}
    <div className="absolute -top-6 -right-10 sm:-right-16 w-24 sm:w-32 h-24 sm:h-32 z-20 pointer-events-none filter drop-shadow-lg animate-hero-flight">
      <img
        src="/assets/svg_layers/hummingbird_cropped.svg"
        alt=""
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);
