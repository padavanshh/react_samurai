import React from 'react';
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={c.posts}>
            <Post mess='Hello friends' likes='15'/>
            <Post mess='How are you?' likes='20'/>
            <Post mess='Im Batman' likes='100'/>
        </div>
    </div>
}

export default MyPosts;