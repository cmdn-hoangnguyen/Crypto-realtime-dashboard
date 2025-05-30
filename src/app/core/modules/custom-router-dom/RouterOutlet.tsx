import { Navigate, Route, Routes } from 'react-router-dom';

import type { PageRoute } from './router.interface';

const renderRoute = (routes: PageRoute[]) => {
  return routes.map((route: PageRoute, index: number) => {
    // Redirect router
    if (route.redirect && !route.element) {
      return (
        <Route key={index} path={route.path} element={<Navigate to={route.redirect ?? ''} />}>
          {route.children && renderRoute(route.children)}
        </Route>
      );
    }

    if (!route.element) return null;

    return (
      <Route key={index} path={route.path} element={<route.element />}>
        {route.children && renderRoute(route.children)}
      </Route>
    );
  });
};

export const RouterOutlet = ({ routes }: { routes: PageRoute[] }) => {
  return (
    <Routes>
      {renderRoute(routes)}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};
