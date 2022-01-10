const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
  let store = {
     _state: {
      profilePage: {
        posts: [
            {id: '1', message: 'My first post. Yo', like_counter: '5'},
            {id: '2', message: 'Hello world', like_counter: '1'},
            {id: '3', message: 'LOLOLOLOL', like_counter: '2'},
            {id: '4', message: 'Keklelele', like_counter: '3'}
          ],
        newPostText: 'hey'
      },
      
      dialogsPage: {
        dialogItems:[
            {id: '1', name: 'Victor'},
            {id: '2', name: 'Petr'},
            {id: '3', name: 'Ivan'},
            {id: '4', name: 'Matvey'},
            {id: '5', name: 'Lizochka'}

          ],
          messages: { 
            Victor: [
            {id: '1', text: 'Hello', sender:'1'},
            {id: '2', text: 'Yo', sender:'0'},
            {id: '3', text: 'How are you?', sender:'1'},
            {id: '4', text: 'I am fine', sender:'0'},
            {id: '5', text: 'Good', sender:'1'},
            {id: '5', text: 'Good', sender:'0'}
          ], 
            Petr:[
            {id: '1', text: 'Mooon', sender:'0'},
            {id: '2', text: 'heh', sender:'1'},
            {id: '3', text: 'coook?', sender:'0'},
            {id: '4', text: 'React', sender:'1'},
            {id: '5', text: 'mem', sender:'0'},
            {id: '5', text: 'Good', sender:'0'}
            ],
            newMessageText: ''
          }
          }
      },
      getState() {
          return this._state;
      },
      _callSubscriber() {
        console.log('State changed');
    },
    dispatch(action) {
      if (action.type === ADD_POST) {
        let item = {id: '5', message: this._state.profilePage.newPostText, like_counter: '0'};
        this._state.profilePage.posts.push(item)
        this._callSubscriber(this._state)
      } else if (action.type === UPDATE_NEW_POST) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state)
      } else if (action.type === UPDATE_NEW_MESSAGE) {
        this._state.dialogsPage.messages.newMessageText = action.newText;
        this._callSubscriber(this._state)
      } else if (action.type === ADD_MESSAGE){
        let item = {id: '6', text: this._state.dialogsPage.messages.newMessageText, sender:'0'}
        this._state.dialogsPage.messages.Victor.push(item)
        this._callSubscriber(this._state)
      }
    },

    dispatch(action) {
      switch (action) {
        case ADD_POST:
          profileReducer(this._state.profilePage, ADD_POST);
          this._callSubscriber(this._state);
          return state;
        case UPDATE_NEW_POST:
          profileReducer(this._state.profilePage, UPDATE_NEW_POST);
            this._callSubscriber(this._state);
            return state;
        case UPDATE_NEW_MESSAGE:
          dialogsReducer(this._state.dialogsPage.messages, UPDATE_NEW_MESSAGE);
          this._callSubscriber(this._state);
          return state;
        case ADD_MESSAGE:
          dialogsReducer(this._state.dialogsPage.messages, ADD_MESSAGE);
          this._callSubscriber(this._state);
          return state;
        default:
          return state;
      }
    },
      addPost() {
        let item = {id: '5', message: this._state.profilePage.newPostText, like_counter: '0'};
        this._state.profilePage.posts.push(item)
        this._state.profilePage.newPostText = " ";
        this._callSubscriber(this._state)
    },
      updateNewPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
  },
      addMessage() {
        let item = {id: '6', text: this._state.dialogsPage.messages.newMessageText, sender:'0'}
        this._state.dialogsPage.messages.Victor.push(item);
        this._state.dialogsPage.messages.newMessageText = '';
        this._callSubscriber(this._state)
  },
      updateNewMessage(newtext) {
        this._state.dialogsPage.messages.newMessageText = newtext;
        this._callSubscriber(this._state)
  },
      subscribe(observer) {
      this._callSubscriber = observer;
  }
  
    }

export const addPostActionCreator = () => {
  return {type: ADD_POST};
}
export const updateNewPostActionCreator = (newtext) => {
  return (
    {type: UPDATE_NEW_POST, newText: newtext}
  )
}
export const updateNewMessageActionCreator = (newMessage) => {
  return (
    {type: UPDATE_NEW_MESSAGE, newText: newMessage}
  )
}
export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE};
}
window.store = store;

export default store;
