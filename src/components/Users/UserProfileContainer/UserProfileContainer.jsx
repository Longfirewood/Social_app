import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/users-reducer";
import UserProfile from "../UserProfile/UserProfile";
import React from "react";

class Container extends React.Component {
    componentDidMount() {
        console.log(this.props.userId, 'ProfileContainer_props');
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <UserProfile userProfile={this.props.userProfile} />
        )
    }
}
// const Container = (props) => {
//     console.log(props.userId, 'props');

//     useEffect(() => {
//         getInfo(props.userId)
//     }, [props.userId])

//     const getInfo = async (id) => {
//         await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
//             .then(response => {
//                 props.setUserProfile(response.data)
//                 console.log('response', response.data);
//             })
//     }
//     return (
//         <UserProfile userProfile={props.userProfile} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        userProfile: state.usersPage.userProfile,
        userId: state.usersPage.userId

    }
}


const UserProfileContainer = connect(mapStateToProps, { setUserProfile })(Container);

export default UserProfileContainer;