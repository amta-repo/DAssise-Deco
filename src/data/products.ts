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
    image: "/src/assets/products/wall-mirror-console.jpg",
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
    image: "/src/assets/products/tv-entertainment-unit.jpg",
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
    image: "/src/assets/products/dining-set.jpg",
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
    image: "/src/assets/products/luxury-platform-bed.jpg",
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
    image: "/src/assets/products/hotel-bedroom-set.jpg",
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
    image: "/src/assets/products/modern-kitchen.jpg",
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
    image: "/src/assets/products/diamond-wall-shelf.jpg",
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
    image: "/src/assets/products/designer-bedroom-set.jpg",
    category: "Bedroom",
    features: [
      "Platform bed with storage",
      "LED under-bed lighting",
      "Integrated nightstands",
      "Upholstered headboard panels",
      "Contemporary design"
    ]
  }
];
