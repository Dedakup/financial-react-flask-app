import React from 'react';
import '../../styles/SignForm.sass';

const LinkComponent = ({ text, to }) => {
    return (
        <a className="link-component" href={to}>
            {text}
        </a>
    );
};

export default LinkComponent;
