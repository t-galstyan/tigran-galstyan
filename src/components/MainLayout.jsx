import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  const videoRef = useRef();

  const [showLoader, setShowLoader] = useState(false);
  const [showLoader1, setShowLoader1] = useState(false);

  // console.log(searchParams.set('mode', 'dev'));

  useEffect(() => {
    if (window.location.search === '?mode=dev') {
      setShowLoader(true);
    }
  }, []);

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

        <div class="galaxy-wrapper">
          <div class="galaxy-image"></div>
          <div class="galaxy-gradient"></div>
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
