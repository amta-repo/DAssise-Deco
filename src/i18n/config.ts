import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        gallery: "Galerie",
        about: "À Propos"
      },
      hero: {
        title: "Meubles de Luxe pour",
        subtitle: "La Maison de Vos Rêves",
        description: "Transformez vos espaces de vie avec notre collection exquise de meubles artisanaux et de pièces de décoration élégantes.",
        exploreGallery: "Explorer la Galerie",
        contactUs: "Nous Contacter"
      },
      featured: {
        title: "Collections en Vedette",
        description: "Découvrez notre sélection triée de meubles haut de gamme conçus pour rehausser votre espace",
        viewAll: "Voir Tous les Produits"
      },
      about: {
        whyChoose: "Pourquoi Choisir D'Assise Déco ?",
        description: "Avec des années d'expertise dans les meubles de luxe et la décoration intérieure, nous vous apportons le meilleur savoir-faire et des designs intemporels. Chaque pièce est soigneusement sélectionnée pour transformer votre maison en un lieu que vous aimerez.",
        learnMore: "En Savoir Plus Sur Nous",
        title: "Notre Histoire",
        mission: "Notre Mission",
        values: "Nos Valeurs"
      },
      product: {
        learnMore: "En Savoir Plus",
        buyNow: "Acheter Maintenant",
        reviews: "avis",
        features: "Caractéristiques",
        viewDetails: "Voir les Détails"
      },
      trust: {
        securePayment: "Paiement Sécurisé",
        secureDesc: "Transactions 100% sécurisées",
        freeDelivery: "Livraison Gratuite",
        freeDesc: "Sur toutes les commandes importantes",
        quality: "Qualité Garantie",
        qualityDesc: "Artisanat Premium",
        support: "Support 24/7",
        supportDesc: "Assistance dédiée"
      },
      footer: {
        description: "Créer de beaux espaces avec des meubles de luxe et un service exceptionnel.",
        quickLinks: "Liens Rapides",
        contact: "Contact",
        phone: "Téléphone",
        email: "Email",
        location: "Emplacement",
        rights: "Tous droits réservés.",
        callNow: "Appeler Maintenant",
        whatsapp: "WhatsApp"
      },
      gallery: {
        title: "Notre Collection Complète",
        description: "Parcourez notre vaste gamme de meubles de luxe et de pièces de décoration",
        all: "Tous",
        noProducts: "Aucun produit trouvé dans cette catégorie."
      },
      categories: {
        "Entryway & Decor": "Entrée et Décor",
        "Living Room": "Salon",
        "Dining Room": "Salle à Manger",
        "Bedroom": "Chambre",
        "Kitchen": "Cuisine",
        "Decor & Storage": "Décor et Rangement",
        "Office": "Bureau",
        "Wine Storage": "Cave à Vin"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        gallery: "Gallery",
        about: "About"
      },
      hero: {
        title: "Luxury Furniture for",
        subtitle: "Your Dream Home",
        description: "Transform your living spaces with our exquisite collection of handcrafted furniture and elegant home décor pieces.",
        exploreGallery: "Explore Gallery",
        contactUs: "Contact Us"
      },
      featured: {
        title: "Featured Collections",
        description: "Discover our handpicked selection of premium furniture pieces designed to elevate your space",
        viewAll: "View All Products"
      },
      about: {
        whyChoose: "Why Choose D'Assise Déco?",
        description: "With years of expertise in luxury furniture and home décor, we bring you the finest craftsmanship and timeless designs. Each piece is carefully selected to transform your house into a home you'll love.",
        learnMore: "Learn More About Us",
        title: "Our Story",
        mission: "Our Mission",
        values: "Our Values"
      },
      product: {
        learnMore: "Learn More",
        buyNow: "Buy Now",
        reviews: "reviews",
        features: "Features",
        viewDetails: "View Details"
      },
      trust: {
        securePayment: "Secure Payment",
        secureDesc: "100% secure transactions",
        freeDelivery: "Free Delivery",
        freeDesc: "On all major orders",
        quality: "Quality Guaranteed",
        qualityDesc: "Premium craftsmanship",
        support: "24/7 Support",
        supportDesc: "Dedicated assistance"
      },
      footer: {
        description: "Creating beautiful spaces with luxury furniture and exceptional service.",
        quickLinks: "Quick Links",
        contact: "Contact",
        phone: "Phone",
        email: "Email",
        location: "Location",
        rights: "All rights reserved.",
        callNow: "Call Now",
        whatsapp: "WhatsApp"
      },
      gallery: {
        title: "Our Complete Collection",
        description: "Browse through our extensive range of luxury furniture and home décor pieces",
        all: "All",
        noProducts: "No products found in this category."
      },
      categories: {
        "Entryway & Decor": "Entryway & Decor",
        "Living Room": "Living Room",
        "Dining Room": "Dining Room",
        "Bedroom": "Bedroom",
        "Kitchen": "Kitchen",
        "Decor & Storage": "Decor & Storage",
        "Office": "Office",
        "Wine Storage": "Wine Storage"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // French as default
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
