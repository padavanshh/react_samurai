import React from 'react';
import c from './Navigate.module.css';

const Navigate = () => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <a href='/Profile'>Profile</a>
        </div>
        <div className={c.item}>
            <a href='/Dialogs'>Messages</a>
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
    </nav>
}

export default Navigate;