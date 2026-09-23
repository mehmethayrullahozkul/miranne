import { APP_CONFIG } from '../constants/app';
import { appBootstrap } from '../mocks/mockData';
import type { AppBootstrap, LoginPayload, RegisterPayload, User } from '../models';

/** Simulates network latency while keeping the future HTTP boundary isolated. */
function simulateRequest<T>(response: T, delay = APP_CONFIG.mockDelayMs): Promise<T> {
  return new Promise((resolve) => window.setTimeout(() => resolve(response), delay));
}

export function fetchAppBootstrap(): Promise<AppBootstrap> {
  return simulateRequest(structuredClone(appBootstrap));
}

export function login(payload: LoginPayload): Promise<User> {
  const name = payload.email.split('@')[0] || 'Miranne';
  return simulateRequest({ id: 'mock-user', firstName: name, lastName: 'Üyesi', email: payload.email });
}

export function register(payload: RegisterPayload): Promise<User> {
  return simulateRequest({ id: 'mock-user', firstName: payload.firstName, lastName: payload.lastName, email: payload.email });
}

export function requestPasswordReset(_email: string): Promise<{ accepted: true }> {
  return simulateRequest({ accepted: true });
}

export function resetPassword(_password: string): Promise<{ success: true }> {
  return simulateRequest({ success: true });
}
