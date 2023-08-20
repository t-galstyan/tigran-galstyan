import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  const videoRef = useRef();

  return (
    <div className="App">
      <div className="main-layout">
        {/* <video
          ref={videoRef}
          className="video-bg"
          playsInline
          autoPlay
          loop
          muted
          onLoadedData={handleLoaded}
          onEnded={handleEnded}
        >
          <source src={require('../assets/video/bg.mp4')} type="video/mp4" />
        </video> */}

        <div className="galaxy-wrapper">
          <div className="galaxy-image"></div>
          <div className="galaxy-gradient"></div>
        </div>

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
