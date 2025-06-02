import type { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-screen-xl m-auto p-6">{children}</div>;
};

export default Container;
