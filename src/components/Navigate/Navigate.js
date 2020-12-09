import React from 'react';
import c from './Navigate.module.css';
import {NavLink} from "react-router-dom";

const Navigate = () => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to='/profile' activeClassName={c.active}>Profile</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to='/dialogs' activeClassName={c.active}>Messages</NavLink>
        </div>
        <div className={c.item}>
            <a>News</a>
        </div>
        <div className={c.item}>
            <a>Music</a>
        </div>
        <div className={c.item}>
            <a>Settings</a>
        </div>
        <div>
            <a>Friends</a>
        </div>
    </nav>
}

export default Navigate;