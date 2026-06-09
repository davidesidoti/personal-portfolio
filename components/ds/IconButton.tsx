'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'ghost' | 'outline' | 'solid';
type Size = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: Variant;
  size?: Size;
  /** Accessible label (required). */
  label: string;
  children?: ReactNode;
}

/**
 * IconButton — a square, icon-only button. Pass an SVG (Lucide) as children.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  style,
  children,
  ...rest
}: IconButtonProps) {
  const dim = { sm: 32, md: 40, lg: 48 }[size];
  const variants = {
    ghost: { background: 'transparent', borderColor: 'transparent', color: 'var(--text-secondary)' },
    outline: { background: 'transparent', borderColor: 'var(--border-strong)', color: 'var(--text)' },
    solid: { background: 'var(--surface-2)', borderColor: 'var(--border)', color: 'var(--text)' },
  };
  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      style={{
        width: dim,
        height: dim,
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition:
          'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = 'var(--surface-3)';
        e.currentTarget.style.color = 'var(--text)';
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        Object.assign(e.currentTarget.style, {
          background: variants[variant].background,
          color: variants[variant].color,
        });
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
