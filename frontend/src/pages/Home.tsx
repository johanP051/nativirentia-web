import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PLANTS_DATA } from '../data/plants';
import { HIKES_DATA } from '../data/hikes';
import type { Hike } from '../data/hikes';
import { PlantCard } from '../components/common/PlantCard';
import { HikeCard } from '../components/common/HikeCard';
import { ReservationModal } from '../components/common/ReservationModal';
import { ColombiaMap } from '../components/common/ColombiaMap';
import { Sprout, Footprints, Heart, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedHike, setSelectedHike] = useState<Hike | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenReservation = (hike: Hike) => {
    setSelectedHike(hike);
    setIsModalOpen(true);
  };

  const featuredPlants = PLANTS_DATA.slice(0, 4);
  const featuredHikes = HIKES_DATA.slice(0, 3);

  const pillars = [
    { step: '01', title: 'Conocer', desc: 'Identifica la flora nativa y su valor biológico.', icon: Sprout },
    { step: '02', title: 'Comprender', desc: 'Aprende cómo cada especie sostiene el ciclo del agua.', icon: BookOpen },
    { step: '03', title: 'Explorar', desc: 'Camina senderos andinos guiados por expertos locales.', icon: Footprints },
    { step: '04', title: 'Valorar', desc: 'Conecta con la sabiduría ancestral y la montaña.', icon: Heart },
    { step: '05', title: 'Conservar', desc: 'Apoya el ecoturismo ético y protege los ecosistemas.', icon: ShieldCheck },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
            alt="Paisaje Colombiano Ecoturismo"
            className="w-full h-full object-cover opacity-50 scale-105 animate-float duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-20">
          {/* Animated Colibrí & Eco Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Plataforma Oficial de Ecoturismo y Botánica Nativa</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            NATI<span className="text-[#0288D1]">-</span>VIRENTIA
          </h1>

          <p className="font-cursive text-3xl sm:text-5xl text-emerald-300 mb-6 drop-shadow-md">
            “Donde el alma conecta y la mente aprende”
          </p>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Descubre las especies vegetales que dan vida a Colombia. Conecta tus sentidos con los páramos y bosques andinos a través de experiencias de ecoturismo consciente.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/caminatas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#1B5E20] hover:bg-[#2E7D32] shadow-lg hover:shadow-emerald-900/40 transition-all hover:-translate-y-0.5"
            >
              <Footprints className="w-5 h-5 text-emerald-300" />
              <span>Explorar Caminatas</span>
            </Link>
            <Link
              to="/plantas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Sprout className="w-5 h-5 text-[#1B5E20]" />
              <span>Descubrir Plantas Nativas</span>
            </Link>
          </div>
        </div>

        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-[#F8FAFC] clip-path-slant" />
      </section>

      {/* 5 Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider block mb-1">
            Nuestra Metodología
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            El Camino de la Conciencia Biocultural
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1B5E20] flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-400 mb-1">{pillar.step}</span>
                <h3 className="font-bold text-base text-slate-800 mb-1">{pillar.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider block mb-1">
              Biodiversidad Vegetal
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Especies Nativas Destacadas
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Plantas emblemáticas que puedes observar en su estado silvestre.
            </p>
          </div>
          <Link
            to="/plantas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B5E20] hover:text-[#0288D1] transition-colors"
          >
            <span>Ver catálogo completo ({PLANTS_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Interconnection Loop Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1B5E20] to-[#0288D1] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md mb-4">
              Diferenciación Nativirentia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Más que turismo: Conectamos la planta con su territorio
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-8">
              En lugar de paquetes comerciales genéricos, en Nativirentia la botánica es la brújula. Eliges una especie nativa que deseas conocer y nosotros te guiamos hacia su ecosistema vivo.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium">
              <span className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">🌿 Planta Nativa</span>
              <span className="text-white/60">➔</span>
              <span className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">🏔️ Ecosistema</span>
              <span className="text-white/60">➔</span>
              <span className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">🥾 Caminata Guiada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hikes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#0288D1] uppercase tracking-wider block mb-1">
              Ecoturismo Responsable
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Rutas y Caminatas Ecológicas
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Experiencias de bajo impacto con guías certificados y comunidades locales.
            </p>
          </div>
          <Link
            to="/caminatas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B5E20] hover:text-[#0288D1] transition-colors"
          >
            <span>Ver todas las caminatas ({HIKES_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHikes.map((hike) => (
            <HikeCard key={hike.id} hike={hike} onOpenReservation={handleOpenReservation} />
          ))}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ColombiaMap />
      </section>

      {/* Global Reservation Modal */}
      <ReservationModal
        hike={selectedHike}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
