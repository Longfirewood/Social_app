const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let item = { id: "5", message: state.newPostText, like_counter: "0" };
      state.posts.push(item);
      return state;
    case UPDATE_NEW_POST:
      state.newPostText = action.newText;
      return state;
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
