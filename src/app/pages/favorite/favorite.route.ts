import React from 'react';

const Favorite = React.lazy(() => import('./containers/Favorite'));

const favoriteRoute = [
  {
    path: '/favorite',
    element: Favorite,
  },
];
export default favoriteRoute;
