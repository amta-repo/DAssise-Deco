import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  if (!product) return null;

  const handleBuyNow = () => {
    const message = `Hello! I'd like to purchase the ${product.name} (${product.price}). Please provide ordering details.`;
    const whatsappUrl = `https://wa.me/22961206674?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl">{product.name}</DialogTitle>
          <DialogDescription className="text-base">
            {product.category}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-secondary text-secondary"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-4">{product.price}</div>
              <p className="text-foreground leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-lg py-6"
              onClick={handleBuyNow}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Buy Now via WhatsApp
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Click "Buy Now" to chat with us on WhatsApp for instant ordering and delivery details.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
