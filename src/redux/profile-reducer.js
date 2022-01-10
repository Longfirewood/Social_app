const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const profileReducer = (state, action) => {
    switch (action) {
        case ADD_POST:
            let item = {id: '5', message: state.newPostText, like_counter: '0'};
            state.posts.push(item)
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

const addPost = () => {
    let item = {id: '5', message: this._state.profilePage.newPostText, like_counter: '0'};
    this._state.profilePage.posts.push(item)
    this._state.profilePage.newPostText = " ";
    this._callSubscriber(this._state)
}

const updateNewPost = (newText) => {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
}

export default profileReducer;