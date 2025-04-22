import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import SidebarMobile from '../../components/SidebarMobile';
import MainContainer from './MainContainer';
import HeaderMobile from './HeaderMobile';

const ChannelPage = () => {
  return (
    <>
      <Header style={{ marginBottom: '1.875rem' }} />
      <HeaderMobile />
      <main className='block sm:grid sm:grid-cols-[auto_1fr]'>
        <Sidebar style={{ marginTop: '1.25rem' }} />
        <MainContainer />
        <SidebarMobile />
      </main>
    </>
  );
};

export default ChannelPage;
