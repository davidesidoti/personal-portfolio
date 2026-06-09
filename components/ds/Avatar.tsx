'use client';

import type { CSSProperties, HTMLAttributes } from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';
type Status = 'online' | 'away' | 'busy';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  name?: string;
  size?: Size;
  status?: Status;
}

/**
 * Avatar — circular identity token. Renders an image, or initials fallback.
 */
export function Avatar({ src, name = '', size = 'md', status, style, ...rest }: AvatarProps) {
  const dim = { sm: 28, md: 40, lg: 56, xl: 88 }[size];
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const statusColor = status
    ? ({ online: 'var(--success)', away: 'var(--warning)', busy: 'var(--danger)' } as const)[status]
    : undefined;

  const wrap: CSSProperties = { position: 'relative', display: 'inline-flex', flex: 'none', ...style };

  return (
    <span style={wrap} {...rest}>
      <span
        style={{
          width: dim,
          height: dim,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--surface-3)',
          border: '1px solid var(--border-strong)',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          fontSize: Math.round(dim * 0.36),
          letterSpacing: '-0.01em',
        }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          initials || '·'
        )}
      </span>
      {statusColor && (
        <span
          style={{
            position: 'absolute',
            right: -1,
            bottom: -1,
            width: Math.max(8, dim * 0.26),
            height: Math.max(8, dim * 0.26),
            borderRadius: '50%',
            background: statusColor,
            border: '2px solid var(--bg)',
          }}
        />
      )}
    </span>
  );
}
