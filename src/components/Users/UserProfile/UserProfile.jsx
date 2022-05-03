import React from "react";

const UserProfile = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                {props.userProfile.fullName}
            </div>
            <div>

                {/* {props.userProfile.photos.large == null ? <img src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg' /> :
                    <img src={props.userProfile.photos.large} />} */}
            </div>
        </div>
    )
}

export default UserProfile