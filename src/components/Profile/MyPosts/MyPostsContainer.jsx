import React from 'react';
import Post from './Post/Post';
import {updateNewPostActionCreator, addPostActionCreator} from '/Users/matvey/Documents/projects/project1/my-app/src/redux/profile-reducer.js';
import MyPosts from './MyPosts';


class MyPostsContainer extends React.Component {
    render() {
    let state = this.props.store.getState();

    let onSubmit = () => {
        this.props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (body) => {
        this.props.store.dispatch(updateNewPostActionCreator(body) );
    }

    return <MyPosts addPost={onSubmit} updateNewPost={onPostChange} 
                    posts={state.profilePage.posts}
                    newMessageText={state.profilePage.newMessageText}/>
            }
}


export default MyPostsContainer;