import React from 'react';
import Nav from './NavTabs';

export default function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <section>
        <header className='flex-row px-1'>
          <div>
            <h1>Chris Bae's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section>
        <div>
          {/* <h2>Welcome</h2>
          <p>
            Chris Bae is currently a supply chain professional with a special focus in project management. His background in demand and supply planning, inventory management and execution informs his mindful but competitive approach.
            Chris is finally ready to persue his passion of computers and coding. He has experience building computers. Picking the parts, assembling, and installing software. He is ready to learn the other side of the computer world which involves coding and software engineering.
          </p> */}
        </div>
      </section>
    </div>
  );
}

