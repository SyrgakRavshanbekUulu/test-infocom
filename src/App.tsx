import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { checkUrl } from 'utils/app';
import { routeArray } from 'routes';

const routes = routeArray.map((route) => (
  <Route key={route.path} path={route.path} element={<route.page />} />
))

function App() {
  const location = useLocation()

  const redirect = checkUrl(location);


  if (redirect !== undefined) return <Navigate to={redirect} />
  return (
    <div>
      <Routes>
        {routes}
      </Routes>
    </div>
  );
}

export default App;
