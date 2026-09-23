import { useState } from 'react';
import { Icon } from '../components/Icon';
import { PrimaryButton } from '../components/PrimaryButton';
import { APP_CONFIG } from '../constants/app';
import { useApp } from '../hooks/useApp';
import { formatCurrency } from '../utils/formatters';

export function ProductDetailPage({ productId }: { productId: string }) {
  const { data, addToCart } = useApp();
  const [added, setAdded] = useState(false);
  if (!data) return null;
  const product = data.products.find((item) => item.id === productId);
  if (!product) return null;
  const copy = data.content.products;
  const add = () => { addToCart(product); setAdded(true); window.setTimeout(() => setAdded(false), APP_CONFIG.feedbackDurationMs); };
  return (
    <main className="product-detail-page">
      <div className="detail-image"><img src={product.imageUrl} alt={product.name} /></div>
      <section className="detail-copy"><span className="detail-eyebrow">{copy.detail}</span><h1>{product.name}</h1><div className="detail-price">{product.originalPrice && <del>{formatCurrency(product.originalPrice)}</del>}<strong>{formatCurrency(product.price)}</strong></div><div className="detail-rule" /><h2>{copy.description}</h2><p>{product.description}</p><div className="detail-size"><span>{copy.size}</span><b>{product.size}</b></div><PrimaryButton onClick={add}>{added ? <><Icon name="check" size={17} />{copy.addedToCart}</> : copy.addToCart}</PrimaryButton></section>
    </main>
  );
}
