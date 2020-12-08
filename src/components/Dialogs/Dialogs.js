import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogsData =[
        {id: 1, name: 'Batman'},
        {id: 2, name: 'Superman'},
        {id: 3, name: 'Hulk'},
        {id: 4, name: 'Leo'},
    ]

    let dialogsElements = dialogsData.map((el) => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    let textData =[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Im ok'}
    ]

    let textElements = textData.map((el) => {
        return <Message text={el.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {textElements}
            </div>
        </div>
    )
}

export default Dialogs;