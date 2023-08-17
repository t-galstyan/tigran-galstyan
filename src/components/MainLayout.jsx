import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="App">
      <div className="main-layout">
        <video className="video-bg" autoPlay muted loop controls={false}>
          <source src={require('../assets/video/bg.mp4')} type="video/mp4" />
        </video>
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
