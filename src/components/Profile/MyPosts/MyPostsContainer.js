import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {  // добавление записи
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {   // фиксирует изменение текстериа
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    };

    return <MyPosts updateNewPostTextActionCreator = {onPostChange}
                    addPostActionCreator = {addPost}
                    posts = {state.profilePage.postData}
                    newPostText={state.profilePage.newPostText}/>
};

export default MyPostsContainer;