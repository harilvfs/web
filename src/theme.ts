import { createContext, Dispatch, SetStateAction } from 'react';

export const darkTheme = {
  base: '#0f172a',
  mantle: '#1e293b', 
  crust: '#0f172a',
  text: '#f8fafc',
  subtext0: '#cbd5e1',
  subtext1: '#e2e8f0',
  surface0: '#334155',
  surface1: '#475569',
  surface2: '#64748b',
  overlay0: '#94a3b8',
  overlay1: '#cbd5e1',
  overlay2: '#e2e8f0',
  blue: '#38bdf8',
  lavender: '#818cf8',
  sapphire: '#22d3ee',
  sky: '#0ea5e9',
  teal: '#2dd4bf',
  green: '#4ade80',
  yellow: '#facc15',
  peach: '#fb923c',
  maroon: '#f87171',
  red: '#ef4444',
  mauve: '#c084fc',
  pink: '#f472b6',
  flamingo: '#fb7185',
  rosewater: '#fda4af',
  glass: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(5px)',
  }
};

export const lightTheme = {
  base: '#f8fafc',
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
