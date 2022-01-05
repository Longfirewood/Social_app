import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from './redux/state'
import {addPost, updateNewPost, addMessage, updateNewMessage} from './redux/state'



let renderEntireScreen = (state) => {
  ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPost={updateNewPost} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}


renderEntireScreen(state);
subscribe(renderEntireScreen);



