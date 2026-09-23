import { useApp } from '../hooks/useApp';
import type { CartItem as CartItemModel } from '../models';
import { formatCurrency } from '../utils/formatters';
import { Icon } from './Icon';

export function CartItem({ item }: { item: CartItemModel }) {
  const { data, updateCartQuantity } = useApp();
  if (!data) return null;
  const { cart } = data.content;

  return (
    <article className="cart-item">
      <img src={item.product.imageUrl} alt={item.product.name} />
      <div className="cart-item-copy">
        <strong>{item.product.name}</strong>
        <span>{data.content.products.size}: {item.product.size}</span>
        <div className="quantity-control">
          <span>{cart.quantity}</span>
          <button aria-label={cart.decrease} onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}><Icon name="minus" size={14} /></button>
          <b>{item.quantity}</b>
          <button aria-label={cart.increase} onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}><Icon name="plus" size={14} /></button>
        </div>
      </div>
      <div className="cart-item-price">
        {item.product.originalPrice && <del>{formatCurrency(item.product.originalPrice * item.quantity)}</del>}
        <strong>{formatCurrency(item.product.price * item.quantity)}</strong>
      </div>
    </article>
  );
}
