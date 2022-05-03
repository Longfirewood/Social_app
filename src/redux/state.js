import dialogsReducer from "/Users/matvey/Documents/projects/project1/my-app/src/redux/dialogs-reducer.js";
import profileReducer from "/Users/matvey/Documents/projects/project1/my-app/src/redux/profile-reducer.js";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "My first post. Yo", like_counter: "5" },
        { id: "2", message: "Hello world", like_counter: "1" },
        { id: "3", message: "LOLOLOLOL", like_counter: "2" },
        { id: "4", message: "Keklelele", like_counter: "3" },
      ],
      newPostText: "hey",
    },

    dialogsPage: {
      dialogItems: [
        { id: "1", name: "Victor" },
        { id: "2", name: "Petr" },
        { id: "3", name: "Ivan" },
        { id: "4", name: "Matvey" },
        { id: "5", name: "Lizochka" },
      ],
      messages: [
          { id: "1", text: "Hello", sender: "1" },
          { id: "2", text: "Yo", sender: "0" },
          { id: "3", text: "How are you?", sender: "1" },
          { id: "4", text: "I am fine", sender: "0" },
          { id: "5", text: "Good", sender: "1" },
          { id: "6", text: "Good", sender: "0" },
        ],
      newMessageText: "",
      },
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage.messages = dialogsReducer(
      this._state.dialogsPage.messages,
      action
    );
    this._callSubscriber(this._state);
  }

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};


export default store;
