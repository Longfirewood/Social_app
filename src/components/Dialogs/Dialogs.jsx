import React from 'react';
import c from './Dialogs.module.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message';
import { Field, Form } from 'react-final-form'
import {updateNewMessageActionCreator, addMessageActionCreator} from '/Users/matvey/Documents/projects/project1/my-app/src/redux/state.js'

class Dialogs extends React.Component {
    render() {
let dialogElements = this.props.state.dialogItems.map(item => <Dialog className={c.dialog} name={item.name} id={item.id}/>)
let messageElements = this.props.state.messages.Victor.map(item => <Message className={c.messages} text={item.text} sender={item.sender}/>)

let inputField = React.createRef()
let addMessage = this.props.addMessage;
let updateNewMessage = this.props.updateNewMessage;
let MessageBodyText = this.props.state.messages.newMessageText;
let onClick = () => {
    let text = inputField.current.value;
    this.props.dispatch(addMessageActionCreator());
}

let onChange = () => {
    let newtext = inputField.current.value;
    this.props.dispatch(updateNewMessageActionCreator(newtext));
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
                    <input value={MessageBodyText} placeholder='New message' ref={inputField} onChange={onChange}/>
                    <button type='submit' onClick={onClick}>Submit</button>

                    {/* <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <Field component="input" placeholder='Write new post' name='TEXT' />
                                <button type='submit'>Submit</button>
                            </form>
                        )}/> */}
                        
                </div>
        </div>
    )
                        }
}

export default Dialogs