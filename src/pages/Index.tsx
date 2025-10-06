import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import TrustBadges from "@/components/TrustBadges";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { useTranslation } from "react-i18next";

// Import hero images
import wallMirrorImg from "@/assets/products/wall-mirror-console.jpg";
import tvUnitImg from "@/assets/products/tv-entertainment-unit.jpg";
import diningSetImg from "@/assets/products/dining-set.jpg";
import platformBedImg from "@/assets/products/luxury-platform-bed.jpg";
import kitchenImg from "@/assets/products/modern-kitchen.jpg";

const Index = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const heroImages = [wallMirrorImg, tvUnitImg, diningSetImg, platformBedImg, kitchenImg];

  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Carousel */}
      <HeroCarousel images={heroImages}>
        <div className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                {t('hero.title')}
                <span className="block gold-gradient-text">{t('hero.subtitle')}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/gallery">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-6">
                    {t('hero.exploreGallery')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
                  onClick={() => window.open('https://wa.me/22961206674', '_blank')}
                >
                  {t('hero.contactUs')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('featured.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('featured.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onLearnMore={() => handleLearnMore(product)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button size="lg" variant="outline">
                {t('featured.viewAll')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* About Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('about.whyChoose')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
            <Link to="/about">
              <Button size="lg" variant="outline">
                {t('about.learnMore')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
