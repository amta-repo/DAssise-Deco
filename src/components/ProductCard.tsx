import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Product } from "@/data/products";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  product: Product;
  onLearnMore: () => void;
}

const ProductCard = ({ product, onLearnMore }: ProductCardProps) => {
  const { t } = useTranslation();
  
  const handleBuyNow = () => {
    const message = `Hello! I'm interested in the ${product.name} (${product.price}). Can you provide more details?`;
    const whatsappUrl = `https://wa.me/22961206674?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="elegant-card overflow-hidden group flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {product.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>

        <div className="flex items-center space-x-2 flex-wrap">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-secondary text-secondary"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {product.rating} ({product.reviews} {t('product.reviews')})
          </span>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={onLearnMore}
          >
            {t('product.learnMore')}
          </Button>
          <Button
            className="w-full bg-primary hover:bg-primary-dark"
            onClick={handleBuyNow}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {t('product.buyNow')}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
