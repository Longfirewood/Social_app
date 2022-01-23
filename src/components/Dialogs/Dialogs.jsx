import React from 'react';
import c from './Dialogs.module.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message';
import { Field, Form } from 'react-final-form'


class Dialogs extends React.Component {
    render() {
let dialogElements = this.props.dialogItems.map(item => <Dialog className={c.dialog} name={item.name} id={item.id}/>)
let messageElements = this.props.messages.map(item => <Message className={c.messages} text={item.text} sender={item.sender}/>)
let inputField = React.createRef()

let MessageBodyText = this.props.newMessageText;
let onClick = () => {
    this.props.addMessage()
}


let onChange = () => {
    let newtext = inputField.current.value;
    this.props.updateNewMessage(newtext)

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