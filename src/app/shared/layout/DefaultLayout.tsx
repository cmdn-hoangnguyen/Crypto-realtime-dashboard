import type { ReactNode } from 'react';

import Header from '../../../components/Header';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
