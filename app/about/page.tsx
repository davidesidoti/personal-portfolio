import type { Metadata } from 'next';
import { AboutScreen } from '@/components/screens/AboutScreen';

export const metadata: Metadata = {
  title: 'About',
  description: 'Davide Sidoti — a self-taught full-stack software engineer from Italy. Background, skills, experience, and education.',
};

export default function Page() {
  return <AboutScreen />;
}
