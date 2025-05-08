
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ChevronRight, IndianRupee } from "lucide-react";

const Index = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  const newArrivals = products.filter(product => product.new).slice(0, 4);
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="hero-gradient absolute inset-0 opacity-50"></div>
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Premium Superbikes</span><br />
                For Every Rider
              </h1>
              <p className="text-lg mb-8 max-w-lg text-foreground/80">
                Experience the thrill of riding with our collection of world-class superbikes. 
                Quality, performance, and style guaranteed with every purchase.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bike-btn">
                    Explore Collection
                  </Button>
                </Link>
                <Link to="#featured">
                  <Button variant="outline" size="lg">
                    Featured Bikes
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg" 
                  alt="Featured Superbike" 
                  className="w-full rounded-lg shadow-2xl object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary px-4 py-3 rounded-lg shadow-lg animate-pulse-slow">
                  <span className="text-white font-semibold">Limited Time Offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section id="featured" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Featured Superbikes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our selection of the most impressive motorcycles available on the market today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden bike-card-hover animate-zoom-in">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{product.name}</h3>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{product.shortDescription}</p>
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
          
          <div className="text-center">
            <Link to="/products">
              <Button className="bike-btn">View All Bikes</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why Choose VelocityWheels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional service and products to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">All our superbikes undergo rigorous testing and quality control before delivery.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">Our 30-day return policy ensures you're satisfied with your purchase or get your money back.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">Our team of motorcycle experts is available to assist you with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">New Arrivals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out the latest additions to our collection. Be the first to ride these exciting new bikes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <Card key={product.id} className="overflow-hidden bike-card-hover animate-zoom-in">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{product.name}</h3>
                    <Badge className="bg-bike-blue text-white">New</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{product.shortDescription}</p>
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
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to receive updates on new arrivals, special offers, and motorcycle industry news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-md px-4 py-2 min-w-[250px] bg-background border border-input"
              />
              <Button className="bike-btn">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
