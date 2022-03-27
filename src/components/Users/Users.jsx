import React, { useEffect, useState } from "react";
import UserItem from "./UserItem/UserItem";
import c from './Users.module.css';
import * as axios from 'axios'



const Users = (props) => {

    let [totalCount, setTotalCount] = useState(props.totalCount);
    let [currentPage, setCurrentPage] = useState(props.currentPage);


    const getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${props.count}`)
            .then(response => {
                props.setUsers(response.data.items)
                setTotalCount(response.data.totalCount)
            })
    }



    useEffect(() => { getUsers() }, [currentPage]);
    let pageNumbers = Math.ceil(totalCount / 15);
    let usersElements = props.users.map(user => <UserItem user={user} follow={props.follow} unfollow={props.unfollow} />)

    let pageList = [];
    for (var i = 1; i <= pageNumbers; i++) {
        pageList.push(i);
    }

    let pagination = pageList.map(p => {
        if (p == currentPage) {
            return <span className={c.chosen} onClick={() => { setCurrentPage(p) }}>{p}</span>
        } else {
            return <span className={c.default} onClick={() => { setCurrentPage(p) }}>{p}</span>
        }

    });
    return (
        <div>
            <h1>
                Users
            </h1>

            <div>
                {pagination}
            </div>

            <div>
                {usersElements}
            </div>
        </div>
    )
}


export default Users;




// class Users extends React.Component {
//     state = { users: this.props.users };
//     componentDidMount() {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { this.props.setUsers(response.data.items) })
//         this.usersElements = this.props.users.map(user => <UserItem user={user} follow={this.props.follow} unfollow={this.props.unfollow} />)
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.users !== this.props.users) {
//             this.setState({ users: this.props.users })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Users
//                 </h1>
//                 <div>
//                     {this.usersElements}
//                 </div>
//             </div>
//         )
//     }
// }