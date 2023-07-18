import React from 'react';
import pearMusicImage from '../assets/projectImages/Screenshot 2023-04-06 at 8.33.43 PM.png';

export default function Portfolio() {
  return (
    <div>
      <section></section>
        <div>
          <h2>My Portfolio</h2>
        </div>

        <div className='project'>
          <div className='project-info'>
            <div className='project-img'>
              <a href='https://github.com/cbae122/pear-music-project1'>
                {' '}
                <img
                  src={pearMusicImage}
                  className='portfoliodiv'
                  style={{ width: '100%' }}
                  alt='cbae122'
                />
              </a>
            </div>

            <div className='project-text'>
              <h4>Pear Music</h4>
              <p>
                Music app
              </p>
            </div>
          </div>
        </div>





    </div>
  );
}
