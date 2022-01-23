const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
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
    { id: "5", text: "Good", sender: "0" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    case ADD_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      let item = { id: "6", text: state.newMessageText, sender: "0" };
      stateCopy.messages.push(item);
      return stateCopy;
    }
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
