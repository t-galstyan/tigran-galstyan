import React from 'react';
import Notes from '../components/Notes';
import Slider from '../components/Slider';
import NefSi from '../components/NefSi';

const HomePage = () => {
  return (
    <div>
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
            <h2 className="section-title">
              About Me
              <span className="underline" />
            </h2>
            <h3 className="name">Tigran Galstyan</h3>
            <p>1994-1995 - Moscow Academy of Alternative Medicine after Fedorenko, Alternative practitioner</p>
            <p>1989-1993 - Armenian State Institute of Physical Culture, Department of Chess, Coach-educator</p>
            <p>1979-1989 - Secondary School N. 148, Yerevan</p>
          </div>
          <img src={require('../assets/images/profile.png')} alt="Tigran Galstyan" className="profile-pic" />
        </div>
      </section>
      <Notes />
      <section className="special-pictures">
        <div className="container">
          <h5 className="title">Special Pictures</h5>
          <Slider />
        </div>
      </section>

      <NefSi />
    </div>
  );
};

export default HomePage;
