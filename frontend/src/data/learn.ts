export interface Article {
  id: string;
  category: 'Biodiversidad' | 'Educación Botánica' | 'Ecoturismo Ético';
  title: string;
  summary: string;
  readTime: string;
  icon: string;
  keyPoints: string[];
  fullContent: string;
}

export const ARTICLES_DATA: Article[] = [
  {
    id: 'que-es-una-planta-nativa',
    category: 'Educación Botánica',
    title: '¿Qué es realmente una planta nativa y por qué importa?',
    summary: 'Una especie nativa u autóctona es aquella que ha evolucionado de forma natural en una región geográfica específica sin intervención humana.',
    readTime: '4 min de lectura',
    icon: 'Leaf',
    keyPoints: [
      'Ha coevolucionado durante milenios con la fauna, insectos y hongos locales.',
      'Requiere menos recursos artificiales y es resistente a plagas locales.',
      'Sostiene las redes tróficas y previene la extinción de polinizadores como colibríes y abejas solitarias.'
    ],
    fullContent: 'En Colombia, el segundo país más biodiverso del planeta en plantas, conviven más de 28.000 especies vegetales registradas. Proteger las plantas autóctonas como los frailejones y la palma de cera garantiza la seguridad hídrica y el equilibrio climático de nuestras cordilleras.'
  },
  {
    id: 'nativas-vs-introducidas',
    category: 'Biodiversidad',
    title: 'Plantas Nativas vs. Especies Introducidas e Invasoras',
    summary: 'Aprende a diferenciar las especies que pertenecen al ecosistema de aquellas traídas de otros continentes que amenazan los suelos colombianos.',
    readTime: '5 min de lectura',
    icon: 'ShieldCheck',
    keyPoints: [
      'Especies como el pino pátula o el eucalipto acidifican los suelos andinos y consumen hasta 10 veces más agua que un bosque nativo.',
      'El retamo espinoso desplaza a los frailejones en los páramos de Cundinamarca y aumenta el riesgo de incendios forestales.',
      'Sembrar especies nativas restaura la fertilidad del suelo y revive los nacederos de agua.'
    ],
    fullContent: 'Muchas personas creen que cualquier árbol es bueno para el ambiente, pero los monocultivos de especies foráneas pueden desecar humedales. Nativirentia promueve el reconocimiento de especies locales para una reforestación consciente y regenerativa.'
  },
  {
    id: 'senderismo-cero-impacto',
    category: 'Ecoturismo Ético',
    title: 'Decálogo del Senderista Consciente: Disfrutar sin dejar huella',
    summary: 'Protocolos indispensables de comportamiento ambiental para recorrer páramos y bosques de niebla con absoluto respeto biocultural.',
    readTime: '3 min de lectura',
    icon: 'Compass',
    keyPoints: [
      'Nunca pisar ni extraer frailejones, musgos o orquídeas silvestres (delito ambiental penado por ley).',
      'Permanecer estrictamente dentro del sendero demarcado para evitar la compactación del suelo.',
      'Cero plásticos de un solo uso: toda basura o cáscara orgánica debe regresar a la ciudad.',
      'Guardar silencio o hablar en voz baja para no perturbar a las aves y mamíferos silvestres.'
    ],
    fullContent: 'El ecoturismo no es solo contemplación recreativa; es una postura ética de reverencia hacia la vida. Al conectar con la naturaleza con humildad, tu mente aprende y el territorio permanece intacto para las futuras generaciones.'
  }
];
