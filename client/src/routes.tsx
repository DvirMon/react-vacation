import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Vacations from './pages/Vacations';

const routes = [
  { path: "", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/browser", element: <Dashboard />, children: [
      { path: "", element: <Vacations /> },
    ]
    
  },
];

export default routes;
