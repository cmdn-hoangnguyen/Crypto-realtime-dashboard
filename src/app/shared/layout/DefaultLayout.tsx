import type { ReactNode } from 'react';

import Header from '../../../components/Header';
import { Footer } from '../../../components/Footer';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
