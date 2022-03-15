import CategorySection from '@/components/CategorySection';
import MainHeader from '@/components/MainSection';
import ProductFeatureSection from '@/components/ProductFeatureSection';
import HomeSection from '@/components/HomeSection';
import React from 'react';

function HomePage() {
  return (
    <>
      <MainHeader />
      <HomeSection />
      <CategorySection />
      {/* <LogoSection /> */}
      <ProductFeatureSection />
    </>
  );
}

export default HomePage;
