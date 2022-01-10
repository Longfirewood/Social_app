const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newText;
      return state;
    case ADD_MESSAGE:
      let item = { id: "6", text: state.newMessageText, sender: "0" };
      state.Victor.push(item);
      return state;
    default:
      return state;
  }
};

export const updateNewMessageActionCreator = (newMessage) => {
  return { type: UPDATE_NEW_MESSAGE, newText: newMessage };
};
export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export default dialogsReducer;
