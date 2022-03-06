import MainHeader from '@/components/MainSection';
import React from 'react';
import './App.scss';
import CategorySection from './components/CategorySection';
import ProductFeatureSection from './components/ProductFeatureSection';
import PromotionSection from './components/PromotionSection';


function App() {
  return (
    <>
      <MainHeader />
      <PromotionSection />
      <ProductFeatureSection />
      <CategorySection />
    </>
  );
}

export default App;
