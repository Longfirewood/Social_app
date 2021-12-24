import React from 'react';
import c from './Dialogs.module.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message';
import { Field, Form } from 'react-final-form'


const Dialogs = (props) => {
let dialogElements = props.state.dialogItems.map(item => <Dialog className={c.dialog} name={item.name} id={item.id}/>)
let messageElements = props.state.messages.Victor.map(item => <Message className={c.messages} text={item.text} sender={item.sender}/>)

let onSubmit = (props) => {
    return (
        alert(props.TEXT)
    )
}

    return (
        <div className={c.dialogsScreen}>     
            <div>
                <h2> Dialogs</h2>
                {dialogElements}
            </div>

            <div>
                {messageElements}
            </div>

            <div className={c.sender}>
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <Field component="input" placeholder='Write new post' name='TEXT' />
                                <button type='submit'>Submit</button>
                            </form>
                        )}/>
                    
                </div>
        </div>
    )
}

export default Dialogs