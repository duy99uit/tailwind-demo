import CategorySection from 'components/CategorySection';
import Header from 'components/Header';
import MainHeader from 'components/MainSection';
import ProductFeatureSection from 'components/ProductFeatureSection';
import PromotionSection from 'components/PromotionSection';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <MainHeader />
      <PromotionSection/>
      <ProductFeatureSection/>
      <CategorySection/>
    </>
  );
}

export default App;
