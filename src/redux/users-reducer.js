const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
  count: "15",
  currentPage: "1",
  totalCount: '0'
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
      return stateCopy;
    }
    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
      return stateCopy;
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId: userId };
};

export const unfollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId: userId };
};

export const setUsersActionCreator = (users) => {
  return { type: SET_USERS, users: users };
};
export default usersReducer;
