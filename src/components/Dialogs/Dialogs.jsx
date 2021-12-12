import React from 'react';
import c from './Dialogs.module.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message';



const Dialogs = (props) => {
let dialogElements = props.state.dialogItems.map(item => <Dialog className={c.dialog} name={item.name} id={item.id}/>)
let messageElements = props.state.messages.map(item => <Message className={c.messages} text={item.text} sender={item.sender}/>)
    return (
        <div className={c.dialogsScreen}>     
            <div>
                <h2> Dialogs</h2>
                {dialogElements}
            </div>

            <div>
                {messageElements}
            </div>

        </div>
    )
}

export default Dialogs