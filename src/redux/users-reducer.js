const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
  users: [],
  count: "15",
  currentPage: "1",
  totalCount: "0",
  userId: "23106",
  userProfile: {},
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

    case SET_USERS_PROFILE: {
      console.log(action.userProfile, "reduxProfile");
      return { ...state, userProfile: action.userProfile };
    }
    default:
      return state;
  }
};

export const follow = (userId) => {
  return { type: FOLLOW, userId: userId };
};

export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId: userId };
};

export const setUsers = (users) => {
  return { type: SET_USERS, users: users };
};

export const setUserProfile = (userProfile) => {
  return { type: SET_USERS_PROFILE, userProfile: userProfile };
};

export default usersReducer;
