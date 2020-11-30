import React from 'react';
import c from './Header.module.css';

const Header = () => {
    return <header className={c.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/440px-Dell_logo_2016.svg.png" alt="logo"/>
    </header>
}

export default Header;