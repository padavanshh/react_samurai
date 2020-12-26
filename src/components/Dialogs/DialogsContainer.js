import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         { (store) => {
//             let state = store.getState().messagesPage;
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }
//             return <Dialogs sendMessageCreator={onSendMessageClick}
//                             updateNewMessageBodyCreator={onNewMessageChange}
//                             messagesPage={state} />
//         }}
//
//            </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;