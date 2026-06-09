import type { Metadata } from 'next';
import { WorkScreen } from '@/components/screens/WorkScreen';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected work — web apps, self-hosting automation, and machine-learning side projects by Davide Sidoti.',
};

export default function Page() {
  return <WorkScreen />;
}
