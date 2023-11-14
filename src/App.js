import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Raindrops from './components/Raindrops';
import MobileMenu from './components/MobileMenu';
import store from './redux/store';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const toggleMode = () => {
    document.body.classList.toggle('dark-mode');
    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem('mode', isDarkMode ? 'light' : 'dark');
  }

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <Provider store={store}>
      <Router> {}
        <NavBar toggleMobileMenu={toggleMobileMenu} toggleMode={toggleMode} isDarkMode={isDarkMode} />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        <MobileMenu />
        <Raindrops />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path= "/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/accomplishments" element={<Accomplishments />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
