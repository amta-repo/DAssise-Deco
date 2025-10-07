import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const heroImages = [
    "/images/products/designer-bedroom-set.jpg",
    "/images/products/hotel-bedroom-set.jpg"
  ];
  const [currentHeroImage] = useState(heroImages[Math.floor(Math.random() * heroImages.length)]);

  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  
  const getCategoryTranslation = (category: string) => {
    if (category === "All") return t('gallery.all');
    return t(`categories.${category}`, category);
  };

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Dynamic Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentHeroImage}
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              {t('gallery.title')}
            </h1>
            <p className="text-lg text-white/90 drop-shadow">
              {t('gallery.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary hover:bg-primary-dark" : ""}
              >
                {getCategoryTranslation(category)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onLearnMore={() => handleLearnMore(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {t('gallery.noProducts')}
              </p>
            </div>
          )}
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

export default Gallery;
