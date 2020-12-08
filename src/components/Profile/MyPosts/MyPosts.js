import React from 'react';
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id:1, mess: 'Hi, how are you?', likes: 12},
        {id:2, mess: 'OK', likes: 22},
        {id:3, mess: 'Im Batman', likes: 100}
    ]

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
            <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={c.posts}>
            <Post mess={postData[0].mess} likes={postData[0].likes}/>
            <Post mess={postData[1].mess} likes={postData[1].likes}/>
            <Post mess={postData[2].mess} likes={postData[2].likes}/>
        </div>
    </div>
}

export default MyPosts;