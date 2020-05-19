import React from 'react';
import linkedInLogo from './images/social/linkedin.svg';
import twitterLogo from './images/social/twitter.svg';
import gitHubLogo from './images/social/github.svg';
import devLogo from './images/social/dev.svg';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='Header'>
        <div className='Header-rectangle'> </div>
        <div className='Header-box'> </div>
        <div className='Header-name'> SPOHIE ALPERT </div>
        <div className='Header-title'> PROGRAMMER </div>
      </header>
      <main className='Main'>
        <div className='Main-links-box'>
          <h3>LINKS</h3>
          <div className='Underline'>
            <div className='Underline-box'></div>
            <div className='Underline-line'></div>
          </div>
          <ul className='Links'>
            <li>
              <a href='#' target='blank'>
                <img src={linkedInLogo} />
                LINKEDIN/username
              </a>
            </li>
            <li>
              <a href='#' target='blank'>
                <img src={twitterLogo} />
                TWITER/username
              </a>
            </li>
            <li>
              <a href='#' target='blank'>
                <img src={gitHubLogo} />
                GITHUB/username
              </a>
            </li>
            <li>
              <a href='#' target='blank'>
                <img src={devLogo} />
                BLOG/username
              </a>
            </li>
          </ul>
        </div>
        <div className='Main-about-box'>
          <h3>ABOUT ME</h3>
          <div className='Underline'>
            <div className='Underline-box'></div>
            <div className='Underline-line'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam
            vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et,
            lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia
            porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit
            lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam
            scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum
            vitae mattis diam.
          </p>
        </div>

        <div className='Main-triple-box'>
          <h3>EDUCATION</h3>
          <div className='Underline'>
            <div className='Underline-box'></div>
            <div className='Underline-line'></div>
          </div>
          <div className='Education-school'>
            <p>SCHOOL NAME</p>
            <p>2009 - 2013</p>
            <p>Degree</p>
          </div>
          <div className='Underline-line'></div>
          <div className='Education-school'>
            <p>SCHOOL NAME</p>
            <p>2009 - 2013</p>
            <p>Degree</p>
          </div>
        </div>
        <div className='Main-triple-box'>
          <h3>PERSONAL SKILLS</h3>
          <div className='Underline'>
            <div className='Underline-box'></div>
            <div className='Underline-line'></div>
          </div>
          <p className='Skill-teal'>TEAMWORK</p>
          <p className='Skill-yellow'>COMMUNICATION</p>
          <p className='Skill-red'>ORGANIZATION</p>
          <p className='Skill-yellow'>REACT.JS</p>
        </div>

        <div className='Main-triple-box'>
          <h3>TECHNICAL SKILLS</h3>
          <div className='Underline'>
            <div className='Underline-box'></div>
            <div className='Underline-line'></div>
          </div>
          <p className='Skill-teal'>HTML</p>
          <p className='Skill-teal'>CSS/SCSS</p>
          <p className='Skill-yellow'>JAVASCRIPT</p>
          <p className='Skill-yellow'>REACT.JS</p>
        </div>

        <div className='Main-full-box'>
          <h3>WORK EXPERINCE</h3>
          <div className='Underline'>
            <div className='Underline-box'></div>
            <div className='Underline-line'></div>
          </div>
          <div className='Full-box-content'>
            <div className='Main-triple-box'>
              <div className='Job-title'>
                <p>JOB POSITION</p>
                <p>Company</p>
                <p>2018 - present</p>
              </div>
              <div className='Job-description'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut justo libero. Vestibulum vitae mattis diam.
                  Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                  augue.
                </p>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Consectetur adipiscing elit</li>
                </ul>
              </div>
            </div>

            <div className='Vertical-line'></div>

            <div className='Main-triple-box'>
              <div className='Job-title'>
                <p>JOB POSITION</p>
                <p>Company</p>
                <p>2018 - present</p>
              </div>
              <div className='Job-description'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut justo libero. Vestibulum vitae mattis diam.
                  Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                  augue.
                </p>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Consectetur adipiscing elit</li>
                </ul>
              </div>
            </div>

            <div className='Vertical-line'></div>

            <div className='Main-triple-box'>
              <div className='Job-title'>
                <p>JOB POSITION</p>
                <p>Company</p>
                <p>2018 - present</p>
              </div>
              <div className='Job-description'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut justo libero. Vestibulum vitae mattis diam.
                  Vivamus eleifend diam vel tempor lacinia. Suspendisse non
                  augue.
                </p>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Consectetur adipiscing elit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className='Footer'>
        <div className='Underline-line'></div>

        <div className='Footer-triple-box'>
          <div className='Black-box'> ADRESS </div>
          <p>Imaginary St. 52</p>
          <p>Vilnius, Narnia</p>
        </div>

        <div className='Footer-triple-box'>
          <div className='Black-box'> CONTACT </div>
          <p>37060000333</p>
          <p>email@test.dev</p>
        </div>

        <div className='Footer-triple-box'>
          <div className='Black-box'> SOCIAL </div>
          <p>Linkedin/username</p>
          <p>Twitter/@user-handle</p>
        </div>
      </div>
    </div>
  );
}

export default App;
