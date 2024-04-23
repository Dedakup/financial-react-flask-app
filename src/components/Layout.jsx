// В файле Layout.jsx

import React from 'react';
import Navbar from './UI/navbar.jsx';
import Header from './UI/header.jsx';
import '../styles/layout.sass';
import '../styles/bodyBg.sass'

// Принимаем проп showGreeting и передаем его в Header
const Layout = ({ children, showGreeting }) => {
    React.useEffect(() => {
        document.body.classList.add('bodyBackground');
        return () => {
            document.body.classList.remove('bodyBackground');
        };
    }, []);

    return (
        <>
            <Header showGreeting={showGreeting} />
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
