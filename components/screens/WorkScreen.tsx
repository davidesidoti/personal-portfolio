'use client';

import { useState } from 'react';
import { Tabs } from '@/components/ds';
import { Eyebrow } from '@/components/chrome/elements';
import { ProjectCard } from '@/components/ProjectCard';
import { PORTFOLIO } from '@/lib/content';
import { tx, useLang } from '@/lib/i18n';

export function WorkScreen() {
  const { lang } = useLang();
  const P = PORTFOLIO;
  const c = P.copy.work;
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? P.projects : P.projects.filter((p) => p.cat === filter);
  const items = P.filters.map((f) => ({ value: f.value, label: tx(f.label, lang), count: f.count }));

  return (
    <section style={{ position: 'relative', padding: 'clamp(48px, 7vw, 88px) clamp(20px, 4vw, 56px) clamp(56px, 8vw, 104px)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
          <Eyebrow>
            {tx(c.eyebrow, lang)} · {P.projects.length} {lang === 'it' ? 'progetti' : 'projects'}
          </Eyebrow>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>
            {tx(c.titleA, lang)}{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-text)' }}>{tx(c.titleAccent, lang)}</span>.
          </h1>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '60ch', margin: 0 }}>{tx(c.lead, lang)}</p>
        </div>

        <div style={{ marginBottom: 28, overflowX: 'auto' }}>
          <Tabs items={items} value={filter} onChange={setFilter} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 18 }}>
          {list.map((p) => (
            <ProjectCard key={p.idx} p={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
