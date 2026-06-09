'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { Moon, Sun } from 'lucide-react';

export interface ThemeToggleProps {
  style?: CSSProperties;
}

/**
 * ThemeToggle — flips between light and dark by setting data-theme on
 * <html> and persisting to localStorage. Pure CSS-variable theming.
 */
export function ThemeToggle({ style }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
    setTheme(current);
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('ds-theme');
    } catch {
      /* ignore */
    }
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
      setTheme(saved);
    }
  }, []);

  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('ds-theme', next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  };

  const dark = theme !== 'light';

  return (
    <button
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title="Toggle theme"
      onClick={flip}
      style={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-strong)',
        background: 'transparent',
        color: 'var(--text)',
        cursor: 'pointer',
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--surface-2)';
        e.currentTarget.style.borderColor = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.borderColor = 'var(--border-strong)';
      }}
    >
      {dark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
    </button>
  );
}
