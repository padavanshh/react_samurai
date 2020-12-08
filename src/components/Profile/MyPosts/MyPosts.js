import React from 'react';
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id:1, mess: 'Hi, how are you?', likes: 12},
        {id:2, mess: 'OK', likes: 22},
        {id:3, mess: 'Im Batman', likes: 100}
    ]

    let postsElements = postData.map((p) => {
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