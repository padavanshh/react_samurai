const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id:1, mess: 'Hi, how are you?', likes: 12},
                {id:2, mess: 'OK', likes: 22},
                {id:3, mess: 'Im Batman', likes: 100}
            ],
            newPostText: 'samuraiJS'
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Batman'},
                {id: 2, name: 'Superman'},
                {id: 3, name: 'Hulk'},
                {id: 4, name: 'Leo'},
            ],
            textData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Im ok'}
            ],
            newMessageText: 'new message'
        }
    },
    _callSubscriber () {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;  // observer наблюдатель паттерн
    },
    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5, mess: this._state.profilePage.newPostText, likes: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageText;
            this._state.messagesPage.newMessageText = '';
            this._state.messagesPage.textData.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body
    };
};

export default store;
window.store = store;