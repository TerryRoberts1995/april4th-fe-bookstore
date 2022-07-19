import React from 'react';
import Home from './components/Home';
import Books from './components/Books';
import NavBar from './components/navigation/NavBar';
import './styles/main.scss';

function App () {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Home />
      <Books />
    </div>
  );
}

export default App;
