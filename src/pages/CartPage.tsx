
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  IndianRupee,
  ShoppingBag 
} from "lucide-react";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  
  // Calculate order summary
  const subtotal = cartTotal;
  const shipping = subtotal > 0 ? 50000 : 0; // ₹50,000 shipping (free over certain amount)
  const discount = 0; // No discount by default
  const total = subtotal + shipping - discount;
  
  // Handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };
  
  // Handle remove item
  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };
  
  // Handle coupon application
  const handleApplyCoupon = () => {
    // In a real application, you'd validate the coupon code here
    alert("Coupon functionality would be implemented in a real application.");
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Your Shopping Cart</h1>
      <p className="text-muted-foreground mb-8">
        Review your items and proceed to checkout when ready.
      </p>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products">
            <Button className="bike-btn">
              Explore Products
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Cart Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})</h2>
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                    <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="flex items-center font-semibold">
                          <IndianRupee className="h-3 w-3 mr-1" />
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                      
                      <div className="text-sm text-muted-foreground mb-4">
                        <IndianRupee className="h-3 w-3 inline-block" />
                        {formatPrice(item.price)} per unit
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <div className="flex justify-between items-center">
                <Link to="/products">
                  <Button variant="outline">
                    Continue Shopping
                  </Button>
                </Link>
                <div className="flex items-baseline gap-2">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="text-xl font-semibold flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    {formatPrice(subtotal)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    {formatPrice(shipping)}
                  </span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-500">
                    <span>Discount</span>
                    <span className="font-medium flex items-center">
                      -<IndianRupee className="h-3 w-3 mr-1" />
                      {formatPrice(discount)}
                    </span>
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex space-x-2 mb-4">
                  <Input
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button onClick={handleApplyCoupon} variant="outline">
                    Apply
                  </Button>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full bike-btn">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
