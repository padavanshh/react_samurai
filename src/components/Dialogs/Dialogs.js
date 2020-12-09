import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map((el) => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    let textElements = props.state.textData.map((el) => {
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