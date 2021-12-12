import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';




const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post message={post.message} like_counter={post.like_counter} />)
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <form>
                <input placeholder='New post' required></input>
                <button type='submit'>Submit</button>
                </form>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;