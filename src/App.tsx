import { BrowserRouter } from 'react-router-dom';

import './reset.css';
import './styles.css';
import appRoutes from './app/app.route';
import { RouterOutlet } from './app/core/modules/custom-router-dom/RouterOutlet';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <RouterOutlet routes={appRoutes} />
      </div>
    </BrowserRouter>
  );
}

export default App;
