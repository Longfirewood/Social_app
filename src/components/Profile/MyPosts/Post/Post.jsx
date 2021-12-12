import React from 'react';
import c from './Post.module.css';



const Post = (props) => {
   
    return (
        <div className={c.post}>
            <div>
            <img className={c.small_image} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' /> 
            </div>
            <div>
                {props.message}
            </div>
            <div>
                Likes {props.like_counter}
            </div>
           
        </div>
        
    )
}

export default Post;