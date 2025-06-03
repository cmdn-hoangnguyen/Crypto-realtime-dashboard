import type { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-screen-xl m-auto xl:p-6 px-10 py-4">{children}</div>;
};

export default Container;
