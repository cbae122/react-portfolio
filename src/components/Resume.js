import React from 'react';
import resumeHere from '../assets/files/Chris_Bae_Resume.pdf';

export default function Home() {
  return (
    <div>
      <div>
        <h1>Resume</h1>
        <hr />
        <a href={resumeHere} className='downloadbtn'>Download</a>
        <span>

        </span>
        <span></span>
      </div>
      <br>
      </br>
      <div>
        <h2>Skills</h2>
        <hr />
        <ul className='resumelist'>
          <li>HTML, CSS, Javascript</li>
          <li>Web APIs, Third-Party APIs, Server-Side APIs</li>
          <li>NodeJS, Object Oriented Programming, Express</li>
          <li>SQL, ORM, MVC</li>
          <li>NoSQL, PWA, React</li>
        </ul>
      </div>
    </div>
  );
}
