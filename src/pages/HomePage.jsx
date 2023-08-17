import React from 'react';
import Notes from '../components/Notes';
import Slider from '../components/Slider';

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
            This book is Tigran Galstyan"s copyrighted work on the connection between different branches of science, the
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

          <p className="title">scientific work, science fiction Nef-Si</p>
          <p className="desc">
            The essence of Life is the diversity of Existence in Reality. And this choice is carried out by any
            Substantia in their own created "World" or Reality. But Substantia is the eternity, infiniteness in the
            Emptiness: revelation, revelation, revelation… Once in my past I appeared in the middle of this peculiar
            "revelation" and "Reality". I was standing in front of the "Light". In my world it was a phenomenon upon
            which no one ever deliberated. It was there, it was an existence independent of us and inside us. It was our
            friend but sometimes also our unwanted visitor which no one saw, heard and moreover spoke to. And, thus,
            with the help of a female guide, all of a sudden, I appeared before this "Light". And, imagine, it turned
            into a peculiar mirror, into a superdense and surprisingly viscous substance. I couldn"t resist the
            temptation and unconsciously tried to touch it, feel it, penetrate "it" and, finally, found myself in an
            emptiness.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
