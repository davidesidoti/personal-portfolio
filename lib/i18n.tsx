'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang, Loc } from './content';

/**
 * Bilingual accessor: a { en, it } leaf -> the string/array for the current
 * language; plain values pass through unchanged. Ported from chrome.jsx.
 */
export function tx<T>(v: Loc<T> | T, lang: Lang): T {
  if (v && typeof v === 'object' && !Array.isArray(v) && 'en' in (v as Record<string, unknown>)) {
    return (v as Loc<T>)[lang];
  }
  return v as T;
}

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Hydrate from localStorage after mount (avoids SSR mismatch).
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pf-lang');
      if (saved === 'en' || saved === 'it') {
        setLangState(saved);
        document.documentElement.setAttribute('lang', saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('pf-lang', l);
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute('lang', l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
