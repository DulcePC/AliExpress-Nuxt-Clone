export interface Product {
  id: number | string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  imageUrl?: string;
  categories: string[];
  discount: number;
  topSeller: boolean;
  slug: string
}