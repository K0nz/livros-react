import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><NavLink to="/" className="nav-link">LivroLista</NavLink></li>
            <li><NavLink to="/dados" className="nav-link">LivroDados</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
