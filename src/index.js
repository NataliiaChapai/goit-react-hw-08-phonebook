import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';
import './index.css';
import store from 'redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store.store}>
      <React.StrictMode>
        <PersistGate loading={null} persistor={store.persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </React.StrictMode>
  </Provider>
);
