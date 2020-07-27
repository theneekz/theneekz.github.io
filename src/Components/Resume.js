import React from 'react';

const Resume = () => {
  return (
    <section className="resumeContainer">
      <h1>Resume</h1>
      <div>
        <img
          className="resumeIMG"
          src={require('../images/Resume.jpg')}
          alt=""
        />
      </div>
    </section>
  );
};

export default Resume;
