'use client';

import { useState, type CSSProperties, type InputHTMLAttributes, type ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: ReactNode;
  size?: 'md' | 'lg';
  /** Wrapper style (the outer flex column). */
  wrapStyle?: CSSProperties;
}

/**
 * Input — single-line text field with optional label, hint, error and icon.
 */
export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  id,
  wrapStyle,
  ...rest
}: InputProps) {
  const h = size === 'lg' ? 52 : 44;
  const fid = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, ...wrapStyle }}>
      {label && (
        <label
          htmlFor={fid}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          height: h,
          padding: '0 14px',
          background: 'var(--surface-inset)',
          border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-sm)',
          boxShadow: focus && !error ? '0 0 0 3px var(--accent-soft)' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        }}
      >
        {iconLeft && <span style={{ display: 'inline-flex', color: 'var(--text-muted)', flex: 'none' }}>{iconLeft}</span>}
        <input
          id={fid}
          {...rest}
          onFocus={(e) => {
            setFocus(true);
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            rest.onBlur?.(e);
          }}
          style={{
            flex: 1,
            minWidth: 0,
            height: '100%',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            color: 'var(--text)',
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
          }}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: error ? 'var(--danger)' : 'var(--text-faint)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
