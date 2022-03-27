import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
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


    return (
        <div className={c.parent}>
            <div className={c.item_1}>
                <img className={c.image} src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg' />
                <div >
                    {props.user.followed ? <button className={c.button} onClick={clickHandler}>Unfollow</button>
                        : <button className={c.button} onClick={clickHandler}>Follow</button>}
                </div>
            </div>

            <div className={c.item_2}>
                <div>
                    Name:  {props.user.name}
                </div>
                <div >
                    Status: {props.user.status}
                </div>

                {/* <div>
                    <div>
                        {'props.user.address.country'}
                    </div>
                    <div>
                        {'props.user.address.city'}
                    </div>
                </div> */}

            </div>
        </div>
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