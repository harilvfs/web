import { createContext, Dispatch, SetStateAction } from 'react';

export const darkTheme = {
  base: '#0d1117',
  mantle: '#161b22',
  crust: '#0d1117',
  text: '#c9d1d9',
  subtext0: '#8b949e',
  subtext1: '#8b949e',
  surface0: '#21262d',
  surface1: '#8b949e',
  surface2: '#8b949e',
  overlay0: '#8b949e',
  overlay1: '#8b949e',
  overlay2: '#8b949e',
  blue: '#58a6ff',
  lavender: '#58a6ff',
  sapphire: '#56d364',
  sky: '#1f6feb',
  teal: '#56d364',
  green: '#56d364',
  yellow: '#f0883e',
  peach: '#f0883e',
  maroon: '#ff8a80',
  red: '#ff8a80',
  mauve: '#a5d6ff',
  pink: '#ffb3ae',
  flamingo: '#ffb3ae',
  rosewater: '#ffb3ae',
  glass: {
    background: 'rgba(13, 17, 23, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(5px)',
  }
};

export const lightTheme = {
  base: '#e2e8f0',
  mantle: '#cbd5e1',
  crust: '#e2e8f0',
  text: '#1e293b',
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
    background: 'rgba(226, 232, 240, 0.7)',
    border: '1px solid rgba(203, 213, 225, 0.3)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    backdropFilter: 'blur(5px)',
  }
};

export type ThemeType = typeof darkTheme;
export const ThemeContext = createContext<ThemeType>(darkTheme);
export const ThemeUpdateContext = createContext<Dispatch<SetStateAction<ThemeType>>>(() => {}); 
