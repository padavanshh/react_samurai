import React from 'react';
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => {
        return <Post mess={p.mess} likes={p.likes}/>
    })

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
            <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;