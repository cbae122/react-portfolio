import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

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
      <h1 className='content'>Contact Me</h1>
      <hr />
      <form className='contactform'>

          <label className='contactname'>Your Name</label>
          <input
            value={name}
            name='name'
            onChange={handleInputChange}
            type='text'
            id='contactname'
            placeholder='Your Name'
          />

          <label className='contactemail'>Your Email</label>
          <input
            value={email}
            name='email'
            onChange={handleInputChange}
            type='text'
            id='contactemail'
            placeholder='Your Email'
          />

          <label className='contactmessage'>Message</label>
          <textarea
            value={message}
            name='message'
            onChange={handleInputChange}
            type='text'
            id='contactmessage'
            placeholder='Your Message'
          />

          <button type='button' onClick={handleFormSubmit}>
            Submit
          </button>
      </form>
      <div>
        {errorMessage && (
          <p className='errorText'>{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
