import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import MainContainer from './MainContainer';
import Footer from '../../components/Footer';
import HeaderMobile from './HeaderMobile';

const HomePage = () => {
  return (
    <>
      <Header className='mb-12.5' />
      <HeaderMobile />
      <main className='scrollbar-none flex-1 flex flex-col overflow-auto sm:flex-row h-full px-4 sm:px-0'>
        <Sidebar />
        <MainContainer />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
