import HomePage from '@/pages/HomePage/HomePage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ProducDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/company" element={<ProducDetail />} />

      <Route element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
