'use client';

import type { ButtonHTMLAttributes, CSSProperties } from 'react';

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
  /** Wrapper (label) style. */
  wrapStyle?: CSSProperties;
}

/**
 * Switch — boolean toggle. Controlled via `checked` + `onChange`.
 */
export function Switch({ checked = false, onChange, disabled = false, label, id, wrapStyle, ...rest }: SwitchProps) {
  const fid = id || (label ? `sw-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const toggle = () => {
    if (!disabled) onChange?.(!checked);
  };

  const sw = (
    <button
      id={fid}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={toggle}
      {...rest}
      style={{
        width: 44,
        height: 26,
        flex: 'none',
        padding: 3,
        borderRadius: 'var(--radius-full)',
        background: checked ? 'var(--accent)' : 'var(--surface-3)',
        border: `1px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: checked ? 'var(--text-on-accent)' : 'var(--text-secondary)',
          transform: checked ? 'translateX(18px)' : 'translateX(0)',
          transition: 'transform var(--dur-base) var(--ease-out)',
        }}
      />
    </button>
  );

  if (!label) return sw;

  return (
    <label
      htmlFor={fid}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...wrapStyle,
      }}
    >
      {sw}
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text)' }}>{label}</span>
    </label>
  );
}
