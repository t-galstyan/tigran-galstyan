import React from 'react';

const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <div className="container">
        <div>
          <h1>About me</h1>
        </div>
        <div className="image">
          <img src={require('../assets/images/cv.png')} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutMePage;
