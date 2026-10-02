import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Trees, Waves, Sun } from 'lucide-react';
import { PLANTS_DATA } from '../../data/plants';

export const ColombiaMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'Andina' | 'Amazonía' | 'Caribe' | 'Pacífica' | 'Orinoquía'>('Andina');

  const regions = [
    {
      id: 'Andina',
      name: 'Región Andina',
      ecosystems: 'Páramos, Bosque de Niebla y Bosque Altoandino',
      climate: 'Frío a templado (10°C - 18°C)',
      icon: Trees,
      color: 'bg-emerald-600 text-white',
      badge: 'Principal zona de Páramos',
      description: 'El corazón de las tres cordilleras colombianas. Hogar de frailejones centenarios, nacimientos de ríos sagrados y palmas de cera gigantes.'
    },
    {
      id: 'Amazonía',
      name: 'Región Amazónica',
      ecosystems: 'Selva Húmeda Tropical y Humedales de Varzea',
      climate: 'Cálido húmedo (25°C - 32°C)',
      icon: Waves,
      color: 'bg-teal-600 text-white',
      badge: 'Pulmón del Planeta',
      description: 'El mayor dosel vegetal del mundo. Árboles sagrados como la Ceiba pentandra y miles de plantas medicinales ancestrales.'
    },
    {
      id: 'Caribe',
      name: 'Región Caribe',
      ecosystems: 'Bosque Seco Tropical, Manglares y Sierra Nevada',
      climate: 'Cálido y soleado (28°C - 35°C)',
      icon: Sun,
      color: 'bg-amber-500 text-white',
      badge: 'Biodiversidad Costera y Sierra',
      description: 'Desde los bosques secos donde florece el Guayacán amarillo hasta la montaña costera más alta del mundo: la Sierra Nevada de Santa Marta.'
    }
  ] as const;

  const currentRegion = regions.find(r => r.id === selectedRegion) || regions[0];
  const regionPlants = PLANTS_DATA.filter(p => p.region === selectedRegion);
  // Filtered region data

  return (
    <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Selector Panel */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
            <Compass className="w-3.5 h-3.5" />
            <span>Navegación Territorial</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            Explora Colombia por Regiones
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Selecciona una región para descubrir sus ecosistemas característicos, especies botánicas nativas y caminatas de ecoturismo.
          </p>

          <div className="space-y-2 pt-2">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between ${
                  selectedRegion === reg.id
                    ? 'bg-emerald-900/60 border-emerald-500 text-white shadow-lg'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div>
                  <h4 className="font-semibold text-sm">{reg.name}</h4>
                  <span className="text-xs text-slate-400 block mt-0.5">{reg.badge}</span>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform ${selectedRegion === reg.id ? 'translate-x-1 text-emerald-400' : 'text-slate-500'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Zone Display */}
        <div className="w-full lg:w-2/3 bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-700">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                {currentRegion.ecosystems}
              </span>
              <h4 className="text-2xl font-bold text-white mt-1">
                {currentRegion.name}
              </h4>
            </div>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-700 text-slate-200">
              Clima: {currentRegion.climate}
            </span>
          </div>

          <p className="text-sm text-slate-300 my-4 leading-relaxed">
            {currentRegion.description}
          </p>

          {/* Plantas de la región */}
          <div className="mt-6">
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Plantas nativas representativas ({regionPlants.length})
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {regionPlants.map(plant => (
                <Link
                  key={plant.id}
                  to={`/plantas/${plant.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/70 hover:border-emerald-500/60 transition-all group"
                >
                  <img src={plant.imageUrl} alt={plant.commonName} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="overflow-hidden">
                    <span className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors block truncate">
                      {plant.commonName}
                    </span>
                    <span className="text-xs text-slate-400 italic block truncate">
                      {plant.scientificName}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enlace directo a ver caminatas */}
          <div className="mt-6 pt-6 border-t border-slate-700 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Experiencias activas en esta región
            </span>
            <Link
              to="/caminatas"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Ver caminatas disponibles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
