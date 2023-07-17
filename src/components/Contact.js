import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { input } = e;
    const inputType = input.name;
    const inputValue = input.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Name or Email is an invalid entry!');
      
      return;
    }
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <p className='content'>Contact Me</p>
        <hr />
        <form id='contactform'>
          <div>
            <label className='contactname'>Your Name</label>
            <input
              value={name}
              name='name'
              onChange={handleFormSubmit}
              type='text'
              id='contactname'
              placeholder='Your Name'
            />
          </div>
          <div>
            <label className='contactname'>Your Name</label>
            <input
              value={name}
              name='name'
              onChange={handleFormSubmit}
              type='text'
              id='contactname'
              placeholder='Your Name'
            />
          </div>
          <div>
            <label className='contactname'>Your Name</label>
            <input
              value={name}
              name='name'
              onChange={handleFormSubmit}
              type='text'
              id='contactname'
              placeholder='Your Name'
            />
          </div>

            <div>
              <p></p>
            </div>
          <button></button>
        </form>
    </div>
  )

}
