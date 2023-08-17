import React from 'react';

const BooksPage = () => {
  return (
    <div className="books">
      <div className="container">
        <img className="main-book-image" src={require('../assets/images/hero.webp')} alt="" />
        <div className="text">
          <h1 className="title">
            THE MYSTERY OF THE UNIVERSE AND
            <br /> ITS REVELATION
            <br /> IN MAN
          </h1>
          <p>
            This book is Tigran Galstyan's copyrighted work on the connection between different branches of science, the
            psychophysical structure of man, the Creation, and the interconnectedness of the world and the Universe with
            man. The book includes fundamental scientific research, arguments and valid observations.
            <br /> The book consists of five main chapters, tables and a short essay. Purpose: This work, which combines
            the fundamentals of the disciplines of mathematics, physics, cosmology, biology and genetics, reveals a new
            cosmological model of the creation of the Universe. Who is man? What are human psychology, ego and
            intelligence? What are the stages of human socialization, in general?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
