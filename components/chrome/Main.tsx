'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** Re-keys on route change so the page-enter animation re-triggers per navigation. */
export function Main({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <main key={pathname} className="page-enter">
      {children}
    </main>
  );
}
