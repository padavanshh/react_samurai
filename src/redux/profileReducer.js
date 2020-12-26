const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        postData: [
            {id:1, mess: 'Hi, how are you?', likes: 12},
            {id:2, mess: 'OK', likes: 22},
            {id:3, mess: 'Im Batman', likes: 100}
        ],
        newPostText: 'samuraiJS'
    }


const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, mess: state.newPostText, likes: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

export default profileReducer;