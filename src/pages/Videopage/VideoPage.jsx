import React from 'react';
import Header from '../../components/Header';
import MainContainer from './MainContainer';
import Footer from '../../components/Footer';
import HeaderMobile from './HeaderMobile';
import Sidebar from './Sidebar';

const VideoPage = () => {
  return (
    <>
      <Header className='sm:mb-10 mb-5.5' />
      <HeaderMobile />
      <main className='scrollbar-none flex flex-col overflow-auto 3xl:flex-row sm:gap-10 sm:pl-20 sm:pr-17.5'>
        <MainContainer />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
};

export default VideoPage;
