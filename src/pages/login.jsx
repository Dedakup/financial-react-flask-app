import React from 'react';
import InputField from '../components/UI/InputField';
import Button from '../components/UI/Button';
import LinkComponent from '../components/UI/LinkComponent';
import Logo from '../components/UI/Logo';
import Divider from '../components/UI/divider';
import SocialAuthButton from '../components/UI/SocialAuthButton';
import '../styles/SignForm.sass';

const LoginPage = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <Logo />
        <form>
          <div className="input-wrapper">
            <div className="input-wrapper-header">
              <label htmlFor="email" className="form-label">Email Address</label>
            </div>
            <InputField type="email" placeholder="Email Address" name="email" id="email" />
          </div>
          <div className="input-wrapper">
            <div className="input-wrapper-header">
              <label htmlFor="password" className="form-label">Password</label>
              <LinkComponent text="Forgot Password?" to="/forgot-password" className="forgot-password-link" />
            </div>
            <InputField type="password" placeholder="Password" name="password" id="password" />
          </div>
          <div className="login-btn">
            <div className="checkbox-container">
              <input type="checkbox" id="keep-signed-in" />
              <label htmlFor="keep-signed-in"> Keep me signed in</label>
            </div>
            <Button text="Login" onClick={() => { /* handle login */ }} />
          </div>
          <Divider text={'or sign in with'} />
          <SocialAuthButton text="Continue with Google" onClick={() => { /* handle Social Auth */ }} />
        </form>
        <LinkComponent text="Create an account" to="/signup" className="create-account-link" />
      </div>
    </div>
  );
};

export default LoginPage;
