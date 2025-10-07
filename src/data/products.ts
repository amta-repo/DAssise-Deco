export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Elegant Wall Mirror & Console",
    description: "Transform your entryway with this stunning combination of a gold-framed round mirror and floating wooden console. Features elegant vertical slat paneling and ambient lighting. Perfect for creating a sophisticated first impression.",
    price: "450,000 CFA",
    rating: 4.9,
    reviews: 28,
    image: "/images/products/wall-mirror-console.jpg",
    category: "Entryway & Decor",
    features: [
      "Gold-framed round mirror",
      "Floating wooden console",
      "Vertical slat paneling",
      "Ambient LED lighting",
      "Premium wood finish"
    ]
  },
  {
    id: "2",
    name: "Modern TV Entertainment Unit",
    description: "Luxury entertainment center featuring marble accent wall, rich wood cabinetry, and integrated LED lighting. Spacious storage compartments and open shelving for displaying décor. Creates a stunning focal point in any living room.",
    price: "850,000 CFA",
    rating: 5.0,
    reviews: 42,
    image: "/images/products/tv-entertainment-unit.jpg",
    category: "Living Room",
    features: [
      "Marble accent wall panel",
      "Rich wood cabinetry",
      "LED ambient lighting",
      "Multiple storage compartments",
      "Premium construction"
    ]
  },
  {
    id: "3",
    name: "Contemporary Dining Set",
    description: "Elegant 6-seater dining set with distressed wood table top and modern metal base. Features luxurious velvet upholstered chairs in deep navy. Perfect for intimate dinners and entertaining guests in style.",
    price: "720,000 CFA",
    rating: 4.8,
    reviews: 35,
    image: "/images/products/dining-set.jpg",
    category: "Dining Room",
    features: [
      "Distressed wood table top",
      "Modern metal base",
      "6 velvet upholstered chairs",
      "Premium fabric finish",
      "Contemporary design"
    ]
  },
  {
    id: "4",
    name: "Luxury Platform Bed",
    description: "Modern low-profile platform bed with warm wood frame and integrated nightstands. Features LED strip lighting underneath for ambient glow. Includes premium upholstered headboard panel and sleek design perfect for contemporary bedrooms.",
    price: "680,000 CFA",
    rating: 4.9,
    reviews: 51,
    image: "/images/products/luxury-platform-bed.jpg",
    category: "Bedroom",
    features: [
      "Low-profile platform design",
      "Integrated nightstands",
      "LED strip lighting",
      "Upholstered headboard",
      "Warm wood finish"
    ]
  },
  {
    id: "5",
    name: "Hotel Collection Bedroom Set",
    description: "Twin bed luxury hotel-style bedroom set with sophisticated wood frames and grey upholstered headboards. Features integrated side panels with built-in lighting. Creates a refined, boutique hotel ambiance in your home.",
    price: "920,000 CFA",
    rating: 4.7,
    reviews: 29,
    image: "/images/products/hotel-bedroom-set.jpg",
    category: "Bedroom",
    features: [
      "Twin bed configuration",
      "Grey upholstered headboards",
      "Wood frame construction",
      "Integrated lighting panels",
      "Hotel-inspired design"
    ]
  },
  {
    id: "6",
    name: "Modern Kitchen Cabinetry",
    description: "Complete modern kitchen solution with two-tone wood cabinetry and sleek black countertops. Features under-cabinet LED lighting, soft-close drawers, and integrated appliances. Combines functionality with contemporary aesthetics.",
    price: "1,450,000 CFA",
    rating: 5.0,
    reviews: 18,
    image: "/images/products/modern-kitchen.jpg",
    category: "Kitchen",
    features: [
      "Two-tone wood cabinetry",
      "Black granite countertops",
      "LED under-cabinet lighting",
      "Soft-close mechanisms",
      "Modern minimalist design"
    ]
  },
  {
    id: "7",
    name: "Diamond Wall Shelf",
    description: "Unique geometric wall shelf in rich wood finish. Diamond pattern design perfect for displaying plants, decorative items, and personal treasures. Adds visual interest and functional storage to any wall space.",
    price: "185,000 CFA",
    rating: 4.6,
    reviews: 67,
    image: "/images/products/diamond-wall-shelf.jpg",
    category: "Decor & Storage",
    features: [
      "Geometric diamond design",
      "Rich wood finish",
      "Multiple display sections",
      "Easy wall mounting",
      "Handcrafted quality"
    ]
  },
  {
    id: "8",
    name: "Designer Bedroom Set",
    description: "Contemporary bedroom set featuring platform bed with integrated nightstands and dramatic LED under-lighting. Grey upholstered headboard panels complement the light wood finish. Modern luxury meets practical functionality.",
    price: "795,000 CFA",
    rating: 4.8,
    reviews: 44,
    image: "/images/products/designer-bedroom-set.jpg",
    category: "Bedroom",
    features: [
      "Platform bed with storage",
      "LED under-bed lighting",
      "Integrated nightstands",
      "Upholstered headboard panels",
      "Contemporary design"
    ]
  },
  {
    id: "9",
    name: "Unité Murale TV Moderne",
    description: "Meuble TV contemporain avec panneau texturé en bois et éclairage LED intégré bleu. Design minimaliste avec finition de qualité supérieure. Parfait pour créer une atmosphère moderne et sophistiquée.",
    price: "680,000 CFA",
    rating: 4.9,
    reviews: 32,
    image: "/images/products/modern-tv-wall-unit.jpg",
    category: "Living Room",
    features: [
      "Panneau texturé en bois",
      "Éclairage LED bleu intégré",
      "Design minimaliste",
      "Finition premium",
      "Installation murale"
    ]
  },
  {
    id: "10",
    name: "Bureau de Vanité Courbe",
    description: "Bureau de vanité design avec formes courbes élégantes et finition blanche brillante. Comprend un miroir arqué avec détails en bois. Parfait pour chambres modernes et espaces de beauté.",
    price: "520,000 CFA",
    rating: 4.7,
    reviews: 28,
    image: "/images/products/curved-vanity-desk.jpg",
    category: "Bedroom",
    features: [
      "Design courbe unique",
      "Finition blanche brillante",
      "Miroir arqué inclus",
      "Détails en bois",
      "Rangement intégré"
    ]
  },
  {
    id: "11",
    name: "Bureau Professionnel",
    description: "Bureau de travail professionnel avec finition bois naturel et base noire. Comprend tiroirs de rangement avec poignées modernes. Idéal pour bureau à domicile ou espace professionnel.",
    price: "380,000 CFA",
    rating: 4.6,
    reviews: 41,
    image: "/images/products/office-desk.jpg",
    category: "Office",
    features: [
      "Finition bois naturel",
      "Base noire moderne",
      "Tiroirs de rangement",
      "Poignées métalliques",
      "Design professionnel"
    ]
  },
  {
    id: "12",
    name: "Table Basse en Verre",
    description: "Table basse contemporaine avec plateau en verre et structure en bois courbe. Design sculptural unique qui ajoute une touche artistique à votre salon. Construction robuste avec finition élégante.",
    price: "295,000 CFA",
    rating: 4.8,
    reviews: 36,
    image: "/images/products/glass-coffee-table.jpg",
    category: "Living Room",
    features: [
      "Plateau en verre trempé",
      "Structure bois courbe",
      "Design sculptural",
      "Finition naturelle",
      "Construction robuste"
    ]
  },
  {
    id: "13",
    name: "Étagère Murale en Bois",
    description: "Étagère murale en bois avec compartiments multiples. Design moderne et fonctionnel parfait pour exposer livres, plantes et objets décoratifs. Finition bois naturel de qualité.",
    price: "220,000 CFA",
    rating: 4.7,
    reviews: 52,
    image: "/images/products/wood-display-shelf.jpg",
    category: "Decor & Storage",
    features: [
      "Compartiments multiples",
      "Finition bois naturel",
      "Montage mural facile",
      "Design fonctionnel",
      "Construction solide"
    ]
  },
  {
    id: "14",
    name: "Casier à Vin Blanc",
    description: "Casier à vin mural design en blanc avec rangement en diamant. Comprend étagères ouvertes pour verres et décoration. Parfait pour cuisine moderne ou salle à manger élégante.",
    price: "340,000 CFA",
    rating: 4.5,
    reviews: 25,
    image: "/images/products/white-wine-rack.jpg",
    category: "Wine Storage",
    features: [
      "Finition blanche moderne",
      "Rangement en diamant",
      "Étagères ouvertes",
      "Montage mural",
      "Design contemporain"
    ]
  },
  {
    id: "15",
    name: "Casier à Vin en Bois",
    description: "Casier à vin mural en bois naturel avec rangement en X. Design chaleureux et élégant avec étagères multiples. Idéal pour afficher et ranger votre collection de vins.",
    price: "365,000 CFA",
    rating: 4.6,
    reviews: 31,
    image: "/images/products/wood-wine-rack.jpg",
    category: "Wine Storage",
    features: [
      "Bois naturel premium",
      "Rangement en X",
      "Étagères multiples",
      "Design chaleureux",
      "Montage mural robuste"
    ]
  }
];
