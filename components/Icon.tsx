import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  RotateCcw,
  Send,
  User,
  X,
  type LucideIcon,
} from 'lucide-react';

// Maps the kebab-case icon names used throughout the prototype to lucide-react
// components. Replaces the prototype's CDN `<i data-lucide="name">` helper.
const ICONS: Record<string, LucideIcon> = {
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'at-sign': AtSign,
  check: Check,
  download: Download,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  'rotate-ccw': RotateCcw,
  send: Send,
  user: User,
  x: X,
};

export interface IconProps {
  name: string;
  size?: number;
}

/** Lucide icon, 2px stroke, inherits currentColor. Default size 18. */
export function Icon({ name, size = 18 }: IconProps) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} strokeWidth={2} style={{ display: 'inline-flex' }} />;
}
