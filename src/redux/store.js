import profileReducer from "./profileReducer";
import messageReducer from "./messagesReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    }
};





export default store;
window.store = store;