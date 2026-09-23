import type { Product } from '../models';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products, emptyText }: { products: Product[]; emptyText: string }) {
  if (products.length === 0) return <div className="inline-empty">{emptyText}</div>;
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
