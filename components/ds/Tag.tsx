'use client';

import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  interactive?: boolean;
  children?: ReactNode;
}

/**
 * Tag — a square-ish chip for tech stack / topics. Optional interactive state.
 */
export function Tag({ active = false, interactive = false, style, children, ...rest }: TagProps) {
  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    height: 28,
    padding: '0 11px',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.01em',
    color: active ? 'var(--text-on-accent)' : 'var(--text-secondary)',
    background: active ? 'var(--accent)' : 'var(--surface-2)',
    border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-sm)',
    cursor: interactive ? 'pointer' : 'default',
    transition:
      'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
    userSelect: 'none',
    ...style,
  };
  return (
    <span
      style={baseStyle}
      onMouseEnter={(e) => {
        if (interactive && !active) {
          e.currentTarget.style.borderColor = 'var(--border-strong)';
          e.currentTarget.style.color = 'var(--text)';
        }
      }}
      onMouseLeave={(e) => {
        if (interactive && !active) {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.color = 'var(--text-secondary)';
        }
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
