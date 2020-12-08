import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
}

const Message = (props) => {
    return <div className={s.message}>
        {props.text}
            </div>
}

const Dialogs = () => {

    let dialogsData =[
        {id: 1, name: 'Batman'},
        {id: 2, name: 'Superman'},
        {id: 3, name: 'Hulk'},
        {id: 4, name: 'Leo'},
    ]

    let textData =[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you&'},
        {id: 4, message: 'Im ok'},
        {id: 5, message: 'Yes'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message text={textData[0].message}/>
                <Message text={textData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;