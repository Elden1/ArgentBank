import React from 'react';
import {createRoot} from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Account from './Pages/Account';
import Modification from './Pages/Modification';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { isTokenPresent } from './authUtils'; // Import your utility function

// Define your route guard HOC
function ProtectedRoute({ element, path }) {
  if (isTokenPresent() || path === '/login') {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Provider store={store}> <Home /> </Provider>}
        />
        <Route
          path="/login"
          element={<Provider store={store}><Login /> </Provider>}
        />
        <Route
          path="/user"
          element={<ProtectedRoute element={<Provider store={store}><Account /> </Provider>} path="/user" />}
        />
        <Route
          path="/modification"
          element={<ProtectedRoute element={<Provider store={store}><Modification /> </Provider>} path="/modification" />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
