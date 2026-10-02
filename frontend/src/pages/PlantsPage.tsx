import React, { useState } from 'react';
import { PLANTS_DATA } from '../data/plants';
import { PlantCard } from '../components/common/PlantCard';
import { Search, Sprout, RefreshCw } from 'lucide-react';

export const PlantsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEcosystem, setSelectedEcosystem] = useState<string>('Todos');
  const [selectedType, setSelectedType] = useState<string>('Todos');

  const ecosystems = ['Todos', 'Páramo', 'Bosque Andino', 'Bosque de Niebla', 'Selva Tropical', 'Bosque Seco'];
  const plantTypes = ['Todos', 'Árbol', 'Orquídea', 'Palma', 'Hierba / Arbusto', 'Bambú'];

  const filteredPlants = PLANTS_DATA.filter((plant) => {
    const matchesSearch =
      plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.family.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEcosystem = selectedEcosystem === 'Todos' || plant.ecosystem === selectedEcosystem;
    const matchesType = selectedType === 'Todos' || plant.type === selectedType;
    return matchesSearch && matchesEcosystem && matchesType;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedEcosystem('Todos');
    setSelectedType('Todos');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#1B5E20] mb-3">
          <Sprout className="w-3.5 h-3.5" />
          <span>Herbario Vivo Digital</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Catálogo de Plantas Nativas de Colombia
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Explora especies autóctonas, su taxonomía, importancia ecológica y las caminatas donde podrás encontrarlas en su hábitat natural.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-5">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre común, científico (ej. Cattleya, Espeletia) o familia..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#1B5E20] focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all"
          />
        </div>

        {/* Ecosystem Pills */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Ecosistema:
          </span>
          <div className="flex flex-wrap gap-2">
            {ecosystems.map((eco) => (
              <button
                key={eco}
                onClick={() => setSelectedEcosystem(eco)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedEcosystem === eco
                    ? 'bg-[#1B5E20] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {eco}
              </button>
            ))}
          </div>
        </div>

        {/* Type Pills */}
        <div className="space-y-2 pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              Tipo de Especie:
            </span>
            <div className="flex flex-wrap gap-2">
              {plantTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedType === type
                      ? 'bg-[#0288D1] text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {(searchTerm || selectedEcosystem !== 'Todos' || selectedType !== 'Todos') && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 font-semibold cursor-pointer shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-sm text-slate-500 px-2">
        <span>Mostrando <strong className="text-slate-800">{filteredPlants.length}</strong> especies registradas</span>
      </div>

      {/* Plants Grid */}
      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 max-w-md mx-auto">
          <Sprout className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-lg text-slate-800 mb-1">No se encontraron especies</h3>
          <p className="text-sm text-slate-500 mb-4">Intenta cambiar los términos de búsqueda o limpiar los filtros seleccionados.</p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#1B5E20]"
          >
            Restablecer Filtros
          </button>
        </div>
      )}
    </div>
  );
};
