import clsx from 'clsx';

import type { BADGE_VARIANT } from '../constants/enum';

interface BadgeProps {
  content: React.ReactNode;
  variant: BADGE_VARIANT;
  className?: string;
}

export const Badge = ({ content, variant, className = '' }: BadgeProps) => {
  return <div className={clsx('badge-base', variant, className)}>{content}</div>;
};
