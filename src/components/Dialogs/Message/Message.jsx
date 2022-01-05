import React from 'react';
import c from './Message.module.css';



const Message = (props) => {


    const isSender = props.sender;
    if (props.sender == 0 ) {
        return (
            <div className = {c.sender}>
                <div>
                    <img className={c.small_image} src='https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg'/>
                    {props.text}
                </div>

            </div>
            
        )
    } else {
        return (
        <div className={c.stile}>
                <div>
                <img className={c.small_image} src='https://i.cbc.ca/1.5962320.1616613874!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/eht-black-hole-polarization.jpg'/>
                    {props.text}
                </div>
            </div>
        )
    }
}

export default Message