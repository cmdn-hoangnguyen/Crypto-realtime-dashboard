import React from 'react';

const ErrorSection = React.lazy(() => import('./containers/ErrorSection'));

const errorRoutes = [
  {
    path: '/404',
    element: ErrorSection,
  },
];
export default errorRoutes;
