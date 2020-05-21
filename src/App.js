import React from 'react';

// Components
import Title from './components/Title';
import Separator from './components/Separator';
import Badge from './components/Badge';
import SocialLink from './components/SocialLink';
import ContetntBlock from './components/ContentBlock';

//Images
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
        <ContetntBlock title='Links' size='Single'>
          <SocialLink src={linkedInLogo} link='http://www.linkedin.com'>
            LINKEDIN/username
          </SocialLink>
          <SocialLink src={twitterLogo} link='#'>
            TWITTER/username
          </SocialLink>
          <SocialLink src={gitHubLogo} link='#'>
            GITHUB/username
          </SocialLink>
          <SocialLink src={devLogo} link='#'>
            BLOG/username
          </SocialLink>
        </ContetntBlock>

        <ContetntBlock title='About me' size='Double'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue egestas, dapibus justo et,
          lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia
          porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit
          lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam
          scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum
          vitae mattis diam.
        </ContetntBlock>

        <ContetntBlock title='Education' size='Triple'>
          <div className='Education-school'>
            <p>SCHOOL NAME</p>
            <p>2009 - 2013</p>
            <p>Degree</p>
          </div>
          <div className='Line'></div>
          <div className='Education-school'>
            <p>SCHOOL NAME</p>
            <p>2009 - 2013</p>
            <p>Degree</p>
          </div>
        </ContetntBlock>

        <ContetntBlock title='Personal Skills' size='Triple'>
          <Badge color='Teal'>Teamwork</Badge>
          <Badge color='Yellow'>Communication</Badge>
          <Badge color='Red'>Organization</Badge>
          <Badge color='Yellow'>React.js</Badge>
        </ContetntBlock>

        <ContetntBlock title='Technical Skills' size='Triple'>
          <Badge color='Teal'>HTML</Badge>
          <Badge color='Teal'>CSS/SCSS</Badge>
          <Badge color='Yellow'>Javascript</Badge>
          <Badge color='Yellow'>react.js</Badge>
        </ContetntBlock>

        <div className='Main-full-box'>
          <Title level='3'>Work experience</Title>
          <Separator />

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
        <div className='Line'></div>

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
