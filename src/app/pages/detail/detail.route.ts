import React from 'react';

const DetailCrypto = React.lazy(() => import('./containers/DetailCrypto'));

const cryptoRoute = [
  {
    path: '/detail/:id',
    element: DetailCrypto,
  },
];

export default cryptoRoute;
