import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';
import {updateNewPostActionCreator, addPostActionCreator} from '/Users/matvey/Documents/projects/project1/my-app/src/redux/state.js';



class MyPosts extends React.Component {
    render() {
    let postElements = this.props.posts.map(post => <Post message={post.message} like_counter={post.like_counter} />)
    let newMessageBody = this.props.posts.newMessageText;
    let inputField = React.createRef()


    let onSubmit = () => {
        let text = inputField.current.value;
        this.props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let newtext = inputField.current.value;
        this.props.dispatch( updateNewPostActionCreator(newtext) );
    }

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <div>
                    <input value={newMessageBody} ref={inputField} onChange={onPostChange}/>
                    <button type='submit' onClick={onSubmit}> Submit </button>
                </div>
                
            </div>
            <div>
                {postElements}===
            </div>
        </div>
    )
            }
}

export default MyPosts;