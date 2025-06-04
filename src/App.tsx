import { BrowserRouter } from 'react-router-dom';
import './reset.css';
import './styles.css';
import { ToastContainer } from 'react-toastify';

import appRoutes from './app/app.route';
import { RouterOutlet } from './app/core/modules/custom-router-dom/RouterOutlet';

function App() {
  return (
    <BrowserRouter>
      <div className="app bg-[var(--bg-primary)]">
        <RouterOutlet routes={appRoutes} />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
