export type ProductCategory = 'all' | 'necklace' | 'bracelet' | 'earring' | 'hairpin' | 'keychain' | 'charm';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  description: string;
  size: string;
  featured: boolean;
}

export interface Category {
  id: ProductCategory;
  label: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface HeroSlide {
  id: string;
  imageUrl: string;
  eyebrow: string;
  title: string;
  description: string;
}

export type IconName = 'menu' | 'search' | 'user' | 'bag' | 'sort' | 'filter' | 'close' | 'back' | 'minus' | 'plus' | 'check' | 'chevron';

export interface MenuItem {
  id: string;
  label: string;
  route: string;
}

export interface AppContent {
  brandName: string;
  header: Record<string, string>;
  home: Record<string, string>;
  products: Record<string, string>;
  search: Record<string, string>;
  auth: Record<string, string>;
  cart: Record<string, string>;
  profile: Record<string, string>;
  common: Record<string, string>;
}

export interface AppBootstrap {
  products: Product[];
  categories: Category[];
  slides: HeroSlide[];
  menuItems: MenuItem[];
  content: AppContent;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  firstName: string;
  lastName: string;
  passwordConfirmation: string;
}
