'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo, ThemeToggle, Button } from '@/components/ds';
import { Icon } from '@/components/Icon';
import { PORTFOLIO } from '@/lib/content';
import { tx, useLang } from '@/lib/i18n';
import { LangToggle } from './LangToggle';

/** Maps the prototype's nav ids to real Next routes. */
const ROUTES: Record<string, string> = {
  home: '/',
  work: '/work',
  about: '/about',
  contact: '/contact',
};

export function TopBar() {
  const P = PORTFOLIO;
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (id: string) => ROUTES[id] === pathname;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px clamp(20px, 4vw, 56px)',
        borderBottom: '1px solid var(--border)',
        background: 'color-mix(in oklch, var(--bg) 78%, transparent)',
        backdropFilter: 'var(--blur-md)',
        WebkitBackdropFilter: 'var(--blur-md)',
      }}
    >
      <Link href="/" style={{ display: 'inline-flex' }}>
        <Logo variant="lockup" size="sm" />
      </Link>

      <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {P.nav.map((n) => {
          const active = isActive(n.id);
          return (
            <Link
              key={n.id}
              href={ROUTES[n.id]}
              style={{
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                letterSpacing: '0.02em',
                color: active ? 'var(--text)' : 'var(--text-muted)',
                transition: 'color var(--dur-fast) var(--ease-out)',
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {active && <span style={{ color: 'var(--accent-text)' }}>↳ </span>}
              {tx(n.label, lang)}
            </Link>
          );
        })}
      </nav>

      <div className="bar-actions" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <LangToggle lang={lang} onLang={setLang} />
        <ThemeToggle />
        <span className="cta-desktop" style={{ display: 'inline-flex' }}>
          <Button size="sm" variant="primary" onClick={() => router.push('/contact')} iconRight={<Icon name="arrow-up-right" size={15} />}>
            {lang === 'it' ? 'Parliamone' : "Let's talk"}
          </Button>
        </span>
        <button
          className="menu-btn"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: 38,
            height: 34,
            border: '1px solid var(--border-strong)',
            background: 'var(--surface-2)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
          }}
        >
          <Icon name={open ? 'x' : 'menu'} size={18} />
        </button>
      </div>

      {open && (
        <div
          className="nav-mobile"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 20px 16px',
          }}
        >
          {P.nav.map((n) => (
            <Link
              key={n.id}
              href={ROUTES[n.id]}
              onClick={() => setOpen(false)}
              style={{
                textAlign: 'left',
                padding: '12px 4px',
                fontFamily: 'var(--font-mono)',
                fontSize: 15,
                borderTop: '1px solid var(--border)',
                color: isActive(n.id) ? 'var(--accent-text)' : 'var(--text-secondary)',
              }}
            >
              {tx(n.label, lang)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
