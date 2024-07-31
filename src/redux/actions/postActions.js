import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: FETCH_POSTS, payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const fetchPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch({ type: FETCH_POST, payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/posts', postData);
    dispatch({ type: CREATE_POST, payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const updatePost = (id, postData, history) => async (dispatch) => {
  try {
    const res = await axios.put(`https://blog-app-6ubi.onrender.com/api/posts/${id}`, postData);
    dispatch({ type: UPDATE_POST, payload: res.data });
    history.push(`/posts/${id}`);
  } catch (err) {
    console.error(err.response.data);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (err) {
    console.error(err.response.data);
  }
};
