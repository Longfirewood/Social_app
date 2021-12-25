import {renderEntireScreen} from '../render'


  
  let state = {
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
            newMessageText: 'hey'
          }
          }
      }
  
  window.state = state;

  export let addPost = () => {
      let item = {id: '5', message: state.profilePage.newPostText, like_counter: '0'};
      state.profilePage.posts.push(item)
      updateNewPost('');
      renderEntireScreen(state)
  }


  export let updateNewPost = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireScreen(state)
}

export let addMessage = () => {
  let item = {id: '6', text: state.dialogsPage.messages.newMessageText, sender:'0'}
  state.dialogsPage.messages.Victor.push(item)
  renderEntireScreen(state)
}

export let updateNewMessage = (newtext) => {
  state.dialogsPage.messages.newMessageText = newtext;
  renderEntireScreen(state)
}

export default state;