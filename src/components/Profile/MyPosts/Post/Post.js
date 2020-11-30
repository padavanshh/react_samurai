import React from 'react';
import c from "./Post.module.css";

const Post = (props) => {
    return <div className={c.item}>
        <img src='https://sun9-16.userapi.com/c631323/u25719966/video/l_ecd89dc9.jpg' alt='ava'/>
        {props.mess}
        <div>
        <span className={c.likes}>{props.likes} likes</span>
        </div>
    </div>
}

export default Post;