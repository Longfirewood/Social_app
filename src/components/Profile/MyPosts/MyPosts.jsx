import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';
import ToastComponent from '../../Toast/Toast';



class MyPosts extends React.Component {
    render() {
        let postElements = this.props.posts.map(post => <Post message={post.message} like_counter={post.like_counter} />)
        let newMessageBody = this.props.newMessageText;
        let inputField = React.createRef()


        let onSubmit = () => {
            this.props.addPost();

        }

        let onPostChange = () => {
            let newtext = inputField.current.value;
            this.props.updateNewPost(newtext);
        }
        let isPosted = this.props.isPosted;
        console.log(isPosted);

        return (
            <div>
                <h2 className={c.header}>My posts</h2>
                <div>
                    <div className={c.new_post}>
                        <input value={newMessageBody} ref={inputField} onChange={onPostChange} />
                        <button className={c.button} type='submit' onClick={onSubmit}> Submit </button>
                    </div>
                    <div>{isPosted ? <ToastComponent /> : null}</div>
                </div>
                <div>
                    {postElements}
                </div>
            </div>
        )
    }
}

export default MyPosts;