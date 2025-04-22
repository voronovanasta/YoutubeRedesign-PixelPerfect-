import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import MainContainer from './MainContainer';
import SidebarMobile from '../../components/SidebarMobile';
import HeaderMobile from './HeaderMobile';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeaderMobile />
      <main className='block sm:grid sm:grid-cols-[auto_1fr]'>
        <Sidebar />
        <MainContainer />
        <SidebarMobile />
      </main>
    </>
  );
};

export default HomePage;
