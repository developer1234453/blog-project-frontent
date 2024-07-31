import axios from 'axios';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export const fetchComments = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`https://blog-app-6ubi.onrender.com/api/posts/${postId}/comments`);
    dispatch({ type: FETCH_COMMENTS, payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const addComment = (postId, commentData) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/posts/${postId}/comments`, commentData);
    dispatch({ type: ADD_COMMENT, payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};
