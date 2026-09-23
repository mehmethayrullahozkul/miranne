import { CartItem } from '../components/CartItem';
import { Icon } from '../components/Icon';
import { PrimaryButton } from '../components/PrimaryButton';
import { APP_CONFIG, ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';
import { formatCurrency } from '../utils/formatters';

export function CartPage() {
  const { data, cartItems, cartCount, cartTotal, navigate } = useApp();
  if (!data) return null;
  const copy = data.content.cart;
  if (!cartItems.length) return (
    <main className="empty-cart-page">
      <div className="cart-title"><Icon name="bag" /><h1>{copy.title} ({cartCount})</h1></div>
      <div className="empty-cart-message"><Icon name="bag" size={30} /><p>{copy.empty}</p></div>
      <PrimaryButton onClick={() => navigate(ROUTES.PRODUCTS)}>{copy.startShopping}</PrimaryButton>
    </main>
  );
  const shippingComplete = cartTotal >= APP_CONFIG.freeShippingThreshold;
  const progress = Math.min(100, cartTotal / APP_CONFIG.freeShippingThreshold * 100);
  return (
    <main className="cart-page">
      <div className="cart-title"><Icon name="bag" /><h1>{copy.title} ({cartCount})</h1></div>
      <div className="shipping-progress"><p>{shippingComplete ? copy.shippingComplete : copy.shippingHint}</p><span><i style={{ width: `${progress}%` }} /></span></div>
      <section className="cart-list">{cartItems.map((item) => <CartItem key={item.product.id} item={item} />)}</section>
      <footer className="cart-summary">
        <div><strong>{copy.total}</strong><b>{formatCurrency(cartTotal)}</b></div>
        <div className="cart-summary-actions"><PrimaryButton>{copy.checkout}</PrimaryButton><PrimaryButton variant="secondary" onClick={() => navigate(ROUTES.PRODUCTS)}>{copy.continue}</PrimaryButton></div>
      </footer>
    </main>
  );
}
