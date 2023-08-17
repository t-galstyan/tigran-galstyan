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

  // const videoElement = videoRef.current;

  // if (videoElement) {
  //   videoElement.addEventListener('loadeddata', (e) => {
  //     //Video should now be loaded but we can add a second check

  //     if (videoElement.readyState >= 3) {
  //       console.log('ready');
  //       setShowLoader(false);
  //     }
  //   });

  //   videoElement.addEventListener('loadeddata', (e) => {
  //     //Video should now be loaded but we can add a second check

  //     if (videoElement.readyState >= 3) {
  //       console.log('ready');
  //       setShowLoader(false);
  //     }
  //   });
  // }
  const handleLoaded = (e) => {
    console.log('loaded');
    if (window.location.search === '?mode=dev') {
      if (videoRef.current?.readyState >= 3) {
        console.log('ready');
        setShowLoader(false);
      }
    }
  };

  const handleEnded = (e) => {
    console.log('ended');

    if (window.location.search === '?mode=dev') {
      videoRef.current?.play();
      setShowLoader1(true);
    }
  };

  return (
    <div className="App">
      {showLoader && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '300px',
            background: 'red',
            zIndex: 99999
          }}
        ></div>
      )}
      {showLoader1 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '200px',
            background: 'green',
            zIndex: 9999999
          }}
        ></div>
      )}
      <div className="main-layout">
        <video
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
