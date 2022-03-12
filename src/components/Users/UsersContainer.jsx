import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (body) => dispatch(followActionCreator(body)),
        unfollow: (body) => dispatch(unfollowActionCreator(body)),
        setUsers: (body) => dispatch(setUsersActionCreator(body))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;