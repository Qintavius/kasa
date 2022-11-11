import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import NotFound from './pages/Errors/NotFound/NotFound';
import HeaderNavigation from './components/Header/HeaderNavigation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="body-wrapper">
        <HeaderNavigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact sensitive path='/about' element={<About />} />
          <Route exact sensitive path='/housing/:id' element={<Housing />} />
          <Route path='/housing/*' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;