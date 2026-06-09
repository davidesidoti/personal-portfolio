'use client';

import type { CSSProperties } from 'react';

type Variant = 'lockup' | 'mark' | 'wordmark';
type Size = 'sm' | 'md' | 'lg';

export interface LogoProps {
  variant?: Variant;
  size?: Size;
  /** Solid lime mark tile. */
  solid?: boolean;
  href?: string;
  style?: CSSProperties;
}

/**
 * Logo — the Davide Sidoti brand mark, wordmark, or full lockup.
 * Pure typography + the signature lime accent; no image assets.
 */
export function Logo({ variant = 'lockup', size = 'md', solid = false, href, style }: LogoProps) {
  const scale = { sm: 0.82, md: 1, lg: 1.32 }[size];
  const tile = Math.round(40 * scale);

  const mark = (
    <span
      aria-hidden="true"
      style={{
        width: tile,
        height: tile,
        flex: 'none',
        borderRadius: 'var(--radius-md)',
        background: solid ? 'var(--accent)' : 'var(--surface-3)',
        border: `1px solid ${solid ? 'var(--accent)' : 'var(--border-strong)'}`,
        color: solid ? 'var(--text-on-accent)' : 'var(--text)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        fontSize: Math.round(15 * scale),
        letterSpacing: '-0.02em',
      }}
    >
      ds
      {!solid && <span style={{ color: 'var(--accent-text)' }}>_</span>}
    </span>
  );

  const word = (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: Math.round(22 * scale),
        letterSpacing: '-0.03em',
        color: 'var(--text)',
        lineHeight: 1,
      }}
    >
      Davide Sidoti
      <span style={{ color: 'var(--accent-text)' }}>.</span>
    </span>
  );

  const content = variant === 'mark' ? mark : variant === 'wordmark' ? word : (<>{mark}{word}</>);

  const wrapStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: Math.round(14 * scale),
    textDecoration: 'none',
    color: 'inherit',
    ...style,
  };

  if (href) {
    return (
      <a href={href} style={wrapStyle}>
        {content}
      </a>
    );
  }
  return <span style={wrapStyle}>{content}</span>;
}
