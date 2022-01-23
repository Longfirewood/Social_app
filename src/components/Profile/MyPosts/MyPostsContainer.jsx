import React from 'react';
import { updateNewPostActionCreator, addPostActionCreator } from '/Users/matvey/Documents/projects/project1/my-app/src/redux/profile-reducer.js';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// class MyPostsContainer extends React.Component {
//     render() {
//     let state = this.props.store.getState();

//     let onSubmit = () => {
//         this.props.store.dispatch(addPostActionCreator());
//     }

//     let onPostChange = (body) => {
//         this.props.store.dispatch(updateNewPostActionCreator(body) );
//     }

//     return <MyPosts addPost={onSubmit} updateNewPost={onPostChange} 
//                     posts={state.profilePage.posts}
//                     newMessageText={state.profilePage.newMessageText}/>
//             }
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newMessageText: state.profilePage.newMessageText,
        isPosted: state.profilePage.isPosted
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPost: (body) => dispatch(updateNewPostActionCreator(body))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;