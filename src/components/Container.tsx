import type { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container relative w-full max-w-screen-xl m-auto xl:p-6 p-2">{children}</div>
  );
};

export default Container;
