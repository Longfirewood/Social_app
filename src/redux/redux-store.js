import { combineReducers, createStore } from "redux";
import profileReducer from "/Users/matvey/Documents/projects/project1/my-app/src/redux/profile-reducer.js";
import dialogsReducer from "/Users/matvey/Documents/projects/project1/my-app/src/redux/dialogs-reducer.js";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});
let store = createStore(reducers);

export default store;
