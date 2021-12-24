import React, { useState } from 'react';
import c from './Post.module.css';



const Post = (props) => {
   const [counter, setCounter] = useState(Number(props.like_counter));

   let increment = () => {
    setCounter(counter + 1)
   }

    return (
        <div className={c.post}>
            <div>
            <img className={c.small_image} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' /> 
            </div>
            <div>
                {props.message}
            </div>
            <div>
                Likes {counter}
                <button onClick={increment}> Add like </button>
            </div>
        </div>
        
    )
}

export default Post;