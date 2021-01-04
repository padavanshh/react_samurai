import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, usersAC} from "../../redux/usersReducers";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersID) => {
            dispatch(followAC(usersID));
        },
        unFollow: (usersID) => {
            dispatch(unfollowAC(usersID));
        },
        setUsers: (users) => {
            dispatch (usersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)