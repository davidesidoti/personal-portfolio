'use client';

import { useState, type CSSProperties, type ElementType, type ReactNode } from 'react';

export interface CardProps {
  as?: ElementType;
  interactive?: boolean;
  glow?: boolean;
  inset?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
  [key: string]: unknown;
}

/**
 * Card — surface container. Optional hover lift and accent glow.
 */
export function Card({
  as: Tag = 'div',
  interactive = false,
  glow = false,
  inset = false,
  style,
  children,
  ...rest
}: CardProps) {
  const [hover, setHover] = useState(false);
  return (
    <Tag
      style={{
        position: 'relative',
        background: inset ? 'var(--surface-inset)' : 'var(--surface)',
        border: `1px solid ${hover && interactive ? 'var(--border-strong)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        boxShadow: glow ? 'var(--glow-md)' : hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover && interactive ? 'translateY(-3px)' : 'translateY(0)',
        transition:
          'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        textDecoration: 'none',
        color: 'inherit',
        ...style,
      }}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
