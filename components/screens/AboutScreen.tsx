'use client';

import type { CSSProperties } from 'react';
import { Avatar, Tag, Card } from '@/components/ds';
import { Icon } from '@/components/Icon';
import { Eyebrow, StatusPill } from '@/components/chrome/elements';
import { PORTFOLIO, SHOW_STATUS } from '@/lib/content';
import { tx, useLang } from '@/lib/i18n';

const LABEL: CSSProperties = {
  font: 'var(--type-label)',
  letterSpacing: 'var(--tracking-wider)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
};

export function AboutScreen() {
  const { lang } = useLang();
  const P = PORTFOLIO;
  const c = P.copy.about;
  const bio = tx(c.bio, lang);

  return (
    <section style={{ position: 'relative', padding: 'clamp(48px, 7vw, 88px) clamp(20px, 4vw, 56px) clamp(56px, 8vw, 104px)' }}>
      <div
        className="about-grid"
        style={{
          maxWidth: 'var(--container)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
          gap: 'clamp(28px, 5vw, 64px)',
          alignItems: 'start',
        }}
      >
        {/* bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <Eyebrow>{tx(c.eyebrow, lang)}</Eyebrow>
          <h1 style={{ fontSize: 'clamp(32px, 4.4vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, margin: 0 }}>
            {tx(c.titleA, lang)}{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-text)' }}>{tx(c.titleAccent, lang)}</span>{' '}
            {tx(c.titleB, lang)}
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 'var(--text-base)', lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '60ch' }}>
            {bio.map((para, i) => (
              <p key={i} style={{ margin: 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
            <p style={{ ...LABEL, margin: 0 }}>{tx(c.skillsLabel, lang)}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 18 }}>
              {P.skills.map((s) => (
                <div key={s.group.en} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', margin: 0, letterSpacing: '0.04em' }}>↳ {tx(s.group, lang)}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {s.items.map((it) => (
                      <Tag key={it}>{it}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <Card inset style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Avatar name={P.identity.name} size="xl" />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20 }}>{P.identity.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{tx(P.identity.role, lang)}</div>
                {SHOW_STATUS && (
                  <div style={{ marginTop: 10 }}>
                    <StatusPill>{tx(P.copy.status, lang)}</StatusPill>
                  </div>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: 14 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon name="map-pin" size={14} /> {tx(P.identity.location, lang)}
              </span>
            </div>
          </Card>

          {/* experience */}
          <div>
            <p style={{ ...LABEL, margin: '0 0 12px' }}>{tx(c.experienceLabel, lang)}</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {P.experience.map((e, i) => (
                <div key={e.org} style={{ display: 'flex', gap: 14, padding: '14px 0', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', width: 88, flex: 'none', paddingTop: 2 }}>{tx(e.year, lang)}</span>
                  <div>
                    <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>
                      {tx(e.role, lang)} <span style={{ color: 'var(--accent-text)' }}>· {e.org}</span>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{tx(e.note, lang)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* education & certs */}
          <div>
            <p style={{ ...LABEL, margin: '0 0 12px' }}>{tx(c.educationLabel, lang)}</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {P.education.map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', width: 88, flex: 'none', paddingTop: 2 }}>{e.year}</span>
                  <div>
                    <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{tx(e.title, lang)}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{tx(e.org, lang)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
