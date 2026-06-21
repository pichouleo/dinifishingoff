// ============================================================
// data.ts — Données statiques : espèces, séjours, logements, galerie
// ============================================================

import type { Species, Stay, Lodging, GalleryPhoto } from '../types';

export const SPECIES: Species[] = [
  {
    id: 'brochet',
    latin: 'Esox lucius',
    name: { fr: 'Brochet', en: 'Pike', es: 'Lucio' },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80',
    imageAlt: 'Brochet — Esox lucius — pêche en Extremadura',
    description: {
      fr: "Le prédateur emblématique des eaux douces d'Extremadura. Chasseur solitaire à l'affût, capable de fulgurantes accélérations depuis ses caches dans les herbiers. En Extremadura, les spécimens atteignent régulièrement de belles tailles dans des eaux peu pêchées.",
      en: "The iconic predator of Extremadura's freshwaters. A solitary ambush hunter capable of lightning accelerations from its hideouts in the weedbeds. In Extremadura, specimens regularly reach impressive sizes in lightly-fished waters.",
      es: 'El depredador emblemático de las aguas dulces de Extremadura. Cazador solitario al acecho, capaz de fulminantes aceleraciones desde sus escondites en los herbazales. En Extremadura, los ejemplares alcanzan regularmente grandes tamaños en aguas poco pescadas.',
    },
    techniques: ['Streamer', 'Leurre souple', 'Swimbaits', 'Spinnerbait'],
    activeMonths: [2, 3, 4, 8, 9, 10],
  },
  {
    id: 'black-bass',
    latin: 'Micropterus salmoides',
    name: { fr: 'Black Bass', en: 'Largemouth Bass', es: 'Black Bass' },
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80',
    imageAlt: 'Black Bass — Micropterus salmoides — pêche en Extremadura Espagne',
    description: {
      fr: "Le combattant des eaux chaudes. Le Black Bass a prospéré en Extremadura grâce à la chaleur et à l'abondance de nourriture. Pêche de surface au popper ou en profondeur au jig — cette espèce propose une pêche extrêmement variée et technique.",
      en: 'The fighter of warm waters. Largemouth Bass has thrived in Extremadura thanks to the heat and food abundance. Surface fishing with poppers or deep fishing with jigs — this species offers extremely varied and technical fishing.',
      es: 'El combatiente de las aguas cálidas. El Black Bass ha prosperado en Extremadura gracias al calor y la abundancia de alimento. Pesca en superficie con popper o en profundidad con jig — esta especie ofrece una pesca extremadamente variada y técnica.',
    },
    techniques: ['Popper', 'Jig', 'Leurre texan', 'Streamer (mouche)'],
    activeMonths: [2, 3, 4, 5, 6, 8, 9],
  },
  {
    id: 'sandre',
    latin: 'Sander lucioperca',
    name: { fr: 'Sandre', en: 'Zander', es: 'Lucioperca' },
    image: 'https://images.unsplash.com/photo-1574722772249-b07cfc99e4c8?w=900&q=80',
    imageAlt: 'Sandre — Sander lucioperca — pêche aux carnassiers Extremadura',
    description: {
      fr: "Le technicien des eaux profondes. Le Sandre se tient sur les cassures, les fonds durs et les structures immergées, souvent à contre-courant. Il exige une présentation précise et une pêche lente, en contact permanent avec le fond.",
      en: 'The technician of deep waters. Zander holds on drop-offs, hard bottoms and submerged structures, often facing the current. It demands precise presentation and slow fishing, in permanent contact with the bottom.',
      es: 'El técnico de las aguas profundas. La lucioperca se sitúa en los saltos, los fondos duros y las estructuras sumergidas, a menudo a contracorriente. Exige una presentación precisa y una pesca lenta, en contacto permanente con el fondo.',
    },
    techniques: ['Jig drop-shot', 'Leurre souple', 'Verticale'],
    activeMonths: [0, 1, 2, 8, 9, 10, 11],
  },
  {
    id: 'barbeau-comizo',
    latin: 'Luciobarbus comizo',
    name: { fr: 'Barbeau Comizo', en: 'Comizo Barbel', es: 'Barbo Comizo' },
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=80',
    imageAlt: 'Barbeau Comizo — Luciobarbus comizo — pêche à la mouche Extremadura',
    description: {
      fr: "La star méconnue de l'Extremadura. Espèce endémique du bassin du Tage, le Barbeau Comizo peut dépasser le mètre et les 10 kg. Très méfiant, il se pêche à la nymphe à vue sur les radiers — une expérience technique inoubliable.",
      en: "Extremadura's best-kept secret. An endemic species of the Tagus basin, the Comizo Barbel can exceed one metre and 10 kg. Very wary, it is fished with nymphs sight-fishing on the riffles — an unforgettable technical experience.",
      es: 'La estrella desconocida de Extremadura. Especie endémica de la cuenca del Tajo, el Barbo Comizo puede superar el metro y los 10 kg. Muy desconfiado, se pesca con ninfa a la vista en los rápidos — una experiencia técnica inolvidable.',
    },
    techniques: ['Nymphe', 'Haute tige', 'Pêche à vue'],
    activeMonths: [2, 3, 4, 5, 8, 9],
  },
];

export const STAYS: Stay[] = [
  {
    id: 'weekend',
    badge: { fr: 'Week-end', en: 'Weekend', es: 'Fin de semana' },
    title: { fr: 'Week-end Carnassiers', en: 'Predator Weekend', es: 'Fin de semana Depredadores' },
    duration: { fr: '2 jours / 2 nuits', en: '2 days / 2 nights', es: '2 días / 2 noches' },
    description: {
      fr: "L'essentiel du carnassier en Extremadura sur un week-end intensif. Brochet, Black Bass, Sandre — le lac n'a pas de secrets pour Dini.",
      en: "The best of Extremadura predator fishing in an intensive weekend. Pike, Bass, Zander — Dini knows the lake inside out.",
      es: 'Lo mejor de la pesca de depredadores en Extremadura en un fin de semana intensivo. Lucio, Black Bass, Lucioperca — Dini conoce el lago a la perfección.',
    },
    includes: {
      fr: ['Guide expert sur toute la durée', 'Bateau équipé (moteur + sondeur)', 'Matériel fourni sur demande', 'Conseils techniques personnalisés', 'Spots exclusifs non accessibles au public'],
      en: ['Expert guide throughout', 'Fully equipped boat (engine + sonar)', 'Tackle available on request', 'Personalised technical tips', 'Exclusive spots not open to the public'],
      es: ['Guía experto durante toda la estancia', 'Barca equipada (motor + sonda)', 'Material disponible bajo petición', 'Consejos técnicos personalizados', 'Spots exclusivos no accesibles al público'],
    },
  },
  {
    id: 'mouche',
    badge: { fr: 'Mouche', en: 'Fly fishing', es: 'Mosca' },
    title: { fr: 'Séjour Pêche à la Mouche', en: 'Fly Fishing Stay', es: 'Estancia Pesca a Mosca' },
    duration: { fr: '3 à 5 jours', en: '3 to 5 days', es: '3 a 5 días' },
    description: {
      fr: "Immersion totale dans l'art de la mouche sur les eaux sauvages d'Extremadura. Brochet, Black Bass et l'exceptionnel Barbeau Comizo vous attendent.",
      en: 'A full fly-fishing immersion on the wild waters of Extremadura. Pike, Largemouth Bass and the exceptional Comizo Barbel await you.',
      es: 'Inmersión total en el arte de la pesca a mosca en las aguas salvajes de Extremadura. Lucio, Black Bass y el excepcional Barbo Comizo te esperan.',
    },
    includes: {
      fr: ['Guide spécialisé mouche', 'Repérage des meilleurs linéaires', 'Conseils montage et présentation', 'Adaptation quotidienne selon les conditions', 'Pêche en wading et depuis le bateau'],
      en: ['Specialist fly-fishing guide', 'Scouting the best stretches', 'Casting and presentation tips', 'Daily adaptation to conditions', 'Wading and boat fishing'],
      es: ['Guía especialista en pesca a mosca', 'Reconocimiento de los mejores tramos', 'Consejos de montaje y presentación', 'Adaptación diaria a las condiciones', 'Pesca en vadeo y desde la barca'],
    },
  },
  {
    id: 'sur-mesure',
    badge: { fr: 'Sur mesure', en: 'Custom', es: 'A medida' },
    title: { fr: 'Séjour Sur Mesure', en: 'Custom Stay', es: 'Estancia a Medida' },
    duration: { fr: 'Durée flexible', en: 'Flexible duration', es: 'Duración flexible' },
    description: {
      fr: "Vous avez des envies précises ? Construisons ensemble votre séjour idéal — espèces cibles, techniques, durée, niveau, groupe. 100% personnalisé.",
      en: "Have specific goals? Let's build your perfect trip together — target species, techniques, duration, level, group. 100% tailored.",
      es: '¿Tienes objetivos concretos? Construyamos juntos tu estancia ideal — especies, técnicas, duración, nivel, grupo. 100% personalizado.',
    },
    includes: {
      fr: ['Programme construit avec vous', 'Toutes techniques et espèces', 'Adapté à tous les niveaux', 'Groupes, familles, entreprises', 'Combinable avec hébergement Dini'],
      en: ['Itinerary built with you', 'All techniques and species', 'Suitable for all skill levels', 'Groups, families, corporate', 'Can be combined with Dini accommodation'],
      es: ['Programa construido contigo', 'Todas las técnicas y especies', 'Adaptado a todos los niveles', 'Grupos, familias, empresas', 'Combinable con alojamiento Dini'],
    },
  },
];

export const LODGINGS: Lodging[] = [
  {
    id: 'casa-del-lago',
    name: 'Casa del Lago',
    capacity: 6,
    bedrooms: 3,
    description: {
      fr: "Une maison typique de l'Extremadura, entièrement rénovée, avec vue directe sur le lac. Terrasse privée, barbecue et accès direct à l'eau pour sortir le matériel de pêche sans effort.",
      en: 'A typical Extremadura house, fully renovated, with a direct view of the lake. Private terrace, barbecue and direct water access to take out fishing gear effortlessly.',
      es: 'Una casa típica de Extremadura, completamente renovada, con vista directa al lago. Terraza privada, barbacoa y acceso directo al agua para sacar el material de pesca sin esfuerzo.',
    },
    amenities: {
      fr: ['Terrasse vue lac', 'Barbecue', 'Wi-Fi', 'Climatisation', 'Cuisine équipée', 'Accès eau'],
      en: ['Lakeside terrace', 'BBQ', 'Wi-Fi', 'Air conditioning', 'Equipped kitchen', 'Water access'],
      es: ['Terraza con vista al lago', 'Barbacoa', 'Wi-Fi', 'Aire acondicionado', 'Cocina equipada', 'Acceso al agua'],
    },
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80',
    imageAlt: 'Casa del Lago — maison de pêcheur au bord du lac García de Sola',
  },
  {
    id: 'la-ribera',
    name: 'La Ribera',
    capacity: 4,
    bedrooms: 2,
    description: {
      fr: 'Maison plus intime, parfaite pour un couple ou un duo de pêcheurs souhaitant une expérience au calme. Entourée de végétation méditerranéenne, à quelques mètres de l\'eau.',
      en: 'A more intimate house, perfect for a couple or a pair of anglers seeking a peaceful experience. Surrounded by Mediterranean vegetation, just a few metres from the water.',
      es: 'Casa más íntima, perfecta para una pareja o un dúo de pescadores que buscan una experiencia tranquila. Rodeada de vegetación mediterránea, a pocos metros del agua.',
    },
    amenities: {
      fr: ['Jardin privatif', 'Terrasse', 'Wi-Fi', 'Climatisation', 'Cuisine équipée', 'Parking'],
      en: ['Private garden', 'Terrace', 'Wi-Fi', 'Air conditioning', 'Equipped kitchen', 'Parking'],
      es: ['Jardín privado', 'Terraza', 'Wi-Fi', 'Aire acondicionado', 'Cocina equipada', 'Aparcamiento'],
    },
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80',
    imageAlt: 'La Ribera — maison rustique au bord du lac en Extremadura',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'lac-lever', src: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80', dataSrc: 'assets/images/galerie-lac-lever-soleil.jpg', alt: 'Lac au lever du soleil', caption: { fr: 'Lever de soleil sur le lac García de Sola', en: 'Sunrise over Lake García de Sola', es: 'Amanecer sobre el lago García de Sola' } },
  { id: 'pecheur', src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', dataSrc: 'assets/images/galerie-pecheur.jpg', alt: 'Pêcheur aux leurres', caption: { fr: 'Pêche aux leurres sur le barrage', en: 'Lure fishing on the reservoir', es: 'Pesca con señuelos en el embalse' } },
  { id: 'bass', src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', dataSrc: 'assets/images/galerie-bass.jpg', alt: 'Black Bass capturé', caption: { fr: 'Black Bass — prise et remise à l\'eau', en: 'Black Bass — catch and release', es: 'Black Bass — captura y suelta' } },
  { id: 'paysage', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', dataSrc: 'assets/images/galerie-paysage.jpg', alt: 'Paysage Extremadura', caption: { fr: 'Nature préservée d\'Extremadura', en: 'Pristine Extremadura nature', es: 'Naturaleza preservada de Extremadura' } },
  { id: 'mouche', src: 'https://images.unsplash.com/photo-1574722772249-b07cfc99e4c8?w=800&q=80', dataSrc: 'assets/images/galerie-mouche.jpg', alt: 'Pêche à la mouche', caption: { fr: 'Pêche à la mouche sur les radiers', en: 'Fly fishing on the riffles', es: 'Pesca a mosca en los rápidos' } },
  { id: 'coucher', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', dataSrc: 'assets/images/galerie-coucher.jpg', alt: 'Coucher de soleil lac', caption: { fr: 'Fin de journée sur le lac', en: 'End of day on the lake', es: 'Final del día en el lago' } },
  { id: 'bateau', src: 'https://images.unsplash.com/photo-1519331582073-283f1a211a3e?w=1200&q=80', dataSrc: 'assets/images/galerie-bateau.jpg', alt: 'Bateau de guidage', caption: { fr: 'Le bateau de guidage — équipé pour la pêche', en: 'The guide boat — fully equipped for fishing', es: 'La barca de guía — equipada para la pesca' }, wide: true },
  { id: 'brochet', src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80', dataSrc: 'assets/images/galerie-brochet.jpg', alt: 'Brochet capturé', caption: { fr: 'Brochet — no-kill pratiqué systématiquement', en: 'Pike — catch and release always practised', es: 'Lucio — captura y suelta siempre practicada' } },
  { id: 'vegetation', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', dataSrc: 'assets/images/galerie-vegetation.jpg', alt: 'Herbiers lacustres', caption: { fr: 'Herbiers — refuges à carnassiers', en: 'Weedbeds — predator hideouts', es: 'Herbazales — refugios de depredadores' } },
  { id: 'session', src: 'https://images.unsplash.com/photo-1504173010664-32509107de90?w=800&q=80', dataSrc: 'assets/images/galerie-session.jpg', alt: 'Session de pêche', caption: { fr: 'Session du matin avec Dini', en: 'Morning session with Dini', es: 'Sesión de mañana con Dini' } },
  { id: 'materiel', src: 'https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?w=800&q=80', dataSrc: 'assets/images/galerie-materiel.jpg', alt: 'Matériel de pêche', caption: { fr: 'Matériel pour toutes les techniques', en: 'Gear for every technique', es: 'Material para todas las técnicas' } },
  { id: 'lac-vue', src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80', dataSrc: 'assets/images/galerie-lac-vue.jpg', alt: 'Vue du lac', caption: { fr: 'Le lac García de Sola — Valdecaballeros', en: 'Lake García de Sola — Valdecaballeros', es: 'El lago García de Sola — Valdecaballeros' } },
];
