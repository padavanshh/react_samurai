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
            ]
        }
    },
    _callSubscriber () {
        console.log('State changed')
    },


    addPost () {
        let newPost = {
            id: 5, mess: this._state.profilePage.newPostText, likes: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {    // изменение в текстареа
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;  // observer наблюдатель паттерн
    },
    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5, mess: this._state.profilePage.newPostText, likes: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;