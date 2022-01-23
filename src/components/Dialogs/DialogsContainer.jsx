import React from 'react';
import {updateNewMessageActionCreator, addMessageActionCreator} from '/Users/matvey/Documents/projects/project1/my-app/src/redux/dialogs-reducer.js'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//     let state = props.store.getState()
    
//     let onClick = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }
    
//     let onChange = (newtext) => {
//         props.store.dispatch(updateNewMessageActionCreator(newtext));
// }

// return <Dialogs addMessage={onClick} updateNewMessage={onChange} state={state.dialogsPage}/>

                        

let mapStateToProps = (state) => {
    return {
        messages : state.dialogsPage.messages,
        dialogItems : state.dialogsPage.dialogItems,
        newMessageText : state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage : () => {dispatch(addMessageActionCreator())},
        updateNewMessage : (body) => {dispatch(updateNewMessageActionCreator(body))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer