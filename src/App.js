import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  const [currentPage, handlePageChange] = useState('about');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
      <Helmet>
        <title>Chris Bae's Portfolio | {currentPage} </title>
      </Helmet>
      ;
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </>
  );

}

export default App;