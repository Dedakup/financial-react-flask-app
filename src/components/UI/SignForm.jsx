import React from 'react';
import '../../styles/SignForm.sass';
import Logo from './Logo.jsx';
import InputField from './InputField.jsx'; // Или ваш текущий компонент полей ввода
import SocialAuthButton from './SocialAuthButton.jsx';
import LinkComponent from './LinkComponent.jsx'; // Если это компонент для текстовых ссылок
import Checkbox from './checkbox.jsx'; // Если чекбокс используется на форме входа
import Divider from './divider.jsx';

const propsConfig = {
    login: {
        inputFields: [
            {
                label: 'Email Address',
                type: 'email',
                placeholder: 'john@doe.com',
                name: 'email'
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: '********',
                name: 'password'
            }
        ],
        checkboxLabel: 'Keep me signed in',
        linkText: 'Forgot Password?',
        linkPath: '/forgot-password',
        buttonText: 'Login',
        socialAuthText: 'Continue with Google',
        bottomLinkText: 'Create an account',
        bottomLinkPath: '/signup'
    },
    signup: {
        inputFields: [
            {
                label: 'Name',
                type: 'text',
                placeholder: 'Tanvir Rahman',
                name: 'name'
            },
            {
                label: 'Email Address',
                type: 'email',
                placeholder: 'hello@example.com',
                name: 'email'
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: '********',
                name: 'password'
            }
        ],
        linkText: 'By continuing, you agree to our terms of service.',
        linkPath: '/terms-of-service',
        buttonText: 'Sign up',
        socialAuthText: 'Sign up with Google',
        bottomLinkText: 'Already have an account? Sign in here',
        bottomLinkPath: '/login'
    },
    passwordReset: {
        inputFields: [
            {
                label: 'Email Address',
                type: 'email',
                placeholder: 'hello@example.com',
                name: 'email'
            }
        ],
        buttonText: 'Password Reset',
        bottomLinkText: 'Back to login',
        bottomLinkPath: '/login'
    },
    // другие страницы и их конфигурации
};

const SignForm = ({ pageType }) => {
    const pageProps = propsConfig[pageType];

    return (
        <div className="page-container">
            <div className="form-container">
                <Logo />
                <h1>{pageType === 'signup' ? 'Sign Up' : 'Login'}</h1> {/* Название формы */}
                {pageProps.inputFields.map((field, index) => (
                    <InputField key={index} {...field} />
                ))}
                {pageType === 'login' && (
                    <Checkbox label={pageProps.checkboxLabel} /* другие свойства чекбокса */ />
                )}
                {pageType === 'signup' && (
                    <p className="terms-text">By continuing, you agree to our terms of service.</p> // Текст соглашения
                )}
                <button className="main-button">{pageProps.buttonText}</button>
                {pageType !== 'passwordReset' && (
                    <>
                        <Divider text={"or sign in with"} />
                        <SocialAuthButton text={pageProps.socialAuthText} onClick={() => { /* handle Social Auth */ }} />
                    </>
                )}
                {pageType === 'login' && (
                    <>
                        <LinkComponent text={pageProps.bottomLinkText} to={pageProps.bottomLinkPath} />
                        <LinkComponent text={pageProps.linkText} to={pageProps.linkPath} />
                    </>
                )}
                {pageType === 'passwordReset' && (
                    <>
                        <h1>Password Reset</h1>
                        <p>Please enter your email address to receive a link to reset your password.</p>
                    </>
                )}
            </div>
        </div>
    );
}


export default SignForm;
