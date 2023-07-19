import React from 'react';
import aboutImage from '../assets/projectImages/DSC00592.jpg';

export default function About() {
  return (
    <div className='aboutme'>
      <h1>Full Stack Developer</h1>
      <hr />
      <div className='aboutimg'>
        <img src={aboutImage} alt='profile'></img>
        <p>
          Chris Bae is currently a supply chain professional with a special focus in project management.
          His background in demand and supply planning, inventory management and execution informs his mindful but competitive approach.
        </p>

        <p>
          Chris is finally ready to persue his passion of computers and coding.
          He has experience building computers.
          Picking the parts, assembling, and installing software.
          He is ready to learn the other side of the computer world which involves coding and software engineering.
        </p>
      </div>
    </div>
  );
}
