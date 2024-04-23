import React from 'react';
import InputField from '../components/UI/InputField';
import Button from '../components/UI/Button';
import LinkComponent from '../components/UI/LinkComponent';
import Logo from '../components/UI/Logo';
import Divider from '../components/UI/divider';
import SocialAuthButton from '../components/UI/SocialAuthButton';
import '../styles/SignForm.sass';

const SignupPage = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <form>
          <Logo />
          <h1 className="form-title">Create an account</h1>
          <div className="input-wrapper">
            <div className="input-wrapper-header">
              <label htmlFor="name" className="form-label">Name</label>
            </div>
            <InputField type="text" placeholder="Name" name="name" />
          </div>
          <div className="input-wrapper">
            <div className="input-wrapper-header">
              <label htmlFor="email" className="form-label">Email Address</label>
            </div>
            <InputField type="email" placeholder="Email Address" name="email" />
          </div>
          <div className="input-wrapper">
            <div className="input-wrapper-header">
              <label htmlFor="password" className="form-label">Password</label>
            </div>
            <InputField type="password" placeholder="Password" name="password" />
          </div>
          <p className="terms-text">By continuing, you agree to our <LinkComponent text="terms of service" to={''} />.</p>
          <Button text="Sign up" onClick={() => { /* handle signup */ }} />
          <Divider text={'or sign up with'} />
          <SocialAuthButton text="Continue with Google" onClick={() => { /* handle Social Auth */ }} />
          <LinkComponent text="Already have an account? Sign in here" to="/login" />
        </form>
      </div >
    </div >
  );
};

export default SignupPage;
