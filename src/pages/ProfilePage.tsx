import { Icon } from '../components/Icon';
import { PrimaryButton } from '../components/PrimaryButton';
import { ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';

export function ProfilePage() {
  const { data, user, logout, navigate } = useApp();
  if (!data) return null;
  const copy = data.content.profile;
  if (!user) return <main className="profile-page guest-profile"><span className="profile-avatar"><Icon name="user" size={36} /></span><h1>{copy.title}</h1><p>{copy.guestText}</p><PrimaryButton onClick={() => navigate(ROUTES.LOGIN)}>{data.content.auth.loginAction}</PrimaryButton></main>;
  const items = [copy.orders, copy.addresses, copy.favorites];
  return <main className="profile-page"><div className="profile-intro"><span className="profile-avatar"><Icon name="user" size={36} /></span><div><span>{copy.greeting}</span><h1>{user.firstName} {user.lastName}</h1><p>{user.email}</p></div></div><section className="profile-menu">{items.map((item) => <button key={item}>{item}<Icon name="chevron" size={18} /></button>)}</section><PrimaryButton variant="secondary" onClick={logout}>{copy.logout}</PrimaryButton></main>;
}
