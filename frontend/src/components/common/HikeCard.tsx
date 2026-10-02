import React from 'react';
import { Link } from 'react-router-dom';
import type { Hike } from '../../data/hikes';
import { Clock, MapPin, Footprints, ArrowRight, MessageCircle } from 'lucide-react';

interface HikeCardProps {
  hike: Hike;
  onOpenReservation?: (hike: Hike) => void;
}

export const HikeCard: React.FC<HikeCardProps> = ({ hike, onOpenReservation }) => {
  const getDifficultyColor = (diff: Hike['difficulty']) => {
    switch (diff) {
      case 'Alta':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Media':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-60 overflow-hidden bg-slate-100">
        <img
          src={hike.imageUrl}
          alt={hike.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Location badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 backdrop-blur-md text-white flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            {hike.department}
          </span>
        </div>

        {/* Difficulty badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getDifficultyColor(hike.difficulty)}`}>
            Dificultad {hike.difficulty}
          </span>
        </div>

        {/* Bottom stats inside image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              {hike.duration}
            </span>
            <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
              <Footprints className="w-3.5 h-3.5 text-emerald-300" />
              {hike.distanceKm} km
            </span>
          </div>
          <span className="bg-[#1B5E20]/90 text-white font-bold px-3 py-1 rounded-lg text-sm shadow-md">
            Desde ${hike.referencePriceCop.toLocaleString('es-CO')} COP
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-[#0288D1] uppercase tracking-wider mb-1 block">
            {hike.ecosystem}
          </span>
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#1B5E20] transition-colors leading-snug mb-2">
            {hike.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {hike.summary}
          </p>

          {/* Plantas que se pueden avistar */}
          <div className="mb-4">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              Plantas del recorrido:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {hike.featuredPlants.map((plantName, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-xs bg-emerald-50 text-[#1B5E20] border border-emerald-100 font-medium"
                >
                  🌿 {plantName}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            to={`/caminatas/${hike.id}`}
            className="text-sm font-semibold text-slate-700 hover:text-[#1B5E20] inline-flex items-center gap-1 group/btn"
          >
            <span>Ver Itinerario</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>

          <button
            type="button"
            onClick={() => onOpenReservation ? onOpenReservation(hike) : window.open(`https://wa.me/573115401534?text=${encodeURIComponent(hike.whatsappMessage)}`, '_blank')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#1B5E20] hover:bg-[#2E7D32] transition-colors shadow-2xs cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar Guía</span>
          </button>
        </div>
      </div>
    </div>
  );
};
