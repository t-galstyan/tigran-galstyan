import React from 'react';
import Notes from '../components/Notes';
import Slider from '../components/Slider';
import NefSi from '../components/NefSi';
import PlanetIcon from '../components/icons/PlanetIcon';

const HomePage = () => {
  return (
    <div>
      <div className="container scroll-text-wrapper">
        <div className="scroll-text-container">
          <div className="scroll-text">For advertising or cooperation, write us</div>
        </div>
      </div>
      <section className="container hero">
        <img className="hero-img" src={require('../assets/images/hero.webp')} alt="" />
        <div className="hero-text">
          <h1 className="title">
            THE MYSTERY OF THE UNIVERSE
            <br />
            AND ITS REVELATION
            <br />
            IN MAN
          </h1>
          <p className="desc">
            This book is Tigran Galstyan's copyrighted work on the connection between different branches of science, the
            psychophysical structure of man, the Creation, and the interconnectedness of the world and the Universe with
            man. The book includes fundamental scientific research, arguments and valid observations.
            <br /> The book consists of five main chapters, tables and a short essay.
          </p>
        </div>
      </section>
      <section className="about-me">
        <div className="container">
          <div className="text-container">
            <div className="section-title-wrapper">
              <h2 className="section-title">About Me</h2>

              <PlanetIcon />
            </div>

            <h3 className="name">Tigran Galstyan</h3>
            <p>1994-1995 - Moscow Academy of Alternative Medicine after Fedorenko, Alternative practitioner</p>
            <p>1989-1993 - Armenian State Institute of Physical Culture, Department of Chess, Coach-educator</p>
            <p>1979-1989 - Secondary School N. 148, Yerevan</p>
          </div>
          <div className="profile-pic">
            <img src={require('../assets/images/profile2.png')} alt="Tigran Galstyan" />
          </div>
        </div>
      </section>
      <Notes />
      <section className="special-pictures">
        <div className="container">
          <div className="title-wrapper">
            <h5 className="title">Special Pictures</h5>
            <PlanetIcon fill="#000" />
          </div>
          <Slider />
        </div>
      </section>

      <NefSi />
    </div>
  );
};

export default HomePage;
