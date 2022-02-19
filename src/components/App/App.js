import { UniversalStyle } from './style.js';
import Header from '../Header/Header.js';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <UniversalStyle />
      <Header /> 
      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/services" />
        <Route path="/contact" />
      </Routes>
      
    </Router>
  );
}

export default App;
