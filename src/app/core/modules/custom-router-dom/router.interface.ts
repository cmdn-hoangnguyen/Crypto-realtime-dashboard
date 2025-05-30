import type { JSX, LazyExoticComponent } from 'react';

export interface PageRoute {
  path: string;
  element?: LazyExoticComponent<() => JSX.Element> | LazyExoticComponent<React.FC<object>>;
  isProtected?: boolean;
  redirect?: string;
  children?: PageRoute[];
}
