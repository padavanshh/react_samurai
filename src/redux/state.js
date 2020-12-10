import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5, mess: state.profilePage.newPostText, likes: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {    // изменение в текстареа
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;