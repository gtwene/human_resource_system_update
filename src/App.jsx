import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Signin from './SignIn';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <React.Fragment>
      <Routes>
        {/* <Route exact path="/" element={<Dashboard />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
