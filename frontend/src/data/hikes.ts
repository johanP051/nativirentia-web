export interface Hike {
  id: string;
  title: string;
  department: string;
  municipality: string;
  ecosystem: string;
  duration: string;
  distanceKm: number;
  difficulty: 'Baja' | 'Media' | 'Alta';
  referencePriceCop: number;
  priceNote: string;
  featuredPlants: string[];
  imageUrl: string;
  summary: string;
  included: string[];
  recommendations: string[];
  whatsappMessage: string;
}

export const HIKES_DATA: Hike[] = [
  {
    id: 'paramo-sumapaz',
    title: 'Travesía Sagrada por el Páramo de Sumapaz',
    department: 'Cundinamarca / Bogotá D.C.',
    municipality: 'Sumapaz / Cabrera',
    ecosystem: 'Páramo y Humedales de Altura',
    duration: '6 horas',
    distanceKm: 9.5,
    difficulty: 'Media',
    referencePriceCop: 85000,
    priceNote: 'Tarifa de referencia por persona con guía comunitario y seguro.',
    featuredPlants: ['Frailejón de Páramo', 'Chagualo / Copiney', 'Guayacán Amarillo'],
    imageUrl: '/assets/images/paramo_sumapaz.jpeg',
    summary: 'El páramo más grande del planeta. Un santuario de agua y silencio donde podrás contemplar lagunas glaciares y bosques milenarios de frailejones.',
    included: ['Guía local certificado e intérprete botánico', 'Seguro de asistencia médica integral', 'Refrigerio campesino agroecológico', 'Charla de conservación de páramos'],
    recommendations: ['Llevar calzado impermeable o botas de trekking', 'Impermeable o chaqueta cortavientos', 'Protección solar y termo reutilizable (cero plásticos)', 'Prohibido extraer musgos, frailejones o alterar el sendero'],
    whatsappMessage: 'Hola Nativirentia, deseo consultar disponibilidad y reservar la caminata al Páramo de Sumapaz.'
  },
  {
    id: 'valle-cocora',
    title: 'Santuario de las Palmas de Cera del Valle de Cocora',
    department: 'Quindío',
    municipality: 'Salento',
    ecosystem: 'Bosque Andino y Bosque de Niebla',
    duration: '5 horas',
    distanceKm: 8.0,
    difficulty: 'Media',
    referencePriceCop: 75000,
    priceNote: 'Tarifa de referencia. Varía según temporada y transporte.',
    featuredPlants: ['Palma de Cera del Quindío', 'Flor de Mayo / Orquídea Nacional', 'Guadua / Bambú Americano'],
    imageUrl: '/assets/images/valle_cocora.jpeg',
    summary: 'Camina entre las palmas más altas del planeta envueltas en niebla andina, cruzando puentes colgantes sobre el río Quindío y avistando colibríes silvestres.',
    included: ['Guía botánico local', 'Entrada a la reserva de palmas', 'Póliza de viaje', 'Taller de identificación del Loro Orejiamarillo'],
    recommendations: ['Ropa cómoda en capas', 'Cámara fotográfica', 'Respetar los senderos autorizados y fauna nativa'],
    whatsappMessage: 'Hola Nativirentia, me interesa información sobre el recorrido en el Valle de Cocora.'
  },
  {
    id: 'parque-chingaza',
    title: 'Ruta Lagunas de Siecha y Bosques de Niebla en Chingaza',
    department: 'Cundinamarca',
    municipality: 'Guasca / La Calera',
    ecosystem: 'Páramo Altoandino y Lagunas Glaciares',
    duration: '7 horas',
    distanceKm: 11.0,
    difficulty: 'Media',
    referencePriceCop: 120000,
    priceNote: 'Incluye inducción de Parques Nacionales Naturales.',
    featuredPlants: ['Frailejón de Páramo', 'Chagualo / Copiney', 'Flor de Mayo / Orquídea Nacional'],
    imageUrl: '/assets/images/parque_chingaza.jpeg',
    summary: 'Explora el territorio ancestral Muisca. Chingaza es la mayor reserva hídrica de Bogotá, albergando osos de anteojos, venados de cola blanca y frailejones gigantes.',
    included: ['Ingreso a Parques Nacionales Naturales de Colombia', 'Guía intérprete ambiental certificado', 'Seguro de senderismo', 'Inducción de respeto biocultural'],
    recommendations: ['Ropa abrigada térmica', 'Gorra, guantes y bloqueador', 'Cero residuos sólidos: todo residuo retorna con el senderista'],
    whatsappMessage: 'Hola Nativirentia, quiero reservar la ruta ecológica a las Lagunas de Siecha en Chingaza.'
  },
  {
    id: 'nevados-central',
    title: 'Expedición Cordillera Central y PNN Los Nevados',
    department: 'Caldas / Tolima / Risaralda',
    municipality: 'Manizales / Santa Rosa de Cabal',
    ecosystem: 'Superpáramo y Glaciar Andino',
    duration: '8 horas',
    distanceKm: 13.5,
    difficulty: 'Alta',
    referencePriceCop: 190000,
    priceNote: 'Requiere aclimatación previa sobre 3.800 msnm.',
    featuredPlants: ['Frailejón de Páramo', 'Chagualo / Copiney'],
    imageUrl: '/assets/images/nevados_central.jpeg',
    summary: 'Una travesía inolvidable por los paisajes lunares del superpáramo volcánico, con vistas panorámicas a los volcanes Nevado del Ruiz y Santa Isabel.',
    included: ['Transporte 4x4 especializado de alta montaña', 'Guía de montaña avalado', 'Alimentación calórica y almuerzo de montaña', 'Seguro de rescate'],
    recommendations: ['Buena condición física', 'Hidratación constante (mínimo 2 litros)', 'Lentes de sol con protección UV400'],
    whatsappMessage: 'Hola Nativirentia, deseo cotizar la expedición a Los Nevados.'
  },
  {
    id: 'jardin-botanico-quindio',
    title: 'Inmersión Botánica y Mariposario del Quindío',
    department: 'Quindío',
    municipality: 'Calarcá',
    ecosystem: 'Bosque Andino Subtropical',
    duration: '3.5 horas',
    distanceKm: 3.5,
    difficulty: 'Baja',
    referencePriceCop: 45000,
    priceNote: 'Experiencia formativa apta para familias y niños.',
    featuredPlants: ['Palma de Cera del Quindío', 'Flor de Mayo / Orquídea Nacional', 'Guadua / Bambú Americano'],
    imageUrl: '/assets/images/jardin_botanico_quindio.jpeg',
    summary: 'Visita guiada por una de las colecciones vivas de palmas y heliconias más extensas de América, culminando en un mariposario con más de 1.500 especies aladas.',
    included: ['Entrada completa al jardín botánico y mariposario', 'Recorrido botánico guiado de interpretación', 'Folleto ilustrado de plantas nativas'],
    recommendations: ['Zapatos cómodos para caminar', 'Repelente natural', 'Cámara para macrofotografía de flores'],
    whatsappMessage: 'Hola Nativirentia, deseo consultar boletos y visitas para el Jardín Botánico del Quindío.'
  },
  {
    id: 'amazonia-selva',
    title: 'Travesía Fluvial e Interpretación de Selva Amazónica',
    department: 'Amazonas',
    municipality: 'Leticia / Puerto Nariño',
    ecosystem: 'Selva Húmeda Tropical y Humedales de Varzea',
    duration: 'Día Completo (8h)',
    distanceKm: 7.0,
    difficulty: 'Media',
    referencePriceCop: 280000,
    priceNote: 'Incluye lancha rápida por el río Amazonas y almuerzo indígena.',
    featuredPlants: ['Ceiba Bruja / Árbol Sagrado', 'Yarumo Blanco', 'Flor de Mayo / Orquídea Nacional'],
    imageUrl: '/assets/images/amazonia_selva.jpeg',
    summary: 'Navega por el río más caudaloso del mundo, explora comunidades ribereñas sostenibles y descubre árboles gigantescos como la Ceiba pentandra en su hábitat prístino.',
    included: ['Transporte fluvial seguro con chaleco salvavidas', 'Guía nativo bilingüe de la comunidad', 'Almuerzo tradicional amazónico', 'Visita a los lagos de Tarapoto'],
    recommendations: ['Vacuna contra la fiebre amarilla al día', 'Ropa transpirable manga larga', 'Bolsa impermeable para dispositivos móviles'],
    whatsappMessage: 'Hola Nativirentia, deseo informes sobre la experiencia en la Amazonía colombiana.'
  }
];
