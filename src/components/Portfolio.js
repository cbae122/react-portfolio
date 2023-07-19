import React from 'react';
import pearMusicImage from '../assets/projectImages/Screenshot 2023-04-06 at 8.33.43 PM.png';
import reviewAppImage from '../assets/projectImages/Screenshot 2023-06-07 at 8.26.36 PM.png';

export default function Portfolio() {
  return (
    <div>
      <section></section>
        <div>
          <h1>My Portfolio</h1>
          <hr />
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
                Application to help you build the ulimate playlist. 
                Users will be able to search top songs by genre. 
                Users will be able to add searched songs to their playlist!
              </p>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-info'>
            <div className='project-img'>
              <a href='https://github.com/cbae122/project2-reviewapp'>
                {' '}
                <img
                  src={reviewAppImage}
                  className='portfoliodiv'
                  style={{ width: '100%' }}
                  alt='cbae122'
                />
              </a>
            </div>

            <div className='project-text'>
              <h4>Food Review</h4>
              <p>
                Application to allow users to search for top eats in your area.
                User will be able to search radius by zipcode for good eats.
                Users will be able to add reviews of what they ate and read other users reviews.
              </p>
            </div>
          </div>
        </div>



    </div>
  );
}
