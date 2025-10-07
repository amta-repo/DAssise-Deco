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
        values: "Nos Valeurs",
        story1: "D'Assise Déco est né d'une passion pour transformer les maisons en foyers. Nous croyons que les meubles sont plus que de simples pièces fonctionnelles - c'est une expression de votre personnalité, de votre style et de la vie que vous souhaitez vivre.",
        story2: "Notre voyage a commencé avec une mission simple : rendre les meubles de luxe accessibles à ceux qui apprécient l'artisanat de qualité et le design intemporel. Aujourd'hui, nous sommes fiers d'offrir une collection soigneusement sélectionnée de chambres à coucher, de meubles de salon, de pièces de salle à manger et d'articles décoratifs qui rehaussent n'importe quel espace.",
        story3: "Chaque produit de notre collection est sélectionné avec soin, garantissant qu'il répond à nos normes élevées de qualité, d'esthétique et de fonctionnalité. Nous travaillons directement avec des artisans qualifiés et des fabricants de confiance pour vous apporter des meubles qui dureront des années.",
        valuesTitle: "Nos Valeurs",
        valuesDesc: "Les principes qui guident tout ce que nous faisons",
        qualityTitle: "Excellence de la Qualité",
        qualityDesc: "Nous ne sélectionnons que les meilleurs matériaux et travaillons avec des artisans qualifiés pour garantir que chaque pièce répond à nos normes exigeantes.",
        customerTitle: "Client d'Abord",
        customerDesc: "Votre satisfaction est notre priorité. Nous offrons un service personnalisé et un soutien tout au long de votre parcours d'ameublement.",
        passionTitle: "Passion du Design",
        passionDesc: "Nous aimons ce que nous faisons et cela se voit dans chaque pièce soigneusement sélectionnée de notre collection.",
        eleganceTitle: "Élégance Intemporelle",
        eleganceDesc: "Nos meubles combinent l'esthétique contemporaine avec les principes de design classique pour une beauté durable.",
        ctaTitle: "Prêt à Transformer Votre Espace ?",
        ctaDesc: "Travaillons ensemble pour créer la maison de vos rêves. Parcourez notre collection ou contactez-nous pour des recommandations personnalisées.",
        viewGallery: "Voir Notre Galerie",
        contactWhatsapp: "Contactez-Nous sur WhatsApp"
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
        values: "Our Values",
        story1: "D'Assise Déco was born from a passion for transforming houses into homes. We believe that furniture is more than just functional pieces – it's an expression of your personality, style, and the life you want to live.",
        story2: "Our journey began with a simple mission: to make luxury furniture accessible to those who appreciate quality craftsmanship and timeless design. Today, we're proud to offer a carefully curated collection of bedroom sets, living room furniture, dining pieces, and decorative items that elevate any space.",
        story3: "Every product in our collection is selected with care, ensuring it meets our high standards for quality, aesthetics, and functionality. We work directly with skilled craftsmen and trusted manufacturers to bring you furniture that will last for years to come.",
        valuesTitle: "Our Values",
        valuesDesc: "The principles that guide everything we do",
        qualityTitle: "Quality Excellence",
        qualityDesc: "We source only the finest materials and work with skilled craftsmen to ensure every piece meets our exacting standards.",
        customerTitle: "Customer First",
        customerDesc: "Your satisfaction is our priority. We provide personalized service and support throughout your furniture journey.",
        passionTitle: "Passion for Design",
        passionDesc: "We love what we do and it shows in every carefully curated piece in our collection.",
        eleganceTitle: "Timeless Elegance",
        eleganceDesc: "Our furniture combines contemporary aesthetics with classic design principles for lasting beauty.",
        ctaTitle: "Ready to Transform Your Space?",
        ctaDesc: "Let's work together to create the home of your dreams. Browse our collection or get in touch for personalized recommendations.",
        viewGallery: "View Our Gallery",
        contactWhatsapp: "Contact Us on WhatsApp"
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
