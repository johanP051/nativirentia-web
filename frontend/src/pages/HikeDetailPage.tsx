import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HIKES_DATA } from '../data/hikes';
import { ReservationModal } from '../components/common/ReservationModal';
import { Clock, MapPin, Footprints, ShieldCheck, CheckCircle2, AlertTriangle, ArrowLeft, MessageSquare } from 'lucide-react';

export const HikeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hike = HIKES_DATA.find((h) => h.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!hike) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Recorrido no encontrado</h2>
        <Link to="/caminatas" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B5E20]">
          <ArrowLeft className="w-4 h-4" /> Volver a todas las caminatas
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div>
        <Link
          to="/caminatas"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#1B5E20] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al catálogo de caminatas</span>
        </Link>
      </div>

      {/* Main Hike Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 min-h-[400px] flex items-end">
        <img
          src={hike.imageUrl}
          alt={hike.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative z-10 p-6 sm:p-10 text-white max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-white backdrop-blur-md">
              {hike.ecosystem}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md">
              Dificultad {hike.difficulty}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {hike.title}
          </h1>

          <p className="text-sm text-slate-200 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>{hike.municipality}, {hike.department}</span>
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Descripción de la Experiencia</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {hike.summary}
            </p>
          </div>

          {/* Included Services */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base">¿Qué incluye la experiencia?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hike.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Recommendations */}
          <div className="bg-amber-50/70 rounded-3xl p-6 border border-amber-100 space-y-4">
            <h3 className="font-bold text-amber-900 text-base flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Recomendaciones de Seguridad y Ética Ambiental
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
              {hike.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Sticky Booking Box */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">Tarifa de Referencia</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#1B5E20]">
                  ${hike.referencePriceCop.toLocaleString('es-CO')}
                </span>
                <span className="text-xs text-slate-500 font-medium">COP / persona</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{hike.priceNote}</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> Duración</span>
                <strong className="text-slate-800">{hike.duration}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Footprints className="w-4 h-4 text-slate-400" /> Distancia</span>
                <strong className="text-slate-800">{hike.distanceKm} km</strong>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 rounded-2xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar y Reservar con Guía</span>
            </button>

            <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Conexión directa vía WhatsApp con el operador local.
            </p>
          </div>
        </div>
      </div>

      <ReservationModal
        hike={hike}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
