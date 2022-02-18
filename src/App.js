import './App.css';
import { GlobalStyles } from './global-styles.js';
import Header from './components/Header/Header.js';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
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
