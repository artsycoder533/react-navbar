import { UniversalStyle } from './style.js';
import Header from '../Header/Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home.js';

function App() {
  return (
    <Router>
      <UniversalStyle />
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" />
        <Route path="/services" />
        <Route path="/contact" />
      </Routes>
      
    </Router>
  );
}

export default App;
