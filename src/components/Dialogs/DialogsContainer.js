import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().messagesPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body) => {

                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs sendMessageCreator={onSendMessageClick}
                            updateNewMessageBodyCreator={onNewMessageChange}
                            messagesPage={state} />
        }}

           </StoreContext.Consumer>
}

export default DialogsContainer;