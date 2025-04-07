import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';
import { HashRouter  as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import "./App.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div>
      <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  </StrictMode>,
)
