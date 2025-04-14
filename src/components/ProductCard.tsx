
import { useState } from "react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    });
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product badge */}
      {product.badge && (
        <div className={`
          absolute top-4 left-4 z-10 px-2 py-1 rounded-md text-xs font-medium text-white
          ${product.badge === 'Sale' ? 'bg-red-500' : 'bg-purple-gradient'}
        `}>
          {product.badge}
        </div>
      )}
      
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Quick actions */}
        <div 
          className={`
            absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 transform
            ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          `}
        >
          <div className="flex gap-2">
            <Button 
              className="btn-gradient flex-1"
              size="sm"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2" size={16} />
              Add to Cart
            </Button>
            <Button 
              variant="outline"
              size="icon"
              className="bg-white"
              onClick={handleWishlist}
            >
              <Heart size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product details */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i}
                size={14}
                className={i < Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>
        
        <h3 className="font-semibold text-purple-dark line-clamp-1 mb-1">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-2 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-baseline mt-3">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
