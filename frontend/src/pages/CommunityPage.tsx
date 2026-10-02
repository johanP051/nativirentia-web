import React, { useState } from 'react';
import { Users, Star, Send, Heart } from 'lucide-react';

export const CommunityPage: React.FC = () => {
  const [plantName, setPlantName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setPlantName('');
      setLocation('');
      setDescription('');
      setSubmitted(false);
    }, 4000);
  };

  const reviews = [
    {
      author: 'Camila Ospina',
      role: 'Senderista y Fotógrafa',
      rating: 5,
      hike: 'Páramo de Sumapaz',
      comment: 'Una experiencia transformadora. No fue solo caminar; el guía nos enseñó a ver la delicadeza con la que el frailejón retiene el agua. Nativirentia cambia la forma de viajar.',
      date: 'Septiembre 2026'
    },
    {
      author: 'Andrés Felipe Gómez',
      role: 'Estudiante de Biología',
      rating: 5,
      hike: 'Valle de Cocora',
      comment: 'Hermoso ver el enfoque botánico y ético. En lugar del turismo masivo invasivo, aprendimos sobre el Loro Orejiamarillo y la regeneración de la palma de cera.',
      date: 'Agosto 2026'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#1B5E20] mb-3">
          <Users className="w-3.5 h-3.5" />
          <span>Comunidad y Ciencia Ciudadana</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Comunidad Nativirentia
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comparte observaciones, experiencias reales de senderismo y colabora en el registro botánico de Colombia.
        </p>
      </div>

      {/* Gamification Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'Explorador de Plantas', desc: 'Identifica 5 especies nativas en campo', icon: '🌿' },
          { title: 'Guardián del Páramo', desc: 'Recorre un páramo sin dejar rastro', icon: '🏔️' },
          { title: 'Fotógrafo Naturalista', desc: 'Comparte 3 fotos de flora autóctona', icon: '📸' },
          { title: 'Amigo de la Niebla', desc: 'Participa en 2 caminatas guiadas', icon: '💧' },
        ].map((badge, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 text-center shadow-xs">
            <span className="text-3xl mb-2 block">{badge.icon}</span>
            <h3 className="font-bold text-sm text-slate-900">{badge.title}</h3>
            <p className="text-xs text-slate-500 mt-1">{badge.desc}</p>
          </div>
        ))}
      </div>

      {/* Split: Contribution Form & Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Formulario de Aporte de Especies */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider block mb-1">
              Ciencia Ciudadana
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Registra un Avistamiento de Planta
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              ¿Viste una planta nativa en tu última caminata? Comparte sus datos para revisión por parte de nuestro equipo.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
              <Heart className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-base text-emerald-900">¡Aporte Recibido con Éxito!</h4>
              <p className="text-xs text-emerald-700">Tu registro pasará por verificación botánica antes de publicarse en la comunidad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre común o aparente</label>
                <input
                  type="text"
                  required
                  value={plantName}
                  onChange={(e) => setPlantName(e.target.value)}
                  placeholder="Ej. Orquídea miniatura, Frailejón plateado"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1B5E20]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ubicación aproximada (Municipio / Sendero)</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej. Páramo de Sumapaz, cerca a la laguna"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1B5E20]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Observaciones botánicas</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe color de la flor, altura o estado del entorno..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1B5E20] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Avistamiento a Revisión</span>
              </button>
            </form>
          )}
        </div>

        {/* Reseñas de la Comunidad */}
        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold text-[#0288D1] uppercase tracking-wider block mb-1">
              Testimonios Reales
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Voces de la Comunidad
            </h2>
          </div>

          <div className="space-y-4">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{rev.author}</h4>
                    <span className="text-xs text-slate-400">{rev.role} · {rev.hike}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
                <span className="text-[11px] text-slate-400 block">{rev.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
