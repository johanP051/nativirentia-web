import React from 'react';
import { Link } from 'react-router-dom';
import type { Plant } from '../../data/plants';
import { Mountain, ArrowRight, Sparkles } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const getStatusColor = (status: Plant['conservationStatus']) => {
    switch (status) {
      case 'En Peligro (EN)':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Vulnerable (VU)':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={plant.imageUrl}
          alt={plant.commonName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

        {/* Badges on image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#1B5E20] shadow-xs">
            {plant.ecosystem}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900/70 backdrop-blur-md text-white">
            {plant.type}
          </span>
        </div>

        {/* Conservation badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border backdrop-blur-md ${getStatusColor(plant.conservationStatus)}`}>
            {plant.conservationStatus}
          </span>
          <span className="text-white/90 text-xs flex items-center gap-1 font-medium drop-shadow-sm">
            <Mountain className="w-3.5 h-3.5" />
            {plant.altitude}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#1B5E20] transition-colors">
            {plant.commonName}
          </h3>
          <p className="text-xs italic text-slate-500 font-serif mb-3">
            {plant.scientificName} · Familia {plant.family}
          </p>
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {plant.description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            {plant.relatedHikeIds.length} caminatas vinculadas
          </span>

          <Link
            to={`/plantas/${plant.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#1B5E20] hover:text-[#0288D1] transition-colors group/btn"
          >
            <span>Ver Ficha</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
