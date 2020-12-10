import React from 'react';
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => {
        return <Post mess={p.mess} likes={p.likes}/>
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;