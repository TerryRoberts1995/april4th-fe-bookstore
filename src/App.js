import React from 'react';
import NavBar from './components/navigation/NavBar';
import {useRoutes} from "hookrouter";
import Home from './components/Home';
import Books from './components/Books';
import './styles/main.scss';

function App () {
  
  const routes = {
    '/': () => <Home />,
    '/books': () => <Books />,
  };

  const routeResult = useRoutes(routes);

  return (
    <div className="app-wrapper">
      <NavBar />
      {routeResult}

    </div>
  );
}

export default App;
