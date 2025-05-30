import React from 'react';

const Home = React.lazy(() => import('./containers/Home'));

const homeRoutes = [
  {
    path: '/',
    element: Home,
  },
];

export default homeRoutes;
