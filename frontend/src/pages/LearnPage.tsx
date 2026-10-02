import React from 'react';
import { ARTICLES_DATA } from '../data/learn';
import { BookOpen, CheckCircle } from 'lucide-react';

export const LearnPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#1B5E20] mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Educación Ambiental y Conservación</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Sección Aprende
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-cursive text-2xl text-emerald-800">
          “La mente aprende para cuidar y actuar”
        </p>
      </div>

      {/* Articles */}
      <div className="space-y-8">
        {ARTICLES_DATA.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-5"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#1B5E20] border border-emerald-100">
                {article.category}
              </span>
              <span className="text-xs text-slate-400 font-medium">{article.readTime}</span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 leading-snug">
              {article.title}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              {article.summary}
            </p>

            {/* Keypoints */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Puntos Clave:
              </span>
              {article.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-100">
              {article.fullContent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
