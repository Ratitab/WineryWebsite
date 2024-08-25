import './App.css';
// import HomePage from './pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProccessPage from './pages/proccess';
import OurWinesPage from './pages/ourWines';
import ContactPage from './pages/contact';
import WineCollectionMildiani from './components/wineCollection/Mildiani';
import WineCollectionBatono from './components/wineCollection/Batono';

function App() {
  return (
        <Router>
            <div>
                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/proccess" element={<ProccessPage />} />
                    <Route path="/ourWines" element={<OurWinesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path='/ourWines/wine-collection/mildiani' element={<WineCollectionMildiani />} />
                    <Route path='/ourWines/wine-collection/batono' element={<WineCollectionBatono />} />

                </Routes>
            </div>
        </Router>
  );
}

export default App;
