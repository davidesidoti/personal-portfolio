import type { CSSProperties, ReactNode } from 'react';

/** Mono section eyebrow: // LABEL */
export function Eyebrow({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <p
      style={{
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        color: accent ? 'var(--accent)' : 'var(--text-muted)',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span style={{ color: 'var(--accent-text)' }}>//</span>
      {children}
    </p>
  );
}

/** "Available for work" status pill with a live lime dot. */
export function StatusPill({ children, color = 'var(--success)' }: { children: ReactNode; color?: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 30,
        padding: '0 12px',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border-strong)',
        background: 'var(--surface-2)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-secondary)',
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ position: 'relative', width: 8, height: 8 }}>
        <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color }} />
        <span
          className="status-ping"
          style={{ position: 'absolute', inset: -3, borderRadius: '50%', border: `1px solid ${color}`, opacity: 0.4 }}
        />
      </span>
      {children}
    </span>
  );
}

/** Faint blueprint grid backdrop. */
export function GridBg({ style }: { style?: CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(120% 80% at 50% 0%, #000 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(120% 80% at 50% 0%, #000 40%, transparent 100%)',
        ...style,
      }}
    />
  );
}
