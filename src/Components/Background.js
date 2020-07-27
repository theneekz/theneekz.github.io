import React from 'react';

const Background = () => {
  return (
    <section className="backgroundContainer">
      <h1>Background</h1>
      <div className="bio">
        <h2>
          After growing up in a suburb of Washington, D.C. I moved to the Rogers
          Park neighborhood of Chicago in 2016. There you can usually find me at
          the beach, napping with my dog George, or playing guitar. I have an
          absurdly spicy hot sauce collection, I love to work out and I love to
          cook.
        </h2>
        <img
          className="backgroundIMG"
          src={require('../images/george.png')}
          alt=""
        />
      </div>
    </section>
  );
};

export default Background;
