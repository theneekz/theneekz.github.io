import React from 'react';

const Resume = () => {
  return (
    <section className="resumeContainer">
      <h1>Resume</h1>
      <a href="Resume.pdf" download="NikoSwardResume.PDF">
        Download
      </a>
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
