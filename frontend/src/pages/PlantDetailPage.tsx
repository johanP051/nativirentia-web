import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PLANTS_DATA } from '../data/plants';
import { HIKES_DATA } from '../data/hikes';
import { HikeCard } from '../components/common/HikeCard';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';

export const PlantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const plant = PLANTS_DATA.find((p) => p.id === id);

  if (!plant) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Especie no encontrada</h2>
        <Link to="/plantas" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B5E20]">
          <ArrowLeft className="w-4 h-4" /> Volver al catálogo de plantas
        </Link>
      </div>
    );
  }

  const linkedHikes = HIKES_DATA.filter((h) => plant.relatedHikeIds.includes(h.id));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back link */}
      <div>
        <Link
          to="/plantas"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#1B5E20] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todas las plantas nativas</span>
        </Link>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Plant Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 max-h-[500px]">
          <img
            src={plant.imageUrl}
            alt={plant.commonName}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-[#1B5E20] shadow-sm">
              {plant.ecosystem}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
              {plant.conservationStatus}
            </span>
          </div>
        </div>

        {/* Plant Metadata & Description */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#0288D1] uppercase tracking-wider block mb-1">
              Ficha Botánica Oficial
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {plant.commonName}
            </h1>
            <p className="text-lg italic font-serif text-slate-500 mt-1">
              {plant.scientificName} · Familia {plant.family}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Región</span>
              <strong className="text-slate-800 font-semibold">{plant.region}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Altitud</span>
              <strong className="text-slate-800 font-semibold">{plant.altitude}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Tipo</span>
              <strong className="text-slate-800 font-semibold">{plant.type}</strong>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-2">Descripción General</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {plant.description}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 space-y-1.5">
            <h4 className="font-bold text-xs text-[#1B5E20] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Importancia Ecológica
            </h4>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {plant.ecologicalImportance}
            </p>
          </div>

          <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-4 space-y-1.5">
            <h4 className="font-bold text-xs text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              ¿Sabías que...?
            </h4>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {plant.curiosity}
            </p>
          </div>
        </div>
      </div>

      {/* Interconnected Hikes Section */}
      <section className="pt-8 border-t border-slate-200 space-y-6">
        <div>
          <span className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider block mb-1">
            Conexión Ecoturística
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Caminatas donde puedes observar esta especie
          </h2>
          <p className="text-sm text-slate-500">
            Descubre las rutas que atraviesan el hábitat de {plant.commonName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkedHikes.map((hike) => (
            <HikeCard key={hike.id} hike={hike} />
          ))}
        </div>
      </section>
    </div>
  );
};
