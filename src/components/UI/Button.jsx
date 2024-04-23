import React from 'react';
import '../../styles/SignForm.sass';

const SignButton = ({ text, onClick, className }) => {
    return (
        <button className={`button-main ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};


export default SignButton;
