import { createContext, Dispatch, SetStateAction } from 'react';

export const darkTheme = {
  base: '#111827',
  mantle: '#1f2937', 
  crust: '#111827',
  text: '#f9fafb',
  subtext0: '#9ca3af',
  subtext1: '#9ca3af',
  surface0: '#374151',
  surface1: '#6b7280',
  surface2: '#6b7280',
  overlay0: '#9ca3af',
  overlay1: '#9ca3af',
  overlay2: '#9ca3af',
  blue: '#818cf8',
  lavender: '#818cf8',
  sapphire: '#34d399',
  sky: '#6366f1',
  teal: '#34d399',
  green: '#34d399',
  yellow: '#fb923c',
  peach: '#fb923c',
  maroon: '#f87171',
  red: '#ef4444',
  mauve: '#a5b4fc',
  pink: '#f472b6',
  flamingo: '#fb7185',
  rosewater: '#fda4af',
  glass: {
    background: "#111827",
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(5px)',
  }
};

export const lightTheme = {
  base: '#ffffff',
  mantle: '#f1f5f9',
  crust: '#e2e8f0',
  text: '#0f172a',
  subtext0: '#334155',
  subtext1: '#1e293b',
  surface0: '#cbd5e1',
  surface1: '#94a3b8',
  surface2: '#64748b',
  overlay0: '#475569',
  overlay1: '#334155',
  overlay2: '#1e293b',
  blue: '#0284c7',
  lavender: '#6366f1',
  sapphire: '#06b6d4',
  sky: '#0284c7',
  teal: '#14b8a6',
  green: '#22c55e',
  yellow: '#eab308',
  peach: '#f97316',
  maroon: '#ef4444',
  red: '#dc2626',
  mauve: '#a855f7',
  pink: '#ec4899',
  flamingo: '#f43f5e',
  rosewater: '#fb7185',
  glass: {
    background: 'rgba(248, 250, 252, 0.7)',
    border: '1px solid rgba(203, 213, 225, 0.3)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    backdropFilter: 'blur(5px)',
  }
};

export type ThemeType = typeof darkTheme;
export const ThemeContext = createContext<ThemeType>(darkTheme);
export const ThemeUpdateContext = createContext<Dispatch<SetStateAction<ThemeType>>>(() => {}); 
