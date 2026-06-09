'use client';

import type { Lang } from '@/lib/content';

/** EN / IT segmented toggle — mono, terminal-flavoured. */
export function LangToggle({ lang, onLang }: { lang: Lang; onLang: (l: Lang) => void }) {
  const opts: Lang[] = ['en', 'it'];
  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 34,
        padding: 3,
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border-strong)',
        background: 'var(--surface-2)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
      }}
    >
      {opts.map((o) => {
        const active = o === lang;
        return (
          <button
            key={o}
            onClick={() => onLang(o)}
            aria-pressed={active}
            style={{
              border: 'none',
              cursor: 'pointer',
              height: 28,
              padding: '0 11px',
              borderRadius: 'var(--radius-full)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: active ? 'var(--accent)' : 'transparent',
              color: active ? 'var(--text-on-accent)' : 'var(--text-muted)',
              fontWeight: active ? 600 : 500,
              transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
