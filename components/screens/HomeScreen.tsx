'use client';

import { useRouter } from 'next/navigation';
import { Button, Avatar } from '@/components/ds';
import { Icon } from '@/components/Icon';
import { Eyebrow, GridBg, StatusPill } from '@/components/chrome/elements';
import { ProjectCard } from '@/components/ProjectCard';
import { PORTFOLIO, SHOW_STATUS, type Lang } from '@/lib/content';
import { tx, useLang } from '@/lib/i18n';

function downloadResume() {
  const a = document.createElement('a');
  a.href = `/${PORTFOLIO.identity.resume}`;
  a.download = PORTFOLIO.identity.resume;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Terminal `whoami` card. */
function WhoamiCard({ lang }: { lang: Lang }) {
  const P = PORTFOLIO;
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--danger)' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--warning)' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--success)' }} />
        <span style={{ marginLeft: 8, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>~/davide · zsh</span>
      </div>
      <div style={{ padding: 'var(--space-5)', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.9, color: 'var(--text-secondary)' }}>
        <div>
          <span style={{ color: 'var(--accent-text)' }}>~/davide</span> $ whoami
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '10px 0' }}>
          <Avatar name={P.identity.name} size="md" status="online" />
          <div>
            <div style={{ color: 'var(--text)' }}>{P.identity.name}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>{tx(P.identity.location, lang)}</div>
          </div>
        </div>
        <div>
          <span style={{ color: 'var(--accent-text)' }}>~/davide</span> $ cat stack.txt
        </div>
        <div style={{ color: 'var(--text)' }}>
          [
          {P.stack.map((s, i) => (
            <span key={s}>
              {i ? ', ' : ''}
              <span style={{ color: 'var(--accent-text)' }}>&apos;{s}&apos;</span>
            </span>
          ))}
          ]
        </div>
        <div style={{ marginTop: 6 }}>
          <span style={{ color: 'var(--accent-text)' }}>~/davide</span> ${' '}
          <span className="term-cursor" style={{ display: 'inline-block', width: 8, height: 15, background: 'var(--accent)', verticalAlign: '-2px' }} />
        </div>
      </div>
    </div>
  );
}

export function HomeScreen() {
  const { lang } = useLang();
  const router = useRouter();
  const P = PORTFOLIO;
  const c = P.copy.home;
  const featured = P.projects.slice(0, 3);

  return (
    <div>
      <section style={{ position: 'relative', padding: 'clamp(56px, 9vw, 120px) clamp(20px, 4vw, 56px) clamp(40px, 6vw, 72px)' }}>
        <GridBg />
        <div
          className="hero-split"
          style={{
            position: 'relative',
            maxWidth: 'var(--container)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.55fr) minmax(0, 1fr)',
            gap: 'clamp(28px, 5vw, 72px)',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <Eyebrow>{tx(c.heroEyebrow, lang)}</Eyebrow>
            <h1 style={{ fontSize: 'clamp(40px, 6.4vw, 78px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>
              {tx(c.heroA, lang)}{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-text)' }}>{tx(c.heroAccent, lang)}</span>
              {tx(c.heroB, lang)}
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.5, color: 'var(--text-secondary)', maxWidth: '54ch', margin: 0 }}>{tx(P.identity.blurb, lang)}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 }}>
              <Button variant="primary" size="lg" onClick={() => router.push('/work')} iconRight={<Icon name="arrow-right" />}>
                {tx(c.ctaWork, lang)}
              </Button>
              <Button variant="secondary" size="lg" onClick={downloadResume} iconLeft={<Icon name="download" size={16} />}>
                {tx(c.ctaResume, lang)}
              </Button>
            </div>
            {SHOW_STATUS && (
              <div style={{ marginTop: 6 }}>
                <StatusPill>{tx(P.copy.status, lang)}</StatusPill>
              </div>
            )}
          </div>
          <WhoamiCard lang={lang} />
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px, 4vw, 56px) clamp(56px, 8vw, 104px)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 24, borderTop: '1px solid var(--border)', paddingTop: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Eyebrow>{tx(c.selectedEyebrow, lang)}</Eyebrow>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>{tx(c.selectedTitle, lang)}</h2>
            </div>
            <button
              onClick={() => router.push('/work')}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: 'var(--accent-text)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                whiteSpace: 'nowrap',
              }}
            >
              {tx(c.allProjects, lang)} <Icon name="arrow-right" size={15} />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
            {featured.map((p) => (
              <ProjectCard key={p.idx} p={p} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
