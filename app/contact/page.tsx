import type { Metadata } from 'next';
import { ContactScreen } from '@/components/screens/ContactScreen';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Davide Sidoti — hiring, a project, or just to talk shop.',
};

export default function Page() {
  return <ContactScreen />;
}
