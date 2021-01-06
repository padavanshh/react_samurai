import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersTotalCountAC, unfollowAC, usersAC} from "../../redux/usersReducers";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)