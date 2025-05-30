import type { PageRoute } from './core/modules/custom-router-dom/router.interface';
import pageRoutes from './pages/page.route';

const appRoutes: PageRoute[] = [...pageRoutes];

export default appRoutes;
