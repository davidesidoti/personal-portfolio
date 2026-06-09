'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(1, 'name').max(100),
  email: z.string().trim().email('email').max(200),
  message: z.string().trim().min(10, 'message').max(5000),
  nda: z.boolean().optional().default(false),
  // Honeypot — real users never fill this; bots often do.
  company: z.string().optional(),
});

export interface ContactInput {
  name: string;
  email: string;
  message: string;
  nda: boolean;
  company?: string;
}

export type ContactResult =
  | { ok: true }
  | { ok: false; error: 'validation' | 'server' };

/**
 * Validates a contact submission and emails it via Resend.
 *
 * Email lands at CONTACT_TO_EMAIL (defaults to the owner's address). In Resend's
 * test mode (`onboarding@resend.dev` From) delivery only works to the account
 * owner's own email — which is exactly what we want here. Verify a domain in
 * Resend later to send from a custom address.
 */
export async function sendContactMessage(input: ContactInput): Promise<ContactResult> {
  // Honeypot tripped — pretend success so bots don't learn anything.
  if (input.company && input.company.trim() !== '') {
    return { ok: true };
  }

  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: 'validation' };
  }
  const { name, email, message, nda } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set.');
    return { ok: false, error: 'server' };
  }
  const to = process.env.CONTACT_TO_EMAIL || 'sidotidavide@gmail.com';

  const lines = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `NDA:     ${nda ? 'Yes' : 'No'}`,
    '',
    message,
  ];

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `New portfolio message — ${name}${nda ? ' [NDA]' : ''}`,
      text: lines.join('\n'),
    });
    if (error) {
      console.error('[contact] Resend error:', error);
      return { ok: false, error: 'server' };
    }
    return { ok: true };
  } catch (e) {
    console.error('[contact] send failed:', e);
    return { ok: false, error: 'server' };
  }
}
