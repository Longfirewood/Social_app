import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';
import { Field, Form } from 'react-final-form'



class MyPosts extends React.Component {
    render() {

    
    let postElements = this.props.posts.map(post => <Post message={post.message} like_counter={post.like_counter} />)
    
    let inputField = React.createRef()
    let addPost = this.props.addPost
    let updateNewPost = this.props.updateNewPost

    // let onSubmit = (props) => {
    //     return (
    //         f(props.text)
    //     )
    // }

    let onSubmit = () => {
        console.log(inputField.current.value)
        let text = inputField.current.value;
        addPost(text)
    }

    let onPostChange = () => {
        let newtext = inputField.current.value;
        console.log(newtext)
        updateNewPost(newtext)
        
    }

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <div>
                    <input ref={inputField} onChange={onPostChange}/>
                    <button type='submit' onClick={onSubmit}> Submit </button>
                </div>
                
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
            }
}

export default MyPosts;