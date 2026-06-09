'use client';

import { useState, type CSSProperties, type TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** Wrapper style (the outer flex column). */
  wrapStyle?: CSSProperties;
}

/**
 * Textarea — multi-line text field matching Input styling.
 */
export function Textarea({ label, hint, error, rows = 4, id, wrapStyle, ...rest }: TextareaProps) {
  const fid = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
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
      <textarea
        id={fid}
        rows={rows}
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
          resize: 'vertical',
          padding: '12px 14px',
          background: 'var(--surface-inset)',
          color: 'var(--text)',
          border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          boxShadow: focus && !error ? '0 0 0 3px var(--accent-soft)' : 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          lineHeight: 1.55,
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        }}
      />
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: error ? 'var(--danger)' : 'var(--text-faint)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
