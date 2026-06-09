'use client';

import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

type Variant = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  dot?: boolean;
  children?: ReactNode;
}

/**
 * Badge — a small status indicator with an optional leading dot.
 */
export function Badge({ variant = 'neutral', dot = false, style, children, ...rest }: BadgeProps) {
  const map: Record<Variant, { fg: string; bd: string; bg: string; dot: string }> = {
    neutral: { fg: 'var(--text-secondary)', bd: 'var(--border-strong)', bg: 'transparent', dot: 'var(--text-muted)' },
    accent: { fg: 'var(--accent-text)', bd: 'var(--accent-line)', bg: 'var(--accent-soft)', dot: 'var(--accent)' },
    success: { fg: 'var(--success)', bd: 'color-mix(in oklch, var(--success) 45%, transparent)', bg: 'color-mix(in oklch, var(--success) 12%, transparent)', dot: 'var(--success)' },
    warning: { fg: 'var(--warning)', bd: 'color-mix(in oklch, var(--warning) 45%, transparent)', bg: 'color-mix(in oklch, var(--warning) 12%, transparent)', dot: 'var(--warning)' },
    danger: { fg: 'var(--danger)', bd: 'color-mix(in oklch, var(--danger) 45%, transparent)', bg: 'color-mix(in oklch, var(--danger) 12%, transparent)', dot: 'var(--danger)' },
  };
  const c = map[variant];
  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: 24,
    padding: '0 10px',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.04em',
    color: c.fg,
    background: c.bg,
    border: `1px solid ${c.bd}`,
    borderRadius: 'var(--radius-full)',
    ...style,
  };
  return (
    <span style={baseStyle} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.dot, flex: 'none' }} />}
      {children}
    </span>
  );
}
