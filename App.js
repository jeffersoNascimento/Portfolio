import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Router>
        <ul className="linhas">
          <li className="list-item">
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className="list-item">
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<div>Componente de Projetos</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
