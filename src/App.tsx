import { AppHeader } from './components/AppHeader';
import { ErrorView, LoadingView } from './components/AsyncState';
import { SideMenu } from './components/SideMenu';
import { getProductIdFromRoute } from './context/AppContext';
import { ROUTES } from './constants/app';
import { useApp } from './hooks/useApp';
import { CartPage } from './pages/CartPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProfilePage } from './pages/ProfilePage';
import { RegisterPage } from './pages/RegisterPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { ResetSuccessPage } from './pages/ResetSuccessPage';
import { SearchPage } from './pages/SearchPage';

function RouteView() {
  const { route } = useApp();
  const path = route.split('?')[0];
  const productId = getProductIdFromRoute(path);
  if (productId) return <ProductDetailPage productId={productId} />;
  if (path === ROUTES.HOME || path.startsWith('/#')) return <HomePage />;
  if (path === ROUTES.PRODUCTS) return <ProductsPage />;
  if (path === ROUTES.SEARCH) return <SearchPage />;
  if (path === ROUTES.LOGIN) return <LoginPage />;
  if (path === ROUTES.REGISTER) return <RegisterPage />;
  if (path === ROUTES.FORGOT_PASSWORD) return <ForgotPasswordPage />;
  if (path === ROUTES.RESET_PASSWORD) return <ResetPasswordPage />;
  if (path === ROUTES.RESET_SUCCESS) return <ResetSuccessPage />;
  if (path === ROUTES.CART) return <CartPage />;
  if (path === ROUTES.PROFILE) return <ProfilePage />;
  return <NotFoundPage />;
}

export default function App() {
  const { loading, error, route } = useApp();
  const path = route.split('?')[0];
  const hasStandaloneHeader = path === ROUTES.SEARCH || path === ROUTES.CART;

  return (
    <div className="app-shell">
      <div className="app-scroll">
        {!hasStandaloneHeader && !loading && !error && <AppHeader />}
        {loading ? <LoadingView /> : error ? <ErrorView /> : <RouteView />}
      </div>
      <SideMenu />
    </div>
  );
}
