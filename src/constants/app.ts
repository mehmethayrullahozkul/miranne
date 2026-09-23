export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  SEARCH: '/search',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  RESET_SUCCESS: '/reset-success',
  CART: '/cart',
  PROFILE: '/profile',
} as const;

export const APP_CONFIG = {
  mockDelayMs: 280,
  heroIntervalMs: 4800,
  feedbackDurationMs: 1100,
  desktopMaxWidthPx: 460,
  freeShippingThreshold: 500,
} as const;

export const PRODUCT_DETAIL_PREFIX = '/product/';
