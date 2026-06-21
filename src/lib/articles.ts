// ============================================================
// articles.ts — Données des articles de blog
// Extensible : ajouter un article = ajouter un objet
// ============================================================

import type { BlogArticle } from '../types';

export const ARTICLES: BlogArticle[] = [
  {
    id: 1,
    slug: 'black-bass-extremadura',
    title: 'Les meilleurs spots de Black Bass en Extremadura',
    date: '2024-04-15',
    dateLabel: '15 avril 2024',
    category: 'Espèces & spots',
    excerpt: "L'Extremadura est une terre de carnassiers, et le Black Bass y a trouvé un terrain de jeu exceptionnel. Entre barrages sauvages et criques ombragées, découvrez pourquoi cette région d'Espagne est devenue une destination incontournable pour les amateurs de bass.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    imageAlt: "Black Bass dans les eaux de l'Extremadura",
    content: `
<p>L'Extremadura, région sauvage du centre-ouest de l'Espagne, abrite certains des meilleurs spots de Black Bass (<em>Micropterus salmoides</em>) d'Europe. Entre ses grands barrages, ses criques rocheuses et ses eaux cristallines aux températures idéales, la région offre des conditions quasi parfaites pour cette espèce emblématique.</p>

<h2>Pourquoi l'Extremadura est le paradis du Black Bass</h2>
<p>Plusieurs facteurs font de l'Extremadura un terrain de jeu exceptionnel pour le Black Bass :</p>
<ul>
  <li><strong>Des eaux chaudes et claires</strong> : le climat continental méditerranéen crée des températures estivales idéales pour l'activité du bass</li>
  <li><strong>Une végétation aquatique dense</strong> : nénuphars, herbiers sous-marins, arbres immergés créent des abris naturels</li>
  <li><strong>Une pression de pêche réduite</strong> : les barrages d'Extremadura restent peu fréquentés par les pêcheurs</li>
  <li><strong>Des poissons de belle taille</strong> : nourriture abondante + faible pression = spécimens souvent au-dessus de 2 kg</li>
</ul>

<h2>Les zones à prospecter</h2>
<h3>Les criques et baies abritées</h3>
<p>Le Black Bass est un poisson de structure. En Extremadura, les petites baies abritées des vents dominants sont des zones de prédilection, surtout en matinée. Les sessions à l'aube sont souvent les plus productives.</p>

<h3>Les herbiers immergés</h3>
<p>Sur les barrages comme celui de García de Sola, les herbiers sous-marins à 2–5 mètres sont de véritables concentrateurs de poissons. Un leurre souple texan passé lentement à travers la végétation déclenche souvent des touches explosives.</p>

<h3>Les arbres tombés et structures dures</h3>
<p>L'Extremadura compte de nombreux barrages avec des arbres immergés persistants. Ces structures sont des spots d'embuscade idéaux. Une approche discrète en bateau et un jerk présenté à mi-hauteur donnent d'excellents résultats.</p>

<h2>Les techniques les plus efficaces</h2>
<ul>
  <li><strong>Popper de surface</strong> : imparable à l'aube et au crépuscule</li>
  <li><strong>Leurre souple texan</strong> : pour prospecter les herbiers sans accrocher</li>
  <li><strong>Jerkbait</strong> : redoutable en eau claire pour imiter une proie blessée</li>
  <li><strong>Wakebait</strong> : excellent pour couvrir de grandes surfaces</li>
  <li><strong>Streamer (mouche)</strong> : patterns imitant grenouilles ou petits poissons</li>
</ul>

<h2>Le calendrier idéal</h2>
<ul>
  <li><strong>Avril–Mai</strong> : période de frai, les gros poissons sont en eau peu profonde et très réactifs</li>
  <li><strong>Juin–Juillet</strong> : activité intense en surface tôt le matin et en soirée</li>
  <li><strong>Septembre–Octobre</strong> : pré-hivernage, les poissons mangent activement</li>
</ul>

<p>Envie de venir tester ces spots avec Dini ? Notre séjour <strong>Week-end Carnassiers</strong> ou notre formule <strong>Sur Mesure</strong> sont parfaitement adaptés pour découvrir le Black Bass d'Extremadura dans les meilleures conditions.</p>
    `,
  },
  {
    id: 2,
    slug: 'peche-mouche-extremadura',
    title: "Pêche à la mouche en Espagne : pourquoi l'Extremadura ?",
    date: '2024-03-08',
    dateLabel: '8 mars 2024',
    category: 'Pêche à la mouche',
    excerpt: "Quand on pense pêche à la mouche en Espagne, la plupart des pêcheurs imaginent les rivières à truites des Pyrénées. Pourtant, l'Extremadura offre une expérience radicalement différente et incroyablement dépaysante — avec des espèces que l'on ne trouve nulle part ailleurs.",
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80',
    imageAlt: "Pêche à la mouche dans une rivière d'Extremadura",
    content: `
<p>Mentionner la pêche à la mouche en Espagne évoque généralement les rivières pyrénéennes. Pourtant, l'Extremadura offre une expérience fly fishing radicalement différente, méconnue des pêcheurs français, et pourtant exceptionnelle.</p>

<h2>Une destination mouche atypique et unique</h2>
<p>Ce qui distingue l'Extremadura, c'est la diversité des espèces cibles :</p>
<ul>
  <li><strong>Le Brochet</strong> : sur de grands streamers, en bateau ou en wading sur les zones herbeuses</li>
  <li><strong>Le Black Bass</strong> : avec des poppers en mousse ou des streamers type Clouser, les attaques sont explosives</li>
  <li><strong>Le Barbeau Comizo</strong> : spécialité unique de cette région, à la nymphe sur fond en rivière</li>
</ul>

<h2>Le Barbeau Comizo : la star méconnue</h2>
<p>Le Barbeau Comizo (<em>Luciobarbus comizo</em>) est une espèce endémique du bassin du Tage. C'est l'un des plus grands barbeaux d'Europe, capable d'atteindre plus d'un mètre et de dépasser les 10 kg.</p>
<p>Ce qui le rend particulièrement passionnant ? Il est extrêmement méfiant, nage souvent à vue sur les radiers, et demande une présentation parfaite de la mouche — comme la truite en chalk stream, mais avec un poisson bien plus imposant.</p>

<h2>Les mouches qui fonctionnent</h2>
<h3>Pour le Brochet</h3>
<ul>
  <li>Streamers articulés de 15 à 25 cm, imitant des proies volumineuses</li>
  <li>Patterns type Deceiver, EP Fiber Fly, Chocklett's Game Changer</li>
  <li>Couleurs : olive/blanc, chartreuse, orange-noir selon la clarté de l'eau</li>
</ul>

<h3>Pour le Black Bass</h3>
<ul>
  <li>Poppers en surface : déclenche des attaques mémorables en eau calme</li>
  <li>Clouser Minnow en eau plus profonde</li>
  <li>Patterns imitant les grenouilles pendant l'été</li>
</ul>

<h3>Pour le Barbeau Comizo</h3>
<ul>
  <li>Nymphes lestées type Hare's Ear, Pheasant Tail, Czech Nymph</li>
  <li>Présentation en haute tige indispensable pour la précision</li>
  <li>Taille 10–14, approche discrète obligatoire</li>
</ul>

<h2>Les meilleures périodes</h2>
<p>Le printemps (mars à juin) est la saison de référence. L'automne (septembre–octobre) est une deuxième fenêtre intéressante pour le Brochet et le Bass. L'été demande de s'adapter : sessions tôt le matin et en soirée.</p>

<p>Notre <strong>Séjour Pêche à la Mouche</strong> (3 à 5 jours) est spécifiquement conçu pour explorer ces espèces. Contactez-nous pour bâtir ensemble votre séjour idéal.</p>
    `,
  },
  {
    id: 3,
    slug: 'preparer-sejour-carnassiers',
    title: 'Préparer son séjour de pêche aux carnassiers en Extremadura',
    date: '2024-02-20',
    dateLabel: '20 février 2024',
    category: 'Préparer son séjour',
    excerpt: "Un séjour de pêche aux carnassiers en Extremadura, ça se prépare. Entre les formalités administratives, le matériel à emporter, la meilleure période selon vos espèces cibles — voici tout ce qu'il faut savoir avant de partir.",
    image: 'https://images.unsplash.com/photo-1574722772249-b07cfc99e4c8?w=1200&q=80',
    imageAlt: 'Préparation du matériel de pêche',
    content: `
<p>Vous avez décidé de partir pêcher les carnassiers en Extremadura — excellente décision. Avant de charger la voiture, quelques préparatifs s'imposent. Voici le guide complet.</p>

<h2>Les formalités administratives</h2>
<h3>Le permis de pêche</h3>
<p>En Espagne, la pêche en eaux continentales est réglementée au niveau des communautés autonomes. En Extremadura, un <strong>permis de pêche régional</strong> est nécessaire. En réservant un séjour guidé avec Dini Fishing, cette formalité est simplifiée — contactez-nous pour les modalités.</p>

<h2>Le matériel à emporter</h2>
<h3>Cannes et moulinets</h3>
<ul>
  <li><strong>Canne leurre</strong> : 2,10–2,40 m, puissance MH, action Fast</li>
  <li><strong>Canne finesse</strong> : 2,10 m, puissance M, pour les montages légers</li>
  <li><strong>Moulinet</strong> : taille 2500–4000, ratio haut (6:1 minimum)</li>
  <li><strong>Tresse</strong> : 15–25 lb, bas de ligne fluorocarbone 20–35 lb</li>
</ul>

<h3>La boîte à leurres</h3>
<ul>
  <li>Poppers et stickbaits (surface) : irremplaçables à l'aube</li>
  <li>Leurres souples shad 12–18 cm montés en texan ou tête plombée</li>
  <li>Swimbaits articulés pour imiter gardons et ablettes</li>
  <li>Jigs 10–21g pour le Sandre sur fond</li>
  <li>Grandes spinnerbaits pour prospecter les herbiers</li>
</ul>

<h2>Le sac de voyage</h2>
<ul>
  <li>Vêtements techniques anti-UV et respirants</li>
  <li>Casquette et lunettes polarisantes (indispensable)</li>
  <li>Crème solaire haute protection</li>
  <li>Chaussures de bateau antidérapantes</li>
  <li>Frontale pour les départs à l'aube</li>
  <li>Appareil photo ou support GoPro</li>
</ul>

<h2>Choisir la bonne période</h2>
<ul>
  <li><strong>Mars–Mai</strong> : pré-spawn et spawn du Black Bass, Brochet actif. Excellent</li>
  <li><strong>Juin–Juillet</strong> : pêche de surface spectaculaire tôt le matin</li>
  <li><strong>Septembre–Novembre</strong> : pré-hivernage, souvent la meilleure période pour les grosses pièces</li>
  <li><strong>Décembre–Février</strong> : pêche plus lente, mais Sandre et Brochet restent actifs en eau profonde</li>
</ul>

<h2>Comment réserver</h2>
<p>Le plus simple : envoyez-nous un message WhatsApp ou un email avec vos dates souhaitées, le nombre de pêcheurs et vos espèces cibles. Dini vous répond rapidement et construit avec vous le séjour idéal.</p>
    `,
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 2): BlogArticle[] {
  return ARTICLES.filter((a) => a.slug !== slug).slice(0, count);
}
