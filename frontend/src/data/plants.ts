export interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  family: string;
  ecosystem: 'Páramo' | 'Bosque Andino' | 'Bosque de Niebla' | 'Selva Tropical' | 'Bosque Seco' | 'Humedal';
  region: 'Andina' | 'Amazonía' | 'Pacífica' | 'Caribe' | 'Orinoquía';
  altitude: string;
  type: 'Árbol' | 'Orquídea' | 'Palma' | 'Hierba / Arbusto' | 'Bambú' | 'Bromelia';
  conservationStatus: 'En Peligro (EN)' | 'Vulnerable (VU)' | 'Casi Amenazada (NT)' | 'Preocupación Menor (LC)';
  description: string;
  ecologicalImportance: string;
  curiosity: string;
  imageUrl: string;
  relatedHikeIds: string[];
}

export const PLANTS_DATA: Plant[] = [
  {
    id: 'frailejon-espeletia',
    commonName: 'Frailejón de Páramo',
    scientificName: 'Espeletia grandiflora',
    family: 'Asteraceae',
    ecosystem: 'Páramo',
    region: 'Andina',
    altitude: '3.100 m – 4.300 m',
    type: 'Hierba / Arbusto',
    conservationStatus: 'Vulnerable (VU)',
    description: 'Especie insignia de la alta montaña andina. Sus hojas afelpadas capturan la densa niebla y la condensan en gotas de agua cristalina.',
    ecologicalImportance: 'Actúa como una esponja biológica que regula y abastece las cuencas de agua potable de millones de colombianos.',
    curiosity: 'Crece únicamente 1 centímetro por año; un frailejón de dos metros de altura tiene más de 200 años de antigüedad.',
    imageUrl: '/assets/images/frailejon_espeletia.jpeg',
    relatedHikeIds: ['paramo-sumapaz', 'parque-chingaza', 'nevados-central']
  },
  {
    id: 'palma-de-cera',
    commonName: 'Palma de Cera del Quindío',
    scientificName: 'Ceroxylon quindiuense',
    family: 'Arecaceae',
    ecosystem: 'Bosque Andino',
    region: 'Andina',
    altitude: '2.000 m – 3.100 m',
    type: 'Palma',
    conservationStatus: 'En Peligro (EN)',
    description: 'El Árbol Nacional de Colombia y la palma más alta del planeta, capaz de elevarse hasta 60 metros sobre las colinas andinas.',
    ecologicalImportance: 'Hogar exclusivo y fuente vital de alimento para el Loro Orejiamarillo (Ognorhynchus icterotis), ave endémica amenazada.',
    curiosity: 'Su tronco está recubierto por una cera natural que los antiguos pobladores usaban para fabricar velas y fósforos.',
    imageUrl: '/assets/images/palma_de_cera.jpeg',
    relatedHikeIds: ['valle-cocora', 'jardin-botanico-quindio']
  },
  {
    id: 'orquidea-flor-mayo',
    commonName: 'Flor de Mayo / Orquídea Nacional',
    scientificName: 'Cattleya trianae',
    family: 'Orchidaceae',
    ecosystem: 'Bosque de Niebla',
    region: 'Andina',
    altitude: '1.000 m – 1.800 m',
    type: 'Orquídea',
    conservationStatus: 'En Peligro (EN)',
    description: 'Flor emblemática de la República de Colombia desde 1936. Sus pétalos exhiben un degradé sublime entre blanco, rosa y púrpura.',
    ecologicalImportance: 'Planta epífita que vive sobre la corteza de árboles sin parasitarlos, creando microhábitats para polinizadores e invertebrados.',
    curiosity: 'Lleva el nombre del botánico y médico colombiano José Jerónimo Triana, quien la catalogó durante la Comisión Corográfica del siglo XIX.',
    imageUrl: '/assets/images/orquidea_flor_mayo.jpeg',
    relatedHikeIds: ['valle-cocora', 'jardin-botanico-quindio', 'paramo-sumapaz']
  },
  {
    id: 'guadua-angustifolia',
    commonName: 'Guadua / Bambú Americano',
    scientificName: 'Guadua angustifolia',
    family: 'Poaceae',
    ecosystem: 'Bosque Andino',
    region: 'Andina',
    altitude: '400 m – 2.000 m',
    type: 'Bambú',
    conservationStatus: 'Preocupación Menor (LC)',
    description: 'Bambú leñoso nativo considerado el "acero vegetal" de Colombia por su asombrosa flexibilidad, durabilidad y velocidad de crecimiento.',
    ecologicalImportance: 'Forma "guaduales" densos que protegen las riberas de ríos y quebradas, evitando deslaves y filtrando sedimentos acuáticos.',
    curiosity: 'En condiciones climáticas óptimas de humedad, un tallo nuevo de guadua puede crecer hasta 15 centímetros en un solo día.',
    imageUrl: '/assets/images/guadua_angustifolia.png',
    relatedHikeIds: ['valle-cocora', 'jardin-botanico-quindio']
  },
  {
    id: 'yarumo-blanco',
    commonName: 'Yarumo Blanco',
    scientificName: 'Cecropia peltata',
    family: 'Urticaceae',
    ecosystem: 'Selva Tropical',
    region: 'Andina',
    altitude: '0 m – 2.200 m',
    type: 'Árbol',
    conservationStatus: 'Preocupación Menor (LC)',
    description: 'Árbol pionero inconfundible por el envés plateado de sus hojas grandes que brillan intensamente cuando el viento las agita.',
    ecologicalImportance: 'Primer colonizador de tierras degradadas que restaura el suelo. Mantiene una relación mutualista con hormigas del género Azteca.',
    curiosity: 'Es uno de los alimentos preferidos de los osos perezosos de dos y tres dedos en la selva colombiana.',
    imageUrl: '/assets/images/yarumo_blanco.jpeg',
    relatedHikeIds: ['amazonia-selva', 'parque-chingaza']
  },
  {
    id: 'guayacan-amarillo',
    commonName: 'Guayacán Amarillo',
    scientificName: 'Handroanthus chrysanthus',
    family: 'Bignoniaceae',
    ecosystem: 'Bosque Seco',
    region: 'Caribe',
    altitude: '0 m – 1.600 m',
    type: 'Árbol',
    conservationStatus: 'Casi Amenazada (NT)',
    description: 'Árbol majestuoso que tras perder sus hojas estalla en una floración sincrónica de color amarillo dorado que cubre valles enteros.',
    ecologicalImportance: 'Su floración masiva ofrece néctar abundante a abejas nativas, colibríes y mariposas durante épocas secas.',
    curiosity: 'Su madera es una de las más densas y duras del mundo; no flota en el agua y resiste décadas a la intemperie.',
    imageUrl: '/assets/images/guayacan_amarillo.jpeg',
    relatedHikeIds: ['paramo-sumapaz', 'valle-cocora']
  },
  {
    id: 'ceiba-pentandra',
    commonName: 'Ceiba Bruja / Árbol Sagrado',
    scientificName: 'Ceiba pentandra',
    family: 'Malvaceae',
    ecosystem: 'Selva Tropical',
    region: 'Amazonía',
    altitude: '0 m – 800 m',
    type: 'Árbol',
    conservationStatus: 'Preocupación Menor (LC)',
    description: 'El gigante de los bosques húmedos colombianos, con raíces tabulares monumentales y copas que superan los 70 metros de altura.',
    ecologicalImportance: 'Árbol emergente que sostiene ecosistemas enteros en su dosel: orquídeas, bromelias, aves de presa y monos.',
    curiosity: 'Para los pueblos indígenas amazónicos, la Ceiba conecta el inframundo, el mundo terrenal y el cielo espiritual.',
    imageUrl: '/assets/images/ceiba_pentandra.jpeg',
    relatedHikeIds: ['amazonia-selva']
  },
  {
    id: 'chagualo-copiney',
    commonName: 'Chagualo / Copiney',
    scientificName: 'Clusia multiflora',
    family: 'Clusiaceae',
    ecosystem: 'Bosque Andino',
    region: 'Andina',
    altitude: '1.800 m – 3.200 m',
    type: 'Árbol',
    conservationStatus: 'Preocupación Menor (LC)',
    description: 'Árbol andino de hojas gruesas y coriáceas que segrega un látex espeso y amarillento con propiedades curativas.',
    ecologicalImportance: 'Fija el suelo en laderas empinadas y sus frutos alimentan a pavas de monte, tucanes andinos y roedores nativos.',
    curiosity: 'Sus hojas resistentes eran utilizadas por los campesinos para escribir mensajes raspando su superficie cerosa.',
    imageUrl: '/assets/images/chagualo_copiney.jpeg',
    relatedHikeIds: ['parque-chingaza', 'paramo-sumapaz']
  },
  {
    id: 'heliconia',
    commonName: 'Heliconia / Platanillo',
    scientificName: 'Heliconia spp.',
    family: 'Heliconiaceae',
    ecosystem: 'Selva Tropical',
    region: 'Pacífica',
    altitude: '0 m – 2.000 m',
    type: 'Hierba / Arbusto',
    conservationStatus: 'Preocupación Menor (LC)',
    description: 'Plantas tropicales de importancia para diferentes organismos. Sus inflorescencias coloridas y vistosas atraen la atención de inmediato.',
    ecologicalImportance: 'Sus flores con formas especializadas son fundamentales para la polinización por colibríes y recolección de agua para insectos.',
    curiosity: 'Sus hojas grandes se utilizan tradicionalmente para envolver alimentos típicos colombianos como tamales y fiambres.',
    imageUrl: '/assets/images/heliconia.jpeg',
    relatedHikeIds: ['amazonia-selva']
  },
  {
    id: 'bromeliaceae',
    commonName: 'Bromelia',
    scientificName: 'Bromeliaceae',
    family: 'Bromeliaceae',
    ecosystem: 'Selva Tropical',
    region: 'Amazonía',
    altitude: '0 m – 3.000 m',
    type: 'Bromelia',
    conservationStatus: 'Preocupación Menor (LC)',
    description: 'Familia de plantas representativa de diferentes ambientes tropicales. Suelen crecer como epífitas sobre las ramas de grandes árboles.',
    ecologicalImportance: 'La disposición de sus hojas en roseta forma pequeños tanques de agua que sirven como hábitat y bebederos para ranas y aves.',
    curiosity: 'La piña (Ananas comosus) es el miembro más conocido de la familia Bromeliaceae y el único cultivado comercialmente por su fruto.',
    imageUrl: '/assets/images/bromeliaceae.jpeg',
    relatedHikeIds: ['amazonia-selva', 'valle-cocora']
  }
];

