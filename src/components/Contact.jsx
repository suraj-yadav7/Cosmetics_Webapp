import React, { useState } from 'react';
import "../style/contact.scss"

const ContactUs = () => {
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]:e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact'>
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required  />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required  />
        </div>
        <div className="form-group">
          <label htmlFor="message" >Message</label>
          <textarea id="message"  name="message" value={userData.message} onChange={handleChange} required placeholder='Your Message' />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
