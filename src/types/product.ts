
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  salePrice?: number;
  description: string;
  shortDescription: string;
  specs: {
    [key: string]: string | number;
  };
  rating: number;
  reviewCount: number;
  stock: number;
  images: string[];
  featured?: boolean;
  new?: boolean;
  colors?: string[];
}
