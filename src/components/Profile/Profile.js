import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img src="https://our-world346.webnode.com.ua/_files/system_preview_detail_200000042-dbe11dd3f0-public/marina-bay-sands-panorama-singapore.jpg"></img>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;