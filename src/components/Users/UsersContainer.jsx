import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setUserProfile } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount
    }
}

// const setUserInfo = (userId) => {
// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//     .then(response => {
//         setUserProfile(response.data)
//     })
// }



const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setUserProfile })(Users);

export default UsersContainer;