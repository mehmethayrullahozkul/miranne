import { useApp } from '../hooks/useApp';
import { Icon } from './Icon';

export function SideMenu() {
  const { data, drawerOpen, setDrawerOpen, navigate } = useApp();
  if (!data) return null;

  return (
    <div className={`drawer-layer ${drawerOpen ? 'is-open' : ''}`} aria-hidden={!drawerOpen}>
      <button className="drawer-scrim" aria-label={data.content.common.close} onClick={() => setDrawerOpen(false)} />
      <aside className="drawer" aria-label={data.content.header.menu}>
        <div className="drawer-brand-row">
          <span className="drawer-brand">{data.content.brandName}</span>
          <button className="icon-button" aria-label={data.content.common.close} onClick={() => setDrawerOpen(false)}><Icon name="close" /></button>
        </div>
        <nav className="drawer-nav">
          {data.menuItems.map((item, index) => (
            <button className={index === 0 ? 'drawer-link drawer-link-strong' : 'drawer-link'} key={item.id} onClick={() => navigate(item.route)}>{item.label}</button>
          ))}
        </nav>
      </aside>
    </div>
  );
}
