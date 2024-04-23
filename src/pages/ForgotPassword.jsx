import React from 'react';
import InputField from '../components/UI/InputField';
import Button from '../components/UI/Button';
import LinkComponent from '../components/UI/LinkComponent';
import Logo from '../components/UI/Logo';
import '../styles/SignForm.sass';

const PasswordResetPage = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <form>
          <Logo />
          <div className="form-title-box">
            <h1 className="form-title mb-15">Forgot Password?</h1>
            <p className="form-title-text">Enter your email address to get the password reset link.</p>
          </div>
          <div className="input-wrapper">
            <div className="input-wrapper-header">
              <label htmlFor="email" className="form-label">Email Address</label>
            </div>
            <InputField type="email" placeholder="hello@example.com" name="email" />
          </div>
          <Button className='forgotButton' text="Password Reset" onClick={() => { /* handle password reset */ }} />
          <LinkComponent className='linkBackLogin' text="Back to login" to="/login" />
        </form>
      </div >
    </div >
  );
};

export default PasswordResetPage;
