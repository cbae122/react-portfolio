import React from 'react';

export default function Footer() {
    return (
        <footer className='footerpos'>
            <div>
                <p>
                    <strong>My Portfolio - Powered by React</strong> 
                    <br></br>
                    <a href='https://www.linkedin.com/in/baechristopher'
                    target='_blank' rel='noreferrer'
                    >
                        LinkedIn
                    </a>{' '}
                    |{' '}                   
                    <a href='https://github.com/cbae122'
                    target='_blank' rel='noreferrer'
                    >
                        GitHub
                    </a>{' '}
                </p>
            </div>
        </footer>
    )
}