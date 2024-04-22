import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './container/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
