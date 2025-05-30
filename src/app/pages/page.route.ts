import React from 'react';

import cryptoRoute from './detail/detail.route';
import errorRoutes from './error/error.route';
import favoriteRoute from './favorite/favorite.route';
import homeRoutes from './home/home.route';

const Page = React.lazy(() => import('./Page'));

const pageRoutes = [
  {
    path: '/',
    element: Page,
    children: [...homeRoutes, ...cryptoRoute, ...favoriteRoute, ...errorRoutes],
  },
];

export default pageRoutes;
