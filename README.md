# Davide Sidoti — Portfolio

Personal portfolio for **Davide Sidoti**, full-stack software engineer.
"Terminal Editorial" design system — dark-first, grid-precise, monospace metadata,
a single Signal Lime accent, with a warm-paper light theme. Bilingual EN/IT.

## Stack

- **Next.js** (App Router) + **TypeScript** + **React**
- CSS-variable design tokens (`styles/tokens/`) + inline-styled component primitives (`components/ds/`)
- Icons via **lucide-react**
- Contact form: **React Server Action** → **Resend** email
- Deploy target: **Vercel**

## Project layout

| Path | What's there |
|------|--------------|
| `app/` | Routes (`/`, `/work`, `/about`, `/contact`), root layout, contact server action |
| `components/ds/` | Design-system primitives (Button, Card, Input, Tabs, …) |
| `components/chrome/` | TopBar, Footer, Eyebrow, StatusPill, GridBg, language toggle |
| `components/screens/` | Home / Work / About / Contact screen content |
| `lib/content.ts` | All site content (bilingual EN/IT), typed |
| `lib/i18n.tsx` | Language provider + `tx()` helper |
| `styles/` | Design tokens + global CSS |
| `public/` | CV PDF and static assets |

## Local development

```bash
npm install
cp .env.local.example .env.local   # then fill in the values
npm run dev                         # http://localhost:3000
```

### Environment variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key — get one at https://resend.com/api-keys |
| `CONTACT_TO_EMAIL` | Where contact submissions are delivered (default `sidotidavide@gmail.com`) |

The contact form sends from `onboarding@resend.dev` (Resend test mode). In test mode,
delivery only works to the Resend account owner's own email — which is the intent here.
To send from a custom address (e.g. `hello@yourdomain.com`), verify a domain in Resend
and update the `from` field in `app/actions/contact.ts`.

Without a `RESEND_API_KEY`, the form validates and renders normally but returns a
graceful error on submit instead of sending.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it at https://vercel.com/new.
3. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` as Environment Variables.
4. Deploy. The framework preset (Next.js) is auto-detected.

## Theme & language

- Theme (dark / warm-paper light) toggles via `data-theme` on `<html>`, persisted to
  `localStorage['ds-theme']`. A no-flash inline script in the root layout applies the
  stored theme before first paint.
- Language (EN / IT) persists to `localStorage['pf-lang']`.
- The "Available for work" status pill is off by default — flip `SHOW_STATUS` in
  `lib/content.ts` to enable it across screens.
