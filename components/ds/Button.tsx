'use client';

import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  full?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

/**
 * Button — the primary action element.
 * Variants: primary (lime), secondary (outline), ghost, danger.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style,
  children,
  ...rest
}: ButtonProps) {
  const sizes = {
    sm: { h: 34, px: 14, fs: 13, gap: 7 },
    md: { h: 42, px: 18, fs: 14, gap: 8 },
    lg: { h: 52, px: 24, fs: 16, gap: 10 },
  }[size];

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    height: sizes.h,
    padding: `0 ${sizes.px}px`,
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: sizes.fs,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition:
      'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
  };

  const variants: Record<Variant, CSSProperties> = {
    primary: { background: 'var(--accent)', color: 'var(--text-on-accent)', borderColor: 'var(--accent)' },
    secondary: { background: 'transparent', color: 'var(--text)', borderColor: 'var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'transparent' },
    danger: { background: 'transparent', color: 'var(--danger)', borderColor: 'color-mix(in oklch, var(--danger) 45%, transparent)' },
  };

  const hover: Record<Variant, (el: HTMLButtonElement, on: boolean) => void> = {
    primary: (el, on) => { el.style.background = on ? 'var(--accent-hover)' : 'var(--accent)'; },
    secondary: (el, on) => {
      el.style.borderColor = on ? 'var(--accent)' : 'var(--border-strong)';
      el.style.color = on ? 'var(--accent-text)' : 'var(--text)';
    },
    ghost: (el, on) => {
      el.style.background = on ? 'var(--surface-2)' : 'transparent';
      el.style.color = on ? 'var(--text)' : 'var(--text-secondary)';
    },
    danger: (el, on) => { el.style.background = on ? 'color-mix(in oklch, var(--danger) 12%, transparent)' : 'transparent'; },
  };

  return (
    <button
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => !disabled && hover[variant](e.currentTarget, true)}
      onMouseLeave={(e) => !disabled && hover[variant](e.currentTarget, false)}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(1px)')}
      onMouseUp={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(0)')}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </button>
  );
}
