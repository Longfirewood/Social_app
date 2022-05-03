import { combineReducers, createStore } from "redux";
import profileReducer from "/Users/matvey/Documents/projects/project1/my-app/src/redux/profile-reducer.js";
import dialogsReducer from "/Users/matvey/Documents/projects/project1/my-app/src/redux/dialogs-reducer.js";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;
