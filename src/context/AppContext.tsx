import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { PRODUCT_DETAIL_PREFIX, ROUTES } from '../constants/app';
import * as apiService from '../services/apiService';
import type { AppBootstrap, CartItem, LoginPayload, Product, ProductCategory, RegisterPayload, User } from '../models';

interface AppContextValue {
  data: AppBootstrap | null;
  loading: boolean;
  error: boolean;
  route: string;
  drawerOpen: boolean;
  selectedCategory: ProductCategory;
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  user: User | null;
  navigate: (route: string) => void;
  setDrawerOpen: (open: boolean) => void;
  setSelectedCategory: (category: ProductCategory) => void;
  addToCart: (product: Product) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  retryBootstrap: () => Promise<void>;
  loginUser: (payload: LoginPayload) => Promise<void>;
  registerUser: (payload: RegisterPayload) => Promise<void>;
  requestReset: (email: string) => Promise<void>;
  submitReset: (password: string) => Promise<void>;
  logout: () => void;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);

function getRouteFromHash(): string {
  return window.location.hash.replace(/^#/, '') || ROUTES.HOME;
}

/** Owns application-wide reactive state and keeps page components presentation-focused. */
export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppBootstrap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [route, setRoute] = useState(getRouteFromHash);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategoryState] = useState<ProductCategory>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const retryBootstrap = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      setData(await apiService.fetchAppBootstrap());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void retryBootstrap();
  }, [retryBootstrap]);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const query = route.split('?')[1];
    const category = query ? new URLSearchParams(query).get('category') : null;
    if (category) setSelectedCategoryState(category as ProductCategory);
  }, [route]);

  const navigate = useCallback((nextRoute: string) => {
    setDrawerOpen(false);
    window.location.hash = nextRoute;
    setRoute(nextRoute);
    window.requestAnimationFrame(() => {
      const anchor = nextRoute.split('#')[1];
      if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      else document.querySelector('.app-scroll')?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);

  const setSelectedCategory = useCallback((category: ProductCategory) => {
    setSelectedCategoryState(category);
  }, []);

  const addToCart = useCallback((product: Product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) return current.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { product, quantity: 1 }];
    });
  }, []);

  const updateCartQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems((current) => quantity <= 0
      ? current.filter((item) => item.product.id !== productId)
      : current.map((item) => item.product.id === productId ? { ...item, quantity } : item));
  }, []);

  const loginUser = useCallback(async (payload: LoginPayload) => {
    setUser(await apiService.login(payload));
    navigate(ROUTES.PROFILE);
  }, [navigate]);

  const registerUser = useCallback(async (payload: RegisterPayload) => {
    setUser(await apiService.register(payload));
    navigate(ROUTES.PROFILE);
  }, [navigate]);

  const requestReset = useCallback(async (email: string) => {
    await apiService.requestPasswordReset(email);
    navigate(ROUTES.RESET_PASSWORD);
  }, [navigate]);

  const submitReset = useCallback(async (password: string) => {
    await apiService.resetPassword(password);
    navigate(ROUTES.RESET_SUCCESS);
  }, [navigate]);

  const logout = useCallback(() => {
    setUser(null);
    navigate(ROUTES.LOGIN);
  }, [navigate]);

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);
  const cartTotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [cartItems]);

  const value = useMemo<AppContextValue>(() => ({
    data, loading, error, route, drawerOpen, selectedCategory, cartItems, cartCount, cartTotal, user,
    navigate, setDrawerOpen, setSelectedCategory, addToCart, updateCartQuantity, retryBootstrap,
    loginUser, registerUser, requestReset, submitReset, logout,
  }), [data, loading, error, route, drawerOpen, selectedCategory, cartItems, cartCount, cartTotal, user, navigate, setSelectedCategory, addToCart, updateCartQuantity, retryBootstrap, loginUser, registerUser, requestReset, submitReset, logout]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function getProductIdFromRoute(route: string): string | null {
  return route.startsWith(PRODUCT_DETAIL_PREFIX) ? route.slice(PRODUCT_DETAIL_PREFIX.length).split('?')[0] : null;
}
