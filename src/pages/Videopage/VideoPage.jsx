import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import MainContainer from './MainContainer';
import SidebarMobile from '../../components/SidebarMobile';
import HeaderMobile from './HeaderMobile';

const VideoPage = () => {
  return (
    <>
      <Header style={{ marginBottom: 0 }} />
      <HeaderMobile />
      <main>
        <MainContainer />
        <SidebarMobile />
      </main>
    </>
  );
};

export default VideoPage;
