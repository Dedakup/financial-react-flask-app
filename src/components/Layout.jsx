// В файле Layout.jsx

import React from 'react';
import Navbar from './UI/navbar.jsx';
import Header from './UI/header.jsx';
import '../styles/layout.sass';

// Принимаем проп showGreeting и передаем его в Header
const Layout = ({ children, showGreeting }) => {
    return (
        <>
            <Header showGreeting={showGreeting} />
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
