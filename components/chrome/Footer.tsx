'use client';

import { Logo } from '@/components/ds';
import { PORTFOLIO } from '@/lib/content';
import { tx, useLang } from '@/lib/i18n';

export function Footer() {
  const P = PORTFOLIO;
  const { lang } = useLang();
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: 'clamp(28px, 5vw, 48px) clamp(20px, 4vw, 56px)' }}>
      <div
        style={{
          maxWidth: 'var(--container)',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo variant="lockup" size="sm" />
        <nav style={{ display: 'flex', gap: 18 }}>
          {P.identity.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="lk"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', transition: 'color var(--dur-fast) var(--ease-out)' }}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
          © {P.identity.year} {P.identity.name} · {tx(P.copy.footerNote, lang)}
        </span>
      </div>
    </footer>
  );
}
