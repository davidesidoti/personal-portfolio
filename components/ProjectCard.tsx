'use client';

import { Card, Tag, Badge } from '@/components/ds';
import type { Lang, Project } from '@/lib/content';
import { tx } from '@/lib/i18n';

function openRepo(p: Project) {
  if (p.href) window.open(p.href, '_blank', 'noopener');
}

function Tags({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto', paddingTop: 6 }}>
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

/**
 * ProjectCard — TERMINAL variant: flat code/terminal thumbnail surface.
 * (The baked default; the prototype's minimal/index variants are not shipped.)
 */
export function ProjectCard({ p, lang }: { p: Project; lang: Lang }) {
  return (
    <Card
      interactive
      glow={p.accent}
      onClick={() => openRepo(p)}
      style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: 0, overflow: 'hidden', height: '100%' }}
    >
      <div
        style={{
          position: 'relative',
          height: 150,
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface-inset)',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: 14,
            left: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--text-faint)',
            letterSpacing: '0.08em',
          }}
        >
          {p.idx}
        </span>
        {p.accent && (
          <span style={{ position: 'absolute', top: 12, right: 14 }}>
            <Badge variant="accent" dot>
              {lang === 'it' ? 'In evidenza' : 'Featured'}
            </Badge>
          </span>
        )}
        <div
          style={{
            position: 'absolute',
            left: 16,
            bottom: 14,
            right: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            color: 'var(--text-secondary)',
          }}
        >
          <span style={{ color: 'var(--accent-text)' }}>~/</span>
          {p.title.toLowerCase()}
          <span style={{ color: 'var(--text-faint)' }}> · {tx(p.tagline, lang)}</span>
        </div>
      </div>
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>{p.title}</h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{p.year}</span>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0 }}>{tx(p.desc, lang)}</p>
        <Tags items={p.tags} />
      </div>
    </Card>
  );
}
