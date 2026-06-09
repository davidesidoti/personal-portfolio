'use client';

import { useState, useTransition, type FormEvent } from 'react';
import { Input, Textarea, Switch, Button, IconButton } from '@/components/ds';
import { Icon } from '@/components/Icon';
import { Eyebrow, GridBg, StatusPill } from '@/components/chrome/elements';
import { PORTFOLIO, SHOW_STATUS } from '@/lib/content';
import { tx, useLang } from '@/lib/i18n';
import { sendContactMessage } from '@/app/actions/contact';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactScreen() {
  const { lang } = useLang();
  const P = PORTFOLIO;
  const c = P.copy.contact;

  const [sent, setSent] = useState(false);
  const [nda, setNda] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [company, setCompany] = useState(''); // honeypot
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = tx(c.errName, lang);
    if (!EMAIL_RE.test(form.email.trim())) next.email = tx(c.errEmail, lang);
    if (form.message.trim().length < 10) next.message = tx(c.errMsg, lang);
    return next;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    startTransition(async () => {
      const res = await sendContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        nda,
        company,
      });
      if (res.ok) {
        setSent(true);
      } else {
        setSubmitError(tx(c.errGeneric, lang));
      }
    });
  };

  const reset = () => {
    setSent(false);
    setSubmitError(null);
    setErrors({});
  };

  return (
    <section style={{ position: 'relative', padding: 'clamp(48px, 7vw, 96px) clamp(20px, 4vw, 56px) clamp(56px, 8vw, 104px)' }}>
      <GridBg style={{ maskImage: 'radial-gradient(110% 70% at 50% 0%, #000 35%, transparent 100%)', WebkitMaskImage: 'radial-gradient(110% 70% at 50% 0%, #000 35%, transparent 100%)' }} />
      <div
        className="contact-grid"
        style={{
          position: 'relative',
          maxWidth: 980,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
          gap: 'clamp(28px, 5vw, 64px)',
          alignItems: 'start',
        }}
      >
        {/* left intro */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <Eyebrow>{tx(c.eyebrow, lang)}</Eyebrow>
          <h1 style={{ fontSize: 'clamp(34px, 4.6vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
            {tx(c.titleA, lang)}
            {tx(c.titleA, lang) ? ' ' : ''}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-text)' }}>{tx(c.titleAccent, lang)}</span>.
          </h1>
          <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '42ch', margin: 0 }}>{tx(c.lead, lang)}</p>

          <a
            href={`mailto:${P.identity.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              color: 'var(--accent-text)',
              borderBottom: '1px solid var(--accent-line)',
              alignSelf: 'flex-start',
              paddingBottom: 2,
            }}
          >
            <Icon name="mail" size={16} /> {P.identity.email}
          </a>

          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            {P.identity.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ display: 'inline-flex' }}>
                <IconButton label={s.label} variant="outline">
                  <Icon name={s.icon} />
                </IconButton>
              </a>
            ))}
          </div>
          {SHOW_STATUS && (
            <div style={{ marginTop: 8 }}>
              <StatusPill>{tx(P.copy.status, lang)}</StatusPill>
            </div>
          )}
        </div>

        {/* right form */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 'clamp(20px, 3vw, 32px)' }}>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, minHeight: 320, textAlign: 'center' }}>
              <span style={{ display: 'inline-flex', width: 52, height: 52, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent-text)', boxShadow: 'var(--glow-md)' }}>
                <Icon name="check" size={24} />
              </span>
              <h3 style={{ fontSize: 'var(--text-xl)' }}>{tx(c.sentTitle, lang)}</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
                ↳ {tx(c.sentNote, lang)} {form.name || tx(c.sentFriend, lang)}.
              </p>
              <Button variant="ghost" size="sm" onClick={reset} iconLeft={<Icon name="rotate-ccw" size={15} />}>
                {tx(c.sendAnother, lang)}
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Input
                label={tx(c.fName, lang)}
                placeholder={tx(c.fNamePh, lang)}
                value={form.name}
                onChange={set('name')}
                error={errors.name}
                iconLeft={<Icon name="user" size={16} />}
                autoComplete="name"
              />
              <Input
                label={tx(c.fEmail, lang)}
                type="email"
                placeholder={tx(c.fEmailPh, lang)}
                value={form.email}
                onChange={set('email')}
                error={errors.email}
                iconLeft={<Icon name="at-sign" size={16} />}
                autoComplete="email"
              />
              <Textarea
                label={tx(c.fMsg, lang)}
                rows={5}
                placeholder={tx(c.fMsgPh, lang)}
                value={form.message}
                onChange={set('message')}
                error={errors.message}
              />

              {/* Honeypot — visually hidden, off the tab order. */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                <label>
                  Company
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </label>
              </div>

              <Switch label={tx(c.fSwitch, lang)} checked={nda} onChange={setNda} type="button" />

              {submitError && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--danger)', margin: 0 }}>↳ {submitError}</p>
              )}

              <Button variant="primary" size="lg" full type="submit" disabled={pending} iconRight={<Icon name="send" size={16} />}>
                {pending ? tx(c.sending, lang) : tx(c.fSend, lang)}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
