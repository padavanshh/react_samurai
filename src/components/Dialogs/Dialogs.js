import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Batman</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Superman</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Hulk</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Flash</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Ho-ho-ho
                </div>
                <div className={s.message}>
                    Yesssss
                </div>
            </div>
        </div>
    )
}

export default Dialogs;