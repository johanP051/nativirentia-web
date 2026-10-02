import React, { useState } from 'react';
import { HIKES_DATA } from '../data/hikes';
import type { Hike } from '../data/hikes';
import { HikeCard } from '../components/common/HikeCard';
import { ReservationModal } from '../components/common/ReservationModal';
import { Footprints, Search } from 'lucide-react';

export const HikesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Todas');
  const [selectedHike, setSelectedHike] = useState<Hike | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const difficulties = ['Todas', 'Baja', 'Media', 'Alta'];

  const filteredHikes = HIKES_DATA.filter((hike) => {
    const matchesSearch =
      hike.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hike.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hike.ecosystem.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiff = selectedDifficulty === 'Todas' || hike.difficulty === selectedDifficulty;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#1B5E20] mb-3">
          <Footprints className="w-3.5 h-3.5" />
          <span>Ecoturismo de Bajo Impacto</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Caminatas y Travesías Ecológicas
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Recorre senderos andinos, páramos y bosques de niebla. Cada caminata está guiada por biólogos o guías locales con enfoque en la protección de la biodiversidad.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por destino, páramo o departamento..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#1B5E20] focus:bg-white"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
            Dificultad:
          </span>
          {difficulties.map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                selectedDifficulty === diff
                  ? 'bg-[#1B5E20] text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHikes.map((hike) => (
          <HikeCard
            key={hike.id}
            hike={hike}
            onOpenReservation={(h) => {
              setSelectedHike(h);
              setIsModalOpen(true);
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <ReservationModal
        hike={selectedHike}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
