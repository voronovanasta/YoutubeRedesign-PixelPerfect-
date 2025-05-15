import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import MainContainer from './MainContainer';
import HeaderMobile from './HeaderMobile';

const ChannelPage = () => {
  return (
    <>
      <Header className='mb-7.5' />
      <HeaderMobile />
      <main className='scrollbar-none flex-1 flex flex-col overflow-auto sm:flex-row h-full'>
        <Sidebar className='mt-5' />
        <MainContainer />
      </main>
      <Footer />
    </>
  );
};

export default ChannelPage;
