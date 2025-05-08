
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import { 
  IndianRupee, 
  ShoppingCart, 
  Star, 
  ChevronRight,
  ChevronLeft 
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by ID
  const product = products.find(p => p.id === id);
  
  // Get similar products (same category, excluding current product)
  const similarProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);
  
  // Handle quantity changes
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.stock || 0)) {
      setQuantity(value);
    }
  };
  
  // Handle "Add to Cart" button click
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  // Navigate between product images
  const nextImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };
  
  const prevImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };
  
  // If product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Button onClick={() => navigate('/products')}>
          Back to Products
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center space-x-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-foreground">Products</Link>
        <span>/</span>
        <Link to={`/products?category=${product.category}`} className="hover:text-foreground capitalize">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium truncate">{product.name}</span>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img 
              src={product.images[currentImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {product.images.length > 1 && (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex space-x-2">
              {product.featured && (
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  Featured
                </Badge>
              )}
              {product.new && (
                <Badge className="bg-bike-blue text-white">
                  New
                </Badge>
              )}
            </div>
          </div>
          
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`w-20 h-20 cursor-pointer rounded-md overflow-hidden border-2 ${
                    index === currentImageIndex 
                      ? 'border-primary' 
                      : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div>
          <div className="mb-6">
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
            
            <div className="mb-2">
              <Badge className="mr-2 bg-secondary">{product.brand}</Badge>
              <Badge className="capitalize bg-secondary">{product.category}</Badge>
            </div>
            
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            {/* Price */}
            <div className="mb-6">
              {product.salePrice ? (
                <div className="flex items-baseline gap-3">
                  <span className="text-muted-foreground line-through flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-3xl font-bold text-primary flex items-center">
                    <IndianRupee className="h-6 w-6 mr-1" />
                    {formatPrice(product.salePrice)}
                  </span>
                  <Badge className="ml-2 bg-red-500 text-white">
                    Save {Math.round((1 - product.salePrice / product.price) * 100)}%
                  </Badge>
                </div>
              ) : (
                <span className="text-3xl font-bold flex items-center">
                  <IndianRupee className="h-6 w-6 mr-1" />
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            
            {/* Stock */}
            <div className="mb-6">
              <p className={`${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {product.stock > 0 
                  ? `In Stock (${product.stock} available)` 
                  : 'Out of Stock'}
              </p>
            </div>
            
            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Color Options</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color, index) => (
                    <div 
                      key={index} 
                      className="px-3 py-1 rounded-full border hover:border-primary cursor-pointer"
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Add to Cart */}
            {product.stock > 0 && (
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20">
                  <Input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="text-center"
                  />
                </div>
                <Button className="flex-grow bike-btn" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            )}
          </div>
          
          <Separator className="my-8" />
          
          {/* Specifications and Reviews */}
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="mt-6">
              <div className="space-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
                  <div className="flex justify-center items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-6 w-6 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-lg">
                      {product.rating.toFixed(1)}/5.0
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Based on {product.reviewCount} reviews
                  </p>
                </div>
                
                <Button className="w-full" variant="outline">
                  Load Reviews
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Similar Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden bike-card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {formatPrice(product.price)}
                  </span>
                  <Link to={`/products/${product.id}`}>
                    <Button variant="ghost" size="sm">
                      Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
