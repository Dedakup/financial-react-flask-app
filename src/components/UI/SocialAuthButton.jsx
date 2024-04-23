import React from 'react';
import '../../styles/SignForm.sass';

function SocialAuthButton({ text, onClick }) {
    return (
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
    );
}

export default SocialAuthButton;