import type { ReactNode } from 'react';
import type { IconName } from '../models';

const paths: Record<IconName, ReactNode> = {
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4.8 20c.8-4 3.2-6 7.2-6s6.4 2 7.2 6" /></>,
  bag: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
  sort: <><path d="M8 6h12M8 12h8M8 18h4" /><path d="m3 6 2-2 2 2M5 4v15" /></>,
  filter: <><path d="M4 6h16M7 12h10M10 18h4" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  back: <><path d="m15 18-6-6 6-6" /></>,
  minus: <><path d="M5 12h14" /></>,
  plus: <><path d="M5 12h14M12 5v14" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m9 6 6 6-6 6" /></>,
};

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
