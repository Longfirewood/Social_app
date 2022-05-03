import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


import c from './UserItem.module.css';

const UserItem = (props) => {




    const followUser = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then((response) => {
                if (response.resultCode == 0) {
                    props.follow(userId)
                } else {
                    alert(response.messages)
                }
            })
            .catch(() => { alert('Error') })
    }


    const unFollowUser = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then((response) => {
                if (response.resultCode == 0) {
                    props.unfollow(userId)
                } else {
                    alert(response.messages)
                }
            })
            .catch(() => { alert('Error') })
    }

    const clickHandler = () => {
        console.log(props)
        if (props.user.followed === true) {
            unFollowUser(props.user.id)

        } else if (props.user.followed === false) {
            followUser(props.user.id)

        }
    }

    const goToProfileHandler = (userId) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data)
            })
    }

    return (
        <div className={c.parent}>
            <div className={c.item_1}>
                {props.user.photos.small == null ? <img className={c.image} src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg' /> :
                    <img className={c.image} src={props.user.photos.small} />}
                <div >
                    {props.user.followed ? <button className={c.button} onClick={clickHandler}>Unfollow</button>
                        : <button className={c.button} onClick={clickHandler}>Follow</button>}
                </div>
            </div>

            <div className={c.item_2}>
                <div>
                    <div>
                        Name:  {props.user.name}
                    </div>
                    <div >
                        Status: {props.user.status}
                    </div>
                </div>
                <div>
                    <NavLink to={`/userProfile/${props.user.id}`}>
                        <button onClick={() => goToProfileHandler(props.user.id)}> Go to the profile </button>
                    </NavLink>
                </div>
            </div>

        </div >

    )
}

export default UserItem;










//let buttonName = props.user.followed === true ? 'Unfollow' : 'Follow';
    //let userId = props.user.id

    // let onSubmit = () => {
    //     debugger;
    //     if (props.user.followed === true) {
    //         props.unfollow(userId)
    //     } else if (props.user.followed === false) {
    //         props.follow(userId)
    //     }
    // }