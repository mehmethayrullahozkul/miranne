import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

/** Provides typed access to the centralized reactive application state. */
export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
}
