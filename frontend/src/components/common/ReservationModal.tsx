import React, { useState } from 'react';
import type { Hike } from '../../data/hikes';
import { X, MessageSquare, ShieldCheck } from 'lucide-react';

interface ReservationModalProps {
  hike: Hike | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ hike, isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [notes, setNotes] = useState('');

  if (!isOpen || !hike) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola Nativirentia! 🌿 Me interesa reservar la experiencia: *${hike.title}*.
- Nombre: ${name || 'Viajero'}
- Fecha tentativa: ${date || 'Próximo fin de semana'}
- Número de personas: ${travelers}
- Notas: ${notes || 'Ninguna'}
¿Tienen disponibilidad y detalles de pago?`;
    const whatsappUrl = `https://wa.me/573115401534?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-[#1B5E20] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-emerald-200 uppercase tracking-wider block">
              Consulta de Ecoturismo
            </span>
            <h3 className="font-bold text-lg leading-tight">
              {hike.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-100 flex items-center justify-between text-xs text-emerald-900 font-medium">
            <span>Tarifa de referencia:</span>
            <span className="font-bold text-sm text-[#1B5E20]">
              ${hike.referencePriceCop.toLocaleString('es-CO')} COP / persona
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre Completo</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Sebastián Posada"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#1B5E20] focus:ring-2 focus:ring-emerald-100 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Fecha Tentativa</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#1B5E20] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Senderistas</label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="15"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#1B5E20] text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Preguntas o requerimientos especiales (opcional)</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej. ¿Tienen transporte desde Bogotá o opción vegetariana?"
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#1B5E20] text-sm resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>Conectar directamente por WhatsApp con el Guía</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Sin intermediarios bancarios ocultos. Comunicación directa y transparente.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
