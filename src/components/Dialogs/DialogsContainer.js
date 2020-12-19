import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {

        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs sendMessageCreator={onSendMessageClick}
                 updateNewMessageBodyCreator={onNewMessageChange}
                 messagesPage={state} />
    )
}

export default DialogsContainer;