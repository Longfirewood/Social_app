const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {
    if (action === UPDATE_NEW_MESSAGE) {
        state.newMessageText = action.newText;
      } else if (action === ADD_MESSAGE){
        let item = {id: '6', text: this._state.dialogsPage.messages.newMessageText, sender:'0'}
        state.Victor.push(item)
      }
}

const addMessage = () => {
    let item = {id: '6', text: this._state.dialogsPage.messages.newMessageText, sender:'0'}
    this._state.dialogsPage.messages.Victor.push(item);
    this._state.dialogsPage.messages.newMessageText = '';
    this._callSubscriber(this._state)
},
const  updateNewMessage = (newtext) => {
    this._state.dialogsPage.messages.newMessageText = newtext;
    this._callSubscriber(this._state)
},

export default dialogsReducer;