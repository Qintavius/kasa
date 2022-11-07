import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import NotFound from './pages/Errors/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/housing' element={<Housing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;