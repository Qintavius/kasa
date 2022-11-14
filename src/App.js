import React from 'react';
import { Routes, Route } from "react-router-dom";
import HeaderNavigation from './components/Header/HeaderNavigation';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './pages/Errors/NotFound/NotFound';

const App = () => {
  return (
    <>
      <div className="body-wrapper">
        <HeaderNavigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/housing/:id' element={<Housing />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;