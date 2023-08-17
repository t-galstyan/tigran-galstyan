import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;
    console.log('first');
    if (videoElement) {
      videoElement.addEventListener('loadeddata', (e) => {
        //Video should now be loaded but we can add a second check

        if (videoElement.readyState >= 3) {
          console.log('ready');
        }
      });
    }
  }, [videoRef]);

  return (
    <div className="App">
      <div className="main-layout">
        <video ref={videoRef} className="video-bg" playsInline={true} autoPlay={true} loop={true} muted={true}>
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
