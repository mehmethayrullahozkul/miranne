import { ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';
import { Icon } from './Icon';

export function AppHeader() {
  const { data, cartCount, navigate, setDrawerOpen } = useApp();
  if (!data) return null;
  const { header } = data.content;

  return (
    <header className="app-header">
      <button className="icon-button" aria-label={header.menu} onClick={() => setDrawerOpen(true)}><Icon name="menu" size={19} /></button>
      <button className="brand-button" aria-label={header.home} onClick={() => navigate(ROUTES.HOME)}>{data.content.brandName}</button>
      <div className="header-actions">
        <button className="icon-button" aria-label={header.search} onClick={() => navigate(ROUTES.SEARCH)}><Icon name="search" size={20} /></button>
        <button className="icon-button" aria-label={header.account} onClick={() => navigate(ROUTES.PROFILE)}><Icon name="user" size={21} /></button>
        <button className="icon-button badge-button" aria-label={header.cart} onClick={() => navigate(ROUTES.CART)}>
          <Icon name="bag" size={21} />
          {cartCount > 0 && <span className="icon-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
