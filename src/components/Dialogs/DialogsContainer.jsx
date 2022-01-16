import React from 'react';
import {updateNewMessageActionCreator, addMessageActionCreator} from '/Users/matvey/Documents/projects/project1/my-app/src/redux/dialogs-reducer.js'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState()
    
    let onClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    
    let onChange = (newtext) => {
        props.store.dispatch(updateNewMessageActionCreator(newtext));
}

return <Dialogs addMessage={onClick} updateNewMessage={onChange} state={state.dialogsPage}/>

                        }


export default DialogsContainer