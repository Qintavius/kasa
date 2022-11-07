import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import NotFound from './pages/Errors/NotFound/NotFound';
import HeaderNavigation from './components/Header/HeaderNavigation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/housing' element={<Housing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;