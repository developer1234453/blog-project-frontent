import {
    FETCH_POSTS,
    FETCH_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
  } from '../actions/postActions';
  
  const initialState = {
    posts: [],
    post: {},
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS:
        return {
          ...state,
          posts: action.payload,
        };
      case FETCH_POST:
        return {
          ...state,
          post: action.payload,
        };
      case CREATE_POST:
        return {
          ...state,
          posts: [action.payload, ...state.posts],
        };
      case UPDATE_POST:
        return {
          ...state,
          posts: state.posts.map((post) =>
            post._id === action.payload._id ? action.payload : post
          ),
        };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter((post) => post._id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
  