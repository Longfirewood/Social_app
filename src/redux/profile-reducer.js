const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

let initialState = {
  posts: [
    { id: "1", message: "My first post. Yo", like_counter: "5" },
    { id: "2", message: "Hello world", like_counter: "1" },
    { id: "3", message: "LOLOLOLOL", like_counter: "2" },
    { id: "4", message: "Keklelele", like_counter: "3" },
  ],
  newPostText: "hey",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let item = { id: "5", message: state.newPostText, like_counter: "0" };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.unshift(item);
      stateCopy.isPosted = true;

      //stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostActionCreator = (newtext) => {
  return { type: UPDATE_NEW_POST, newText: newtext };
};

export default profileReducer;
