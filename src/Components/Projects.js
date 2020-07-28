import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projectContainer">
        <h1>Siq Beets</h1>
        <div className="projRow">
          <a href="https://siqbeets.com">
            <img
              className="projThumb"
              src={require('../images/SiqBeets_small.png')}
              alt=""
            />
          </a>

          <div className="projDesc">
            <h3>
              Siq Beets is an interactive single page web application for
              sampling, looping, and saving audio. The Playground allows users
              to sample audio along with a drum machine while our Beet Maker
              allows looping, saving and loading your songs.
              <p>
                Developed with Node, React, Redux, Tone.js, Express, Firebase
                and Travis CI.
              </p>
              <p>
                Contributors:{' '}
                <a href="https://www.linkedin.com/in/5pr46u3/">
                  Daniel Aaron Sprague
                </a>
                ,{' '}
                <a href="https://www.linkedin.com/in/thaddeus-metz/">
                  Thaddeus Metz
                </a>
              </p>
              <p>
                Logo:{' '}
                <a href="https://www.facebook.com/spit.city.media/">
                  spit.city
                </a>
              </p>
            </h3>
            <div>
              Deployment: <a href="https://siqbeets.com">siqbeets.com</a>
              <p>
                Video presentation:{' '}
                <a href="https://youtu.be/sviOr9N4ZQY">youtu.be/sviOr9N4ZQY</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projectContainer">
        <h1>Friendly Paws Grooming Shop</h1>
        <div className="projRow">
          <img
            className="projThumb"
            src={require('../images/FPthumb_small.png')}
            alt=""
          />

          <div className="projDesc">
            <h3>
              This solo project is a dog grooming web app using Node.js,
              Express.js, React and PostgreSQL with Firebase authentication.
              Users can sign up and login using react-firebase hooks and proceed
              to book appointments through Axios requests to a PostrgreSQL
              database. I used moment.js to display Sequelize Data Types in a
              user friendly way, create-react-app to bootstrap the front end,
              and integrated react-calendar for a more stereotypical scheduling
              view.
              <p>
                I'm currently working on integrating the Google Calendar API so
                that booking will create an event on a staff calendar and the
                admin can view all of her appointments in one place.
              </p>
            </h3>
            <div>
              Github:{' '}
              <a href="https://github.com/theneekz/TheFriendlyPawsGroomingShop">
                github.com/theneekz/TheFriendlyPawsGroomingShop
              </a>
              <p>
                Video demonstration:{' '}
                <a href="https://www.youtube.com/watch?v=9BZobz4AkxM">
                  youtu.be/9BZobz4AkxM
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projectContainer">
        <h1>Utonium: E-commerce site</h1>
        <div className="projRow">
          <img
            className="projThumb"
            src={require('../images/GSthumb_small.png')}
            alt=""
          />

          <div className="projDesc">
            <h3>
              This e-commerce app allows users to register, login, browse, and
              purchase products. Guests can view/sort products by category, add
              various quantities of an item to their cart, and proceed to
              checkout. Members have a profile to change their personal info,
              autofill forms with saved addresses and saved billing info, and
              view their order history. Admin have access to view all members,
              view all orders, view and edit all products, and add products.
              <p>
                Developed with Node, Express, React, Postgres, Axios,
                Express-sessions, Passport, Redux, and Sequelize.
              </p>
              <p>
                Contributors:{' '}
                <a href="https://www.linkedin.com/in/khalilah-manson/">
                  Khalilah Manson
                </a>
                , <a href="https://www.linkedin.com/in/sarabrea/">Sara Brea</a>
              </p>
            </h3>
            <div>
              Github:{' '}
              <a href="https://github.com/theneekz/GraceShopper">
                github.com/theneekz/GraceShopper
              </a>
              <p>
                Video demonstration:{' '}
                <a href="https://youtu.be/mkTwPzzaDo8">youtu.be/mkTwPzzaDo8</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projectContainer">
        <h1>Paper Trading Web App</h1>
        <div className="projRow">
          <img
            className="projThumb"
            src={require('../images/Finance_small.png')}
            alt=""
          />

          <div className="projDesc">
            <h3>
              In this solo project, I created a paper trading app using Python,
              Flask, Sqlite 3, Jinja, and HTML5/CSS. This is a web app via which
              you can register an account and proceed to manage portfolios of
              stocks. Not only will this tool allow you to check real stocks’
              actual prices and portfolios’ values, it will also let you "buy"
              and “sell” stocks by querying IEX for stocks’ prices. This project
              was an assignment for CS50, so the code is available upon request
              by those who are not currently students.
            </h3>
            <div>
              Video demonstration:{' '}
              <a href="https://www.youtube.com/watch?v=d98w_qLlvh4">
                youtu.be/98w_qLlvh4
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectContainer">
        <h1>Dark Mode Chrome Extension</h1>
        <div className="projRow">
          <img
            className="projThumb"
            src={require('../images/DMCE_small.png')}
            alt=""
          />

          <div className="projDesc">
            <h3>
              This solo project is an extension for Google Chrome using vanilla
              JavaScript and HTML/CSS that toggles a grey background for any
              website. This not only reduces eye strain when working in dark
              environments but reduces energy consumption by machines using LCD
              slightly and OLED dramatically.
            </h3>
            <div>
              Github:{' '}
              <a href="https://github.com/theneekz/darkMode">
                github.com/theneekz/darkMode
              </a>
              <p>
                Video demonstration:{' '}
                <a href="https://youtu.be/jg_PyFBWaCo">youtu.be/jg_PyFBWaCo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projectContainer">
        <h1>Spellchecker in C</h1>
        <div className="projRow">
          <img
            className="projThumb"
            src={require('../images/speller_small.png')}
            alt=""
          />

          <div className="projDesc">
            <h3>
              In this solo project, I implemented a spellchecking program. Given
              a dictionary text file and a text file to spell check, this C
              program calculates how many misspelled words are in the text file
              using a hash table. It also outputs the total time it took to
              load, check, and unload the file. This project was an assignment
              for CS50, so the code is available upon request by those who are
              not currently students.
            </h3>
            <div>
              Video demonstration:{' '}
              <a href="https://youtu.be/H-QhkgyYsT0">youtu.be/H-QhkgyYsT0</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
