import React, { useState } from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// class MyPosts extends React.Component {
//     render() {
//         let postElements = this.props.posts.map(post => <Post message={post.message} like_counter={post.like_counter} />)
//         let newMessageBody = this.props.newMessageText;
//         let inputField = React.createRef()
//         const [list, SetList] = useState([]);
//         const ShowToast = () => {
//             toastProperties = {
//                 id: 1,
//                 title: "Success",
//                 description: 'Success Toast',
//                 backgroundcolor: '#5cb85c'
//             }
//             SetList([toastProperties])
//         }

//         let onSubmit = () => {
//             this.props.addPost();

//         }

//         let onPostChange = () => {
//             let newtext = inputField.current.value;
//             this.props.updateNewPost(newtext);
//         }



//         return (
//             <div>
//                 <ToastComponent />
//                 <h2 className={c.header}>My posts</h2>
//                 <div>
//                     <div className={c.new_post}>
//                         <input value={this.props.newMessageText} ref={inputField} onChange={onPostChange} />
//                         <button className={c.button} type='submit' onClick={onSubmit}> Submit </button>
//                     </div>

//                 </div>
//                 <div>
//                     {postElements}
//                 </div>
//             </div>
//         )
//     }
// }

const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post message={post.message} like_counter={post.like_counter} />)
    let inputField = React.createRef();
    const notify = () => toast.success("New post was saved!", { hideProgressBar: true });
    let onSubmit = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let newtext = inputField.current.value;
        props.updateNewPost(newtext);
    }

    return (
        <div>

            <h2 className={c.header}> My posts </h2>
            <div>
                <div className={c.new_post}>
                    <input value={props.newMessageText} ref={inputField} onChange={onPostChange} />
                    <button className={c.button} type='submit' onClick={() => { onSubmit(); notify() }}> Submit </button>
                </div>
                <ToastContainer position="top-center" draggable='true' />
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;