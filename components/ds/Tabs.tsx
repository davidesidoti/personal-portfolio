'use client';

import type { CSSProperties, ReactNode } from 'react';

export interface TabItem {
  value: string;
  label: ReactNode;
  count?: number;
}

export interface TabsProps {
  items?: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
}

/**
 * Tabs — horizontal segmented navigation with a lime underline indicator.
 * Controlled: pass `value`, `items`, and `onChange`.
 */
export function Tabs({ items = [], value, onChange, style }: TabsProps) {
  return (
    <div role="tablist" style={{ display: 'inline-flex', gap: 4, borderBottom: '1px solid var(--border)', ...style }}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange?.(it.value)}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '12px 14px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.01em',
              color: active ? 'var(--text)' : 'var(--text-muted)',
              transition: 'color var(--dur-fast) var(--ease-out)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            onMouseLeave={(e) => {
              if (!active) e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            {it.label}
            {it.count != null && (
              <span style={{ fontSize: 11, color: active ? 'var(--accent-text)' : 'var(--text-faint)' }}>{it.count}</span>
            )}
            <span
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -1,
                height: 2,
                background: 'var(--accent)',
                transform: active ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'center',
                transition: 'transform var(--dur-base) var(--ease-out)',
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
