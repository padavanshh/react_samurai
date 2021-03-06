import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map((el) => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    let textElements = state.textData.map((el) => {
        return <Message text={el.message}/>
    })

    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessageCreator()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{textElements}</div>
                <div>
                    <div>
                        <textarea value= {newMessageText}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;