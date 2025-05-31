import React from 'react';

const Favorite = React.lazy(() => import('./containers/Favorite'));

const favoriteRoute = [
  {
    path: '/favorite/:id',
    element: Favorite,
  },
];
export default favoriteRoute;
