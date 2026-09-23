import { PRODUCT_DETAIL_PREFIX } from '../constants/app';
import { useApp } from '../hooks/useApp';
import type { Product } from '../models';
import { formatCurrency } from '../utils/formatters';

export function ProductCard({ product }: { product: Product }) {
  const { navigate } = useApp();
  return (
    <button className="product-card" onClick={() => navigate(`${PRODUCT_DETAIL_PREFIX}${product.id}`)}>
      <span className="product-image-wrap"><img src={product.imageUrl} alt={product.name} /></span>
      <span className="product-card-name">{product.name}</span>
      <span className="product-price-row">
        {product.originalPrice && <del>{formatCurrency(product.originalPrice)}</del>}
        <strong>{formatCurrency(product.price)}</strong>
      </span>
    </button>
  );
}
