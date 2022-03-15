import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { MAIN_ROUTER_PATH } from '@/constants/router';
import HomePage from '@/pages/HomePage/HomePage';
import MainHeader from '@/components/MainSection';

function MainLayout() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path={MAIN_ROUTER_PATH.HOME} element={HomePage} />
        <Route path={MAIN_ROUTER_PATH.HOME} element={HomePage} />
      </Routes>
    </>
  );
}

export default MainLayout;
